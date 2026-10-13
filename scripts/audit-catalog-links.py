"""Check catalog source access. A reachable link is not a scientific verification."""
from pathlib import Path
import json,urllib.request,concurrent.futures,re,time
root=Path(__file__).resolve().parents[1]
rows=json.loads((root/'audit/catalog-inventory.json').read_text())
urls=sorted({s['url'] for r in rows for s in r['sources']+[s for v in r['versions'] for s in v['sources']]})
def check(url):
 result={'url':url,'checkedAt':'2026-10-13'}
 try:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=15) as response:
   chunk=response.read(128*1024)
   result.update(status=response.status,finalUrl=response.url,contentType=response.headers.get('Content-Type',''))
   if 'html' in result['contentType']:
    m=re.search(r'<title[^>]*>(.*?)</title>',chunk.decode('utf-8',errors='replace'),re.S|re.I)
    result['title']=re.sub(r'\s+',' ',m[1]).strip() if m else ''
 except Exception as e:result['error']=str(e)
 return result
results=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=4)as pool:
 for result in pool.map(check,urls):
  results.append(result)
  if len(results)%20==0:print(f'{len(results)}/{len(urls)} sources checked',flush=True)
  (root/'audit/catalog-link-checks.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps({'sources':len(results),'reachable':sum('status'in r for r in results),'unavailable':sum('error'in r for r in results)}),flush=True)
