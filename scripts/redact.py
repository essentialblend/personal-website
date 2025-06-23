import re
import random
import sys
import os

REDACTED_SYMBOL = '░' * 4

def process_file(path, output_path=None):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    mask = [False] * len(content)

    def apply_mask(matches):
        for m in matches:
            for i in range(m.start(), m.end()):
                mask[i] = True

    front_matches = list(re.finditer(r'^---\s*$', content, flags=re.MULTILINE))
    if len(front_matches) >= 2:
        for i in range(front_matches[0].start(), front_matches[1].end()):
            mask[i] = True

    apply_mask(re.finditer(r'```.*?\n.*?```', content, flags=re.DOTALL))
    apply_mask(re.finditer(r'\$\$(.*?)\$\$', content, flags=re.DOTALL))
    apply_mask(re.finditer(r'\$[^\n\$]*?\$', content))
    apply_mask(re.finditer(r'^#{1,6} .*$', content, flags=re.MULTILINE))
    apply_mask(re.finditer(r'{{[%<]\s*(\w+)[^}]*[%>]}}(.*?){{[%<]\s*/\s*\1\s*[%>]}}', content, flags=re.DOTALL))
    apply_mask(re.finditer(r'{{[%<].*?[%>]}}', content))
    apply_mask(re.finditer(r'\*\*(.+?)\*\*', content))
    apply_mask(re.finditer(r'__(.+?)__', content))
    apply_mask(re.finditer(r'\*(.+?)\*', content))
    apply_mask(re.finditer(r'_(.+?)_', content))
    apply_mask(re.finditer(r'`[^`\n]+`', content))

    redacted = []
    i = 0
    while i < len(content):
        if mask[i] or content[i].isspace():
            redacted.append(content[i])
            i += 1
        else:
            j = i
            while j < len(content) and not content[j].isspace() and not mask[j]:
                j += 1
            word = content[i:j]
            redacted.append(REDACTED_SYMBOL if random.random() < 0.5 else word)
            i = j

    out_path = output_path or (os.path.splitext(path)[0] + ".redacted.md")
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(''.join(redacted))

if __name__ == "__main__":
    if len(sys.argv) not in [2, 3]:
        print("Usage: python redact.py input.md [output.md]")
    else:
        process_file(sys.argv[1], sys.argv[2] if len(sys.argv) == 3 else None)
