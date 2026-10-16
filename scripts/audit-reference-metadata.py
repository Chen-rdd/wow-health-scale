"""Read public PubMed metadata; flag mismatches without approving scientific claims."""
from pathlib import Path
import json,urllib.request,urllib.parse,xml.etree.ElementTree as ET,time
root=Path(__file__).resolve().parents[1]
refs=json.loads((root/'audit/references-snapshot.json').read_text())
ids=sorted({r['pmid']for r in refs.values() if r['pmid']})
articles={}
for start in range(0,len(ids),80):
 url='https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?'+urllib.parse.urlencode({'db':'pubmed','retmode':'xml','id':','.join(ids[start:start+80])})
 with urllib.request.urlopen(url,timeout=45)as response:data=response.read()
 for a in ET.fromstring(data).findall('.//PubmedArticle'):
  pmid=a.findtext('.//MedlineCitation/PMID');article=a.find('.//Article');pubdate=article.find('.//Journal/JournalIssue/PubDate')
  date=' '.join(pubdate.itertext()) if pubdate is not None else ''
  authors=[]
  for au in article.findall('./AuthorList/Author'):
   authors.append(au.findtext('CollectiveName') or ((au.findtext('LastName')or'')+' '+(au.findtext('Initials')or'')))
  articles[pmid]={'pmid':pmid,'title':''.join(article.find('ArticleTitle').itertext()),'authors':', '.join(authors),'journal':article.findtext('./Journal/Title')or'','year':date[:4], 'doi':next((n.text for n in a.findall('.//PubmedData/ArticleIdList/ArticleId')if n.attrib.get('IdType')=='doi'),'') or '', 'source':'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/'}
 print(f'{min(start+80,len(ids))}/{len(ids)} PubMed identifiers checked',flush=True);time.sleep(.4)
results=[]
for id,r in refs.items():
 if not r['pmid']:results.append({'versionId':id,'status':'没有登记PMID，需其他来源核对'});continue
 actual=articles.get(r['pmid'])
 if not actual:results.append({'versionId':id,'status':'未返回PMID记录'});continue
 mismatch={k:{'registered':r[k],'pubmed':actual[k]}for k in ['doi','year']if r[k] and actual[k] and r[k].lower()!=actual[k].lower()}
 results.append({'versionId':id,'status':'元数据有差异'if mismatch else'标识及年份未发现差异','mismatch':mismatch,'pubmed':actual})
(root/'audit/reference-metadata-checks.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print('Reported '+str(len(results))+' references',flush=True)
