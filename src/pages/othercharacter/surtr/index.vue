<template>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 史尔特尔</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />


    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/othercharacter/surtrindex/surtr">史尔特尔</router-link></li>
      </ul>

      <h3 style="color: #007acc;">模组物品</h3>
      <ul>
        <li><router-link to="/othercharacter/surtrindex/items/surtrclothes">史尔特尔服装</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/laevatain">莱万汀</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_pureflame">纯粹火焰</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_elitebook1">高级资深干员训练书</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_elitebook2">高级资深干员特训书</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_supericecream">豪华冰淇淋</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_lavabreath">灼热之息</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_lavakiss">熔岩之吻</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_deerleg">晶肝茸髓</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shutiao">脆肉薯条转醇</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shanshui">炎国山水原液</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_glassseaweed">玻璃海苔</router-link></li>
        <li><router-link to="/othercharacter/surtrindex/items/surtr_scarygrandma">地精奶奶</router-link></li>
      </ul>
    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——史尔特尔</h1>
      <h3>史尔特尔-明日方舟同人MOD</h3>
      <h3>Surtr - Arknights</h3>
      <div class="credits">
        <h2>作者＆代码＆策划：whaaaatfne（最终能量）</h2>
        <h2>画师：絔狼</h2>
        <h2>特别鸣谢：代码支持：古明地球</h2>
      </div>
      <div class="notes">
        <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3452922217">[Arknights]明日方舟：史尔特尔</a></p>
        <p>*吃土穷神的模组介绍视频：<a href="https://www.bilibili.com/video/BV16xExzKEob">【饥荒MOD人物介绍】红色幻神——史尔特尔（锁血高伤、诸神黄昏）</a></p>
        <p>*该页面仍有不少错误，欢迎指正。</p>
      </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/othercharacter/surtrindex/surtr" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/surtr/surtr_none.webp" alt="史尔特尔立绘" width="200px"><br/>
              <img src="@/assets/othercharacter/surtr/names_surtr.webp" alt="史尔特尔名字" width="200px">
            </div>
          </router-link>
        </div>
      </section>

      <section class="items">
        <h4>模组物品</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/surtrindex/items/surtrclothes"><img src="@/assets/othercharacter/surtr/surtrclothes.webp" alt="史尔特尔服装" width="60px"><br>史尔特尔服装</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/laevatain"><img src="@/assets/othercharacter/surtr/laevatain.webp" alt="莱万汀" width="60px"><br>莱万汀</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_pureflame"><img src="@/assets/othercharacter/surtr/pureflame.webp" alt="纯粹火焰" width="60px"><br>纯粹火焰</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_elitebook1"><img src="@/assets/othercharacter/surtr/surtr_elitebook1.webp" alt="高级资深干员训练书" width="60px"><br>高级资深干员训练书</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_elitebook2"><img src="@/assets/othercharacter/surtr/surtr_elitebook2.webp" alt="高级资深干员特训书" width="60px"><br>高级资深干员特训书</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_supericecream"><img src="@/assets/othercharacter/surtr/surtr_supericecream.webp" alt="豪华冰淇淋" width="60px"><br>豪华冰淇淋</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_lavabreath"><img src="@/assets/othercharacter/surtr/surtr_lavabreath.webp" alt="灼热之息" width="60px"><br>灼热之息</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_lavakiss"><img src="@/assets/othercharacter/surtr/surtr_lavakiss.webp" alt="熔岩之吻" width="60px"><br>熔岩之吻</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_sxys_deerleg"><img src="@/assets/othercharacter/surtr/surtr_sxys_deerleg.webp" alt="晶肝茸髓" width="60px"><br>晶肝茸髓</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shutiao"><img src="@/assets/othercharacter/surtr/surtr_sxys_shutiao.webp" alt="脆肉薯条转醇" width="60px"><br>脆肉薯条转醇</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shanshui"><img src="@/assets/othercharacter/surtr/surtr_sxys_shanshui.webp" alt="炎国山水原液" width="60px"><br>炎国山水原液</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_glassseaweed"><img src="@/assets/othercharacter/surtr/surtr_glassseaweed.webp" alt="玻璃海苔" width="60px"><br>玻璃海苔</router-link></td>
                <td><router-link to="/othercharacter/surtrindex/items/surtr_scarygrandma"><img src="@/assets/othercharacter/surtr/surtr_scarygrandma.webp" alt="地精奶奶" width="60px"><br>地精奶奶</router-link></td>
                <td></td>
                <td></td>
                <td></td>
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