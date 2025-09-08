<template>

  <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('buildings')">
          模组建筑
        <span>{{ openSections.buildings ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.buildings">
          <li><router-link to="/othercharacter/duskindex/items/dusk_statue">夕泡泡雕像</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('items')">
          模组物品
        <span>{{ openSections.items ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.items">
          <li><router-link to="/othercharacter/duskindex/items/dusk_armor">墨染幻甲</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_armor2">墨染幻甲-强化</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_sword">涂鬼神</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_chest">绘境藏玄</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_medal">墨染勋章</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_pen">幻墨神笔</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_star">“星稀”</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/spell_dusk_level">无题长卷</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/spell_dusk_level2">“终夜无寐”（上卷）</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/spell_dusk_level3">“终夜无寐”（下卷）</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_elite_1">一级精英化券</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_elite_2">二级精英化券</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_book_doom">湮墨殷染尽拙山</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_book_sleep">拙山方晓尽梦长</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('surprise')">
          彩蛋物品
        <span>{{ openSections.surprise ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.surprise">
          <li><router-link to="/othercharacter/duskindex/items/dusk_eye_open">幻造·第三只眼</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_hammer">岩崩锤</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_dial">幻造·月时计</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_staff">意义非凡的法杖</router-link></li>
          <li><router-link to="/othercharacter/duskindex/items/dusk_fan">宇智波团扇</router-link></li>
        </ul>
      </div>

</template>
<script setup lang="ts">
// 这里暂时不用 JS，如果有逻辑可以写在这里
import { ref } from 'vue'
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
};
</script>