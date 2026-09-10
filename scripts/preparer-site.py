"""Assembler uniquement les contenus destinés aux lecteurs, sans recopies manuelles."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / ".build/docs"
if DEST.exists():
    shutil.rmtree(DEST)
DEST.mkdir(parents=True)
(DEST / "index.html").write_text(
    '<!doctype html><html lang="fr"><meta charset="utf-8">'
    '<meta http-equiv="refresh" content="0;url=documenter-son-projet-web-atelier-5h.html">'
    '<title>Documenter son projet web</title>'
    '<a href="documenter-son-projet-web-atelier-5h.html">Ouvrir le cours</a></html>',
    encoding="utf-8",
)

for name in ("cours-documentation", "demo"):
    shutil.copytree(ROOT / name, DEST / name, ignore=shutil.ignore_patterns("__pycache__"))
for name in ("documenter-son-projet-web-atelier-5h.md", "guide-animation.md"):
    shutil.copy2(ROOT / name, DEST / name)

shutil.copytree(ROOT / "scripts", DEST / "scripts", ignore=shutil.ignore_patterns("__pycache__"))
shutil.copytree(ROOT / ".build/api", DEST / "reference-api")
shutil.copy2(ROOT / ".build/bdd.html", DEST / "rapport-bdd.html")
for name in ("package.json", "cucumber.mjs", "mkdocs.yml", "requirements-docs.txt"):
    shutil.copy2(ROOT / name, DEST / name)

print("Pages, sources choisies et rapports assemblés dans .build/docs.")
