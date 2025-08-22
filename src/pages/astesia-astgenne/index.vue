<template>

  <html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>饥荒模组 Wiki - 星极&星源</title>

  </head>
  <body>
    <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
    <navigation />

    <aside class="sidebar" :class="{ active: isSidebarActive }">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/astesia-astgenne/astesia">星极</router-link></li>
        <li><router-link to="/astesia-astgenne/astgenne">星源</router-link></li>
      </ul>

      <h3 style="color: #007acc;">模组物品</h3>
      <ul>
        <li><router-link to="/astesia-astgenne/items/ast_truth">“真理”</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_understar">“同一片星空下”</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_d32steel">D32钢</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_starkit">星空修补套件</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astesia_hat">探索者之愿</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astesia_armor">探索者之星</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astesia_sword3">祷告星辰之语</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astesia_sword2">残响星辰之语</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astesia_sword1">制式源石长剑</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_globes">星象天体仪</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_box">奇工纳物箱</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_bookshelf">一体式书桌</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_penandbottle">描绘星空之羽</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_starfeather">星之羽</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_flavor">群星·随想曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_map">群星·幻想曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_moon">群星·变奏曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_pick">群星·练习曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_rebirth">群星·颂扬曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_book_speed">群星·圆舞曲</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books1_astesia">一级晋升凭证【星极】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books2_astesia">二级晋升凭证【星极】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books3_astesia">三级晋升凭证【星极】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books1_astesia">技巧概要·卷1【星座守护】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books1_astesia">技巧概要·卷1【星辉剑】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books2_astesia">技巧概要·卷2【星座守护】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books2_astesia">技巧概要·卷2【星辉剑】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books3_astesia">技巧概要·卷3【星座守护】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books3_astesia">技巧概要·卷3【星辉剑】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_badge_astesia">星极证章</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_hat">科研者之愿</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_armor">科研者之星</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_wand3">昭示星光之愿</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_wand2">残缺星光之愿</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_wand1">制式源石短杖</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_wings">翱翔星海之翼</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_base">微星投影仪</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_rack">实验操作台</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_bouquet">飞燕草花束</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_swallowgrass">飞燕草</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_potions_energy">瓶装活力混合剂</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_potions_energy_big">壶装活力混合剂</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_potions_sadness">少许沉沦悲意</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_potions_sadness_big">杯装沉沦悲意</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_bombs_husk">位面晶体炸弹</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_bombs_purebrilliance">辉煌晶体炸弹</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books1_astgenne">一级晋升凭证【星源】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books2_astgenne">二级晋升凭证【星源】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_elite_books3_astgenne">三级晋升凭证【星源】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books1_astgenne">技巧概要·卷1【双端导流】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books1_astgenne">技巧概要·卷1【星束交汇】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books2_astgenne">技巧概要·卷2【双端导流】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books2_astgenne">技巧概要·卷2【星束交汇】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill1_books3_astgenne">技巧概要·卷3【双端导流】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/ast_skill2_books3_astgenne">技巧概要·卷3【星束交汇】</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_badge_astgenne">星源证章</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_key">黯淡星河之钥</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_rabbitlamp">兔兔落地灯</router-link></li>
        <li><router-link to="/astesia-astgenne/items/astgenne_candymachine">“全是兔兔”糖果机</router-link></li>
      </ul>
    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍——星极&星源</h1>
        <h3>星极&星源-明日方舟同人MOD</h3>
        <h3>Astesia & Astgenne - Arknights</h3>
        <div class="credits">
          <h2>作者：星枫如至</h2>
          <h2>代码：萌萌的新</h2>
          <h2>贴图&动画：？</h2>
        </div>
        <div class="notes">
          <p>*该模组内容更倾向于多人长期档。</p>
          <p>*请确保对于原版拥有一定的理解与熟练度，以此获得更好的游玩体验。</p>
          <p>*作者的创意工坊介绍页：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3459656651">[明日方舟] 星极&星源</a></p>
          <p>*作者的模组介绍页：<a href="https://www.bilibili.com/opus/1052962188157779987">饥荒联机版MOD介绍——星极&星源</a></p>
          <p>*该页面仍有不少错误，欢迎指正。</p>
        </div>
      </header>

      <hr/>

      <section class="characters">
        <h4>模组角色</h4>
        <div class="character-list">
          <router-link to="/astesia-astgenne/astesia" class="character-link">
            <div class="character">
              <img src="@/assets/astesia-astgenne/astesia_none2.webp" alt="星极立绘" width="200px"><br/>
              <img src="@/assets/astesia-astgenne/names_astesia.webp" alt="星极名字" width="200px">
            </div>
          </router-link>
          <router-link to="/astesia-astgenne/astgenne" class="character-link">
            <div class="character">
              <img src="@/assets/astesia-astgenne/astgenne_none2.webp" alt="星源立绘" width="200px"><br/>
              <img src="@/assets/astesia-astgenne/names_astgenne.webp" alt="星源名字" width="200px">
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
                <td><router-link to="/astesia-astgenne/items/ast_truth"><img src="@/assets/astesia-astgenne/ast_truth.webp" alt="“真理”" width="60px"><br/>“真理”</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_understar"><img src="@/assets/astesia-astgenne/ast_understar_inactive.webp" alt="“同一片星空下”" width="60px"><br/>“同一片星空下”</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_d32steel"><img src="@/assets/astesia-astgenne/ast_d32steel.webp" alt="D32钢" width="60px"><br/>D32钢</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_starkit"><img src="@/assets/astesia-astgenne/ast_starkit.webp" alt="星空修补套件" width="60px"><br/>星空修补套件</router-link></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td><router-link to="/astesia-astgenne/items/astesia_hat"><img src="@/assets/astesia-astgenne/astesia_hat.webp" alt="探索者之愿" width="60px"><br/>探索者之愿</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astesia_armor"><img src="@/assets/astesia-astgenne/astesia_armor.webp" alt="探索者之星" width="60px"><br/>探索者之星</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astesia_sword3"><img src="@/assets/astesia-astgenne/astesia_sword3.webp" alt="祷告星辰之语" width="60px"><br/>祷告星辰之语</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astesia_sword2"><img src="@/assets/astesia-astgenne/astesia_sword2.webp" alt="残响星辰之语" width="60px"><br/>残响星辰之语</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astesia_sword1"><img src="@/assets/astesia-astgenne/astesia_sword1.webp" alt="制式源石长剑" width="60px"><br/>制式源石长剑</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_globes"><img src="@/assets/astesia-astgenne/ast_globes.webp" alt="星象天体仪" width="60px"><br/>星象天体仪</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_box"><img src="@/assets/astesia-astgenne/ast_box.webp" alt="奇工纳物箱" width="60px"><br/>奇工纳物箱</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_bookshelf"><img src="@/assets/astesia-astgenne/ast_bookshelf.webp" alt="一体式书桌" width="60px"><br/>一体式书桌</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/ast_penandbottle"><img src="@/assets/astesia-astgenne/ast_penandbottle.webp" alt="描绘星空之羽" width="60px"><br/>描绘星空之羽</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_starfeather"><img src="@/assets/astesia-astgenne/ast_starfeather.webp" alt="星之羽" width="60px"><br/>星之羽</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_flavor"><img src="@/assets/astesia-astgenne/ast_book_flavor.webp" alt="群星·随想曲" width="60px"><br/>群星·随想曲</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_map"><img src="@/assets/astesia-astgenne/ast_book_map.webp" alt="群星·幻想曲" width="60px"><br/>群星·幻想曲</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_moon"><img src="@/assets/astesia-astgenne/ast_book_moon.webp" alt="群星·变奏曲" width="60px"><br/>群星·变奏曲</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_pick"><img src="@/assets/astesia-astgenne/ast_book_pick.webp" alt="群星·练习曲" width="60px"><br/>群星·练习曲</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_rebirth"><img src="@/assets/astesia-astgenne/ast_book_rebirth.webp" alt="群星·颂扬曲" width="60px"><br/>群星·颂扬曲</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_book_speed"><img src="@/assets/astesia-astgenne/ast_book_speed.webp" alt="群星·圆舞曲" width="60px"><br/>群星·圆舞曲</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books1_astesia"><img src="@/assets/astesia-astgenne/ast_elite_books1.webp" alt="一级晋升凭证【星极】" width="60px"><br/>一级晋升凭证【星极】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books2_astesia"><img src="@/assets/astesia-astgenne/ast_elite_books2.webp" alt="二级晋升凭证【星极】" width="60px"><br/>二级晋升凭证【星极】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books3_astesia"><img src="@/assets/astesia-astgenne/ast_elite_books3.webp" alt="三级晋升凭证【星极】" width="60px"><br/>三级晋升凭证【星极】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books1_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books1.webp" alt="技巧概要·卷1【星座守护】" width="60px"><br/>技巧概要·卷1【星座守护】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books1_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books1.webp" alt="技巧概要·卷1【星辉剑】" width="60px"><br/>技巧概要·卷1【星辉剑】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books2_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books2.webp" alt="技巧概要·卷2【星座守护】" width="60px"><br/>技巧概要·卷2【星座守护】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books2_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books2.webp" alt="技巧概要·卷2【星辉剑】" width="60px"><br/>技巧概要·卷2【星辉剑】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books3_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books3.webp" alt="技巧概要·卷3【星座守护】" width="60px"><br/>技巧概要·卷3【星座守护】</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books3_astesia"><img src="@/assets/astesia-astgenne/ast_skill_books3.webp" alt="技巧概要·卷3【星辉剑】" width="60px"><br/>技巧概要·卷3【星辉剑】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_badge_astesia"><img src="@/assets/astesia-astgenne/ast_badge_astesia.webp" alt="星极证章" width="60px"><br/>星极证章</router-link></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/astgenne_hat"><img src="@/assets/astesia-astgenne/astgenne_hat.webp" alt="科研者之愿" width="60px"><br/>科研者之愿</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_armor"><img src="@/assets/astesia-astgenne/astgenne_armor.webp" alt="科研者之星" width="60px"><br/>科研者之星</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_wand3"><img src="@/assets/astesia-astgenne/astgenne_wand3.webp" alt="昭示星光之愿" width="60px"><br/>昭示星光之愿</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_wand2"><img src="@/assets/astesia-astgenne/astgenne_wand2.webp" alt="残缺星光之愿" width="60px"><br/>残缺星光之愿</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_wand1"><img src="@/assets/astesia-astgenne/astgenne_wand1.webp" alt="制式源石短杖" width="60px"><br/>制式源石短杖</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_wings"><img src="@/assets/astesia-astgenne/astgenne_wings.webp" alt="翱翔星海之翼" width="60px"><br/>翱翔星海之翼</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_base"><img src="@/assets/astesia-astgenne/ast_base.webp" alt="微星投影仪" width="60px"><br/>微星投影仪</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_rack"><img src="@/assets/astesia-astgenne/ast_rack.webp" alt="实验操作台" width="60px"><br/>实验操作台</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/astgenne_bouquet"><img src="@/assets/astesia-astgenne/ast_bouquet.webp" alt="飞燕草花束" width="60px"><br/>飞燕草花束</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_swallowgrass"><img src="@/assets/astesia-astgenne/ast_swallowgrass.webp" alt="飞燕草" width="60px"><br/>飞燕草</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_potions_energy"><img src="@/assets/astesia-astgenne/ast_potions_energy.webp" alt="瓶装活力混合剂" width="60px"><br/>瓶装活力混合剂</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_potions_energy_big"><img src="@/assets/astesia-astgenne/ast_potions_energy_big.webp" alt="壶装活力混合剂" width="60px"><br/>壶装活力混合剂</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_potions_sadness"><img src="@/assets/astesia-astgenne/ast_potions_sadness.webp" alt="少许沉沦悲意" width="60px"><br/>少许沉沦悲意</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_potions_sadness_big"><img src="@/assets/astesia-astgenne/ast_potions_sadness_big.webp" alt="杯装沉沦悲意" width="60px"><br/>杯装沉沦悲意</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_bombs_husk"><img src="@/assets/astesia-astgenne/ast_bombs_husk.webp" alt="位面晶体炸弹" width="60px"><br/>位面晶体炸弹</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_bombs_purebrilliance"><img src="@/assets/astesia-astgenne/ast_bombs_purebrilliance.webp" alt="辉煌晶体炸弹" width="60px"><br/>辉煌晶体炸弹</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books1_astgenne"><img src="@/assets/astesia-astgenne/ast_elite_books1.webp" alt="一级晋升凭证【星源】" width="60px"><br/>一级晋升凭证【星源】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books2_astgenne"><img src="@/assets/astesia-astgenne/ast_elite_books2.webp" alt="二级晋升凭证【星源】" width="60px"><br/>二级晋升凭证【星源】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_elite_books3_astgenne"><img src="@/assets/astesia-astgenne/ast_elite_books3.webp" alt="三级晋升凭证【星源】" width="60px"><br/>三级晋升凭证【星源】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books1_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books1.webp" alt="技巧概要·卷1【双端导流】" width="60px"><br/>技巧概要·卷1【双端导流】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books1_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books1.webp" alt="技巧概要·卷1【星束交汇】" width="60px"><br/>技巧概要·卷1【星束交汇】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books2_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books2.webp" alt="技巧概要·卷2【双端导流】" width="60px"><br/>技巧概要·卷2【双端导流】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books2_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books2.webp" alt="技巧概要·卷2【星束交汇】" width="60px"><br/>技巧概要·卷2【星束交汇】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_skill1_books3_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books3.webp" alt="技巧概要·卷3【双端导流】" width="60px"><br/>技巧概要·卷3【双端导流】</router-link></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/ast_skill2_books3_astgenne"><img src="@/assets/astesia-astgenne/ast_skill_books3.webp" alt="技巧概要·卷3【星束交汇】" width="60px"><br/>技巧概要·卷3【星束交汇】</router-link></td>
                <td><router-link to="/astesia-astgenne/items/ast_badge_astesia"><img src="@/assets/astesia-astgenne/ast_badge_astesia.webp" alt="星极证章" width="60px"><br/>星极证章</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_key"><img src="@/assets/astesia-astgenne/ast_key.webp" alt="黯淡星河之钥" width="60px"><br/>黯淡星河之钥</router-link></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><router-link to="/astesia-astgenne/items/astgenne_rabbitlamp"><img src="@/assets/astesia-astgenne/ast_rabbitlamp.webp" alt="兔兔落地灯" width="60px"><br/>兔兔落地灯</router-link></td>
                <td><router-link to="/astesia-astgenne/items/astgenne_candymachine"><img src="@/assets/astesia-astgenne/ast_candymachine.webp" alt="“全是兔兔”糖果机" width="60px"><br/>“全是兔兔”糖果机</router-link></td>
                <td></td>
                <td></td>
                <td></td>
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