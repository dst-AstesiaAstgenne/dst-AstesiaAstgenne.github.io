<template>

  <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('material')">
          模组材料
        <span>{{ openSections.material ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.material">
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_yitie">异铁</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_yitiezu">异铁组</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_yanmoshi">研磨石</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_quanxinzhuangzhi">全新装置</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_chihejin">炽合金</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_chihejinkuai">炽合金块</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingtidianlu">晶体电路</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_ningjiao">凝胶</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_juheningjiao">聚合凝胶</router-link></li>

          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_shujuzengbukuai">数据增补块</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_shujuzengbuyi">数据增补仪</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_mozushujukuai">模组数据块</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingtidianzidanyuan">晶体电子单元</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_d32">D32钢</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_juheji">聚合剂</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_qnsp">潜能碎片</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('items')">
          模组物品
        <span>{{ openSections.items ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.items">
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_weapon">怀离剑</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu1">钦天司时Lv1</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu2">钦天司时Lv2</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu3">钦天司时Lv3</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyishu">精英化一【书籍】</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingershu">精英化二【书籍】</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_qn">潜能印记</router-link></li>

          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_guo_item">年的小火锅</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_bi">夕的小笔杆</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jiuhu">令的小酒壶</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jinengshu">技能升级书</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu0">基础作战记录</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu1">初级作战记录</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu2">中级作战记录</router-link></li>
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu3">高级作战记录</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('buildings')">
          模组建筑
        <span>{{ openSections.buildings ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.buildings">
          <li><router-link to="/othercharacter/arkshuindex/items/arkshu_quanjidai">剑台</router-link></li>
        </ul>
      </div>

</template>
<script setup>
// 这里暂时不用 JS，如果有逻辑可以写在这里
import { ref } from 'vue'

const openSections = ref({
  material: false,
  items: false,
  buildings: false
})

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section]
}
</script>