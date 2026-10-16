"""Check registered DOIs against Crossref; never auto-approve scale versions."""
from pathlib import Path
import json,urllib.request,urllib.parse,concurrent.futures,time
root=Path(__file__).resolve().parents[1]
refs=json.loads((root/'audit/references-snapshot.json').read_text())
dois=sorted({r['doi']for r in refs.values()if r['doi']})
def fetch(doi):
 result={'doi':doi}
 try:
  url='https://api.crossref.org/works/'+urllib.parse.quote(doi,safe='')
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'scale-catalog-source-audit/1.0'}),timeout=20)as response:meta=json.load(response)['message']
  result.update(title=meta.get('title',[]),authors=meta.get('author',[]),journal=meta.get('container-title',[]),published=meta.get('published',{}),publishedPrint=meta.get('published-print',{}),publishedOnline=meta.get('published-online',{}),canonicalDoi=meta.get('DOI'),source=url)
 except Exception as e:result['error']=str(e)
 time.sleep(.4)
 return result
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=2)as pool:
 for r in pool.map(fetch,dois):
  results.append(r)
  if len(results)%20==0:print(f'{len(results)}/{len(dois)} DOIs checked',flush=True)
  (root/'audit/doi-metadata-checks.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print('Checked '+str(len(results))+' DOIs',flush=True)
