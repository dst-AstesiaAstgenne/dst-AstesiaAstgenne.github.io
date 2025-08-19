import os
import re

# 要匹配的正则：非贪婪匹配 <aside class="sidebar"> 到 </aside>
pattern = re.compile(
    r'<aside\s+class="sidebar">.*?</aside>',
    re.DOTALL  # 让 . 可以匹配换行
)

replacement = '<div id="sidebar-placeholder"></div>'

# 遍历当前目录下的所有文件
for filename in os.listdir('.'):
    if not os.path.isfile(filename):
        continue
    if not filename.lower().endswith('.html'):
        continue

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 如果匹配到才替换
    new_content, count = re.subn(pattern, replacement, content)

    if count > 0:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"[OK] {filename} - 替换了 {count} 处")
