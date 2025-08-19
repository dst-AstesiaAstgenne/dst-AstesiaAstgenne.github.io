import re
import os

html_content = """
<ul>
      <li><a href="dusk_armor.html"></a>墨染幻甲</li>
      <li><a href="dusk_armor2.html"></a>墨染幻甲-强化</li>
      <li><a href="dusk_sword.html"></a>涂鬼神</li>
      <li><a href="dusk_chest.html"></a>储物绘卷</li>
      <li><a href="dusk_medal.html"></a>墨染勋章</li>
      <li><a href="dusk_pen.html"></a>幻墨神笔</li>
      <li><a href="spell_dusk_level.html"></a>无题长卷</li>
      <li><a href="spell_dusk_level2.html"></a>“终夜无寐”（上卷）</li>
      <li><a href="dusk_elite_1.html"></a>一级精英化券</li>
      <li><a href="dusk_elite_2.html"></a>二级精英化券</li>
      <li><a href="dusk_book_doom.html"></a>湮墨殷染尽拙山</li>
      <li><a href="dusk_book_sleep.html"></a>拙山方晓尽梦长</li>
      <li><a href="dusk_statue.html"></a>夕泡泡雕像</li>
      <li><a href="dusk_star.html"></a>“星稀”</li>
      <li><a href="dusk_eye_open.html"></a>幻造·第三只眼</li>
      <li><a href="dusk_hammer.html"></a>岩崩锤</li>
      <li><a href="dusk_dial.html"></a>幻造·月时计</li>
      <li><a href="dusk_staff.html"></a>意义非凡的法杖</li>
      <li><a href="dusk_fan.html"></a>宇智波团扇</li>
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
