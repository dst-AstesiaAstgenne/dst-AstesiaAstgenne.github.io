<template>

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
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
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