"""Inclure des exemples explicitement choisis dans la documentation de l'atelier."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCES = {
    "demo/editeur/survol.js": "javascript",
    "demo/editeur/capacite.ts": "typescript",
    "demo/src/reservations.mjs": "javascript",
    "demo/features/reservations.feature": "gherkin",
    "demo/features/steps/reservations.mjs": "javascript",
    "demo/tests/reservations.test.mjs": "javascript",
    "cours-documentation/visuels/c4-contexte.mmd": "text",
    "cours-documentation/visuels/reservations.mcd": "text",
    "cours-documentation/visuels/reservations-erd.mmd": "text",
    "cours-documentation/visuels/adr-annulation.mmd": "text",
    "scripts/mkdocs_hook.py": "python",
}


def on_page_markdown(markdown, **kwargs):
    def include(match):
        name = match.group(1)
        if name not in SOURCES:
            raise ValueError("Source non autorisée pour la documentation : " + name)
        content = (ROOT / name).read_text(encoding="utf-8")
        return "\n~~~" + SOURCES[name] + "\n" + content + "\n~~~\n"

    return re.sub(r"<!-- inclure: ([\w/.-]+) -->", include, markdown)
