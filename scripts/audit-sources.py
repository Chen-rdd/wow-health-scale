"""Download registered official forms, record hashes, and extract source pages.

Run manually when refreshing evidence; this script does not approve exports.
"""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import urllib.request
import pdfplumber

root = Path(__file__).resolve().parents[1]
forms = json.loads((root / 'audit/forms-snapshot.json').read_text())
out = root / 'audit/source-files'
out.mkdir(exist_ok=True, parents=True)

def fetch(form):
    path = out / (form['id'] + '.pdf')
    result = {'id': form['id'], 'url': form['sourceUrl']}
    try:
        req = urllib.request.Request(form['sourceUrl'], headers={'User-Agent': 'Mozilla/5.0 scale-source-review'})
        with urllib.request.urlopen(req, timeout=25) as response:
            data = response.read()
        if not data.startswith(b'%PDF'):
            raise ValueError('Response is not a PDF')
        path.write_bytes(data)
        result['sha256'] = hashlib.sha256(data).hexdigest()
        result['matchesRegisteredHash'] = result['sha256'] == form['sourceSha256']
        with pdfplumber.open(path) as pdf:
            pages = [page.extract_text() or '' for page in pdf.pages]
        result['pages'] = len(pages)
        (out / (form['id'] + '.txt')).write_text('\n\n'.join(f'PAGE {i+1}\n{t}' for i,t in enumerate(pages)))
    except Exception as error:
        result['error'] = str(error)
    print(json.dumps(result, ensure_ascii=False), flush=True)
    return result

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(fetch, forms))
(root / 'audit/source-checks.json').write_text(json.dumps(results, ensure_ascii=False, indent=2))
