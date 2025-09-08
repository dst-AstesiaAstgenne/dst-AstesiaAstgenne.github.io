<template>
  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 黍</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />


    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/othercharacter/arkshuindex/arkshu">黍</router-link></li>
      </ul>

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

    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——黍</h1>
      <h3>黍-明日方舟同人MOD</h3>
      <h3>Shu - Arknights</h3>
      <div class="credits">
        <h2>作者1：moyun</h2>
        <h2>作者2：whaaaatfne</h2>
      </div>
      <div class="notes">
        <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3524519338">[Arknights]明日方舟：黍（SHU）</a></p>
        <p>*吃土穷神的模组介绍视频：<a href="https://www.bilibili.com/video/BV1LFtkzhEPL">【饥荒MOD人物介绍】千秋一粟——黍（种地奶盾、极致抗压）</a></p>
        <p>*请注意页面的时效性，信息更新时间：2025.8.21（v1.0.4）</p>
        <p>*该页面仍有不少错误，欢迎指正。</p>
      </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/othercharacter/arkshuindex/arkshu" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/arkshu/arkshu_none.webp" alt="黍立绘" width="200px"><br/>
              <img src="@/assets/othercharacter/arkshu/names_arkshu.webp" alt="黍名字" width="200px">
            </div>
          </router-link>
        </div>
      </section>

      <section class="items">
        <h4 id="material">模组材料</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_yitie"><img src="@/assets/othercharacter/arkshu/arkshu_yitie.webp" alt="异铁" width="60px"><br>异铁</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_yitiezu"><img src="@/assets/othercharacter/arkshu/arkshu_yitiezu.webp" alt="异铁组" width="60px"><br>异铁组</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_yanmoshi"><img src="@/assets/othercharacter/arkshu/arkshu_yanmoshi.webp" alt="光" width="60px"><br>研磨石</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_quanxinzhuangzhi"><img src="@/assets/othercharacter/arkshu/arkshu_quanxinzhuangzhi.webp" alt="全新装置" width="60px"><br>全新装置</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_chihejin"><img src="@/assets/othercharacter/arkshu/arkshu_chihejin.webp" alt="炽合金" width="60px"><br>炽合金</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_chihejinkuai"><img src="@/assets/othercharacter/arkshu/arkshu_chihejinkuai.webp" alt="炽合金块" width="60px"><br>炽合金块</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingtidianlu"><img src="@/assets/othercharacter/arkshu/arkshu_jingtidianlu.webp" alt="晶体电路" width="60px"><br>晶体电路</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_ningjiao"><img src="@/assets/othercharacter/arkshu/arkshu_ningjiao.webp" alt="凝胶" width="60px"><br>凝胶</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_juheningjiao"><img src="@/assets/othercharacter/arkshu/arkshu_juheningjiao.webp" alt="聚合凝胶" width="60px"><br>聚合凝胶</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_shujuzengbukuai"><img src="@/assets/othercharacter/arkshu/arkshu_shujuzengbukuai.webp" alt="数据增补块" width="60px"><br>数据增补块</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_shujuzengbuyi"><img src="@/assets/othercharacter/arkshu/arkshu_shujuzengbuyi.webp" alt="数据增补仪" width="60px"><br>数据增补仪</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_mozushujukuai"><img src="@/assets/othercharacter/arkshu/arkshu_mozushujukuai.webp" alt="模组数据块" width="60px"><br>模组数据块</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingtidianzidanyuan"><img src="@/assets/othercharacter/arkshu/arkshu_jingtidianzidanyuan.webp" alt="晶体电子单元" width="60px"><br>晶体电子单元</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_d32"><img src="@/assets/othercharacter/arkshu/arkshu_d32.webp" alt="D32钢" width="60px"><br>D32钢</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_juheji"><img src="@/assets/othercharacter/arkshu/arkshu_juheji.webp" alt="聚合剂" width="60px"><br>聚合剂</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_qnsp"><img src="@/assets/othercharacter/arkshu/arkshu_qnsp.webp" alt="潜能碎片" width="60px"><br>潜能碎片</router-link></td>
              </tr>   

            </tbody>
          </table>
        </div>
      </section>

      <h4 id="items">模组物品</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_weapon"><img src="@/assets/othercharacter/arkshu/arkshu_weapon.webp" alt="怀离剑" width="60px"><br>怀离剑</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu1"><img src="@/assets/othercharacter/arkshu/arkshu_mozu.webp" alt="钦天司时Lv1" width="60px"><br>钦天司时Lv1</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu2"><img src="@/assets/othercharacter/arkshu/arkshu_mozu1.webp" alt="钦天司时Lv2" width="60px"><br>钦天司时Lv2</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_mozu3"><img src="@/assets/othercharacter/arkshu/arkshu_mozu2.webp" alt="钦天司时Lv3" width="60px"><br>钦天司时Lv3</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyishu"><img src="@/assets/othercharacter/arkshu/arkshu_jingyishu.webp" alt="精英化一【书籍】" width="60px"><br>精英化一【书籍】</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingershu"><img src="@/assets/othercharacter/arkshu/arkshu_jingershu.webp" alt="精英化二【书籍】" width="60px"><br>精英化二【书籍】</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_qn"><img src="@/assets/othercharacter/arkshu/arkshu_qn.webp" alt="潜能印记" width="60px"><br>潜能印记</router-link></td>
                <td></td>
              </tr>
              
              <tr>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_guo_item"><img src="@/assets/othercharacter/arkshu/arkshu_guo_item.webp" alt="年的小火锅" width="60px"><br>年的小火锅</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_bi"><img src="@/assets/othercharacter/arkshu/arkshu_bi.webp" alt="夕的小笔杆" width="60px"><br>夕的小笔杆</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jiuhu"><img src="@/assets/othercharacter/arkshu/arkshu_jiuhu.webp" alt="令的小酒壶" width="60px"><br>令的小酒壶</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jinengshu"><img src="@/assets/othercharacter/arkshu/arkshu_jinengshu.webp" alt="技能升级书" width="60px"><br>技能升级书</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu0"><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu0.webp" alt="基础作战记录" width="60px"><br>基础作战记录</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu1"><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu1.webp" alt="初级作战记录" width="60px"><br>初级作战记录</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu2"><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu2.webp" alt="中级作战记录" width="60px"><br>中级作战记录</router-link></td>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_jingyanshu3"><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu3.webp" alt="高级作战记录" width="60px"><br>高级作战记录</router-link></td>
              </tr>  
              
            </tbody>
          </table>
        </div>

        <h4 id="building">模组建筑</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/arkshuindex/items/arkshu_quanjidai"><img src="@/assets/othercharacter/arkshu/arkshu_quanjidai.webp" alt="剑台" width="60px"><br>剑台</router-link></td>
              </tr>   

              
            </tbody>
          </table>
        </div>
      
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