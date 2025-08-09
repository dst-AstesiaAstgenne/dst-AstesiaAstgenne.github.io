import os
import re

# 你的 JS 代码
fetch_code = '''
fetch("./sidebar.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("sidebar-placeholder").innerHTML = html;
    })
    .catch(err => console.error("加载 sidebar 失败:", err));
'''

# 遍历当前目录下的所有 HTML 文件
for filename in os.listdir('.'):
    if not os.path.isfile(filename):
        continue
    if not filename.lower().endswith('.html'):
        continue

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # 判断是否已包含 fetch 代码，避免重复
    if 'document.getElementById("sidebar-placeholder").innerHTML' in content:
        print(f"[跳过] {filename} 已有 fetch 代码")
        continue

    if '<script' in content:
        # 在第一个 <script> 和 </script> 之间插入 fetch 代码
        content = re.sub(
            r'(<script[^>]*>)(.*?)(</script>)',
            lambda m: m.group(1) + m.group(2) + '\n' + fetch_code + '\n' + m.group(3),
            content,
            count=1,
            flags=re.DOTALL
        )
        print(f"[OK] {filename} - 已在第一个 <script> 内追加 fetch 代码")
    else:
        # 没有 <script>，就在 </body> 前加一个新的
        content = re.sub(
            r'(</body>)',
            f'<script>\n{fetch_code}\n</script>\n\\1',
            content,
            count=1,
            flags=re.DOTALL
        )
        print(f"[OK] {filename} - 已新增 <script> 插入 fetch 代码")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
