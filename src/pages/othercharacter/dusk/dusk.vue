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
          <li><a href="#trait-star-dance">1.意临</a></li>
          <li><a href="#trait-moon-rotation">2.岁相之身</a></li>
          <li><a href="#trait-knowledge-seek">3.意动</a></li>
          <li><a href="#trait-water-fish">4.饱读诗书</a></li>
          <li><a href="#trait-burn">5.游龙避锋</a></li>
          <li><a href="#trait-mo-ning">6.墨凝</a></li>
          <li><a href="#trait-yuan-mo">7.渊墨</a></li>
          <li><a href="#trait-feng-ting">8.浮生若梦</a></li>
          <li><a href="#trait-ming-wei-xin">9.明德惟馨</a></li>
          <li><a href="#trait-han-mo">10.幻墨</a></li>
          <li><a href="#trait-wu-mi">11.无寐</a></li>
          <li><a href="#trait-xiu-gao">12.“夕”瓜？</a></li>
          <li><a href="#trait-choosy">13.挑食</a></li>
          <li><a href="#trait-zhuang-jing">14.化境</a></li>
          <li><a href="#trait-zhong-zhi">15.点睛</a></li>
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
      <!-- <li class="has-submenu">
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
      </li> -->
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#skill-system">④技能系统</a>
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
          <a href="#item-design">⑤物品设计/制作</a>
          <span class="toggle-icon" @click.stop="toggle('item')">
            {{ open.item ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.item" class="submenu">
          <li><a href="#item-design-material">1.专属建筑</a></li>
          <li><a href="#item-design-special-item">2.专属物品</a></li>
          <li><a href="#item-design-special-item">3.专属装备</a></li>
          <li><a href="#item-design-special-item-weapon">4.专属武器</a></li>
          <li><a href="#item-design-special-item-item">5.晋升物品</a></li>
          <li><a href="#item-design-special-item-recipe">6.专属料理</a></li>
          <li><a href="#item-design-special-item-other">7.彩蛋物品</a></li>
          <li><a href="#item-design-new-recipe">8.新增专属原版配方</a></li>
        </ul>
      </li>
      <li class="has-submenu">
        <div class="menu-item">
          <a href="#other-matters">⑥其余事项</a>
          <span class="toggle-icon" @click.stop="toggle('other')">
            {{ open.other ? '−' : '+' }}
          </span>
        </div>
        <ul v-show="open.other" class="submenu">
          <!-- <li><a href="#other-original-change">1.原版改动</a></li> -->
          <li><a href="#other-mod-config">1.模组配置</a></li>
          <li><a href="#other-mod-compatibility">2.模组兼容</a></li>
        </ul>
      </li>
    </ul>
  </aside>

  <main>
    <h1>夕</h1>
    <p>夕 是一位擅长远程与输出的角色，拥有晋升系统。</p>
    <div class="character-showcase"> 
      <div class="main-portrait">
        <img src="@/assets/othercharacter/dusk/dusk_none.webp" alt="夕立绘" class="character-image">
        <div class="character-title">立绘</div>
      </div>
      
      <div class="variants">
        <div class="variant-item">
          <img src="@/assets/othercharacter/dusk/avatar_dusk.webp" alt="夕头像" class="variant-image">
          <div class="variant-label">头像</div>
        </div>
        
        <div class="variant-item">
          <img src="@/assets/othercharacter/dusk/avatar_ghost_dusk.webp" alt="灵魂形态" class="variant-image">
          <div class="variant-label">灵魂</div>
        </div>

        <div class="variant-item">
          <router-link to="/othercharacter/duskindex/items/dusk_armor" target="_blank"><img src="@/assets/othercharacter/dusk/dusk_armor.webp" alt="专属衣服" class="variant-image"></router-link>
          <div class="variant-label">衣服</div>
        </div>

        <div class="variant-item">
          <router-link to="/othercharacter/duskindex/items/dusk_sword" target="_blank"><img src="@/assets/othercharacter/dusk/dusk_sword.webp" alt="专属武器" class="variant-image"></router-link>
          <div class="variant-label">武器</div>
        </div>
      </div>
    </div>

    <hr>

    <h4 id="basic-attributes">①基础属性</h4>
    <ul>
      <li><span class="color-hunger">饥饿100</span>/<span class="color-sanity">墨染（精神）300</span>/<span class="color-health">血量75</span></li>
      <li>攻击倍率0.25~0.5*（受<a href="#trait-mo-ning">【墨凝】</a>影响）</li>
      <li>饥饿速率0.8*</li>
      <li>移动速度0.9*</li>
    </ul>
    <h5>E.【部分说明】</h5>
    <h6>人物属性：墨染值</h6>
    <ul>
      <li>替换理智值，免疫黑暗与怪物的负面理智光环，每分钟自动回复30点</li>
      <li>夕使用专属武器进行攻击或释放技能时将会消耗此值</li>
    </ul>

    <h4 id="character-traits">②人物特性</h4>
    <h5 id="trait-star-dance">1.意临</h5>
    <ul>
      <li>【夕】与【小自在】击杀生物（除墙体等）时，额外获得生物最大生命值5%的墨染值。</li>
    </ul>

    <h5 id="trait-moon-rotation">2.岁相之身</h5>
    <ul>
      <li>【夕】在过冷与过热时不会损失生命值，但会-30墨染值/min</li>
      <li>【夕】免疫<span class="color-important">【生命值上限惩罚】</span>与<span class="color-important">【墨染值上限惩罚】</span></li>
      <li>【夕】食用<span class="color-important">【生肉】</span>与<span class="color-important">【怪物肉】</span>不会受到负面效果</li>
      <li>【夕】食用<span class="color-important">【不新鲜食物】</span>也拥有全额收益</li>
      <li>【夕】可以食用<span class="color-important">【桦栗果】</span></li>
      <li>【夕】变为<span class="color-important">【鬼魂】</span>后4分钟将会自动复活</li>
      <li>【夕】免疫<span class="color-important">【诅咒饰品】</span>的诅咒效果，<span class="color-important">【诅咒饰品】</span>不会自动吸附到身上，且可以携带大于10个。</li>
    </ul>

    <h5 id="trait-knowledge-seek">3.意动</h5>
    <ul>
      <li>【夕】可以在制作栏消耗1【蝴蝶翅膀】、5【墨染值】制作<span class="color-important">【蝴蝶】</span></li>
      <li>【夕】可以消耗20【墨染值】制作<span class="color-important">【噩梦燃料】</span></li>
      <li>【夕】可以消耗3【噩梦燃料】制作<span class="color-important">【纯粹恐惧】</span>、消耗2【纯粹恐惧】制作<span class="color-important">【绝望石】</span></li>
      <li>【夕】可以吸收<span class="color-important">【噩梦燃料】</span>（+12.5饱食度，+10墨染值，+3生命值）与<span class="color-important">【纯粹恐惧】</span>（+25饱食度，+20墨染值，+5生命值）来恢复自身属性</li>
      <li>【夕】可以使用各类基础材料制作宝石</li>
    </ul>
    
    <h5 id="trait-water-fish">4.饱读诗书</h5>
    <ul>
      <li>【夕】可以制作并阅读书籍</li>
      <li>【夕】自带<span class="color-important">【科学机器】</span>科学科技与<span class="color-important">【灵子分解器】</span>魔法科技</li>

    </ul>
    <h5 id="trait-burn">5.游龙避锋</h5>
    <ul>
      <li>
        【夕】受到攻击时，若装备了<span class="color-important">【墨染幻甲】</span>或<span class="color-important">【墨染幻甲-强化】</span>，则有 70% * 当前精神值百分比（最低35%）概率闪避本次伤害，并对攻击者造成136 * 攻击倍率 的真实伤害。</li>

    </ul>

    <h5 id="trait-mo-ning">6.墨凝</h5>
    <ul>
      <li>
        【夕】的攻击倍率随<span class="color-important">【墨染值】</span>百分比动态变化，最高0.5，最低0.25。</li>

    </ul>

    <h5 id="trait-yuan-mo">7.渊墨</h5>
    <ul>
      <li>
        【夕】附近16范围内的非友方单位受到的攻击伤害提高10%且造成的攻击伤害降低10%；目标生命值低于50%则效果翻倍。
      </li>
    </ul>

    <h5 id="trait-feng-ting">8.浮生若梦</h5>
    <ul>
      <li>
        【夕】每次使用<span class="color-important">【涂鬼神】</span>攻击时会永久加深对目标弱点的认知，并提高对其造成的伤害。<br>
        对普通生物：每次攻击永久提高0.25%伤害，最高25%<br>
        对史诗生物（Boss）：每次攻击永久提高1.25%伤害，最高75%<br>
      </li>
      <li>【夕】使用除<span class="color-important">【涂鬼神】</span>外的武器攻击时，伤害-25%。</li>
    </ul>

    <h5 id="trait-ming-wei-xin">9.明德惟馨</h5>
    <ul>
      <li>
        【夕】或【小自在】击杀<span class="color-important">【熊獾】</span>/<span class="color-important">【独眼巨鹿】</span>后，【夕】能够习得其战斗方式，此后使用<span class="color-important">【涂鬼神】</span>攻击时有概率施加异常效果；【浮生若梦】对其伤害加成越高，异常效果施加概率越高。<br>
        异常效果：攻击有（【浮生若梦】伤害加成/0.75）概率对目标施加1~3层持续8秒的<span class="color-important">【冰冻】</span>/<span class="color-important">【催眠】</span>效果

      </li>
    </ul>

    <h5 id="trait-han-mo">10.幻墨</h5>
    <ul>
      <li>
        【夕】可以左键点击<span class="color-important">【小自在】</span>将其吸收，使其消失并恢复自身10墨染值。

      </li>
    </ul>

    <h5 id="trait-wu-mi">11.无寐</h5>
    <ul>
      <li>
        【夕】不能主动睡觉，也不会被催眠（同时免疫催眠减速）。
      </li>
    </ul>

    <h5 id="trait-xiu-gao">12.“夕”瓜？</h5>
    <ul>
      <li>
        【夕】死亡产生的骨架替换为<span class="color-important">【巨大西瓜】</span>。

      </li>
    </ul>

    <h5 id="trait-choosy">13.挑食</h5>
    <ul>
      <li>
        拥有类似沃利的<span class="color-important">【食物记忆】</span>，记忆时间为240秒。

      </li>
    </ul>

    <h5 id="trait-zhuang-jing">14.化境</h5>
    <p>*精英化阶段一解锁</p>
    <ul>
      <li>
        【夕】散发有效半径约2码的<span class="color-important">【光照】</span>

      </li>
      <li>
        【夕】与【小自在】击杀一名生物时，提高【夕】2%的<span class="color-important">【攻击倍率】</span>并略微增加自身发光半径，最高叠加21层，死亡时重置层数。
      </li>
    </ul>

    <h5 id="trait-zhong-zhi">15.点睛</h5>
    <p>*精英化阶段二解锁</p>
    <ul>
      <li>
        使用<span class="color-important">【涂鬼神】</span>武器技能<span class="color-important">【工笔入画（主动）】</span>召唤<span class="color-important">【小自在】</span>的消耗降低至20墨染值或10生命值。
      </li>
    </ul>

    <h5 id="trait-bufen">E.【部分说明】</h5>
    <ul>
      <li>【夕】出生自带<span class="color-important">【涂鬼神】【墨染幻甲】【储物绘卷】</span>。</li>
    </ul>

    <h4 id="level-system">③等级系统</h4>

    <h5 id="level-conclusion">1. 结论，精一属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿125</span>/<span class="color-sanity">墨染350</span>/<span class="color-health">血量100</span></li>
    </ul>

    <h5 id="level-conclusion2">2. 结论，精二属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿150</span>/<span class="color-sanity">理智400</span>/<span class="color-health">血量125</span></li>
    </ul>

    <h4 id="skill-system">④技能系统</h4>
    <h5 id="skill-introduction">1.技能基础说明</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>技能图标</th>
          <th>技能名称</th>
          <th>解锁方式</th>
          <th>技能类型</th>
          <th>持续时间</th>
          <th>冷却需求</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td rowspan="6">夕</td>
          <td>///</td>
          <td>飞行</td>
          <td>精英化阶段一</td>
          <td>主动触发<br>（鼠标右键自身）</td>
          <td>瞬发</td>
          <td>///</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td>///</td>
          <td>玄爆染墨</td>
          <td>初始解锁</td>
          <td>主动触发<br>（按键Z）</td>
          <td>瞬发</td>
          <td>///</td>
        </tr>

        <tr>
          <td>///</td>
          <td>墨焰凝神</td>
          <td>初始解锁</td>
          <td>主动触发<br>（按键X）</td>
          <td>瞬发</td>
          <td>15秒</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_skill_1.webp" alt="工笔入画" width="40px"></td>
          <td>工笔入画（主动）</td>
          <td>初始解锁</td>
          <td>技能轮盘释放</td>
          <td>瞬发</td>
          <td>///</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_skill_2.webp" alt="泼墨淋漓" width="40px"></td>
          <td>泼墨淋漓</td>
          <td>精英化阶段一</td>
          <td>技能轮盘释放</td>
          <td>5秒</td>
          <td>21秒</td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_skill_3.webp" alt="写意胜形" width="40px"></td>
          <td>写意胜形</td>
          <td>精英化阶段二</td>
          <td>技能轮盘释放</td>
          <td>60秒</td>
          <td>160秒</td>
        </tr>

      </tbody>

    </table>
      <h5 id="skill-special">2.技能效果</h5>
      <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>技能名称</th>
          <th>效果描述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td rowspan="6">夕</td>
          <td>飞行</td>
          <td>
            需要手持【涂鬼神】进行飞行,飞行过程中移动速度+50%，无视碰撞体积、蛛网、冰火法阵、卵石路等效果，可以经过水面与虚空<br>
            飞行状态下每分钟消耗70点墨染值。</td>
        </tr>

        <tr>
          <td>玄爆染墨</td>
          <td>
            夕消耗10墨染值（不足则消耗5生命值）对鼠标下实体（不能为自身与其他夕）引发爆炸，对目标造成100 * 攻击倍率 点真实伤害，若目标为可破坏结构则摧毁之；<br>
            达到精英化阶段二时，若目标为可拆解目标则拆解之（会返还宝石）。</td>
        </tr>

        <tr>
          <td>墨焰凝神</td>
          <td>
            夕消耗50墨染值（不足则消耗25生命值）向四周发射5道墨焰卷须，卷须会自动追踪附近的敌对单位，命中时对目标造成200 * 夕攻击倍率 的真实伤害。
          </td>
        </tr>

        <tr>
          <td>工笔入画（主动）</td>
          <td>
            技能轮盘释放，消耗50墨染值（不足无法使用），立刻在自己脚下召唤一个【小自在】。
          </td>
        </tr>

        <tr>
          <td>泼墨淋漓</td>
          <td>
            技能轮盘释放，消耗100墨染值（不足无法使用）向鼠标位置持续喷洒水墨，期间获得霸体且受到的伤害降低34%（乘算），对扇形范围内的非友方单位每秒造成100+0.075%目标最大生命值的真实伤害，若目标生命值低于其最大生命值的50%，则伤害额外+30%。
          </td>
        </tr>

        <tr>
          <td>写意胜形</td>
          <td>
            技能轮盘释放，攻击间隔进一步增大（+1s），攻击力+30%，攻击范围扩大至64，视野范围扩大，攻击溅射范围扩大，【玄墨】消耗的墨染值或生命值翻倍；攻击时恢复溅射范围内所有“小自在”全部生命值并刷新其存在时间，若溅射范围内的“小自在”数量不大于5，则在目标点召唤一个“小自在”。
          </td>
        </tr>

    </tbody>
    </table>

    <h5 id="skill-special">E.【部分说明】</h5>
    <ul>
      <li>右键手部的【涂鬼神】阅读，可打开技能轮盘。</li>
    </ul>


    <h4 id="item-design">⑤物品设计/制作</h4>
    <h5 id="item-design-material">1.专属建筑</h5>
    <table class="other-system-table">
      <thead>
        <tr>
          <th>建筑名称</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="@/assets/othercharacter/dusk/dusk_statue.webp" alt="夕泡泡雕像" width="40px"><br>
            夕泡泡雕像</td>
          <td>初始解锁</td>
          <td style="min-width: 110px;">①暗影心房*1<br>
            ②大理石*40<br>
            ③纯粹恐惧*40
          </td>
          <td>拥有+400/min的精神值光环，视为30度的冷源，散发有效半径约64码的光照，拥有16格返鲜储物空间。<br><br>
            【墨染庇佑】：雕像附近64范围内常驻灭火、自动照料植物、防止夏季枯萎；<br><br>
            【拔苗助长？】给予雕像非调味料理，将会消耗料理并催熟64范围内的植物，已成熟农田作物直接变为巨大；同时为范围内玩家与友方单位恢复68生命值，耕地自动耕出3*3的坑并补满肥力；此效果冷却480秒。
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
          <td><img src="@/assets/othercharacter/dusk/dusk_book_doom.webp" alt="湮墨殷染尽拙山" width="40px"><br>湮墨殷染尽拙山</td>

          <td>物品/书籍</td>
          <td>初始解锁</td>
          <td>①火药*10<br>
            ②红宝石*5<br>
            ③莎草纸*3
          </td>
          <td>
            无限耐久，阅读消耗400点理智值对25范围内的非史诗单位（除阅读者）秒杀，史诗单位受到2段900点 + 3%最大生命值的物理伤害，可破坏的结构摧毁，然后留下一个弹坑（会自动消失）。<br>
            冷却4分钟
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_book_sleep.webp" alt="拙山方晓尽梦长" width="40px"><br>拙山方晓尽梦长</td>
          <td>物品/书籍</td>
          <td>初始解锁</td>
          <td>①噩梦燃料*3<br>
              ②紫宝石*5<br>
              ③莎草纸*3
          </td>
          <td>
            耐久3次，阅读消耗100点理智值，尝试雇佣附近30范围内至多30只可雇佣生物，不可雇佣生物催眠30秒。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_chest.webp" alt="绘境藏玄" width="40px"><br>绘境藏玄</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①莎草纸*2<br>
            ②橙宝石*4<br>
            ③紫宝石*4<br>
            ④铥矿*6
          </td>
          <td>
            拥有12格储物空间，可以放入物品栏，内部的物品反鲜（100%）。<br>
            夕达到精英化阶段一时可以拿起储物绘卷左键部分单位将其打包，被打包的物品会被收入绘卷中（仅夕可进行打包）。
          </td>
        </tr>


        
        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_medal.webp" alt="墨染勋章" width="40px"><br>墨染勋章</td>
          <td>装备/身体</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①绿宝石*20<br>
            ②纯粹恐惧*20<br>
            ③金块*20
          </td>
          <td>
            夕以外的其它人物佩戴后获得夕的部分配方，并获得科学与魔法科技加成。<br><br>
            夕佩戴后装备涂鬼神、“星稀”、幻造·月时计、意义非凡的法杖等武器时获得34%攻击力加成。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_pen.webp" alt="幻墨神笔" width="40px"><br>幻墨神笔</td>
          <td>装备/手部</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①理智值*400/生命值*100
          </td>
          <td>
            攻击力0，位面伤害68，攻击距离2，移速加成25%，精神值+6.7/min<br>
            新鲜度3天，腐烂后变为噩梦燃料<br>
            <span class="color-important">说明-装备特性：</span><br>
            【工笔】：可以作为砍、开采工具；可以作为浆、鱼竿、剃刀、锄头（3*3耕地）、水壶，可以挖掘坚硬矿物；右键进入全开模式，获得锤、铲、捕虫，瞬移法杖（消耗20精神值）功能。<br><br>
            【细笔】：可以右键可采集或可收获单位进行群体采集或收获；可以右键可作祟单位进行作祟，作祟树时高概率（34%）出树精。<br><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/spell_dusk_level.webp" alt="无题长卷" width="40px"><br>无题长卷</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①莎草纸*1<br>
            ②绿宝石*10<br>
            ③蛞蝓龟粘液*5<br>
            ④金块*5
          </td>
          <td>
            使用后提升自身的无题长卷等级，最高10级；每级提高夕0.05攻击倍率，0.025减伤率，降低0.04饥饿速率。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/spell_dusk_level2.webp" alt="“终夜无寐”（上卷）" width="40px"><br>“终夜无寐”（上卷）</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①莎草纸*1<br>
            ②绿宝石*10<br>
            ③纯粹恐惧*10<br>
            ④金块*10
          </td>
          <td>
            每级使夕在造成真实伤害时，恢复伤害值0.005% * 等级 的墨染值<br><br>
            <span class="color-important">说明-等级效果：</span><br>
            1级：每隔4秒，若夕的周围32范围内存在“小自在”，则恢复1墨染值；<br>
            3级：所有“小自在”生成时获得2层护盾，且攻击力提高至68，生命值提高至200；<br>
            5级：夕造成真实伤害时，恢复伤害值0.0025% * 等级 的生命值；<br>
            8级：夕使用涂鬼神攻击时，额外再对目标周围8范围内的一个非友方单位造成一次攻击；<br>
            10级：夕变为鬼魂后可以随时右键作祟自己复活，其它玩家可以作祟夕复活。<br><br>

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
          <td><img src="@/assets/othercharacter/dusk/dusk_sword.webp" alt="涂鬼神" width="40px"><br>涂鬼神</td>
          <td style="min-width: 80px;">装备/手部</td>
          <td style="min-width: 80px;">初始解锁</td>
          <td style="min-width: 120px;">
            ①栅栏击剑*1<br>
            ②金块*40<br>
            ③噩梦燃料*40
          </td>
          <td>
            攻击力68，攻击距离6<br><br>
            <span class="color-important">说明-武器特性：</span><br>
            【玄墨】：攻击时消耗2.5墨染值（不足则消耗1.25生命值）。<br><br>
            【工笔入画】：每5秒充能下一次攻击（最多充能3次），使下次攻击的溅射范围扩大并造成攻击力250%的真实伤害；<br>
            【工笔入画（主动）】：技能轮盘释放，消耗50墨染值（不足无法使用），立刻在自己脚下召唤一个“小自在”。<br><br>
            （小自在：生命值100，每秒恢复1生命值，减伤60%，受到月亮阵营伤害-30%，对月亮阵营伤害+30%，受到BOSS生物伤害减少50%，移动速度9，攻击力34，攻击间隔1.3s。）<br><br>
            【泼墨淋漓（主动）】：（精英化阶段1解锁）技能轮盘释放，消耗100墨染值（不足无法使用）向鼠标位置持续喷洒水墨，期间获得霸体且受到的伤害降低34%（乘算），对扇形范围内的非友方单位每秒造成100+0.075%目标最大生命值的真实伤害，若目标生命值低于其最大生命值的50%，则伤害额外+30%；持续5秒，冷却21秒。<br><br>
            【写意胜形（主动）】：（精英化阶段2解锁）技能轮盘释放，攻击间隔进一步增大（+1s），攻击力+30%，攻击范围扩大至64，视野范围扩大，攻击溅射范围扩大，【玄墨】消耗的墨染值或生命值翻倍；攻击时恢复溅射范围内所有“小自在”全部生命值并刷新其存在时间，若溅射范围内的“小自在”数量不大于5，则在目标点召唤一个“小自在”。<br><br>
            【墨影瞬】：右键地面或一个可被攻击的单位触发，消耗10墨染值，立刻瞬移至目标单位身后/目标位置并对周围6范围的单位造成等于武器攻击力的真实伤害。<br><br>
          </td>
        </tr>


        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_star.webp" alt="“星稀”" width="40px"><br>“星稀”</td>
          <td>装备/手部</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①彩虹宝石*1<br>
            ②金块*10
          </td>
          <td>
            攻击力21，位面伤害34，攻击距离2，移速加成25%；可以作为砍、开采工具<br><br>
            <span class="color-important">说明-武器特性：</span><br>
            【月明】：可以右键地面进行格挡，格挡冷却2秒，成功格挡攻击时恢复自身1点生命值与2点精神值<br><br>
            【皎月】：攻击时，额外对目标及其附近4范围内的非友方单位造成等量伤害，每命中一个单位恢复自身0.2生命值与1精神值；<br><br>
            【星能轰击】： 消耗200精神值与50%当前生命值，召唤100道闪电轰击附近32范围内的单位（优先敌对单位），每道闪电造成60位面伤害；冷却2分钟。<br><br>
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
          <td><img src="@/assets/othercharacter/dusk/dusk_armor.webp" alt="墨染幻甲" width="40px"><br>墨染幻甲</td>
          <td>装备/身体</td>
          <td>初始解锁</td>
          <td>
            ①莎草纸*1<br>
            ②木炭*10<br>
            ③蛞蝓龟粘液*10<br>
            ④金块*10
          </td>
          <td>
              防御率50%，装备后提供25%减伤率（与护甲叠乘）、10%攻击力加成、10/min精神值恢复、 20%防水、绝缘效果。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_armor2.webp" alt="墨染幻甲-强化" width="40px"><br>墨染幻甲-强化</td>
          <td>装备/身体</td>
          <td>完整的远古伪科技站</td>
          <td>
            ①墨染幻甲*1<br>
            ②噩梦燃料*10<br>
            ③铥矿*10
          </td>
          <td>
              防御率80%，装备后提供40%减伤率（与护甲叠乘）、25%攻击力加成、20/min精神值恢复、 40%防水、绝缘效果；装备后【游龙避锋】的触发率固定+10%。
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
          <td><img src="@/assets/othercharacter/dusk/dusk_elite_1.webp" alt="一级精英化券" width="40px"><br>一级精英化券</td>

          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①莎草纸*2<br>
              ②金块*30<br>
              ③绿宝石*10
          </td>
          <td>*仅【夕】可制作与使用，使用后令对应角色精英化阶段提升至1<br>
              *使用后解锁【化境】与【泼墨淋漓】，永久提高自身10%攻击倍率、10%移动速度；永久提高自身25饥饿值上限、50精神值上限、25生命值上限<br>
              *使用方式类似制作物品
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_elite_2.webp" alt="二级精英化券" width="40px"><br>二级精英化券</td>

          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①莎草纸*2<br>
              ②金块*180<br>
              ③绿宝石*20<br>
              ④铥矿*20<br>
              ⑤纯粹恐惧*20
          </td>
          <td>*仅【夕】可制作与使用使用后令对应角色精英化阶段提升至2<br>
            *使用后解锁【点睛】与【写意胜形】，永久提高自身20%攻击倍率、20%移动速度（覆盖精英化一级效果）；永久提高自身25饥饿值上限、50精神值上限、25生命值上限<br>
              *使用方式类似制作物品

          </td>
        </tr>

      </tbody>

    </table>

    <h5 id="item-design-special-item-recipe">6.专属生物</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>生物名称</th>
          <th>生物属性</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td>小自在</td>

          <td>

            生命值100，每秒恢复1生命值，攻击力34，攻击间隔1.3s，减伤60%，移动速度9，受到月亮阵营伤害-30%，对月亮阵营伤害+30%，受到BOSS生物伤害减少50%
          </td>
        </tr>

      </tbody>

    </table>


    <h5 id="item-design-special-item-other">7.彩蛋物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品图标与名称</th>
          <th style="min-width: 80px;">物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_eye_open.webp" alt="幻造·第三只眼（开眼）" width="40px"><br>幻造·第三只眼（开眼）</td>
          <td>装备/头部</td>
          <td>完整的远古伪科技站</td>
          <td style="min-width: 120px;">①巨鹿眼球*1<br>
            ②铥矿*10<br>
            ③纯粹恐惧*10
          </td>
          <td>
            隔热240，移速加成10%，防水100%<br><br>
            <span class="color-important">说明-装备特性：</span><br>
            【读心】：装备时，不会受到发情的牛与猎犬主动攻击；<br><br>
            【心花】：装备时，每秒为自身与周围16范围内的玩家恢复0.5精神值与0.2生命值；<br><br>
            【境界】：装备者造成伤害时，额外再附带5点真实伤害；<br><br>
            【恐怖回忆】：【境界】触发时，有34%概率再对目标造成其最大生命值0.05%的真实伤害，并恐惧目标及其周围5范围内的生物5秒；被攻击时，立刻以100%概率对攻击者触发【恐怖回忆】；<br><br>
            【刺痛之心】：右键物品可在“开眼”“闭眼”状态之间切换，“闭眼”状态下使【心花】【境界】【恐怖回忆】失效，并触发【被厌恶者的哲学】【胎儿之梦】【地底蔷薇】；<br><br>

          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_eye_closed.webp" alt="幻造·第三只眼（闭眼）" width="40px"><br>幻造·第三只眼（闭眼）</td>
          <td>装备/头部</td>
          <td>无法解锁</td>
          <td style="min-width: 120px;">无法制作
          </td>
          <td>
            隔热240，移速加成10%，防水100%<br><br>
            <span class="color-important">说明-装备特性：</span><br>
            【被厌恶者的哲学】：进入隐身状态，期间每0.5秒消耗2.5精神值（不足则消耗1.25生命值），不会主动引起生物仇恨，已拥有的生物仇恨将快速消失；<br><br>
            【胎儿之梦】：附近16范围内处于睡眠状态的生物每0.5秒有5%概率受到等同于其自身攻击力5倍的真实伤害；<br><br>
            【地底蔷薇】：攻击力+34%，减伤率+34%，移速加成变为100%。<br><br>
          </td>
        </tr>

        
        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_hammer.webp" alt="岩崩锤" width="40px"><br>岩崩锤</td>
          <td>装备/手部</td>
          <td>蓝图解锁</td>
          <td style="min-width: 120px;">①锤子*1<br>
            ②石头*40<br>
            ③电子元件*5
          </td>
          <td>
            攻击力101.9，攻击距离1，防御力80%，攻击间隔增大（+0.5s），移速-20%；<br><br>
            <span class="color-important">说明-武器特性：</span><br>
            【崩岩】：技力0/4，每次受到攻击获得1技力，技力满时下次攻击恢复自身9%最大生命值并造成以自己为中心6范围300%攻击力的伤害，强制打断命中的非BOSS生物动作，然后清零技力。<br><br>
            【沃土予身】：每9秒获得一层护盾（最多3层），装备时立刻获得1层，每层护盾破裂时恢复自身23%最大生命值并使【崩岩】额外获得2点技力。<br><br>
            【磐石】：装备者获得霸体效果，免疫大部分控制（硬直、击飞、冰冻、催眠等），且受到的伤害降低34%（乘算）。<br><br>
            <span class="color-important">说明-获取方式：</span><br>
            ①击杀座狼掉落蓝图<br><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_dial.webp" alt="幻造·月时计" width="40px"><br>幻造·月时计</td>
          <td>装备/手部</td>
          <td>完整的远古伪科技站</td>
          <td style="min-width: 120px;">①铥矿*10<br>
            ②橙宝石*10<br>
            ③噩梦燃料*10
          </td>
          <td>
            攻击力17（电击），攻击距离16，移速加成60%<br><br>
            <span class="color-important">说明-武器特性：</span><br>
            ①攻击变为三连击。<br>
            ②攻击时，有40%概率为攻击者恢复0.4精神值。<br>
            ③右键地面可以消耗16精神值进行瞬移。<br>
            ④右键一个可被攻击的目标，消耗32精神值（不足无法使用）召唤12把飞刀并在短暂延迟后全部向目标发射，每把造成17电击伤害，冷却16秒。<br>
            ⑤装备时右键月时计物品栏图标，消耗64精神值（不足无法使用）冻结附近64范围的时间流动8秒，冷却30秒。<br><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_staff.webp" alt="意义非凡的法杖" width="40px"><br>意义非凡的法杖</td>
          <td>装备/手部</td>
          <td>完整的远古伪科技站</td>
          <td style="min-width: 120px;">①彩虹宝石*1<br>
            ②木头*10<br>
            ③蜘蛛丝*5
          </td>
          <td>
            攻击力0，位面伤害34<br><br>
            <span class="color-important">说明-武器特性：</span><br>
            【一般攻击魔法】：每次攻击消耗5精神值向目标发射4发“一般攻击魔法”（精神值不足无法攻击）。<br><br>
            【魔力扩散】：攻击命中时额外对目标及其周围2范围内的非友方单位造成等量位面伤害。<br><br>
            【弑魔魔法】：可以右键地面释放“弑魔魔法”，消耗10精神值（不足无法使用）对约20单位长度直线上的单位造成210点位面伤害并摧毁沿途可破坏结构。<br><br>
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/othercharacter/dusk/dusk_fan.webp" alt="宇智波团扇" width="40px"><br>宇智波团扇</td>
          <td>装备/手部</td>
          <td>初始解锁</td>
          <td style="min-width: 120px;">①羽毛扇*1<br>
            ②活木*40<br>
            ③纯粹恐惧*40<br>
            ④金块*40
          </td>
          <td>
            攻击范围2.5，移速15%<br><br>
            左键攻击是范围攻击<br><br>
            右键敌人可以释放类似月火的攻击，无冷却，掉落物会变为烤熟对应物或者灰烬<br>
            若鼠标下没有敌人，右键会开始格挡，对攻击的敌人造成伤害并击退<br><br>
            
            <span class="color-important">说明-其余设定：</span><br>
            ①右键生物时即便没有造成实际伤害，但仇恨成立，仆从会开始攻击该生物。
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
          <td>蝴蝶</td>
          <td>初始解锁</td>
          <td>①蝴蝶翅膀*1
            <br>②理智值*5</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>噩梦燃料</td>
          <td>初始解锁</td>
          <td>①理智值*20</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>噩梦燃料</td>
          <td>初始解锁</td>
          <td>①纯粹恐惧*1</td>
          <td>
            *一次性制作3个
          </td>
        </tr>

        <tr>
          <td>纯粹恐惧</td>
          <td>初始解锁</td>
          <td>①噩梦燃料*3</td>
          <td>
            *一次性制作1个
          </td>
        </tr>

        <tr>
          <td>纯粹恐惧</td>
          <td>初始解锁</td>
          <td>①绝望石*1</td>
          <td>
            *一次性制作2个
          </td>
        </tr>

        <tr>
          <td>绝望石</td>
          <td>初始解锁</td>
          <td>①纯粹恐惧*2</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>活木</td>
          <td>初始解锁</td>
          <td>①木头*1
            <br>②噩梦燃料*1</td>
          <td>
            *一次性制作10个
          </td>
        </tr>
        <tr>
          <td>莎草纸</td>
          <td>初始解锁</td>
          <td>①噩梦燃料*4</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>蓝宝石</td>
          <td>科学机器</td>
          <td>①冰*3
            <br>②金块*1
            <br>③石头*2</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>红宝石</td>
          <td>科学机器</td>
          <td>①灰烬*3
            <br>②金块*1
            <br>③石头*2</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>绿宝石</td>
          <td>初始解锁</td>
          <td>①蓝宝石*2
            <br>②金块*3</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>橙宝石</td>
          <td>初始解锁</td>
          <td>①金块*3</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>橙宝石</td>
          <td>初始解锁</td>
          <td>①红宝石*2
            <br>②金块*3</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>彩虹宝石</td>
          <td>初始解锁</td>
          <td>①红宝石*1
            <br>②蓝宝石*1
            <br>③紫宝石*1
            <br>④黄宝石*1
            <br>⑤绿宝石*1
            <br>⑥橙宝石*1</td>
          <td>
            *一次性制作1个
          </td>
        </tr>
      </tbody>
    </table>

    <h4 id="other-matters">⑥其余事项</h4>
    <!-- <h5 id="other-original-change">1.原版改动</h5>
    <ul>
      <li>
        火荨麻叶/灰烬可以入锅
      </li>
      <li>莎草纸/空瓶子可以入锅，拥有1/4不可食用度</li>
    </ul> -->
    <h5 id="other-mod-config">1.模组配置</h5>
    <ul>
      <li>本地化：<br>
          语言<br>
      </li>
      <li>键位：<br>
          玄爆染墨<br>
          墨焰凝神<br>
      </li>
      <li>功能：<br>
        伤害类型<br>
        彩蛋物品<br>
        开局自带武器<br>
        宝石制作能力<br>
        玄爆染墨拆解功能<br>
        玄爆染墨<br>
        打包<br>
        自回血<br>
        飞行<br>
        墨魂跃迁<br>
        基础闪避率<br>
      </li>
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
