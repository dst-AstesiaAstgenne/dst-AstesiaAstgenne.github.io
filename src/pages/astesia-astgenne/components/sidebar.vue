<template>

    <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('buildings')">
          模组建筑
        <span>{{ openSections.buildings ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.buildings">
          <li><router-link to="/astesia-astgenne/items/ast_truth">“真理”</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_bookshelf">一体式书桌</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_base">微星投影仪</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_rack">实验操作台</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('material')">
          模组材料
        <span>{{ openSections.material ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.material">
          <li><router-link to="/astesia-astgenne/items/ast_d32steel">D32钢</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_penandbottle">描绘星空之羽</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_starfeather">星之羽</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_swallowgrass">飞燕草</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('items')">
          模组物品
        <span>{{ openSections.items ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.items">
          <li><router-link to="/astesia-astgenne/items/ast_understar">“同一片星空下”</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_starkit">星空修补套件</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astesia_hat">探索者之愿</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astesia_armor">探索者之星</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astesia_sword3">祷告星辰之语</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astesia_sword2">残响星辰之语</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astesia_sword1">制式源石长剑</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_globes">星象天体仪</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_box">奇工纳物箱</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_badge_astesia">星极证章</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_hat">科研者之愿</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_armor">科研者之星</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_wand3">昭示星光之愿</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_wand2">残缺星光之愿</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_wand1">制式源石短杖</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_wings">翱翔星海之翼</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_bouquet">飞燕草花束</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_badge_astgenne">星源证章</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_key">黯淡星河之钥</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('skill')">
          晋升与专精
        <span>{{ openSections.skill ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.skill">
          <li><router-link to="/astesia-astgenne/items/ast_elite_books1_astesia">一级晋升凭证【星极】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_elite_books2_astesia">二级晋升凭证【星极】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_elite_books3_astesia">三级晋升凭证【星极】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books1_astesia">技巧概要·卷1【星座守护】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books1_astesia">技巧概要·卷1【星辉剑】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books2_astesia">技巧概要·卷2【星座守护】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books2_astesia">技巧概要·卷2【星辉剑】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books3_astesia">技巧概要·卷3【星座守护】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books3_astesia">技巧概要·卷3【星辉剑】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_elite_books1_astgenne">一级晋升凭证【星源】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_elite_books2_astgenne">二级晋升凭证【星源】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_elite_books3_astgenne">三级晋升凭证【星源】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books1_astgenne">技巧概要·卷1【双端导流】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books1_astgenne">技巧概要·卷1【星束交汇】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books2_astgenne">技巧概要·卷2【双端导流】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books2_astgenne">技巧概要·卷2【星束交汇】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill1_books3_astgenne">技巧概要·卷3【双端导流】</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_skill2_books3_astgenne">技巧概要·卷3【星束交汇】</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('books')">
          模组书籍
        <span>{{ openSections.books ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.books">
          <li><router-link to="/astesia-astgenne/items/ast_book_flavor">群星·随想曲</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_book_map">群星·幻想曲</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_book_moon">群星·变奏曲</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_book_pick">群星·练习曲</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_book_rebirth">群星·颂扬曲</router-link></li>
          <li><router-link to="/astesia-astgenne/items/ast_book_speed">群星·圆舞曲</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('experiment')">
          模组实验产物
        <span>{{ openSections.experiment ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.experiment">
          <li><router-link to="/astesia-astgenne/items/astgenne_potions_energy">瓶装活力混合剂</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_potions_energy_big">壶装活力混合剂</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_potions_sadness">少许沉沦悲意</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_potions_sadness_big">杯装沉沦悲意</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_bombs_husk">位面晶体炸弹</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_bombs_purebrilliance">辉煌晶体炸弹</router-link></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 style="color: #007acc;" @click="toggleSection('surprise')">
          特殊物品
        <span>{{ openSections.surprise ? '▲' : '▼' }}</span>
        </h3>
        <ul v-show="openSections.surprise">
          <li><router-link to="/astesia-astgenne/items/astgenne_rabbitlamp">兔兔落地灯</router-link></li>
          <li><router-link to="/astesia-astgenne/items/astgenne_candymachine">“全是兔兔”糖果机</router-link></li>
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
  surprise: false,
  books: false,
  experiment: false,
  skill: false
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