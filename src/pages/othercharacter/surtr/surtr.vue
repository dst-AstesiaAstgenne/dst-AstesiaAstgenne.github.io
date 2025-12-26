<template>


<body>
  <navigation />
  <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
  <aside class="sidebar" :class="{ active: isSidebarActive }">
    <h3>目录</h3>
    <ul>
      <li><a href="#basic-attributes">①基础属性</a></li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#character-traits">②人物特性</a>
          <!-- 只在图标上绑定点击事件 -->
          <span class="toggle-icon" @click.stop="toggle('traits')">
            {{ open.traits ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.traits" class="submenu">
          <li><a href="#trait-star-dance">1.初始特性</a></li>
          <li><a href="#trait-moon-rotation">2.精一特性</a></li>
          <li><a href="#trait-knowledge-seek">3.精二特性</a></li>
          <li><a href="#trait-water-fish">4.水煮鱼</a></li>
          <li><a href="#trait-burn">5.预熏烤</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#level-system">③等级系统</a>
          <span class="toggle-icon" @click.stop="toggle('level')">
            {{ open.level ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.level" class="submenu">
          <li><a href="#level-conclusion">1. 结论，精一属性</a></li>
          <li><a href="#level-conclusion2">2. 结论，精二属性</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#talent-system">④天赋系统</a>
          <span class="toggle-icon" @click.stop="toggle('talent')">
            {{ open.talent ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.talent" class="submenu">
          <li><a href="#ember">1.余烬</a></li>
          <li><a href="#ember-dance">2.灼热的回忆</a></li>
          <li><a href="#ember-rotation">3.绝烬重燃</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#skill-system">⑤技能系统</a>
          <span class="toggle-icon" @click.stop="toggle('skill')">
            {{ open.skill ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.skill" class="submenu">
          <li><a href="#skill-introduction">1.技能基础说明</a></li>
          <li><a href="#skill-special">2.技能专精/共鸣效果</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#item-design">⑥物品设计/制作</a>
          <span class="toggle-icon" @click.stop="toggle('item')">
            {{ open.item ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.item" class="submenu">
          <li><a href="#item-design-material">1.专属材料</a></li>
          <li><a href="#item-design-special-item">2.专属物品</a></li>
          <li><a href="#item-design-special-item-weapon">3.专属武器</a></li>
          <li><a href="#item-design-special-item-body">4.专属身体装备</a></li>
          <li><a href="#item-design-special-item-item">5.晋升物品</a></li>
          <li><a href="#item-design-special-item-recipe">6.专属料理</a></li>
          <li><a href="#item-design-special-item-other">7.其余特殊物品</a></li>
          <li><a href="#item-design-new-recipe">8.新增专属原版配方</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#other-matters">⑦其余事项</a>
          <span class="toggle-icon" @click.stop="toggle('other')">
            {{ open.other ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.other" class="submenu">
          <li><a href="#other-original-change">1.原版改动</a></li>
          <li><a href="#other-mod-config">2.模组配置</a></li>
          <li><a href="#other-mod-compatibility">3.模组兼容</a></li>
        </ul>
      </li>
    </ul>
  </aside>

  <main>
    <h1>史尔特尔</h1>
    <p>史尔特尔 是一位擅长近战与输出的角色，同时有一定的抗伤能力，拥有晋升系统。</p>
    <div class="character-showcase"> 
      <div class="main-portrait">
        <img src="@/assets/othercharacter/surtr/surtr_none.webp" alt="史尔特尔立绘" class="character-image">
        <div class="character-title">立绘</div>
      </div>
      
      <div class="variants">
        <div class="variant-item">
          <img src="@/assets/othercharacter/surtr/avatar_surtr.webp" alt="史尔特尔头像" class="variant-image">
          <div class="variant-label">头像</div>
        </div>
        
        <div class="variant-item">
          <img src="@/assets/othercharacter/surtr/avatar_ghost_surtr.webp" alt="灵魂形态" class="variant-image">
          <div class="variant-label">灵魂</div>
        </div>

        <div class="variant-item">
          <router-link :to="'/othercharacter/surtrindex/items/surtrclothes'" target="_blank"><img src="@/assets/othercharacter/surtr/surtrclothes.webp" alt="史尔特尔衣服" class="variant-image"></router-link>
          <div class="variant-label">衣服</div>
        </div>

        <div class="variant-item">
          <router-link :to="'/othercharacter/surtrindex/items/laevatain'" target="_blank"><img src="@/assets/othercharacter/surtr/laevatain.webp" alt="专属饰品" class="variant-image"></router-link>
          <div class="variant-label">武器</div>
        </div>
      </div>
    </div>

    <hr>

    <h4 id="basic-attributes">①基础属性</h4>
    <ul>
      <li><span class="color-hunger">饥饿125</span>/<span class="color-sanity">理智125</span>/<span class="color-health">血量125</span></li>
      <li>攻击系数1.0</li>
    </ul>

    <h4 id="character-traits">②人物特性</h4>
    <h5 id="trait-star-dance">1.初始特性</h5>
    <ul>
      <li>【史尔特尔】的武器不会脱手。</li>
      <li>【史尔特尔】装备的<span class="color-important">【史尔特尔服装】</span>死亡后不掉落。</li>
      <li>【史尔特尔】免疫<span class="color-important">【诅咒饰品】</span>的诅咒效果，<span class="color-important">【诅咒饰品】</span>不会自动吸附到身上。</li>
      <li>【史尔特尔】可以食用<span class="color-important">【红宝石】</span>，+10饱食度，+10理智值，+10生命值并提高5℃。</li>
      <li>【史尔特尔】落水后强制设置自身潮湿度不高于50并额外获得2<span class="color-important">【盐晶】</span>。</li>
      <li>【史尔特尔】出生自带<span class="color-important">【莱万汀】</span><span class="color-important">【史尔特尔服装】</span>。</li>
    </ul>

    <h5 id="trait-moon-rotation">2.精一特性</h5>
    <p>*精一后获得</p>
    <ul>
      <li>无羁热流：【史尔特尔】免疫减速/冻结/精神控制，经过蜘蛛网不会引出蜘蛛</li>
      <li>熔火之光：【史尔特尔】发出半径约25码的光照</li>
      <li>美食品尝：【史尔特尔】食用<span class="color-important">【冰淇淋】</span>回复20生命上限，食用<span class="color-important">【豪华冰淇淋】</span>回复200生命上限，食用降温料理和<span class="color-important">【发光浆果慕斯】</span>额外回复15点理智值</li>
      <li>迅捷身影：【史尔特尔】移速提升25%，若装备<span class="color-important">【莱万汀】</span>再获得移速加成25%</li>
    </ul>

    <h5 id="trait-knowledge-seek">3.精二特性</h5>
    <p>*精二后获得</p>
    <ul>
      <li>精准火焰：【史尔特尔】可以制作并使用大厨厨具，烹饪大厨料理</li>
      <li>无阻剑舞：【史尔特尔】移除碰撞体积，位移技能每命中一个目标回复1理智值</li>
      <li>不灭余烬：【史尔特尔】免疫击飞，免疫受伤硬直，免疫滑倒，免疫钢羊鼻涕</li>
      <li>美食品尝：【史尔特尔】食用<span class="color-important">【豪华冰淇淋】</span>额外获得3天的无仇恨和免疫睡眠效果（时长可叠加）</li>
    </ul>
    
    <h5 id="trait-water-fish">4.水煮鱼</h5>
    <ul>
      <li>【史尔特尔】可以空手右键有鱼的池塘，获得对应数量1~2倍的<span class="color-important">【烤小鱼块】</span>和0.1~0.5倍的<span class="color-important">【烤鱼块】</span>，或者1~2倍的<span class="color-important">【烤鳗鱼】</span>。</li>
      <li>精0不可以水煮鱼，精一需要80°，扣除20°，精二需要70°，扣除10°。</li>
    </ul>
    <h5 id="trait-burn">5.预熏烤</h5>
    <ul>
      <li>
        【史尔特尔】往晾肉架上放东西，根据精英化等级直接缩减50%/75%/90%的晾制时间。</li>
    </ul>

    <h6>E.【部分说明】</h6>
    <ul>
      <li>【史尔特尔】对【泥岩】造成的伤害-30%。</li>
    </ul>

    <h4 id="level-system">③等级系统</h4>

    <h5 id="level-conclusion">1. 结论，精一属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿150</span>/<span class="color-sanity">理智150</span>/<span class="color-health">血量150</span></li>
    </ul>

    <h5 id="level-conclusion2">2. 结论，精二属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿200</span>/<span class="color-sanity">理智200</span>/<span class="color-health">血量200</span></li>
    </ul>
    
    <h4 id="talent-system">④天赋系统</h4>
    <h5 id="ember">1.余烬</h5>
    <ul>
      <li>自身持有生命值下限1，损失血量超过承受能力时不死并以一定生命值上限抵扣，默认每次抵扣5点生命值上限。余烬拥有触发速率限制，默认每秒只能扣除10次上限。精一时抵扣所需为两倍。</li>
      <li>生命上限低于30%时死亡，复活时生命上限不会低于50%。（若服务器未开启生命上限惩罚，则改为获得50%常态减伤）</li>
      <li>自身使用<span class="color-important">【强心针】</span>回复的生命上限降低至固定20。</li>
    </ul>
    <h5 id="ember-dance">2.灼热的回忆</h5>
    <ul>
      <li>自身持有温度下限10°。</li>
      <li>当体温t＞50°时，根据自身温度获得加成：<br>
        获得(t-50)^2*最高倍率/1600基础攻击加成<br>
        每秒回复(t-50)^2*0.0025血量（若体温大于500则改为回满血）<br>
        每秒扣除(t-50)^2*0.000375+0.4san<br>
        每秒损失(t-50)^2*0.000625+0.2温度<br>
        在90°时达到最大：提升设置中的基础攻击倍率（可在设置中调整），每秒扣除1理智值，每秒损失1温度，每秒回复5生命值</li>
        <li>体温>80时若生命上限未满，则每2秒损失1℃并回复1生命值上限。</li><br><br>
        <span class="color-important">说明-其余设定：</span><br>
        ①倍率提升可在设置中选择最高+1/2/3/4/8五种方案。<br>
        ②选项中可配置：突破最大温度上限，将设置最大温度为9999且禁用冷热滤镜。
    </ul>
    <h5 id="ember-rotation">3.绝烬重燃</h5>
    <ul>
      <li>给予<span class="color-important">【莱万汀】</span>1个<span class="color-important">【重生护符】</span>，使<span class="color-important">【莱万汀】</span>获得作祟复活功能。</li>
      <li>如果作祟者为<span class="color-important">【史尔特尔】</span>，则清除上限惩罚并永久+20额外血量上限，最高+100，该额外效果每240s（游戏内半天）仅一次。</li>

    </ul>

    <h4 id="skill-system">⑤技能系统</h4>
    <h5 id="skill-introduction">1.技能基础说明</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>技能图标与名称</th>
          <th>解锁方式</th>
          <th>技能类型</th>
          <th>持续时间</th>
          <th>冷却需求</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td rowspan="3">史尔特尔</td>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_1_btn.webp" alt="烈焰魔剑" width="40px"><br>烈焰魔剑</td>
          <td>初始解锁</td>
          <td>自动触发</td>
          <td>瞬发</td>
          <td>两次攻击</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_2_btn.webp" alt="熔核巨影" width="40px"><br>熔核巨影</td>
          <td>达到精英等级1</td>
          <td>主动触发<br>（按键J）</td>
          <td>20秒</td>
          <td>20秒/6秒（复活后）</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_3_btn.webp" alt="黄昏" width="40px"><br>黄昏</td>
          <td>达到精英等级2</td>
          <td>主动触发<br>（按键K）</td>
          <td>无限</td>
          <td>60秒/5秒（复活后）</td>
        </tr>

      </tbody>

    </table>
      <h5 id="skill-special">2.技能效果</h5>
      <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>技能图标与名称</th>
          <th>效果描述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td rowspan="3">史尔特尔</td>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_1_btn.webp" alt="烈焰魔剑" width="40px"><br>烈焰魔剑</td>
          <td>装备莱万汀才能恢复技力和触发，下次攻击提升至300%倍率，并提高自身体温4°。</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_2_btn.webp" alt="熔核巨影" width="40px"><br>熔核巨影</td>
          <td>装备莱万汀才能触发，攻击倍率提升至150%，攻击范围提升至2+2（2+3伤害范围），同时攻击2个目标。</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_skill_3_btn.webp" alt="黄昏" width="40px"><br>黄昏</td>
          <td>攻击倍率提升至300%，攻击范围提升至2+4（2+5伤害范围），同时攻击4个目标，自身每秒损失血量（5+当前持续时间），且受到攻击+2°。<br>
            技能在结束后240秒重置掉血速度。在这之前重新开启都会继承掉血速度。<br>
            非3技能期间食用豪华冰淇淋立即重置掉血速度。
          </td>
        </tr>
    </tbody>
    </table>

    <h5 id="skill-special">E.【部分说明】</h5>
    <ul>
      <p>快捷键【X】开启或关闭自动召回</p>
      <li>未装备衣服或武器的情况下，并且使用x键启用了自动装备，点击技能或者开启技能（所有技能，包括点击自动触发的1技能的框）会自动装备【莱万汀】和【史尔特尔服装】。<br>
          优先级：身上=背包>地上（4800格范围）</li>
    </ul>


    <h4 id="item-design">⑥物品设计/制作</h4>
    <h5 id="item-design-material">1.专属材料</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/pureflame.webp" alt="纯粹火焰" width="40px"><br>纯粹火焰</td>
          <td>物品/材料</td>
          <td>科学机器</td>
          <td>①龙鳞*2<br>
              ②火荨麻叶*2<br>
              ③辣椒*2<br>
              ④灰烬*10
          </td>
          <td>
              可用作180s燃料<br><br>

              <span class="color-important">说明-获取方式：</span><br>
              ①击杀史诗生物有概率掉落，默认50%
          </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-special-item">2.专属物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_supericecream.webp" alt="豪华冰淇淋" width="40px"><br>豪华冰淇淋</td>
          <td>物品/功能</td>
          <td>科学机器</td>
          <td>①金块*5<br>
            ②月亮碎片*5<br>
            ③冰激凌*3<br>
            ④蜂王浆*3<br>
            ⑤蓝宝石*1
          </td>
          <td>属于好东西，保质期10天<br>
            +0饱食度，+150理智值，+150生命值<br>
            食用后降温40℃，持续8分钟<br><br>

            <span class="color-important">说明-其余设定：</span><br>
            ①大厨tag限定
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_glassseaweed.webp" alt="玻璃海苔" width="40px"><br>玻璃海苔</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①干海带叶*2<br>
              ②月亮碎片*1
          </td>
          <td>
            每次制作给予5个<br>
            属于好东西，保质期无限<br>
            +10饱食度，+10理智值，+2生命值<br>
            食用时20%概率受到10伤害（可被护甲防御抵消）
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_sxys_deerleg.webp" alt="晶肝茸髓" width="40px"><br>晶肝茸髓</td>
          <td>物品</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            1.5肉度，可入锅<br>
            +50饱食度，-25理智值，+20生命值<br><br>

            <span class="color-important">说明-获取方式：</span><br>
            ①击杀【克劳斯】掉落2个<br>
            ②击杀【独眼巨鹿】掉落1个<br>
            ③击杀【麋鹿鹅】掉落1个
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_embersurvivor_medal.webp" alt="余烬幸存者勋章" width="40px"><br>余烬幸存者勋章</td>
          <td>物品</td>
          <td>初始解锁</td>
          <td>①太阳鱼*2
            <br>②火荨麻*5
            <br>③岩浆虫牙尖*1
          </td>
          <td>
            史尔特尔直接对自己右键使用，自身永久获得+30/min的非启迪状态理智值回复，常驻被动【灼热的回忆】在70°的加成，且负面效果从70°开始计算。<br><br>

            其他角色装备在勋章栏位时，获得火焰免疫和【灼热的回忆】（不含维持温度下限），但加成上限和负面效果上限降低至55°，获得史尔特尔的部分专属配方。<br>
            <span class="color-important">说明-其余设定：</span><br>
            ①每塞入一个纯粹火焰，效果上限+1°（最多15次）<br></br>

            </br>
          </td>
        </tr>
      </tbody>

    </table>

    <h5 id="item-design-special-item-weapon">3.专属武器</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/laevatain.webp" alt="莱万汀" width="40px"><br>莱万汀</td>
          <td>装备/手部</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            攻击力40，攻击距离1<br>
            无耐久，自带光源<br>
            可以砍树，拥有当前伤害（位面+普通）*3%的效率<br>
            砍树时会将产物替换为烧熟的或者灰烬木炭等东西<br>
            使用时攻击造成5%（精一）/30%（精二）的真实伤害。<br>
            右键可以进行位移（精一解锁），无CD<br><br>

            <span class="color-important">右键已装备的莱万汀切换技能方案：</span><br>
            ①关闭施法：右键不在瞬移<br>
            ②仅位移：右键仅瞬移，不造成伤害，消耗15点理智值/5点生命值。<br>
            ③位移且伤害：右键瞬移，位移并造成5码的75%（精二则提高到150%）范围伤害，消耗15点饥饿值+15点理智值/15点生命值。<br>
            （黄昏持续期间改为消耗血量，斩击范围+2）<br><br>

            <span class="color-important">说明-基础特性：</span><br>
            ①可给予以下物品增强此装备的战斗向属性。<br>
            【红宝石】*1：1点【物理攻击力】（最多给予30个）<br>
            【红色孢子】*1：2点【物理攻击力】（最多给予5个）<br>
            【火荨麻叶】*1：1点【位面攻击力】（最多给予10个）<br>
            【纯粹火焰】*1：5点【物理攻击力】、1点【位面攻击力】（最多给予5个）<br>
            【暗影香炉】*1：5点【物理攻击力】、5点【位面攻击力】（最多给予1个）<br>
            【亮茄外壳】*1：2点【物理攻击力】、2点【位面攻击力】（最多给予5个）<br><br>

            ②可给予以下物品增强此装备的战斗向属性。（默认关闭）<br>
            【彩虹宝石】*1：0.02%目标生命值上限的【物理伤害】（最多给予5个）<br>
            【约束静电】*1：0.02%目标生命值上限的【位面伤害】（最多给予5个）<br><br>

            <span class="color-important">说明-其余设定：</span><br>
            ①其他人装备会-2血并脱手。<br>
            ②被猴子偷走会令猴子受到20伤害并脱手。<br>
            ③真实伤害转化计入物理伤害和位面伤害，吃所有加成。<br>
            ④可以砍翻【巨荒蜈】<br>
          </td>
        </tr>
      </tbody>

    </table>
    
    <h5 id="item-design-special-item-body">4.专属身体装备</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtrclothes.webp" alt="史尔特尔服装" width="40px"><br>史尔特尔服装</td>
          <td>装备/身体</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
              储物空间格数8<br>
              40%基础防御，无耐久<br>
              基础50%保鲜，60%防水，死亡不掉落<br><br>

              <span class="color-important">说明-基础特性：</span><br>
              ①可给予以下物品增强此装备的生存向属性。<br>
              【熊皮】：5%【保鲜】（最高95%）<br>
              【巨鹿眼球】：540%【防水】、绝缘<br>
              【弹性空间制造器】：储物空间格数变为14格<br><br>

              ②可给予以下物品增强此装备的战斗向属性。<br>
              【红宝石】*1：1%【防御】（最多给予10个）<br>
              【鳞片】*1：3%【防御】（最多给予5个）<br>
              【岩浆虫卵】*1：10%【防御】、10点【位面防御】（最多给予1个）<br>
              【骨头盔甲】*1：5%【防御】、5点【位面防御】（最多给予1个）<br>
              【暗影碎布】*1：1%【防御】、1点【位面防御】（最多给予10个）<br><br>
              
               <span class="color-important">说明-其余设定：</span><br>
              ①因为升级组件和背包冲突，部分材料请脱掉衣服再塞东西升级。<br>
              ②被猴子偷走会令猴子受到20伤害并脱手
          </td>
        </tr>
      </tbody>

    </table>

    <h5 id="item-design-special-item-item">5.晋升物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_elitebook1.webp" alt="高级资深干员训练书" width="40px"><br>高级资深干员训练书</td>

          <td>物品/功能</td>
          <td>科学机器</td>
          <td>①金块*20<br>
              ②木炭*20<br>
              ③红宝石*5<br>
              ④外壳碎片*3
          </td>
          <td>*仅【史尔特尔】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至1<br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_elitebook2.webp" alt="高级资深干员特训书" width="40px"><br>高级资深干员特训书</td>

          <td>物品/功能</td>
          <td>科学机器</td>
          <td>①金块*40<br>
              ②绝望石*5/发芽的石果*10<br>
              ③纯粹火焰*5<br>
              ④橙宝石*5
          </td>
          <td>*仅【史尔特尔】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至2<br>
          </td>
        </tr>

      </tbody>

    </table>

    <h5 id="item-design-special-item-recipe">6.专属料理</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>料理图标与名称</th>
          <th>料理类型</th>
          <th>烹饪时间</th>
          <th>食材需求</th>
          <th>料理效果</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_lavabreath.webp" alt="灼热之息" width="40px"><br>灼热之息</td>

          <td>好东西</td>
          <td>20秒</td>
          <td>①火荨麻叶<br>
              ②辣椒<br>
              ③冰<br>
              ④灰烬
          </td>
          <td>
            保质期3天<br>
            +5饱食度，0理智值，+10生命值<br>
            体温锁最低70℃，持续1分钟<br>
            <span class="color-important">说明-其余设定：</span><br>
            ①女武神不吃。<br>
            ②食用后的语音：好热……你喂我吃了什么？
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_lavakiss.webp" alt="熔岩之吻" width="40px"><br>熔岩之吻</td>

          <td>好东西</td>
          <td>20秒</td>
          <td>①火荨麻叶<br>
              ②辣椒<br>
              ③冰<br>
              ④纯粹火焰
          </td>
          <td>
            保质期60天<br>
            +5饱食度，-50理智值，-25生命值<br>
            体温锁最低80℃，持续8分钟<br>
            史尔特尔食用后直接叠加一层绝烬重燃的血量上限。<br>
            <span class="color-important">说明-其余设定：</span><br>
            ①无法喂食给他人。<br>
            ②食用后的语音：呼……呼，感觉……浑身都燥热起来……<br>
            ③非史尔特尔角色10秒后额外说语音：热死了！热死了！啊啊啊啊啊啊啊啊啊啊！
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_sxys_shutiao.webp" alt="脆肉薯条转醇" width="40px"><br>脆肉薯条转醇</td>

          <td>///</td>
          <td>///</td>
          <td>①空瓶子*1/莎草纸*1<br>
              ②炸鸟腿*1<br>
              ③生大肉*2
          </td>
          <td>
            保质期20天<br>
            +25饱食度，+25理智值，+25生命值<br>
            恢复25%已损失的饱食度，理智值和生命值<br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_sxys_shanshui.webp" alt="炎国山水原液" width="40px"><br>炎国山水原液</td>

          <td>///</td>
          <td>///</td>
          <td>①空瓶子*1/莎草纸*1<br>
              ②晶肝茸髓*1<br>
              ③肉干*2
          </td>
          <td>

            +100饱食度，+80理智值，+100生命值<br>
            增加40%攻击力，持续24分钟<br>
          </td>
        </tr>

      </tbody>

    </table>


    <h5 id="item-design-special-item-other">7.其余特殊物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/surtr/surtr_scarygrandma.webp" alt="恐怖奶奶" width="40px"><br>恐怖奶奶</td>
          <td>物品</td>
          <td>远古一本</td>
          <td>①地精奶奶*1<br>
              ②纯粹恐惧*4</td>
          <td>
              音乐播放器<br>
              给予1冰播放《亘古》<br>
              给予1噩梦燃料播放《andarsar》<br>
              给予1月岩播放《维度逃逸》<br>
              给予1化石碎片播放《主宰》<br><br>
              <span class="color-important">说明-其余设定：</span><br>
              ①拾取时解除播放（不返还物品！）
          </td>
        </tr>
      </tbody>
    </table>
    <h5 id="item-design-new-recipe">8.新增专属原版配方</h5>

   <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td>木炭</td>
          <td>初始解锁</td>
          <td>①木头*1</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>木炭*10</td>
          <td>科学机器</td>
          <td>①木头*10</td>
          <td>
            *一次性制作10个
          </td>
        </tr>

        <tr>
          <td>红宝石</td>
          <td>初始解锁</td>
          <td>①灰烬*5<br>
              ③木炭*5</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>红宝石*10</td>
          <td>科学机器</td>
          <td>①灰烬*50<br>
              ③木炭*50</td>
          <td>
            *一次性制作10个
          </td>
        </tr>

        <tr>
          <td>外壳碎片</td>
          <td>科学机器</td>
          <td>①火龙果*2</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>鳞片</td>
          <td>炼金引擎</td>
          <td>①红宝石*5<br>
              ②外壳碎片*2</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>月亮碎片*10</td>
          <td>///</td>
          <td>①砂之石*5</td>
          <td>
            *一次性制作10个
          </td>
        </tr>
        <tr>
          <td>空瓶子</td>
          <td>///</td>
          <td>①月亮碎片*4</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>活木</td>
          <td>///</td>
          <td>①木炭*2
            <br>②木板*1
            <br>③体温*5（体温需>40°）
          </td>
          <td>
            *一次性制作1个
          </td>
        </tr>
      </tbody>
    </table>

    <h4 id="other-matters">⑦其余事项</h4>
    <h5 id="other-original-change">1.原版改动</h5>
    <ul>
      <li>
        火荨麻叶/灰烬可以入锅
      </li>
      <li>莎草纸/空瓶子可以入锅，拥有1/4不可食用度</li>
    </ul>
    <h5 id="other-mod-config">2.模组配置</h5>
    <ul>
      <li>键位：<br>
          熔核巨影键位<br>
          黄昏键位<br>
          技能ui显示/隐藏键位<br>
          莱万汀自动召回开关键位<br>
      </li>
      <li>输出能力设置：<br>
        技能倍率互相计算方式<br>
        过热天赋攻击加成最高倍率<br>
        位面伤害参与技能倍率<br>
        造成真实伤害（后续合并至其他升级）<br>
        莱万汀攻击力区间<br>
      </li>
      <li>
        生存能力设置：<br>
        余烬单次扣血数值<br>
        余烬扣血速率限制<br>
        史尔特尔自身移速加成<br>
        史尔特尔武器移速加成<br>
        新界/为爽部分控制免疫<br>
      </li>
      <li>
        初始阶段设置：<br>
        初始阶段<br>
      </li>
      <li>
        其他：<br>
        纯粹火焰掉率（参与击杀史诗生物）<br>
        生息演算料理是否无新鲜值限制<br>
        语音音量大小<br>
        小彩蛋，嫌吵关掉<br>
      </li>
      <li>
        不稳定测试选项：<br>
        解除温度上限（不稳定）<br>
      </li>
    </ul>
    <h5 id="other-mod-compatibility">3.模组兼容</h5>
    <ul>
      <li>
        暂无问题。
      </li>
    </ul>

  </main>

</body>
</template>

<script setup lang="ts">
import navigation from './components/navigation.vue'

import { reactive, onMounted, watch, ref } from 'vue'


type MenuKey = 'traits' | 'level' | 'skill' | 'item' | 'other' | 'talent'


const open = reactive<Record<MenuKey, boolean>>({
  traits: false,
  level: false,
  skill: false,
  item: false,
  other: false,
  talent: false
})

function toggle(name: MenuKey) {
  open[name] = !open[name]
}

import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  scrollToHash(route.hash);
});

watch(() => route.hash, (newHash) => {
  scrollToHash(newHash);
});

function scrollToHash(hash: string) {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'instant' });
  }
}

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

watch(
  () => route.fullPath,
  () => {
    isSidebarActive.value = false
  }
)


</script>
