<template>

    <!-- 模组建筑 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('building')">
            模组建筑
            <span>{{ openSections.building ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.building">
            <li>
              <router-link to="/othercharacter/archettoindex/items/archetto_titlepage">圣音·扉页</router-link>
            </li>
          </ul>
        </div>

        <!-- 模组材料 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('material')">
            模组材料
            <span>{{ openSections.material ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.material">
            <li>
              <router-link to="/othercharacter/archettoindex/items/archetto_crystalpiece">圣音晶屑</router-link>
            </li>
            <li>
              <router-link to="/othercharacter/archettoindex/items/archetto_crystal">圣音晶石</router-link>
            </li>
          </ul>
        </div>

        <!-- 模组物品 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('items')">
            模组物品
            <span>{{ openSections.items ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.items">
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chest">圣音·百纳晶匣</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_candletable">圣音·烛光宴台</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_cookpot">圣音·素银餐锅</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_pethat1">一等星的祝福</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_hat">兰登之庇护</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_cape">兰登之过往</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_smallbow">麦穗</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_bow">赞美诗</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_boww1">圣音·赞美诗I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_boww2">圣音·赞美诗II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_boww3">圣音·赞美诗III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_storysong1">圣音·叙事曲I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_storysong2">圣音·叙事曲II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_storysong3">圣音·叙事曲III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_aria1">圣音·咏叹调I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_aria2">圣音·咏叹调II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_aria3">圣音·咏叹调III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_tower_moon">月光回声·休止音</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_tower_shadow">暗影回声·三连音</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_sonata1">圣音·奏鸣曲I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_sonata2">圣音·奏鸣曲II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_sonata3">圣音·奏鸣曲III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_symphony1">圣音·交响曲I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_symphony2">圣音·交响曲II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_symphony3">圣音·交响曲III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove1">残弩·百步穿杨</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove2">残弩·交叉火力</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_landonkit">兰登修补套件</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_gospelkit">圣音修补套件</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_petctrlon">一等星的祈愿</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_elite1">一级晋升凭证</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_elite2">二级晋升凭证</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_badge">空弦的信物</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_bag">明天的种子袋</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_book">一等星的回响</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove3">演出用香水</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove7">长生者之证</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove6">迷迭香之拥</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove5">国王的新枪</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_trove4">国王的圆饼</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_bundle">诱人珍宝</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip2_1">明天的种子I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip2_2">明天的种子II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip2_3">明天的种子III</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip1_1">旧日重现I</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip1_2">旧日重现II</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_chip1_3">旧日重现III</router-link></li>
          </ul>
        </div>

        <!-- 模组烹饪 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('cuisine')">
            模组料理
            <span>{{ openSections.cuisine ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.cuisine">
            <li><router-link to="/othercharacter/archettoindex/items/archetto_meatcan">精选兽肉罐头</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_seaweedstir">凉拌海草</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_screamcherry">尖叫樱桃</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_illusionalmeal">迷幻盛宴</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_figjuice">无花果冰果汁</router-link></li>
            <li><router-link to="/othercharacter/archettoindex/items/archetto_iceberrymousse">冰爽莓果慕斯</router-link></li>
          </ul>
        </div>

        <!-- 模组随从 -->
        <div class="sidebar-section">
          <h3 style="color: #007acc;" @click="toggleSection('follower')">
            模组随从
            <span>{{ openSections.follower ? '▲' : '▼' }}</span>
          </h3>
          <ul v-show="openSections.follower">
            <li>
              <router-link to="/othercharacter/archettoindex/items/archetto_petpng">小麦穗</router-link>
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
});

const toggleSection = (key: string) => {
  openSections.value[key] = !openSections.value[key];
};
</script>