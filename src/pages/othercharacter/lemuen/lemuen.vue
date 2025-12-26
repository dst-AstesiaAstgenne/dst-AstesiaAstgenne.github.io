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
          <li><a href="#trait-knowledge-seek">3.精二特性</a></li>
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
          <li><a href="#ember">1.跨境追击许可</a></li>
          <li><a href="#ember-dance">2.逃犯引渡手续</a></li>
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
          <li><a href="#skill-special">2.技能效果</a></li>
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
          <li><a href="#item-design-special-item">1.专属物品</a></li>
          <li><a href="#item-design-special-item-weapon">2.专属武器</a></li>
          <li><a href="#item-design-special-item-item">3.晋升物品</a></li>
          <li><a href="#item-design-special-item-other">4.彩蛋物品</a></li>
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
          <li><a href="#other-mod-compatibility">2.模组兼容</a></li>
        </ul>
      </li>
    </ul>
  </aside>

  <main>
    <h1>蕾缪安</h1>
    <p>蕾缪安 是一位擅长超远程与输出的角色。</p>
    <div class="character-showcase"> 
      <div class="main-portrait">
        <img src="@/assets/othercharacter/lemuen/lemuen_none.webp" alt="蕾缪安立绘" class="character-image">
        <div class="character-title">立绘</div>
      </div>
      
      <div class="variants">
        <div class="variant-item">
          <img src="@/assets/othercharacter/lemuen/avatar_lemuen.webp" alt="蕾缪安头像" class="variant-image">
          <div class="variant-label">头像</div>
        </div>
        
        <div class="variant-item">
          <img src="@/assets/othercharacter/lemuen/avatar_ghost_lemuen.webp" alt="灵魂形态" class="variant-image">
          <div class="variant-label">灵魂</div>
        </div>

        <div class="variant-item">
          <router-link :to="'/othercharacter/lemuenindex/items/lemuen_sniper'" target="_blank"><img src="@/assets/othercharacter/lemuen/lemuen_sniper.webp" alt="专属武器" class="variant-image"></router-link>
          <div class="variant-label">武器</div>
        </div>
      </div>
    </div>

    <hr>

    <h4 id="basic-attributes">①基础属性</h4>
    <ul>
      <li><span class="color-hunger">饥饿100</span>/<span class="color-sanity">理智200</span>/<span class="color-health">血量75</span></li>
      <li>攻击系数1.0</li>
      <li>移动系数0.7</li>
      <li>工作速度0.8</li>
    </ul>

    <h4 id="character-traits">②人物特性</h4>
    <h5 id="trait-star-dance">1.初始特性</h5>
    <ul>
      <li>【蕾缪安】的<span class="color-important">制作时间</span>减少50%。</li>
      <li>【蕾缪安】移动状态时，饱食度下降加快10%。（精二移除）</li>
      <li>【蕾缪安】滑倒时<span class="color-important">扣除25点生命值</span>。（精二移除）</li>
      <li>【蕾缪安】拥有+5san/min的<span class="color-important">理智光环</span>。</li>
      <li>【蕾缪安】根据理智值百分比以自身为半径<span class="color-important">发光</span>。【蕾缪安】低于20%理智值时发光半径为2，高于80%时发光半径为6。（每20%更改一次范围）</li>
      <li>【蕾缪安】食用需要<span class="color-important">【甜度】</span>的料理时，额外回复30%的正面食物属性和10点理智值。</li>
      <li>【蕾缪安】喂食他人需要<span class="color-important">【甜度】</span>的料理时，额外回复30%的正面食物属性和10点理智值。</li>
      <li>【蕾缪安】戴有<span class="color-important">头部装备</span>时，<span class="color-important">非天体装备</span>将会根据属性值拥有以下减益：每10%防御，-1san/min（最高-10san/min），每40%防水-1san/min（最高-10san/min）。</li>
      <p>*天体装备：亮茄头盔，启迪之冠，W.A.R.B.I.S.头戴齿轮以及带“不会被月灵主动攻击”标签的装备。</p>
      <li>【蕾缪安】被击飞后爬起来的时间增加100%，但被催眠时，睡眠时长减少50%，且醒后一天内免疫睡眠。</li>
      <li>【蕾缪安】可以无视食物属性减益判定<span class="color-important">喂食他人任意食物</span>，除非目标玩家拒绝食用。</li>
      <li>【蕾缪安】角色使用【月岩雕像】时，掉落与当前精英化阶段减去默认经验花等级相符的精英化券。</li>
      <li>【蕾缪安】存在于世界时，所有敌人累计收到<span class="color-important">【拉特兰干员】10次伤害</span>后，接下来受到<span class="color-important">【拉特兰干员】</span>的物理和位面伤害增加<span class="color-important">0%</span>【精零】/<span class="color-important">15%</span>【精一】/<span class="color-important">25%</span>【精二】。</li>
    </ul>

    <h5 id="trait-knowledge-seek">2.精二特性</h5>
    <p>*精二后获得</p>
    <ul>
      <li>【蕾缪安】可以使用【便携烹饪锅】。收获配方需要甜度的料理时，50%概率收获双倍料理。</li>
    </ul>

    <h6>E.【拉特兰干员】范围说明</h6>
    <ul>
      <li>暂定【能天使】【新约能天使】【莫斯提马】【空弦】【塑心】【梵里妮】【蕾缪安】。</li>
    </ul>

    <h4 id="level-system">③等级系统</h4>

    <h5 id="level-conclusion">1. 结论，精一属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿125</span>/<span class="color-sanity">理智250</span>/<span class="color-health">血量100</span></li>
      <li>攻击系数1.25</li>
      <li>移动系数0.85</li>
      <li>工作速度1.00</li>
    </ul>

    <h5 id="level-conclusion2">2. 结论，精二属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿150</span>/<span class="color-sanity">理智300</span>/<span class="color-health">血量125</span></li>
      <li>攻击系数1.50</li>
      <li>移动系数1.00</li>
      <li>工作速度1.20</li>
    </ul>
    
    <h4 id="talent-system">④天赋系统</h4>
    <h5 id="ember">1.跨境追击许可</h5>
    <p>*精一解锁（冷却时间5s）</p>
    <ul>
      <li>蕾缪安手中持有狙时，可以按r打开轮盘，选择并锁定当前世界内一位玩家，周围出现跨境追击目标周围敌对生物的虚影（使用老瓦的失真着色器），虚影仅本人可见，无血量，除了蕾缪安本体以外其他人不可交互，虚影与蕾缪安之间的相对位置与跨境追击的虚影本体与跨境追击目标之间相对位置一致。</li>
      <li>跨境追击时，鼠标下会出现显示弹道的箭头，箭头标识弹道伤害的判定方向。跨境追击子弹射出时，仅对跨境追击目标周围20码的敌对生物造成弹道伤害。为避免敌人索敌混乱或者效果异常，<span class="color-important">该效果造成的伤害视为被观察的玩家造成</span>。</li>
      <li>被上的玩家头上会有一个转动的雷达特效。</li>
      <li>天赋切换时强制结束并结算当前生效的技能。</li>
      <li>天赋发动时本体受到有硬直的攻击立刻退出天赋，且结束当前所有技能。</li>
    </ul>
    <h5 id="ember-dance">2.逃犯引渡手续</h5>
    <p>*精二解锁</p>
    <ul>
      <li>1、2技能经过瞄准后，当次攻击击杀主目标且伤害溢出时，将剩余伤害转嫁给目标与蕾缪安连线侧外侧顺时针逆时针45°范围6内的最脆原则的敌人，该伤害转移的目标无法触发该天赋。</li>
      <li>模组提升：击杀主目标时，尝试为每个技能都恢复1弹药（有可调冷却，若弹药已满则不进入冷却）未击杀主目标时，自身尝试为所有技能恢复1技力。</li>
    </ul>

    <h4 id="skill-system">⑤技能系统</h4>
    <p>*技能持有蕾缪安的狙击枪才能使用，每个技能弹药槽独立存储和回复，不可同时开启。</p>
    <p>*蕾缪安拥有技能ui，技能ui使用明日方舟内的贴图，每个技能ui右侧有对应技能的弹药槽。</p>
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
          <td rowspan="3">蕾缪安</td>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk1.webp" alt="重逢问候" width="40px"><br>重逢问候</td>
          <td>初始解锁</td>
          <td>自动触发</td>
          <td>瞬发</td>
          <td>15s【精零】<br>12s【精一】<br>10s【精二】</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk2.webp" alt="归乡邀约" width="40px"><br>归乡邀约</td>
          <td>达到精英等级1</td>
          <td>主动触发<br>（按键X）</td>
          <td>/</td>
          <td>10s</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk3.webp" alt="礼炮·强制追思" width="40px"><br>礼炮·强制追思</td>
          <td>达到精英等级2</td>
          <td>主动触发<br>（按键Z）</td>
          <td>瞬发</td>
          <td>10s</td>
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
          <td rowspan="3">蕾缪安</td>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk1.webp" alt="重逢问候" width="40px"><br>重逢问候</td>
          <td>每15/12/10秒回复一颗弹药，子弹数量上限4/6/8。<br>
              非2、3技能期间，攻击时若有弹药，攻击对2个目标造成150%/175%/200%物理伤害。第二目标的选择遵循<span class="color-important">最脆原则</span>。</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk2.webp" alt="归乡邀约" width="40px"><br>归乡邀约</td>
          <td>弹药上限5/7，每10秒回复一颗弹药。
            <br>使用X键进入瞄准模式；瞄准模式下，自身不可主动移动，攻击范围+4*精英化等级，视野扩大。受到任意打断（离开状态）或再次按下X键时，取消技能。
            <br><br>技能期间启用右键瞄准。
            <br>右键敌方目标时：鼠标指向目标按下r之后，接下来的攻击将不会锁定任何其他目标，直到被锁定的目标死亡或退出加载范围，超出自身攻击范围仍然可以锁定；攻击间隔+3倍长矛，攻击消耗1发弹药，对瞄准目标造成800%的物理伤害，并对路径上的敌人造成300%伤害。被锁定的敌人头上会有一个狙击镜特效，即将射击会有一个连线的特效连线的特效，起点为蕾缪安，终点为目标，通过其他人进行中继的全图索敌理应也是如此。右键空地时，攻击间隔减少1倍长矛（为2倍长矛），自主选择射击角度，并对路径上的敌人造成100%/150%伤害。子弹达到最远时消失。
            <br>当跨境追击其他人时，其他人能看到瞄准线，伤害视为被追击的那个人造成，并且不吃他的攻击倍率加成。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sk3.webp" alt="礼炮·强制追思" width="40px"><br>礼炮·强制追思</td>
          <td>弹药上限8，每10秒回复一颗弹药。<br>
            技能期间不耽误移动，但会转身转向目标方向。<br><br>
            消耗一枚弹药对鼠标位置进行一次轰炸，轰炸中心半径6范围距离内造成200%伤害，不摧毁建筑，可以炸死海洋或者池塘（绿洲和模组池塘无效）水中的鱼并掉落东西，半径4范围距离内改为造成400%伤害且摧毁建筑。
          </td>
        </tr>
    </tbody>
    </table>

    <h6 id="skill-special">E - 1.【最脆原则】说明</h6>
    <ul>
      <li>选取优先级最高的敌人。拥有减伤时，优先级-1；拥有位面实体抵抗时，优先级-1。
        <br>同优先级中优先选择生命值最低的敌人。
      </li>
    </ul>

    <h6 id="skill-special">E - 2.【归乡邀约】与【礼炮·强制追思】部分说明</h6>
    <ul>
      <li>2技能期间不可使用3技能。2技能期间，2、3技能均不可随时间恢复弹药。3技能轰炸不能触发2天赋回复弹药。</li>
    </ul>
    


    <h4 id="item-design">⑥物品设计/制作</h4>

    <h5 id="item-design-special-item">1.专属物品</h5>
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
          <td><img src="@/assets/othercharacter/lemuen/lemuen_module.webp" alt="模组：弹匣与花窗" width="40px"><br>模组：弹匣与花窗</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①一级精英化券（蕾缪安）*1<br>
            ②传送魔杖*5<br>
            ③启迪之冠*1<br>
            ④懒人魔杖*1
          </td>
          <td>强化天赋【逃犯引渡手续】<br>
            击杀主目标时，尝试为每个技能都恢复1弹药（有可调冷却，若弹药已满则不进入冷却）未击杀主目标时，自身尝试为所有技能恢复1技力。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_wheelchair.webp" alt="特制电动轮椅" width="40px"><br>特制电动轮椅</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①金块*40<br>
            ②电子元件*10
          </td>
          <td>拥有12格储物空间<br>
            可以骑乘移动<br>
          </td>
        </tr>

      </tbody>

    </table>
    
    <h5 id="item-design-special-item-weapon">2.专属武器</h5>
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
          <td><img src="@/assets/othercharacter/lemuen/lemuen_sniper.webp" alt="拉特兰狙击铳" width="40px"><br>拉特兰狙击铳</td>
          <td>装备/手部</td>
          <td>初始解锁</td>
          <td>①象鼻*1<br>
              ②废料*5<br>
              ③紫宝石*5<br>
              ④烂电线*5
          </td>
          <td>
            攻击力50，攻击距离12，攻击间隔三倍于长矛<br>
            
            右键手部装备可以变为近战，伤害减半，攻击距离3，攻击间隔一倍于长矛，可以击飞目标，可以无视pvp击飞其他玩家<br><br>

            <span class="color-important">说明-基础特性：</span><br>
            ①可给予以下物品增强此装备的战斗向属性。<br>
            【电子元件】/【月亮碎片】/【铥矿】*1：1点【攻击力】（合计最多给予50个）<br>
            【巨鹿眼球】/【守护者之角】*1：25点【攻击力】（合计最多给予1个）<br>
            【月熠】*1：1点【攻击力】（最多给予25个）<br>
            【启迪碎片】/【亮茄外壳】*1：2点【攻击力】（合计最多给予25个）<br>
          </td>
        </tr>
      </tbody>

    </table>
    

    <h5 id="item-design-special-item-item">3.晋升物品</h5>
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
          <td><img src="@/assets/othercharacter/lemuen/lemuen_elite_1.webp" alt="一级精英化券（蕾缪安）" width="40px"><br>一级精英化券（蕾缪安）</td>

          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①金块*10<br>
              ②月岩*5<br>
              ③电子元件*2<br>
              ④大理石*10
          </td>
          <td>*仅【蕾缪安】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至1<br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/lemuen/lemuen_elite_2.webp" alt="二级精英化券（蕾缪安）" width="40px"><br>二级精英化券（蕾缪安）</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①一级精英化券（蕾缪安）*5<br>
              ②麻刺节点*40<br>
              ③蜂刺*20<br>
              ④吹箭*5
          </td>
          <td>*仅【蕾缪安】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至2<br>
          </td>
        </tr>

      </tbody>

    </table>

    <h5 id="item-design-special-item-other">4.彩蛋物品</h5>
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
          <td><img src="@/assets/othercharacter/lemuen/lemuen_horns.webp" alt="萨卡兹角饰" width="40px"><br>萨卡兹角饰</td>
          <td>装备/头部</td>
          <td>初始解锁</td>
          <td>①绝望石*3</td>
          <td>
              佩戴者视为萨卡兹（带tag），受到舞者/泥岩的减伤影响。
          </td>
        </tr>
      </tbody>
    </table>

    <h4 id="other-matters">⑦其余事项</h4>
    
    <h5 id="other-mod-config">1.模组配置</h5>
    <ul>
      <li>
        功能配置<br>
        狙击铳击飞玩家：<br>
        高破甲线模拟-档位：<br>
        高破甲线模拟-类型：<br>
        弹药恢复机制：<br>
        技能摧毀机制：<br>
        武器伤害倍率：<br>
        弹药自动恢复速率：<br>
        弹药上限修正：<br>
        天赋2弹药恢复冷却：<br>
      </li>
      <li>键位<br>
重逢问候开关按键：<br>
归乡邀约按键：<br>
礼炮·强制追思按键：<br>
跨境追缉许可按键：<br>
开关U显示按键：<br>
</li>
      <li>初始阶段设置<br>
初始阶段：</li>
    </ul>
    <h5 id="other-mod-compatibility">2.模组兼容</h5>
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
