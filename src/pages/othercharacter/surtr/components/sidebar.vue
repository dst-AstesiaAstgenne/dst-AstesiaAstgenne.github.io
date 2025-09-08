<template>

  <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('items')">
          模组物品
        <span>{{ openSections.items ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.items">
          <li><router-link to="/othercharacter/surtrindex/items/surtrclothes">史尔特尔服装</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/laevatain">莱万汀</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_pureflame">纯粹火焰</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_elitebook1">高级资深干员训练书</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_elitebook2">高级资深干员特训书</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_supericecream">豪华冰淇淋</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_deerleg">晶肝茸髓</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_glassseaweed">玻璃海苔</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_scarygrandma">地精奶奶</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('cuisine')">
          模组料理
        <span>{{ openSections.cuisine ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.cuisine">
          <li><router-link to="/othercharacter/surtrindex/items/surtr_lavabreath">灼热之息</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_lavakiss">熔岩之吻</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shutiao">脆肉薯条转醇</router-link></li>
          <li><router-link to="/othercharacter/surtrindex/items/surtr_sxys_shanshui">炎国山水原液</router-link></li>
        </ul>
      </div>

</template>
<script setup lang="ts">
import { ref } from 'vue';
// 这里暂时不用 JS，如果有逻辑可以写在这里
// 控制每个 section 是否展开
const openSections = ref<Record<string, boolean>>({
  character: false,
  building: false,
  material: false,
  cuisine: false,
  items: false,
  follower: false,
});

const toggleSection = (key: string) => {
  openSections.value[key] = !openSections.value[key];
};

</script>