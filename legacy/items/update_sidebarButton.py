import os
import re

def process_html_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    modified = False

    # 1. 添加 viewport meta
    # 判断<head>内是否已有meta viewport
    if not re.search(r'<meta\s+name=["\']viewport["\']', content, re.I):
        # 找<head>标签结束位置
        head_close_pos = content.find("</head>")
        if head_close_pos != -1:
            viewport_meta = '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
            content = content[:head_close_pos] + viewport_meta + content[head_close_pos:]
            modified = True

    # 2. 添加 <button class="sidebar-toggle">目录</button> 在<body>标签后面
    # 先判断是否已经有这个按钮
    if not re.search(r'<button[^>]*class=["\']sidebar-toggle["\']', content, re.I):
        body_open_match = re.search(r'<body[^>]*>', content, re.I)
        if body_open_match:
            insert_pos = body_open_match.end()
            button_html = '\n  <button class="sidebar-toggle">目录</button>\n'
            content = content[:insert_pos] + button_html + content[insert_pos:]
            modified = True

    # 3. 修改 fetch 脚本绑定代码
    # 目标：用fetch回调里绑定 toggle 事件的代码替换可能存在的旧绑定代码
    # 定义新脚本代码（简化示例）
    new_fetch_script = '''
fetch("./sidebar.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("sidebar-placeholder").innerHTML = html;

    // 目录内容加载完毕后，绑定折叠事件
    const toggleBtn = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    if (!toggleBtn || !sidebar) {
      console.error("找不到 sidebar-toggle 或 sidebar 元素");
      return;
    }
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  })
  .catch(err => console.error("加载 sidebar 失败:", err));
'''

    # 先查找旧的 fetch + 绑定代码，做简单替换
    # 这里用正则查找 fetch("./sidebar.html")...后面跟随的绑定toggleBtn代码块，粗略匹配
    fetch_pattern = re.compile(
        r'fetch\(\s*["\']\.\/sidebar\.html["\']\s*\)[\s\S]*?\.catch\(.*?\);',
        re.I
    )

    if fetch_pattern.search(content):
        content_new = fetch_pattern.sub(new_fetch_script.strip(), content)
        if content_new != content:
            content = content_new
            modified = True
    else:
        # 如果没找到旧fetch代码，直接插入新的脚本到</body>前
        body_close_pos = content.rfind("</body>")
        if body_close_pos != -1:
            script_block = f"\n<script>{new_fetch_script.strip()}\n</script>\n"
            content = content[:body_close_pos] + script_block + content[body_close_pos:]
            modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"已更新: {filepath}")
    else:
        print(f"未修改: {filepath}")

def main():
    for filename in os.listdir("."):
        if filename.lower().endswith(".html") and os.path.isfile(filename):
            process_html_file(filename)

if __name__ == "__main__":
    main()
