from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
from urllib.parse import quote
import time

def clean_title(title):
    parts = title.split(' - ')
    return parts[0] if parts else title

def search_dst_wiki(keyword):
    url = f"https://dontstarve.huijiwiki.com/wiki/{quote(keyword)}"
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_experimental_option('useAutomationExtension', False)
    options.add_argument(
        "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/115.0.0.0 Safari/537.36"
    )
    options.add_argument('--log-level=3')  # 减少Chrome日志

    service = Service(ChromeDriverManager().install(), log_path='chromedriver.log')

    driver = webdriver.Chrome(service=service, options=options)
    driver.get(url)
    print("正在加载页面，请稍候...")
    time.sleep(8)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    driver.quit()

    raw_title = soup.title.string.strip() if soup.title else "无标题"
    title = clean_title(raw_title)
    print(f"\n🔖 页面标题：{title}")

    content_div = soup.select_one('div#mw-content-text')
    if not content_div:
        print("未找到正文内容")
        return

    paragraphs = [p.get_text(strip=True) for p in content_div.find_all('p') if p.get_text(strip=True)]

    lists = content_div.find_all('ul')
    list_texts = []
    for ul in lists:
        items = [li.get_text(strip=True) for li in ul.find_all('li')]
        if items:
            list_texts.append('\n'.join(items))

    if paragraphs:
        print("\n📘 正文段落：")
        for para in paragraphs:
            print(para)
    else:
        print("正文无段落内容")

    if list_texts:
        print("\n📘 正文列表内容：")
        for idx, lt in enumerate(list_texts, 1):
            print(f"列表{idx}:\n{lt}\n")

if __name__ == '__main__':
    kw = input("请输入要查询的中文条目（如：蘑菇灯）：")
    search_dst_wiki(kw)
