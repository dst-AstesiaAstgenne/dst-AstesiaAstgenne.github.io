<template>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 夕</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />


    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/othercharacter/duskindex/dusk">夕</router-link></li>
      </ul>

      <h3 style="color: #007acc;">模组物品</h3>
      <ul>
        <li><router-link to="/othercharacter/duskindex/items/dusk_armor">墨染幻甲</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_armor2">墨染幻甲-强化</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_sword">涂鬼神</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_chest">绘境藏玄</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_medal">墨染勋章</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_pen">幻墨神笔</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/spell_dusk_level">无题长卷</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/spell_dusk_level2">“终夜无寐”（上卷）</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_elite_1">一级精英化券</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_elite_2">二级精英化券</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_book_doom">湮墨殷染尽拙山</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_book_sleep">拙山方晓尽梦长</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_statue">夕泡泡雕像</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_star">“星稀”</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_eye_open">幻造·第三只眼</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_hammer">岩崩锤</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_dial">幻造·月时计</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_staff">意义非凡的法杖</router-link></li>
        <li><router-link to="/othercharacter/duskindex/items/dusk_fan">宇智波团扇</router-link></li>
      </ul>
    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——夕</h1>
        <h3>夕-明日方舟同人MOD</h3>
        <h3>Dusk - Arknights</h3>
        <div class="credits">
          <h2>作者&代码：古明地ボール</h2>
        </div>
        <div class="notes">
          <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3467205041">【明日方舟】夕（正式版）</a></p>
          <p>*该页面仍有不少错误，欢迎指正。</p>
        </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/othercharacter/duskindex/dusk" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/dusk/dusk_none.webp" alt="夕立绘" width="200px"><br/>
              <img src="@/assets/othercharacter/dusk/names_dusk.webp" alt="夕名字" width="200px">
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
              <td><router-link to="/othercharacter/duskindex/items/dusk_armor"><img src="@/assets/othercharacter/dusk/dusk_armor.webp" alt="墨染幻甲" width="60px"><br>墨染幻甲</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_armor2"><img src="@/assets/othercharacter/dusk/dusk_armor2.webp" alt="墨染幻甲-强化" width="60px"><br>墨染幻甲-强化</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_sword"><img src="@/assets/othercharacter/dusk/dusk_sword.webp" alt="涂鬼神" width="60px"><br>涂鬼神</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_chest"><img src="@/assets/othercharacter/dusk/dusk_chest.webp" alt="绘境藏玄" width="60px"><br>绘境藏玄</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_medal"><img src="@/assets/othercharacter/dusk/dusk_medal.webp" alt="墨染勋章" width="60px"><br>墨染勋章</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_pen"><img src="@/assets/othercharacter/dusk/dusk_pen.webp" alt="幻墨神笔" width="60px"><br>幻墨神笔</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_star"><img src="@/assets/othercharacter/dusk/dusk_star.webp" alt="“星稀”" width="60px"><br>“星稀”</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/spell_dusk_level"><img src="@/assets/othercharacter/dusk/spell_dusk_level.webp" alt="无题长卷" width="60px"><br>无题长卷</router-link></td>
              
            </tr>

            <tr>
              <td><router-link to="/othercharacter/duskindex/items/spell_dusk_level2"><img src="@/assets/othercharacter/dusk/spell_dusk_level2.webp" alt="“终夜无寐”（上卷）" width="60px"><br>“终夜无寐”（上卷）</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_elite_1"><img src="@/assets/othercharacter/dusk/dusk_elite_1.webp" alt="一级精英化券" width="60px"><br>一级精英化券</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_elite_2"><img src="@/assets/othercharacter/dusk/dusk_elite_2.webp" alt="二级精英化券" width="60px"><br>二级精英化券</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_book_doom"><img src="@/assets/othercharacter/dusk/dusk_book_doom.webp" alt="湮墨殷染尽拙山" width="60px"><br>湮墨殷染尽拙山</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_book_sleep"><img src="@/assets/othercharacter/dusk/dusk_book_sleep.webp" alt="拙山方晓尽梦长" width="60px"><br>拙山方晓尽梦长</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_statue"><img src="@/assets/othercharacter/dusk/dusk_statue.webp" alt="夕泡泡雕像" width="60px"><br>夕泡泡雕像</router-link></td>
              <td></td>
              <td></td>
              
            </tr>

            <tr>
              
              <td><router-link to="/othercharacter/duskindex/items/dusk_eye_open"><img src="@/assets/othercharacter/dusk/dusk_eye_open.webp" alt="幻造·第三只眼" width="60px"><br>幻造·第三只眼</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_hammer"><img src="@/assets/othercharacter/dusk/dusk_hammer.webp" alt="岩崩锤" width="60px"><br>岩崩锤</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_dial"><img src="@/assets/othercharacter/dusk/dusk_dial.webp" alt="幻造·月时计" width="60px"><br>幻造·月时计</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_staff"><img src="@/assets/othercharacter/dusk/dusk_staff.webp" alt="意义非凡的法杖" width="60px"><br>意义非凡的法杖</router-link></td>
              <td><router-link to="/othercharacter/duskindex/items/dusk_fan"><img src="@/assets/othercharacter/dusk/dusk_fan.webp" alt="宇智波团扇" width="60px"><br>宇智波团扇</router-link></td>
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