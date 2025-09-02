<template>

  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 空弦</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />

    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/othercharacter/archettoindex/archetto">空弦</router-link></li>
      </ul>

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
    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——空弦</h1>
        <h3>空弦-明日方舟同人MOD</h3>
        <h3>Archetto - Arknights</h3>
        <div class="credits">
          <h2>作者：星枫如至</h2>
          <h2>画师：？</h2>
          <h2>码师：上班时间&秃驴</h2>
        </div>
        <div class="notes">
          <p>*该模组内容更倾向于多人长期档。</p>
          <p>*请确保对于原版拥有一定的理解与熟练度，以此获得更好的游玩体验。</p>
          <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3005687457">[明日方舟] 空弦</a></p>
          <p>*作者的模组介绍页：<a href="https://www.bilibili.com/read/readlist/rl777082">饥荒联机版空弦MOD介绍</a></p>
          <p>*该页面仍有不少错误，欢迎指正。</p>
        </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/othercharacter/archettoindex/archetto" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/archetto/archetto_none2.webp" alt="空弦立绘" width="200px"><br/>
              <img src="@/assets/othercharacter/archetto/names_archetto.webp" alt="空弦名字" width="200px">
            </div>
          </router-link>
        </div>
      </section>

      <section class="items">
        <h4>模组建筑</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_titlepage"><img src="@/assets/othercharacter/archetto/archetto_titlepage.webp" alt="圣音·扉页" width="60px"><br/>圣音·扉页</router-link></td>
              </tr>
            </tbody>
          </table>  
        </div>

        <h4>模组材料</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_crystal"><img src="@/assets/othercharacter/archetto/archetto_crystal.webp" alt="圣音晶石" width="60px"><br/>圣音晶石</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_crystalpiece"><img src="@/assets/othercharacter/archetto/archetto_crystalpiece.webp" alt="圣音晶屑" width="60px"><br/>圣音晶屑</router-link></td>
              </tr>
            </tbody>
          </table>  
        </div>

        <h4>模组物品</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chest"><img src="@/assets/othercharacter/archetto/archetto_chest.webp" alt="圣音·百纳晶匣" width="60px"><br/>圣音·百纳晶匣</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_candletable"><img src="@/assets/othercharacter/archetto/archetto_candletable.webp" alt="圣音·烛光宴台" width="60px"><br/>圣音·烛光宴台</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_cookpot"><img src="@/assets/othercharacter/archetto/archetto_cookpot.webp" alt="圣音·素银餐锅" width="60px"><br/>圣音·素银餐锅</router-link></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_pethat1"><img src="@/assets/othercharacter/archetto/archetto_pethat1.webp" alt="一等星的祝福" width="60px"><br/>一等星的祝福</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_hat"><img src="@/assets/othercharacter/archetto/archetto_hat.webp" alt="兰登之庇护" width="60px"><br/>兰登之庇护</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_cape"><img src="@/assets/othercharacter/archetto/archetto_cape.webp" alt="兰登之过往" width="60px"><br/>兰登之过往</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_smallbow"><img src="@/assets/othercharacter/archetto/archetto_smallbow.webp" alt="麦穗" width="60px"><br/>麦穗</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_bow"><img src="@/assets/othercharacter/archetto/archetto_bow.webp" alt="赞美诗" width="60px"><br/>赞美诗</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_boww1"><img src="@/assets/othercharacter/archetto/archetto_boww1.webp" alt="圣音·赞美诗I" width="60px"><br/>圣音·赞美诗I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_boww2"><img src="@/assets/othercharacter/archetto/archetto_boww2.webp" alt="圣音·赞美诗II" width="60px"><br/>圣音·赞美诗II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_boww3"><img src="@/assets/othercharacter/archetto/archetto_boww3.webp" alt="圣音·赞美诗III" width="60px"><br/>圣音·赞美诗III</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_storysong1"><img src="@/assets/othercharacter/archetto/archetto_storysong1.webp" alt="圣音·叙事曲I" width="60px"><br/>圣音·叙事曲I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_storysong2"><img src="@/assets/othercharacter/archetto/archetto_storysong2.webp" alt="圣音·叙事曲II" width="60px"><br/>圣音·叙事曲II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_storysong3"><img src="@/assets/othercharacter/archetto/archetto_storysong3.webp" alt="圣音·叙事曲III" width="60px"><br/>圣音·叙事曲III</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_aria1"><img src="@/assets/othercharacter/archetto/archetto_aria1.webp" alt="圣音·咏叹调I" width="60px"><br/>圣音·咏叹调I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_aria2"><img src="@/assets/othercharacter/archetto/archetto_aria2.webp" alt="圣音·咏叹调II" width="60px"><br/>圣音·咏叹调II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_aria3"><img src="@/assets/othercharacter/archetto/archetto_aria3.webp" alt="圣音·咏叹调III" width="60px"><br/>圣音·咏叹调III</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_tower_moon"><img src="@/assets/othercharacter/archetto/archetto_tower_moon.webp" alt="月光回声·休止音" width="60px"><br/>月光回声·休止音</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_tower_shadow"><img src="@/assets/othercharacter/archetto/archetto_tower_shadow.webp" alt="暗影回声·三连音" width="60px"><br/>暗影回声·三连音</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_sonata1"><img src="@/assets/othercharacter/archetto/archetto_sonata1.webp" alt="圣音·奏鸣曲I" width="60px"><br/>圣音·奏鸣曲I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_sonata2"><img src="@/assets/othercharacter/archetto/archetto_sonata2.webp" alt="圣音·奏鸣曲II" width="60px"><br/>圣音·奏鸣曲II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_sonata3"><img src="@/assets/othercharacter/archetto/archetto_sonata3.webp" alt="圣音·奏鸣曲III" width="60px"><br/>圣音·奏鸣曲III</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_symphony1"><img src="@/assets/othercharacter/archetto/archetto_symphony1.webp" alt="圣音·交响曲I" width="60px"><br/>圣音·交响曲I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_symphony2"><img src="@/assets/othercharacter/archetto/archetto_symphony2.webp" alt="圣音·交响曲II" width="60px"><br/>圣音·交响曲II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_symphony3"><img src="@/assets/othercharacter/archetto/archetto_symphony3.webp" alt="圣音·交响曲III" width="60px"><br/>圣音·交响曲III</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove1"><img src="@/assets/othercharacter/archetto/archetto_trove1.webp" alt="残弩·百步穿杨" width="60px"><br/>残弩·百步穿杨</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove2"><img src="@/assets/othercharacter/archetto/archetto_trove2.webp" alt="残弩·交叉火力" width="60px"><br/>残弩·交叉火力</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_landonkit"><img src="@/assets/othercharacter/archetto/archetto_landonkit.webp" alt="兰登修补套件" width="60px"><br/>兰登修补套件</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_gospelkit"><img src="@/assets/othercharacter/archetto/archetto_gospelkit.webp" alt="圣音修补套件" width="60px"><br/>圣音修补套件</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_petctrlon"><img src="@/assets/othercharacter/archetto/archetto_petctrlon.webp" alt="一等星的祈愿" width="60px"><br/>一等星的祈愿</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_elite1"><img src="@/assets/othercharacter/archetto/archetto_elite1.webp" alt="一级晋升凭证" width="60px"><br/>一级晋升凭证</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_elite2"><img src="@/assets/othercharacter/archetto/archetto_elite2.webp" alt="二级晋升凭证" width="60px"><br/>二级晋升凭证</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_badge"><img src="@/assets/othercharacter/archetto/archetto_badge.webp" alt="空弦的信物" width="60px"><br/>空弦的信物</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_bag"><img src="@/assets/othercharacter/archetto/archetto_bag.webp" alt="明天的种子袋" width="60px"><br/>明天的种子袋</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_book"><img src="@/assets/othercharacter/archetto/archetto_book.webp" alt="一等星的回响" width="60px"><br/>一等星的回响</router-link></td>
              </tr>

              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove3"><img src="@/assets/othercharacter/archetto/archetto_trove3.webp" alt="演出用香水" width="60px"><br/>演出用香水</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove7"><img src="@/assets/othercharacter/archetto/archetto_trove7.webp" alt="长生者之证" width="60px"><br/>长生者之证</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove6"><img src="@/assets/othercharacter/archetto/archetto_trove6.webp" alt="迷迭香之拥" width="60px"><br/>迷迭香之拥</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove5"><img src="@/assets/othercharacter/archetto/archetto_trove5.webp" alt="国王的新枪" width="60px"><br/>国王的新枪</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_trove4"><img src="@/assets/othercharacter/archetto/archetto_trove4.webp" alt="国王的圆饼" width="60px"><br/>国王的圆饼</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_bundle"><img src="@/assets/othercharacter/archetto/archetto_bundle.webp" alt="诱人珍宝" width="60px"><br/>诱人珍宝</router-link></td>
                <td></td>
                <td></td>
              </tr>
              
              <tr>
                
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip2_1"><img src="@/assets/othercharacter/archetto/archetto_chip2_1.webp" alt="明天的种子I" width="60px"><br/>明天的种子I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip2_2"><img src="@/assets/othercharacter/archetto/archetto_chip2_2.webp" alt="明天的种子II" width="60px"><br/>明天的种子II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip2_3"><img src="@/assets/othercharacter/archetto/archetto_chip2_3.webp" alt="明天的种子III" width="60px"><br/>明天的种子III</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip1_1"><img src="@/assets/othercharacter/archetto/archetto_chip1_1.webp" alt="旧日重现I" width="60px"><br/>旧日重现I</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip1_2"><img src="@/assets/othercharacter/archetto/archetto_chip1_2.webp" alt="旧日重现II" width="60px"><br/>旧日重现II</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_chip1_3"><img src="@/assets/othercharacter/archetto/archetto_chip1_3.webp" alt="旧日重现III" width="60px"><br/>旧日重现III</router-link></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>  
        </div>

        <h4>模组料理</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_meatcan"><img src="@/assets/othercharacter/archetto/archetto_meatcan.webp" alt="精选兽肉罐头" width="60px"><br/>精选兽肉罐头</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_seaweedstir"><img src="@/assets/othercharacter/archetto/archetto_seaweedstir.webp" alt="凉拌海草" width="60px"><br/>凉拌海草</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_screamcherry"><img src="@/assets/othercharacter/archetto/archetto_screamcherry.webp" alt="尖叫樱桃" width="60px"><br/>尖叫樱桃</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_illusionalmeal"><img src="@/assets/othercharacter/archetto/archetto_illusionalmeal.webp" alt="迷幻盛宴" width="60px"><br/>迷幻盛宴</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_figjuice"><img src="@/assets/othercharacter/archetto/archetto_figjuice.webp" alt="无花果冰果汁" width="60px"><br/>无花果冰果汁</router-link></td>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_iceberrymousse"><img src="@/assets/othercharacter/archetto/archetto_iceberrymousse.webp" alt="冰爽莓果慕斯" width="60px"><br/>冰爽莓果慕斯</router-link></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>
          </table>
        </div>

        <h4>模组随从</h4>
        <div class="table-wrapper">
          <table class="items-table">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="/othercharacter/archettoindex/items/archetto_petpng"><img src="@/assets/othercharacter/archetto/archetto_petpng.webp" alt="小麦穗" width="60px"><br/>小麦穗</router-link></td>
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
});

const toggleSection = (key: string) => {
  openSections.value[key] = !openSections.value[key];
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