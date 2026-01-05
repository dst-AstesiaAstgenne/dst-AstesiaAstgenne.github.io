<template>

  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 蕾缪安</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />

    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/othercharacter/lemuenindex/lemuen">蕾缪安</router-link></li>
      </ul>

      <!-- 模组建筑 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('building')">
            模组物品
            <span>{{ openSections.building ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.building">
            <li>
              <router-link to="/othercharacter/lemuenindex/items/lemuen_sniper">拉特兰狙击铳</router-link>
            </li>
            <li>
              <router-link to="/othercharacter/lemuenindex/items/lemuen_module">模组：弹匣与花窗</router-link>
            </li>
            <li><router-link to="/othercharacter/lemuenindex/items/lemuen_wheelchair">特制电动轮椅</router-link></li>
            <li><router-link to="/othercharacter/lemuenindex/items/lemuen_elite_1">一级精英化券（蕾缪安）</router-link></li>
            <li><router-link to="/othercharacter/lemuenindex/items/lemuen_elite_2">二级精英化券（蕾缪安）</router-link></li>
          </ul>
        </div>

        <!-- 模组材料 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('surprise')">
            彩蛋物品
            <span>{{ openSections.surprise ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.surprise">
            <li>
              <router-link to="/othercharacter/lemuenindex/items/lemuen_horns">萨卡兹角饰</router-link>
            </li>
          </ul>
        </div>

    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——蕾缪安</h1>
        <h3>蕾缪安-明日方舟同人MOD</h3>
        <h3>Lemuen - Arknights</h3>
        <div class="credits">
          <h2>金主/策划：whaaaatfne（最终能量）</h2>
          <h2>码师：古明地球</h2>
          <h2>赞助：塔rua</h2>
          <h2>画师：670</h2>
        </div>
        <div class="notes">
          <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3635035690">明日方舟：蕾缪安（LEMUEN）[脆皮高伤，跨境追击]--正式版</a></p>
          <p>*请注意页面的时效性，信息更新时间：2025.12.30（v1.0.0）</p>
          <p>*该页面仍有不少错误，欢迎指正。</p>
        </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/othercharacter/lemuenindex/lemuen" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/lemuen/lemuen_none.webp" alt="蕾缪安立绘" width="200px"><br/>
              <img src="@/assets/othercharacter/lemuen/names_lemuen.webp" alt="蕾缪安名字" width="200px">
            </div>
          </router-link>
        </div>
      </section>

      <section class="items">
        <h4 id="building">模组物品</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_sniper"><img src="@/assets/othercharacter/lemuen/lemuen_sniper.webp" alt="拉特兰狙击铳" width="60px"><br/>拉特兰狙击铳</router-link></td>
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_module"><img src="@/assets/othercharacter/lemuen/lemuen_module.webp" alt="模组：弹匣与花窗" width="60px"><br/>模组</router-link></td>
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_wheelchair"><img src="@/assets/othercharacter/lemuen/lemuen_wheelchair.webp" alt="特制电动轮椅" width="60px"><br/>特制电动轮椅</router-link></td>
                
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_elite_1"><img src="@/assets/othercharacter/lemuen/lemuen_elite_1.webp" alt="一级精英化券（蕾缪安）" width="60px"><br/>一级精英化券（蕾缪安）</router-link></td>
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_elite_2"><img src="@/assets/othercharacter/lemuen/lemuen_elite_2.webp" alt="二级精英化券（蕾缪安）" width="60px"><br/>二级精英化券（蕾缪安）</router-link></td>

              </tr>
            </tbody>
          </table>  
        </div>

        <h4 id="surprise">彩蛋物品</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td><router-link to="/othercharacter/lemuenindex/items/lemuen_horns"><img src="@/assets/othercharacter/lemuen/lemuen_horns.webp" alt="萨卡兹角饰" width="60px"><br/>萨卡兹角饰</router-link></td>

              </tr>
            </tbody>
          </table>
        </div>

      </section>
    </main>
  </body>
  
  </html>

</template>

<script setup lang="ts">
// import '@/pages/css/main.css';
import navigation from './components/navigation.vue';
import { onMounted, ref } from 'vue';


// 侧边栏交互逻辑
const sidebarToggle = ref<HTMLButtonElement | null>(null);
const sidebar = ref<HTMLDivElement | null>(null);

onMounted(() => {
  // 点击按钮切换侧边栏状态
  sidebarToggle.value?.addEventListener('click', () => {
    sidebar.value?.classList.toggle('active');
  });

  // 点击侧边栏链接后在移动设备上自动关闭侧边栏
  const sidebarLinks = sidebar.value?.querySelectorAll('a');
  sidebarLinks?.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && sidebar.value) {
        sidebar.value.classList.remove('active');
      }
    });
  });

});

// 侧边栏状态
const isSidebarActive = ref(false);

// 切换侧边栏状态
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value;
};

// 控制每个 section 是否展开
const openSections = ref<Record<string, boolean>>({
  character: false,
  building: false,
  material: false,
  cuisine: false,
  items: false,
  follower: false,
  surprise: false
});

const toggleSection = (key: string) => {
  openSections.value[key] = !openSections.value[key];
  if(openSections.value[key]){
    // 滑动至对应位置
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  }
};

</script>

<style scoped>
/* 保持原有样式不变 */
.mod-info {
        text-align: center;
        margin-bottom: 20px;
      }

      .credits {
        margin: 15px 0;
      }

      .notes {
        font-style: italic;
        color: #666;
      }

      .character-list {
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 20px;
      }

      .character {
        text-align: center;
      }

      .character-name {
        margin-top: 10px;
        font-weight: bold;
        font-size: 1.2em;
      }

      hr {
        margin: 20px 0;
        border: 1px solid #eee;
      }
      /* 链接样式 */
      .character-link {
        text-decoration: none;
        color: inherit;
        display: block;
        transition: transform 0.3s ease;
      }
      .character-link:hover {
        transform: scale(1.1);
      }
</style>