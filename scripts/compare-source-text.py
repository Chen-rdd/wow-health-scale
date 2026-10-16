import json,re,unicodedata
from pathlib import Path
root=Path(__file__).resolve().parents[1]
forms=json.loads((root/'audit/forms-snapshot.json').read_text())
def normalize(s):
 s=re.sub(r'0\s+1\s+2\s+3','',s)
 return ''.join(c for c in unicodedata.normalize('NFKC',s) if not c.isspace() and not unicodedata.category(c).startswith('P'))
results=[]
for form in forms:
 p=root/'audit/source-files'/(form['id']+'.txt')
 if not p.exists():continue
 text=normalize(p.read_text())
 misses=[{'number':i['number'],'text':i['text']}for i in form['items'] if normalize(i['text'])not in text]
 results.append({'id':form['id'],'items':len(form['items']),'unmatched':misses})
(root/'audit/text-comparison.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
for r in results:print(json.dumps(r,ensure_ascii=False))
