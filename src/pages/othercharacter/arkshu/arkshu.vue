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
    <h1>黍</h1>
    <p>黍 是一位擅长近战与辅助的角色，拥有晋升系统。</p>
    <div class="character-showcase"> 
      <div class="main-portrait">
        <img src="@/assets/othercharacter/arkshu/arkshu_none.webp" alt="黍立绘" class="character-image">
        <div class="character-title">立绘</div>
      </div>
      
      <div class="variants">
        <div class="variant-item">
          <img src="@/assets/othercharacter/arkshu/avatar_arkshu.webp" alt="黍头像" class="variant-image">
          <div class="variant-label">头像</div>
        </div>
        
        <div class="variant-item">
          <img src="@/assets/othercharacter/arkshu/avatar_ghost_arkshu.webp" alt="灵魂形态" class="variant-image">
          <div class="variant-label">灵魂</div>
        </div>

        <!-- <div class="variant-item">
          <router-link :to="'/othercharacter/surtrindex/items/surtrclothes'" target="_blank"><img src="@/assets/othercharacter/surtr/surtrclothes.webp" alt="史尔特尔衣服" class="variant-image"></router-link>
          <div class="variant-label">衣服</div>
        </div> -->

        <div class="variant-item">
          <router-link :to="'/othercharacter/surtrindex/items/laevatain'" target="_blank"><img src="@/assets/othercharacter/surtr/laevatain.webp" alt="专属饰品" class="variant-image"></router-link>
          <div class="variant-label">武器</div>
        </div>
      </div>
    </div>

    <hr>

    <h4 id="basic-attributes">①基础属性</h4>
    <ul>
      <li><span class="color-hunger">饥饿150</span>/<span class="color-sanity">理智200</span>/<span class="color-health">血量270</span></li>
      <li>基础攻击倍率1.0</li>
    </ul>

    <h4 id="character-traits">②人物特性</h4>
    <h5 id="trait-star-dance">1.初始特性</h5>
    <ul>
      <li>【黍】免疫<span class="color-important">【诅咒饰品】</span>的诅咒效果，<span class="color-important">【诅咒饰品】</span>不会自动吸附到身上。</li>
      <li>【黍】可以制作并使用大厨厨具，烹饪大厨料理</li>
      <li>【黍】可以施加【庇护】效果，仅可减免物理伤害，减免效果为乘算。</li>
    </ul>

    <h5 id="trait-moon-rotation">2.【春雷响，万物长】</h5>
    <ul>
      <li>制作物品时有10%的概率不消耗材料。</li>
      <li>【精二之后升级，制作物品时有15%的概率不消耗材料】</li>
    </ul>

    <h5 id="trait-knowledge-seek">3.【稻禾厚，顺秋收】</h5>
    <p>*精英二解锁</p>
    <ul>
      <li>黍在每次与农作物对话时，同时对话以被对话植物为中心半径为5内所有的植物，使植物压力值减一，并使农作物的成长时间减少20%。</li>
    </ul>

    <h4 id="level-system">③等级与潜能系统</h4>

    <h5 id="level-conclusion">1. 结论，精一属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿160</span>/<span class="color-sanity">理智210</span>/<span class="color-health">血量275</span></li>
      <li>基础攻击倍率1.2</li>
    </ul>

    <h5 id="level-conclusion2">2. 结论，精二属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿180</span>/<span class="color-sanity">理智230</span>/<span class="color-health">血量285</span></li>
      <li>基础攻击倍率1.5</li>
    </ul>

    <h5 id="level-conclusion3">3. 潜能升级：</h5>
    <ul>
      <li>2级潜能使【黍】的所有技能减少1秒的冷却时间</li>
      <li>3级潜能使【黍】的生命值上限增加30点</li>
      <li>4级潜能使【黍】的攻击力增加25点</li>
      <li>5级潜能使【黍】的第一天赋·百谷长青效果增强</li>
      <li>6级潜能使【黍】的所有技能减少1秒的冷却时间</li>
    </ul>
    
    <h4 id="talent-system">④天赋系统</h4>
    <h5 id="ember">1.第一天赋·百谷长青</h5>
    <p>*精英一解锁</p>
    <ul>
      <li>【黍】对自己和队友施加治疗效果的时候使其获得每秒回复<span class="color-important">2点生命值</span>并获得<span class="color-important">4%的庇护</span>【4%的减伤】【持续2秒】。</li>
      <li>拥有【五级潜能效果】的【黍】对自己和队友施加治疗效果的时候使其获得每秒回复<span class="color-important">3点生命值</span>并获得<span class="color-important">5%的庇护</span>【5%的减伤】【持续2秒】。</li>
      <li>达到【精英二】的【黍】对自己和队友施加治疗效果的时候使其获得每秒回复<span class="color-important">4点生命值</span>并获得<span class="color-important">7%的庇护</span>【7%的减伤】【持续3秒】。</li>
      <li>达到【精英二】并拥有【五级潜能效果】的【黍】对自己和队友施加治疗效果的时候使其获得每秒回复<span class="color-important">5点生命值</span>并获得<span class="color-important">10%的庇护</span>【10%的减伤】【持续3秒】。</li>

    </ul>
    <h5 id="ember-dance">2.第二天赋·天有四时</h5>
    <p>*精英二解锁</p>
    <ul>
      <li>联机角色每多一位，【黍】的生命值上限加10【最多30】，并增加10点攻击力和20%的工作效率【最多叠加三层】。</li>
      <li>存在4名岁家角色时，每3秒获得1点技力（重岳、令（暂未实装）、年（暂未实装）、夕）</li>
    </ul>
    <h5 id="ember-rotation">3.岁兽</h5>
    <ul>
      <li>【黍】不会受到怪物的<span class="color-important">【疯狂光环】</span>影响。</li>

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
          <td rowspan="3">黍</td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng1.webp" alt="化被草木" width="40px"><br>化被草木</td>
          <td>初始解锁</td>
          <td>自动触发</td>
          <td>瞬发</td>
          <td>10秒
            <br>【每升一级需要的cd减少0.5s】</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng2.webp" alt="嘉禾盈仓" width="40px"><br>嘉禾盈仓</td>
          <td>达到精英等级1</td>
          <td>主动触发<br>（按键Z）</td>
          <td>25秒</td>
          <td>40秒【一级】
            <br>35秒【四级】
            <br>30秒【七级】
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng3.webp" alt="离离枯荣" width="40px"><br>离离枯荣</td>
          <td>达到精英等级2</td>
          <td>主动触发<br>（按键X）</td>
          <td>20s【一级】
            <br>22秒【四级】
            <br>25秒【七级】
          </td>
          <td>60秒【一级】
            <br>55秒【四级】
            <br>50秒【七级】
          </td>
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
          <td rowspan="3">黍</td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng1.webp" alt="化被草木" width="40px"><br>化被草木</td>
          <td>血量50%以下之后，下次攻击可以为半径8以内自己或队友回复携带武器攻击力70%的血量（吃自身攻击倍率）【每次升级提高5%最多升级到7级】。
            <br>【一级最多储存1次，四级2次，七级3次】
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng2.webp" alt="嘉禾盈仓" width="40px"><br>嘉禾盈仓</td>
          <td>每间隔2秒，治疗以自身为中心半径8内最多2名队友【每次回复20血量每级增加2点最多升到7级】。
            <br>使自己和被治疗的队友攻击力提高10%【每级提高2%最多7级】，技能结束后加成消失。
            <br>使第一天赋效果提升1.2倍【四级提升1.3倍7级提升1.4倍】【技能结束时停止该效果】。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jineng3.webp" alt="离离枯荣" width="40px"><br>离离枯荣</td>
          <td>【展开一个半径8范围的领域】<br>
            【每次治疗回复我方角色25点血量，每级提升5点最多7级】<br>
            【在领域内的友方角色，每秒回复15点血量】<br>
            【减少30%受到的伤害】<br>
            【移动速度提升20%】<br>
            敌人离开领域区块范围时会被传送回中间区块块。【技能结束时停止该效果并移除领域】。
          </td>
        </tr>
    </tbody>
    </table>


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
        <!-- <tr>
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
        </tr> -->

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
        <!-- <tr>
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
        </tr> -->

        
      </tbody>

    </table>

    <h5 id="item-design-special-item-weapon">4.专属武器</h5>
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
        <!-- <tr>
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
            右键可以进行位移（精二解锁），无CD<br><br>

            <span class="color-important">右键已装备的莱万汀切换技能方案：</span><br>
            ①关闭施法：右键不在瞬移<br>
            ②仅位移：右键仅瞬移，不造成伤害，消耗15点理智值/5点生命值。<br>
            ③位移且伤害：右键瞬移，位移并造成5码的150%范围伤害，消耗15点饥饿值+15点理智值/15点生命值。<br>
            （黄昏持续期间改为消耗血量，斩击范围+2）<br><br>

            <span class="color-important">说明-基础特性：</span><br>
            ①可给予以下物品增强此装备的战斗向属性。<br>
            【红宝石】*1：1点【物理攻击力】（最多给予30个）<br>
            【红色孢子】*1：2点【物理攻击力】（最多给予5个）<br>
            【火荨麻叶】*1：1点【位面攻击力】（最多给予10个）<br>
            【纯粹火焰】*1：5点【物理攻击力】、1点【位面攻击力】（最多给予5个）<br>
            【暗影香炉】*1：5点【物理攻击力】、5点【位面攻击力】（最多给予1个）<br>
            【亮茄外壳】*1：2点【物理攻击力】、2点【位面攻击力】（最多给予5个）<br><br>

            <span class="color-important">说明-其余设定：</span><br>
            ①其他人装备会-2血并脱手。<br>
            ②被猴子偷走会令猴子受到20伤害并脱手<br>
            ③真实伤害转化计入物理伤害和位面伤害，吃所有加成。
          </td>
        </tr> -->
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
        <!-- <tr>
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
        </tr> -->
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
        <!-- <tr>
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
        </tr> -->

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
        <!-- <tr>
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
        </tr> -->
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
        <!-- <tr>
          <td>木炭</td>
          <td>初始解锁</td>
          <td>①木头*1</td>
          <td>
            *一次性制作1个
          </td>
        </tr> -->

        
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
