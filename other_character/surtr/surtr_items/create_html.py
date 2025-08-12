import re
import os

html_content = """
<ul>
      <li><a href="surtrclothes.html">史尔特尔服装</a></li>
      <li><a href="laevatain.html">莱万汀</a></li>
      <li><a href="surtr_pureflame.html">纯粹火焰</a></li>
      <li><a href="surtr_elitebook1.html">高级资深干员训练书</a></li>
      <li><a href="surtr_elitebook2.html">高级资深干员特训书</a></li>
      <li><a href="surtr_supericecream.html">豪华冰淇淋</a></li>
      <li><a href="surtr_lavabreath.html">灼热之息</a></li>
      <li><a href="surtr_lavakiss.html">熔岩之吻</a></li>
      <li><a href="surtr_glassseaweed.html">玻璃海苔</a></li>
      <li><a href="surtr_scarygrandma.html">地精奶奶</a></li>
    </ul>
"""

# 使用正则表达式匹配所有html文件名
pattern = r'href="([^"]+\.html)"'
html_files = re.findall(pattern, html_content)

# 创建每个html文件
for filename in html_files:
    # 检查文件是否已存在
    if not os.path.exists(filename):
        # 创建空文件
        with open(filename, 'w', encoding='utf-8') as f:
            pass  # 创建空文件
        print(f"已创建文件: {filename}")
    else:
        print(f"文件已存在: {filename}")
