import re

with open('lib/content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Check for straight apostrophes in strings
print("Content length:", len(text))
# Check if any straight apostrophe in double-quoted strings
def repl(m):
    s = m.group(0)
    return s.replace("'", "’")

# Match all double-quoted strings
updated = re.sub(r'"([^"\\]*(\\.[^"\\]*)*)"', repl, text)

if updated != text:
    with open('lib/content.ts', 'w', encoding='utf-8') as f:
        f.write(updated)
    print("Updated straight apostrophes to typographic apostrophes in lib/content.ts")
else:
    print("All double-quoted strings already use typographic punctuation!")

