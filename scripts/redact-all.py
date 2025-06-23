import subprocess
import os
import sys

RAW_DIR = "notes-raw"
OUT_DIR = "content/notes"

for folder in os.listdir(RAW_DIR):
    raw_path = os.path.join(RAW_DIR, folder, "index.md")
    out_path = os.path.join(OUT_DIR, folder)

    if not os.path.isfile(raw_path):
        continue

    os.makedirs(out_path, exist_ok=True)

    print(f"Redacting: {raw_path} → {out_path}/index.md")
    subprocess.run([sys.executable, "scripts/redact.py", raw_path, f"{out_path}/index.md"], check=True)
