from pathlib import Path
import subprocess,sys,concurrent.futures,hashlib
root=Path(__file__).resolve().parents[1]
renderer=sys.argv[1]
def render(p):
 out=root/'audit/render-reviewed'/(p.stem+'-'+hashlib.sha256(p.read_bytes()).hexdigest()[:12])
 if (out/'page-1.png').exists():return
 r=subprocess.run([sys.executable,renderer,str(p),'--output_dir',str(out),'--emit_pdf'],capture_output=True,text=True)
 print(p.stem+': '+('OK' if r.returncode==0 else r.stderr),flush=True)
 if r.returncode:raise RuntimeError(p.stem)
with concurrent.futures.ThreadPoolExecutor(max_workers=2)as pool:list(pool.map(render,sorted((root/'audit/exports').glob('*.docx'))))
