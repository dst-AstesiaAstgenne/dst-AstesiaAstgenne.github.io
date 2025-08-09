import os
import re

pattern = re.compile(r'\.png', re.IGNORECASE)

for root, _, files in os.walk('.'):
    for filename in files:
        if filename.lower().endswith('.html'):
            path = os.path.join(root, filename)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            new_content, count = re.subn(pattern, '.webp', content)
            if count > 0:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"[OK] {path} - 替换了 {count} 处")
            else:
                print(f"[跳过] {path} - 没有匹配项")
