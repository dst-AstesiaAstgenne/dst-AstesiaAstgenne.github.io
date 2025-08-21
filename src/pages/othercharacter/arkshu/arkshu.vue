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
          <li><a href="#trait-moon-rotation">2.【春雷响，万物长】</a></li>
          <li><a href="#trait-knowledge-seek">3.【稻禾厚，顺秋收】</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#level-system">③等级与潜能系统</a>
          <span class="toggle-icon" @click.stop="toggle('level')">
            {{ open.level ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.level" class="submenu">
          <li><a href="#level-conclusion">1. 结论，精一属性</a></li>
          <li><a href="#level-conclusion2">2. 结论，精二属性</a></li>
          <li><a href="#level-conclusion3">3. 潜能升级</a></li>
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
          <li><a href="#ember">1.第一天赋·百谷长青</a></li>
          <li><a href="#ember-dance">2.第二天赋·天有四时</a></li>
          <li><a href="#ember-rotation">3.岁兽</a></li>
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
          <li><a href="#skill-tree">3.技能树</a></li>
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
          <li><a href="#item-design-special-item-weapon">3.专属建筑</a></li>
          <li><a href="#item-design-special-item-body">4.专属武器</a></li>
          <li><a href="#item-design-special-item-item">5.晋升物品</a></li>
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
          <li><a href="#other-mod-config">1.模组配置</a></li>
          <li><a href="#other-ui">2.UI</a></li>

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
          <router-link :to="'/othercharacter/arkshuindex/items/arkshu_weapon'" target="_blank"><img src="@/assets/othercharacter/arkshu/arkshu_weapon.webp" alt="专属武器" class="variant-image"></router-link>
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
      <li>【黍】可以<span class="color-important">制作并使用大厨厨具，烹饪大厨料理</span></li>
      <li>【黍】可以施加<span class="color-important">【庇护】</span>效果，仅可减免物理伤害，减免效果为乘算。（1%庇护提供1%伤害减免）</li>

    </ul>

    <h5 id="trait-moon-rotation">2.【春雷响，万物长】</h5>
    <ul>
      <li>制作物品时有10%的概率<span class="color-important">不消耗材料</span>。</li>
      <li>【精二之后升级，制作物品时有15%的概率<span class="color-important">不消耗材料</span>】</li>
    </ul>

    <h5 id="trait-knowledge-seek">3.【稻禾厚，顺秋收】</h5>
    <p>*精英二解锁</p>
    <ul>
      <li>黍在每次与农作物对话时，同时对话以被对话植物为中心半径为5内所有的植物，使植物<span class="color-important">压力值减一</span>，并使农作物的<span class="color-important">成长时间减少20%</span>。</li>

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
      <li>2级潜能使【黍】的所有技能减少<span class="color-important">1秒的冷却时间</span></li>
      <li>3级潜能使【黍】的生命值上限增加<span class="color-important">30点</span></li>
      <li>4级潜能使【黍】的攻击力增加<span class="color-important">25点</span></li>
      <li>5级潜能使【黍】的第一天赋·百谷长青效果增强</li>
      <li>6级潜能使【黍】的所有技能减少<span class="color-important">1秒的冷却时间</span></li>
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
      <li>联机角色每多一位，【黍】的<span class="color-important">生命值上限加10【最多30】</span>，并<span class="color-important">增加10点攻击力和20%的工作效率【最多叠加三层】</span>。</li>
      <li>存在4名岁家角色时，每<span class="color-important">3秒获得1点技力</span>（重岳、令（暂未实装）、年（暂未实装）、夕）</li>
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
          <td>20秒【一级】
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

    <h5 id="skill-tree">3.技能树</h5>
    <h6 style="color: #007acc;">一分叉</h6>
    <table class="level-system-table">
      <thead>
        <tr>
          <th>技能树图标与名称</th>
          <th>效果描述</th>
          <th>前置节点</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shengeng.webp" alt="深耕" width="40px"><br>深耕</td>
          <td>【黍】在给农田浇水时可以直接使水分到达满值。
          </td>
          <td></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shuoguo.webp" alt="硕果" width="40px"><br>硕果</td>
          <td>【黍】种植的农作物可以额外产出1个果实和2个种子。<br>
            【黍】种植的普通种子没有额外产出。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shengeng.webp" alt="深耕" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_fengrao.webp" alt="丰饶" width="40px"><br>丰饶</td>
          <td>【黍】种植的农作物不会受到【家族】效应影响。<br>
            但仍然会收到【拥挤】效应影响。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shuoguo.webp" alt="硕果" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_fengshou.webp" alt="丰收" width="40px"><br>丰收</td>
          <td>【黍】种植的农作物再额外产出2个果实和3个种子。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_fengrao.webp" alt="丰饶" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_hexiameng.webp" alt="禾下梦" width="40px"><br>禾下梦</td>
          <td>【黍】种植的农作物不会受到【季节】效应影响。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_fengshou.webp" alt="丰收" width="40px"></td>
        </tr>

      </tbody>
    </table>

    <h6 style="color: #007acc;">二分叉</h6>
    <table class="level-system-table">
      <thead>
        <tr>
          <th>技能树图标与名称</th>
          <th>效果描述</th>
          <th>前置节点</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chun.webp" alt="春" width="40px"><br>春</td>
          <td>友方生命值低于60%时，【黍】对其技能治疗效果提高30%（乘算）。
          </td>
          <td></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_xia.webp" alt="夏" width="40px"><br>夏</td>
          <td>【黍】的攻击与技能恢复友方生命后，会获得5点额外伤害加成（最高30点），每次触发刷新效果持续时间，效果持续10秒。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chun.webp" alt="春" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_qiu.webp" alt="秋" width="40px"><br>秋</td>
          <td>【黍】治疗角色时，为角色提高2%的庇护【2%减伤】（最高20%庇护），每次触发刷新效果持续时间，效果持续10秒。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_xia.webp" alt="夏" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_dong.webp" alt="冬" width="40px"><br>冬</td>
          <td>在【黍】播种范围内的角色每秒额外回复2点生命值并额外提高5%庇护【5%减伤】。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_qiu.webp" alt="秋" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_wanwu.webp" alt="万物" width="40px"><br>万物</td>
          <td>【黍】的生命值上限提高60点，每次技能回血提高自身最大生命值15%的治疗量。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_dong.webp" alt="冬" width="40px"></td>
        </tr>

      </tbody>
    </table>

    <h6 style="color: #007acc;">三分叉</h6>
    <table class="level-system-table">
      <thead>
        <tr>
          <th>技能树图标与名称</th>
          <th>效果描述</th>
          <th>前置节点</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_hua.webp" alt="画" width="40px"><br>画</td>
          <td>【黍】可以右键玩家鬼魂，消耗50点生命值使其无惩罚复活。
          </td>
          <td></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_hu.webp" alt="护" width="40px"><br>护</td>
          <td>被【画】复活的角色在15秒内获得一个可以抵抗3次攻击的护盾（免疫受击硬直，不免疫击飞）。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_hua.webp" alt="画" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jiu.webp" alt="酒" width="40px"><br>酒</td>
          <td>【黍】每次攻击或治疗一次队友后，提高自身0.02的攻击倍率（最高0.2），每次触发刷新效果持续时间，效果持续10秒。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_hu.webp" alt="护" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_wu.webp" alt="武" width="40px"><br>武</td>
          <td>【黍】每次攻击后，提高自身3点额外伤害（最高30点），每次触发刷新效果持续时间，效果持续10秒。<br>
            【黍】每攻击4下减少所有技能1秒的冷却时间。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jiu.webp" alt="酒" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_sheng.webp" alt="生" width="40px"><br>生</td>
          <td>【黍】半径15内友方角色（包括【黍】）生命值由15%以上下降至15%以下时，使其受到的治疗效果提高80%，持续10秒。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_wu.webp" alt="武" width="40px"></td>
        </tr>

      </tbody>
    </table>

    <h6 style="color: #007acc;">四分叉</h6>
    <table class="level-system-table">
      <thead>
        <tr>
          <th>技能树图标与名称</th>
          <th>效果描述</th>
          <th>前置节点</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_nian.webp" alt="年的小火锅" width="40px"><br>年的小火锅</td>
          <td>【黍】可以制作【年的小火锅】。
          </td>
          <td></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_xi.webp" alt="夕的小笔杆" width="40px"><br>夕的小笔杆</td>
          <td>【黍】可以制作【夕的小笔杆】。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_nian.webp" alt="年的小火锅" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chongyue.webp" alt="重岳的剑台" width="40px"><br>重岳的剑台</td>
          <td>【黍】可以制作【剑台】。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_xi.webp" alt="夕的小笔杆" width="40px"></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_ling.webp" alt="令的小酒壶" width="40px"><br>令的小酒壶</td>
          <td>【黍】可以制作【令的小酒壶】。
          </td>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chongyue.webp" alt="重岳的剑台" width="40px"></td>
        </tr>

      </tbody>
    </table>

    <h6 style="color: #007acc;">亲和分叉</h6>
    <table class="level-system-table">
      <thead>
        <tr>
          <th>技能树图标与名称</th>
          <th>效果描述</th>
          <th>前置节点</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_yueliang.webp" alt="月亮亲和" width="40px"><br>月亮亲和</td>
          <td>【黍】对月亮生物造成的伤害提高10%，受到月亮生物伤害减少10%。
          </td>
          <td></td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_yinying.webp" alt="暗影亲和" width="40px"><br>暗影亲和</td>
          <td>【黍】对暗影生物造成的伤害提高10%，受到暗影生物伤害减少10%。
          </td>
          <td></td>
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

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_yitie.webp" alt="异铁" width="40px"><br>异铁</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
              <span class="color-important">说明-获取方式</span><br>
              挖掘【原版矿石】的时候有10%的概率掉落
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_yitiezu.webp" alt="异铁组" width="40px"><br>异铁组</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①异铁*4
          </td>
          <td>
              ///
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_yanmoshi.webp" alt="研磨石" width="40px"><br>研磨石</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
              <span class="color-important">说明-获取方式</span><br>
              挖掘【原版矿石】的时候有10%的概率掉落
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_quanxinzhuangzhi.webp" alt="全新装置" width="40px"><br>全新装置</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①齿轮*2
          </td>
          <td>
              ///
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chihejin.webp" alt="炽合金" width="40px"><br>炽合金</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            <span class="color-important">说明-获取方式</span><br>
            ①发条骑士，发条主教，损坏的发条骑士，损坏的发条主教有10%概率掉落<br>
            ②发条战车，损坏的发条战车有20%概率掉落<br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_chihejinkuai.webp" alt="炽合金块" width="40px"><br>炽合金块</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①全新装置*1
            <br>②炽合金*1
            <br>③研磨石*1
          </td>
          <td>
              ///
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingtidianlu.webp" alt="晶体电路" width="40px"><br>晶体电路</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①电子元件*4
          </td>
          <td>
            <span class="color-important">说明-其他获取方式</span><br>
            ①发条骑士，发条主教，损坏的发条骑士，损坏的发条主教有10%概率掉落<br>
            ②发条战车，损坏的发条战车有20%概率掉落
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_ningjiao.webp" alt="凝胶" width="40px"><br>凝胶</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            <span class="color-important">说明-获取方式</span><br>
            击杀水性生物获得【青蛙&明眼青蛙5%，触手10%，水獭10%，水獭掠夺者窝点100%】
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_juheningjiao.webp" alt="聚合凝胶" width="40px"><br>聚合凝胶</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①凝胶*1
            <br>②炽合金*1
            <br>③异铁组*1
          </td>
          <td>
            ///
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shujuzengbukuai.webp" alt="数据增补块" width="40px"><br>数据增补块</td>
          <td>物品/材料</td>
          <td>灵子分解器</td>
          <td>①金块*5<br>
              ②齿轮*1
          </td>
          <td>
              *一次性制作5个
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_shujuzengbuyi.webp" alt="数据增补仪" width="40px"><br>数据增补仪</td>
          <td>物品/材料</td>
          <td>灵子分解器</td>
          <td>①金块*10<br>
              ②齿轮*1
          </td>
          <td>
              *一次性制作5个
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_mozushujukuai.webp" alt="模组数据块" width="40px"><br>模组数据块</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①金块*10
            <br>②硝石*10
            <br>③齿轮*1
          </td>
          <td>
            <span class="color-important">【高级材料】</span><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingtidianzidanyuan.webp" alt="晶体电子单元" width="40px"><br>晶体电子单元</td>
          <td>物品/材料</td>
          <td>炼金引擎</td>
          <td>①晶体电路*5
            <br>②聚合凝胶*5
            <br>③炽合金块*5
          </td>
          <td>
            <span class="color-important">【高级材料】</span><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_d32.webp" alt="D32钢" width="40px"><br>D32钢</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            <span class="color-important">【高级材料】</span><br><br>
            <span class="color-important">说明-获取方式</span><br>
            ①与猪王兑换金子时有5%概率获得<br>
            【每兑换50次，随机获得一个高级材料】<br>
            ②击杀季节boss和区域boss必掉高级材料中的其中1个
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_juheji.webp" alt="聚合剂" width="40px"><br>聚合剂</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            <span class="color-important">【高级材料】</span><br><br>
            <span class="color-important">说明-获取方式</span><br>
            ①与猪王兑换金子时有5%概率获得<br>
            【每兑换50次，随机获得一个高级材料】<br>
            ②击杀季节boss和区域boss必掉高级材料中的其中1个
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_qnsp.webp" alt="潜能碎片" width="40px"><br>潜能碎片</td>
          <td>物品/材料</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>
            用于制作<span class="color-important">【潜能印记】</span><br><br>
            <span class="color-important">说明-获取方式</span><br>
            仅【黍】在进行【击杀怪物】【采集】【播种】时有4%的概率获得
          </td>
        </tr>

      </tbody>

    </table>

    <h6>E.【D32钢】与【聚合剂】掉落部分说明</h6>
    <ul>
      <li>
        可获取【D32钢】与【聚合剂】的boss包括：<br>
        【麋鹿鹅】【蚁狮】【熊獾】【装甲熊獾】【独眼巨鹿】【晶体独眼巨鹿】【附身座狼】<br>
        【龙蝇】【蜂后】【克劳斯】【恐惧之眼】【激光眼】【魔焰眼】【大霜鲨】【邪天翁】【帝王蟹】【天体英雄】【拾荒疯猪】<br>
        【毒菌蟾蜍】【悲惨的毒菌蟾蜍】【远古织影者】【梦魇疯猪】
      </li>
    </ul>

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
          <td><img src="@/assets/othercharacter/arkshu/arkshu_qn.webp" alt="潜能印记" width="40px"><br>潜能印记</td>
          <td>物品/功能</td>
          <td>炼金引擎</td>
          <td>①潜能碎片*20
          </td>
          <td><span class="color-important">用来提升潜能</span><br>
            <a href="./arkshu#level-conclusion3">具体潜能点击这里</a>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_mozu.webp" alt="钦天司时Lv1" width="40px"><br>钦天司时Lv1</td>
          <td>物品/功能</td>
          <td>暗影操控器<br>&角色精英二</td>
          <td>①模组数据块*4<br>
            ②晶体电子单元*2<br>
            ③金块*30<br>
            ④噩梦燃料*20<br>
          </td>
          <td><span class="color-important">【模组装在武器上】</span><br>
            治疗生命值低于50%的友方单位时治疗量提升<span class="color-important">15%</span><br>
            生命值上限提高16，理智值上限提高3，攻击力提高3<br><br>
            天赋强化：治疗角色时使其如下效果：每秒恢复<span class="color-important">6点生命值</span>、获得<span class="color-important">12%庇护</span>【持续3秒】<br>
            潜能提升至5后效果：治疗角色时使其如下效果：每秒恢复<span class="color-important">6.5点生命值</span>、获得<span class="color-important">14%庇护</span>【持续3秒】<br>

          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_mozu1.webp" alt="钦天司时Lv2" width="40px"><br>钦天司时Lv2</td>
          <td>物品/功能</td>
          <td>暗影操控器<br>&角色已解锁【钦天司时Lv1】</td>
          <td>①模组数据块*4<br>
            ②数据增补条*60<br>
            ③D32钢*3<br>
            ④金块*40<br>
          </td>
          <td><span class="color-important">【模组装在武器上】</span><br>
            治疗生命值低于50%的友方单位时治疗量提升<span class="color-important">15%</span><br>
            生命值上限提高16，理智值上限提高3，攻击力提高3<br><br>
            天赋强化：治疗角色时使其如下效果：每秒恢复<span class="color-important">7点生命值</span>、获得<span class="color-important">15%庇护</span>【持续3秒】<br>
            潜能提升至5后效果：治疗角色时使其如下效果：每秒恢复<span class="color-important">7.5点生命值</span>、获得<span class="color-important">17%庇护</span>【持续3秒】<br>

          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_mozu2.webp" alt="钦天司时Lv3" width="40px"><br>钦天司时Lv3</td>
          <td>物品/功能</td>
          <td>暗影操控器<br>&角色已解锁【钦天司时Lv2】</td>
          <td>①模组数据块*4<br>
            ②数据增补仪*20<br>
            ③聚合剂*4<br>
            ④金块*50<br>
          </td>
          <td><span class="color-important">【模组装在武器上】</span><br>
            治疗生命值低于50%的友方单位时治疗量提升<span class="color-important">30%</span><br>
            生命值上限提高16，理智值上限提高3，攻击力提高3<br><br>
            天赋强化：治疗角色时使其如下效果：每秒恢复<span class="color-important">8点生命值</span>、获得<span class="color-important">19%庇护</span>【持续3秒】<br>
            潜能提升至5后效果：治疗角色时使其如下效果：每秒恢复<span class="color-important">8.5点生命值</span>、获得<span class="color-important">21%庇护</span>【持续3秒】<br>

          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jinengshu.webp" alt="技能升级书" width="40px"><br>技能升级书</td>
          <td>物品/功能</td>
          <td>灵子分解器</td>
          <td>①莎草纸*3<br>
            ②噩梦燃料*10<br>
            ③黑色羽毛*5
          </td>
          <td>每个技能书可以提升一级
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu0.webp" alt="基础作战记录" width="40px"><br>基础作战记录</td>
          <td>物品/功能</td>
          <td>无法解锁</td>
          <td>无法制作
          </td>
          <td>使用后攻击力增加<span class="color-important">5%</span>，速度增加<span class="color-important">5%</span>，持续1分钟<br><br>

            <span class="color-important">说明-获取方式</span><br>
            ①击杀生物有10%概率获得
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu1.webp" alt="初级作战记录" width="40px"><br>初级作战记录</td>
          <td>物品/功能</td>
          <td>灵子分解器</td>
          <td>①基础作战记录*3
          </td>
          <td>使用后攻击力增加<span class="color-important">10%</span>，速度增加<span class="color-important">10%</span>，持续1分钟<br><br>

            <span class="color-important">说明-其他获取方式</span><br>
            ①击杀生物有7%概率获得
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu2.webp" alt="中级作战记录" width="40px"><br>中级作战记录</td>
          <td>物品/功能</td>
          <td>灵子分解器</td>
          <td>①初级作战记录*4
          </td>
          <td>使用后攻击力增加<span class="color-important">15%</span>，速度增加<span class="color-important">15%</span>，持续1分钟<br><br>

            <span class="color-important">说明-其他获取方式</span><br>
            ①击杀生物有5%概率获得
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingyanshu3.webp" alt="高级作战记录" width="40px"><br>高级作战记录</td>
          <td>物品/功能</td>
          <td>灵子分解器</td>
          <td>①中级作战记录*4
          </td>
          <td>使用后攻击力增加<span class="color-important">20%</span>，速度增加<span class="color-important">20%</span>，持续1分钟<br><br>

            <span class="color-important">说明-其他获取方式</span><br>
            ①击杀生物有1%概率获得
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_guo_item.webp" alt="年的小火锅" width="40px"><br>年的小火锅</td>
          <td>物品/烹饪</td>
          <td>技能点【年的小火锅】</td>
          <td>①电子元件*1
            <br>②木炭*3
            <br>③石砖*3
          </td>
          <td>可以随时放置/收起，拥有4格可放入肉类/素类食物的储物格。<br>
            放入后点击【制作】按钮，10秒后烹饪完毕，每个烹饪好的火锅可以食用4次。<br><br>

            <span class="color-important">说明-基础特性</span><br>
            根据肉类与素类食物比重不同，回复的属性也不同：<br>
            ①肉类占多时，每次食用回复<span class="color-important">20点</span>饱食度，<span class="color-important">5点</span>理智值，<span class="color-important">5点</span>生命值<br>
            ②素类占多时，每次食用回复<span class="color-important">10点</span>饱食度，<span class="color-important">5点</span>理智值，<span class="color-important">20点</span>生命值<br>
            ③肉类素类各占一半时，每次食用回复<span class="color-important">10点</span>饱食度，<span class="color-important">10点</span>理智值，<span class="color-important">10点</span>生命值
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_bi.webp" alt="夕的小笔杆" width="40px"><br>夕的小笔杆</td>
          <td>装备/手部</td>
          <td>技能点【夕的小笔杆】</td>
          <td>①羽毛笔*2
            <br>②莎草纸*1
          </td>
          <td>右键地图已探索位置，消耗【夕的小笔杆】，开启一个持续10秒的时空裂隙。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jiuhu.webp" alt="令的小酒壶" width="40px"><br>令的小酒壶</td>
          <td>物品</td>
          <td>技能点【令的小酒壶】</td>
          <td>①木头*6
            <br>②绳子*2
          </td>
          <td>可放入蔬菜，水果和冰进行酿造，酿成酒液存储在壶中，每次酝酿的酒可饮用5次。<br>
            可喂给他人饮用。<br><br>

            <span class="color-important">说明-基础特性</span><br>
            根据酿酒配方提供不同的buff：<br>
            ①蔬菜*2、冰*2：额外造成10点物理攻击，攻击倍率*1.15，移速*1.05，持续3分钟
            <br>②水果*2、冰*2：额外造成15点物理攻击，移速*1.15，持续3分钟

          </td>
        </tr>

        
      </tbody>

    </table>

    <h5 id="item-design-special-item-weapon">3.专属建筑</h5>
    <table class="other-system-table">
      <thead>
        <tr>
          <th>建筑图标与名称</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

      <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_quanjidai.webp" alt="剑台" width="40px"><br>剑台</td>
          <td>技能点【重岳的剑台】</td>
          <td>①采下的草*5
            <br>②猪皮*2
            <br>③大理石*2
          </td>
          <td>
            在以【剑台】为中心半径15范围内，【黍】每4s减少所有技能1秒的cd，最多只生效一个
          </td>
        </tr>
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
        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_weapon.webp" alt="怀离剑" width="40px"><br>怀离剑</td>
          <td>装备/手部</td>
          <td>初始解锁</td>
          <td>①生命值*30
          </td>
          <td>
            物理攻击力60，位面防御30，无耐久<br>
            装备时可用作3*3的园艺锄<br>
            拥有一个储物栏，可以放入【模组】<br><br>
            黍持有时自身获得30%的庇护(30%的免伤)
            <br>其他角色无法持有<br><br>
            
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
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingyishu.webp" alt="精英化一【书籍】" width="40px"><br>精英化一【书籍】</td>

          <td>物品/功能</td>
          <td>炼金引擎</td>
          <td>①莎草纸*12<br>
              ②黑色羽毛*12<br>
              ③金块*12<br>
              ④绿宝石*1
          </td>
          <td>*仅【黍】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至1<br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/arkshu/arkshu_jingershu.webp" alt="精英化二【书籍】" width="40px"><br>精英化二【书籍】</td>

          <td>物品/功能</td>
          <td>暗影操控器</td>
          <td>①莎草纸*15<br>
              ②黑色羽毛*24<br>
              ③金块*30<br>
              ④晶体电子单元*3
              <br>⑤彩虹宝石*1
          </td>
          <td>*仅【黍】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至2<br>
          </td>
        </tr>

      </tbody>

    </table>

    <h4 id="other-matters">⑦其余事项</h4>
    <h5 id="other-mod-config">1.模组配置</h5>
    <ul>
      <li>按键设置：<br>
          嘉禾盈仓键位设置<br>
          离离枯荣键位设置<br>
      </li>
      <li>游戏性配置：<br>
          化被草木受击自动触发<br>
      </li>
    </ul>

    <h5 id="other-ui">2.UI</h5>
    <ul>
      <li>
        【黍】的潜能和技能均可右键拖动位置。
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
