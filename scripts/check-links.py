"""Vérifier les destinations locales des pages pédagogiques, hors blocs de code."""
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
pages = [
    ROOT / "documenter-son-projet-web-atelier-5h.md",
    ROOT / "guide-animation.md",
    *sorted((ROOT / "cours-documentation").rglob("*.md")),
    ROOT / "demo/README.md",
]
errors = []
count = 0
for page in pages:
    text = page.read_text(encoding="utf-8")
    fence = chr(96) * 3
    text = re.sub(r"(?ms)^(" + fence + r"|~~~).*?^\1[ \t]*$", "", text)
    for target in re.findall(r"!?\[[^\]]*\]\(([^)]+)\)", text):
        target = target.strip("<>")
        url = urlsplit(target)
        if url.scheme or target.startswith("#"):
            continue
        count += 1
        dest = page.parent / unquote(url.path)
        if not dest.exists():
            errors.append(str(page.relative_to(ROOT)) + " : " + target)
if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print(str(count) + " liens et images locaux vérifiés. Les ancres et liens web ne sont pas contrôlés.")
