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
          <li><a href="#trait-star-dance">1.【于星夜起舞】</a></li>
          <li><a href="#trait-moon-rotation">2.【于月光轮转】</a></li>
          <li><a href="#trait-knowledge-seek">3.【于博识探求起源】</a></li>
          <li><a href="#trait-ultimate-end">4.【于落幕赴向终极】</a></li>
          <li><a href="#trait-star-sea">5.【于星海翱翔今日】</a></li>
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
          <li><a href="#level-conclusion">0. 结论，S3 lv0属性</a></li>
          <li><a href="#level-exp-kill">1. 击杀生物获得经验</a></li>
          <li><a href="#level-exp-food">2. 食用料理获得经验</a></li>
          <li><a href="#level-exp-crop">3. 采集作物获得经验</a></li>
          <li><a href="#level-exp-work">4. 完成工作获得经验</a></li>
        </ul>
      </li>
      <li><a href="#talent-system">④天赋系统</a></li>
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
          <li><a href="#item-design-special">1.专属科技台</a></li>
          <li><a href="#item-design-material">2.专属材料</a></li>
          <li><a href="#item-design-special-item">3.专属功能性物品</a></li>
          <li><a href="#item-design-special-item-weapon">4.专属武器</a></li>
          <li><a href="#item-design-special-item-body">5.专属身体/头部装备</a></li>
          <li><a href="#item-design-special-item-building">6.【星源】专属物品/建筑</a></li>
          <li><a href="#item-design-special-item-experiment">7.【星源】专属实验</a></li>
          <li><a href="#item-design-special-item-experiment-product">8.【星源】专属实验产物</a></li>
          <li><a href="#item-design-special-item-item">9.晋升/专精用物品</a></li>
          <li><a href="#item-design-special-item-other">10.其余特殊物品</a></li>
          <li><a href="#item-design-new-recipe">11.新增专属原版配方</a></li>
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
    <h1>星源</h1>
    <p>【星源】是一位擅长远程与输出的角色，拥有升级系统。</p>
    <div class="character-showcase">
      <div class="main-portrait">
        <img src="@/assets/astesia-astgenne/astgenne_none2.webp" alt="星源立绘" class="character-image">
        <div class="character-title">立绘</div>
      </div>
      
      <div class="variants">
        <div class="variant-item">
          <img src="@/assets/astesia-astgenne/avatar_astgenne.webp" alt="星源头像" class="variant-image">
          <div class="variant-label">头像</div>
        </div>
        
        <div class="variant-item">
          <img src="@/assets/astesia-astgenne/avatar_ghost_astgenne.webp" alt="灵魂形态" class="variant-image">
          <div class="variant-label">灵魂</div>
        </div>

        <div class="variant-item">
          <router-link to="/astesia-astgenne/items/astgenne_hat"><img src="@/assets/astesia-astgenne/astgenne_hat.webp" alt="专属帽子" class="variant-image"></router-link>
          <div class="variant-label">帽子</div>
        </div>

        <div class="variant-item">
          <router-link to="/astesia-astgenne/items/astgenne_armor"><img src="@/assets/astesia-astgenne/astgenne_armor.webp" alt="专属衣服" class="variant-image"></router-link>
          <div class="variant-label">衣服</div>
        </div>

        <div class="variant-item">
          <router-link to="/astesia-astgenne/items/astgenne_wand3"><img src="@/assets/astesia-astgenne/astgenne_wand3.webp" alt="专属武器" class="variant-image"></router-link>
          <div class="variant-label">武器</div>
        </div>
      </div>
    </div>

    <hr>

    <h4 id="basic-attributes">①基础属性</h4>
    <ul>
      <li><span class="color-hunger">饥饿75</span>/<span class="color-sanity">理智200</span>/<span class="color-health">血量75</span></li>
      <li>攻击系数0.75</li>
    </ul>

    <h4 id="character-traits">②人物特性</h4>
    <h5 id="trait-star-dance">1.【于星夜起舞】</h5>
    <ul>
      <li>【星源】装备<a href="./original_items/nightstick.html"><span class="color-important">【晨星锤】</span></a>时，其耐久消耗降低至10%。</li>
      <li>【星源】使用<span class="color-important">【唤星者魔杖】【唤月者魔杖】</span>时，不会消耗理智值。</li>
      <li>【星源】受到<span class="color-important">【矮星】【极光】</span>的理智值回复效果变为3倍。</li>
      <li>【星源】距离<span class="color-important">【矮星】</span>10墙体距离以内时，自身移速+15%，不叠加。</li>
      <li>【星源】距离<span class="color-important">【极光】</span>10墙体距离以内时，自身每4秒回复1点血量，可叠加。</li>
    </ul>

    <h5 id="trait-moon-rotation">2.【于月光轮转】</h5>
    <ul>
      <li>【星源】不会被<span class="color-important">【月灵】【大月灵】</span>主动攻击。</li>
      <li>【星源】不会受到<span class="color-important">【月亮风暴】</span>的影响。</li>
      <li>【星源】在地表的<span class="color-important">【新月夜】</span>时获得夜视。</li>
      <li>【星源】在地表的<span class="color-important">【满月夜】</span>时移速+20%。</li>
      <li>【星源】在地表的<span class="color-important">【启迪夜】</span>时使用专属武器攻击会召唤<span class="color-important">【月灵】</span>辅助攻击。</li>
      <li>【星源】不会受到来自月亮的诅咒，免疫<span class="color-important">【诅咒饰品】</span>的诅咒效果，但依然会自动吸附到身上，并且可以携带大于10个。</li>
    </ul>

    <h5 id="trait-knowledge-seek">3.【于博识探求起源】</h5>
    <ul>
      <li>【星源】自带<span class="color-important">【科学机器】</span>科技。</li>
      <li>【星源】的制作速度加快。</li>
      <li>【星源】拥有<span class="color-important">【读书】</span>能力。</li>
      <li>【星源】可以制作并使用<span class="color-important">【生物扫描分析仪】【电路提取器】</span>，通过扫描解锁<span class="color-important">【电路板】</span>配方并获取<span class="color-important">【生物数据】</span>。</li>
    </ul>

    <h5 id="trait-ultimate-end">4.【于落幕赴向终极】</h5>
    <ul>
      <li>【星极】【星源】可使用专属物品<span class="color-important">【“同一片星空下”】</span>来进入<span class="color-important">【共鸣】</span>状态。</li>
      <li>处于<span class="color-important">【共鸣】</span>状态时，【星极】【星源】其中一位角色受到致命伤害时，</li>
      <li>若致命伤害量≥两位角色的血量之和-1，则会使两位角色一同死亡。</li>
      <li>若致命伤害量＜两位角色的血量之和-1，则其受伤至1点血量，余量伤害转至另一位承担。</li>
      <li>处于<span class="color-important">【共鸣】</span>状态时，【星极】【星源】在开启各自的技能时会额外触发<span class="color-important">【共鸣效果】</span>。<a href="#skill-system" title="点击跳转技能系统">（具体效果可见下文对应技能的详细介绍）</a></li>
    </ul>

    <h5 id="trait-star-sea">5.【于星海翱翔今日】</h5>
    <ul>
      <li>【星源】进入世界时会携带<span class="color-important">【制式源石短杖】</span>*1，<a href="./original_items/nightstick.html"><span class="color-important">【晨星锤】</span></a>*1，<span class="color-important">【“同一片星空下”】</span>*1。</li>
      <li>【星源】每生存满16分钟，便在人物/背包最前的空物品栏生成<span class="color-important">【蓝色羽毛】</span>*1，若人物/背包物品栏已满，则掉落在人物脚下。（死亡后清零计时）</li>
      <li>【星源】不会惊动鸟类，每次有鸟类自然刷新降落在【星源】身边时，都有4%的概率将其替换为<span class="color-important">【家燕】</span>。使用<span class="color-important">【世界鸟类大全】</span>不会出现<span class="color-important">【家燕】</span>。</li>
      <li>【星源】装备<span class="color-important">【羽毛帽】</span>时，<span class="color-important">【家燕】</span>的刷新概率提高至8%。</li>
    </ul>

    <h5 id="trait-explanation">E.【部分说明】</h5>
    <h6>E-1 有关<span class="color-important">【共鸣】</span>状态：</h6>
    <ul>
      <li>一个<span class="color-important">【共鸣】</span>状态仅限一位【星极】与一位【星源】，且此状态只在双方位于同一世界时生效。</li>
    </ul>
    <h6>E-2 有关<span class="color-important">【家燕】</span>：</h6>
    <ul>
      <li>【星源】可靠近采集并获取专属材料。一只<span class="color-important">【家燕】</span>最多可采集一次。</li>
      <li>【星源】采集时，50%概率获得<span class="color-important">【飞燕草】</span>*2，50%概率获得<span class="color-important">【飞燕草】</span>*3。</li>
    </ul>

    <h4 id="level-system">③等级系统</h4>

    <table class="level-system-table">
      <thead>
        <tr>
          <th rowspan="2">精英等级</th>
          <th colspan="3">所需经验<br><small>（n为下一等级）</small></th>
          <th rowspan="2" colspan="3">升级加成</th>
        </tr>
        <tr>
          <th>【简易】</th>
          <th>【普通】</th>
          <th>【困难】</th>
        </tr>
      </thead>

      <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td rowspan="2">S0（lv0-50）</td>
          <td>2n+50</td>
          <td>3n+75</td>
          <td>4n+100</td>
          <td rowspan="2">攻击力 +1%/5 级</td>
          <td rowspan="2">饥饿值上限 +5/5 级</td>
          <td rowspan="2">///</td>
        </tr>
        <tr>
          <td>总计5050</td>
          <td>总计7575</td>
          <td>总计10100</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td rowspan="2">S1（lv0-80）</td>
          <td>5n+110</td>
          <td>8n+145</td>
          <td>10n+220</td>
          <td rowspan="2">攻击力 +1%/4 级</td>
          <td rowspan="2">生命值上限 +1/4 级</td>
          <td rowspan="2">移速 +5%</td>
        </tr>
        <tr>
          <td>总计25000</td>
          <td>总计37520</td>
          <td>总计50000</td>
        </tr>

        <!-- 第三组：S2- 行 -->
        <tr>
          <td rowspan="2">S2（lv0-90）</td>
          <td>10n+100</td>
          <td>15n+150</td>
          <td>20n+200</td>
          <td rowspan="2">攻击力 +1%/3 级</td>
          <td rowspan="2">生命值上限 +1/3 级</td>
          <td rowspan="2">移速 +5%</td>
        </tr>
        <tr>
          <td>总计49950</td>
          <td>总计74925</td>
          <td>总计99900</td>
        </tr>

        <!-- 第四组：S3- 行 -->
        <tr>
          <td>S3（lv0-///）</td>
          <td colspan="3">100n+5000</td>
          <td colspan="3">每次造成伤害时，额外附带位面伤害 +1/5 级</td>
        </tr>
      </tbody>
    </table>
    <h5 id="level-conclusion">0. 结论，S3 lv0属性：</h5>
    <ul>
      <li><span class="color-hunger">饥饿125</span>/<span class="color-sanity">理智200</span>/<span class="color-health">血量125</span></li>
      <li>攻击系数1.20</li>
    </ul>
    <h5 id="level-exp-kill">1. 击杀生物，获得经验值为其【血量/10】（无需尾刀，助攻也可）</h5>
    <ul>
      <li>针对<span class="color-important">【史诗级生物】</span>，一天对于同种目标最多只计入3次经验获取。</li>
      <li>针对<span class="color-important">【普通生物】</span>，一天对于同种目标最多只计入30次经验获取。</li>
      <li>以此法单次获取经验上限为10000。</li>
    </ul>
    <h5 id="level-exp-food">2.食用料理，获得经验值为其【生命值回复/2】</h5>
    <ul>
      <li>一天对于同名料理最多只计入1次经验获取。（不同口味算作不同名）</li>
      <li>食用调味过的料理额外获得20点经验。（若不满足2-1，则不会生效）</li>
      <li>以此法单次获取经验上限为100。</li>
    </ul>
    <h5 id="level-exp-crop">3.采集作物，根据成熟作物的状态获得对应经验。</h5>
    <ul>
      <li>每采集一个【7≤压力值≤11】的<span class="color-important">【普通作物】</span>，获得5点经验。</li>
      <li>每采集一个【0≤压力值≤6】的<span class="color-important">【普通作物】</span>，获得10点经验。</li>
      <li>每采集一个<span class="color-important">【巨大作物】</span>，获得20点经验。</li>
      <li>一天对于<span class="color-important">【普通作物】</span>的采集最多只计入30次经验获取。</li>
    </ul>
    <h5 id="level-exp-work">4.完成部分工作，获得一定量的经验值。</h5>
    <ul>
      <li>每次成功采集<span class="color-important">【家燕】</span>获取专属材料时，获得50点经验。</li>
      <li>【星源】在<span class="color-important">【生物扫描分析仪】</span>完成扫描工作时，会获得等同于此次扫描获得<span class="color-important">【生物数据】</span>数量10倍的经验值。</li>
    </ul>
    <h5 id="level-explanation">E.【部分说明】</h5>
    <ul>
      <li>达到某一个精英等级上限后，需要制作对应级别的<span class="color-important">【晋升凭证】</span>将等级变为下一个精英等级0级。</li>
      <li>上图升级加成中，<span class="color-important">攻击力加成</span>的具体数值会与【星源】的基础攻击倍率（0.75）乘算。</li>
      <li>上图升级加成中，<span class="color-important">移速加成</span>加成为一次性奖励，在到达精英等级1/2时分别获得一次。</li>
      <li>通过默认按键<span class="color-important">【J】</span>可查看【星源】当前的各项属性信息。</li>
    </ul>
    
    <h4 id="talent-system">④天赋系统</h4>

    <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>天赋名称</th>
          <th>解锁方式</th>
          <th>效果描述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td rowspan="2">星源</td>
          <td rowspan="2">科学热忱</td>
          <td>达到精英等级1</td>
          <td>使用专属武器对目标造成伤害时，有<span class="color-important">7%概率</span>令目标在此次【停顿】效果结束后<span class="color-important">5秒内移速-20%</span>。</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td>达到精英等级2</td>
          <td>使用专属武器对目标造成伤害时，有<span class="color-important">14%概率</span>令目标在此次【停顿】效果结束后<span class="color-important">5秒内移速-40%</span>。</td>
        </tr>

      </tbody>
    </table>

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
          <td rowspan="2">星源</td>
          <td><img src="@/assets/astesia-astgenne/astgenne_skill1.webp" alt="双端导流" width="40px"><br>双端导流</td>
          <td>初始解锁</td>
          <td>自动触发</td>
          <td>瞬发</td>
          <td>10秒</td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_skill2.webp" alt="星束交汇" width="40px"><br>星束交汇</td>
          <td>达到精英等级1</td>
          <td>主动触发<br>（按键C）</td>
          <td>30秒</td>
          <td>90秒</td>
        </tr>

        <tr>
          <td>星极&星源</td>
          <td><img src="@/assets/astesia-astgenne/astgenne_skill3.webp" alt="群星闪烁相映" width="40px"><br>群星闪烁相映</td>
          <td>①双方处于“共鸣”状态<br>②双方皆达到精英等级2</td>
          <td>主动触发<br>（按键Z）</td>
          <td>240秒</td>
          <td>击杀一只血量≥5000的巨兽</td>
        </tr>

      </tbody>

    </table>
      <h5 id="skill-special">2.技能专精/共鸣效果</h5>
      <table class="other-system-table">
    <thead>
        <tr>
          <th>所属角色</th>
          <th>技能图标与名称</th>
          <th>技能阶段</th>
          <th>效果描述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td rowspan="2">星极</td>
          <td><img src="@/assets/astesia-astgenne/astesia_skill1.webp" alt="星座守护" width="40px"><br>星座守护</td>
          <td rowspan="2">共鸣效果</td>
          <td>技能持续期间【星源】最终免伤<span class="color-important">+40%</span>，每2秒回复<span class="color-important">2</span>点血量。<br>免疫受击【僵直】【击退】【武器脱落】</td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/astesia_skill2.webp" alt="星辉剑" width="40px"><br>星辉剑</td>
          <td>技能持续期间【星源】专属武器的攻击、技能弹射次数<span class="color-important">+2</span>。</td>
        </tr>

        <tr>
          <td rowspan="8">星源</td>
          <td rowspan="4"><img src="@/assets/astesia-astgenne/astgenne_skill1.webp" alt="双端导流" width="40px"><br>双端导流</td>

          <td>初始</td>
          <td>下一次【星源】专属武器的远程攻击，攻击力<span class="color-important">+20%</span>，<br>弹射次数<span class="color-important">+1</span>，且同时攻击2次，优先选择不同目标，可充能<span class="color-important">2</span>次。</td>
        </tr>

        <tr>
          <td>专精一</td>
          <td>下一次【星源】专属武器的远程攻击，攻击力<span class="color-important">+30%</span>，<br>弹射次数<span class="color-important">+1</span>，且同时攻击2次，优先选择不同目标，可充能<span class="color-important">2</span>次。</td>
        </tr>

        <tr>
          <td>专精二</td>
          <td>下一次【星源】专属武器的远程攻击，攻击力<span class="color-important">+40%</span>，<br>弹射次数<span class="color-important">+2</span>，且同时攻击2次，优先选择不同目标，可充能<span class="color-important">3</span>次。</td>
        </tr>

        <tr>
          <td>专精三</td>
          <td>下一次【星源】专属武器的远程攻击，攻击力<span class="color-important">+50%</span>，<br>弹射次数<span class="color-important">+2</span>，且同时攻击2次，优先选择不同目标，可充能<span class="color-important">3</span>次。</td>
        </tr>

        <tr>
          <td rowspan="4"><img src="@/assets/astesia-astgenne/astgenne_skill2.webp" alt="星束交汇" width="40px"><br>星束交汇</td>

          <td>初始</td>
          <td>技能持续期间【星源】攻击力<span class="color-important">+20%</span>，<br>专属武器的攻击距离<span class="color-important">+2</span>，同时可最多攻击2个不同目标。</td>
        </tr>

        <tr>
          <td>专精一</td>
          <td>技能持续期间【星源】攻击力<span class="color-important">+30%</span>，<br>专属武器的攻击距离<span class="color-important">+2</span>，同时可最多攻击2个不同目标。</td>
        </tr>

        <tr>
          <td>专精二</td>
          <td>技能持续期间【星源】攻击力<span class="color-important">+40%</span>，<br>专属武器的攻击距离<span class="color-important">+4</span>，同时可最多攻击2个不同目标。</td>
        </tr>

        <tr>
          <td>专精三</td>
          <td>技能持续期间【星源】攻击力<span class="color-important">+50%</span>，<br>专属武器的攻击距离<span class="color-important">+4</span>，同时可最多攻击2个不同目标。</td>
        </tr>

        <tr>
          <td>星极&星源</td>
          <td><img src="@/assets/astesia-astgenne/astgenne_skill3.webp" alt="群星闪烁相映" width="40px"><br>群星闪烁相映</td>

          <td>初始</td>
          <td>处于同一个【共鸣】状态下的【星极】【星源】<br>
            共享该技能的冷却时间，开启时机，技能效果。<br>
            技能开启时:<br>
            ①将当天天相<span class="color-important">所有</span>阶段更改为【启迪夜】，该效果持续至当天结束。<br>
            技能持续期间:<br>
            ②该共鸣状态下的【星极】【星源】的天赋触发概率提升至原本的5倍。<br>
            ③免疫【沉睡】以及【催眠】所带来的减速虚弱效果。
          </td>
        </tr>
    </tbody>
    </table>

    <h5 id="skill-special">E.【部分说明】</h5>
    <h6>E-1 有关技能【群星闪烁相映】：</h6>
    <ul>
      <li>在两个条件均满足的情况下才会解锁，初始/后续冷却需求击杀一只血量≥5000的巨兽（无需尾刀，助攻也可），两人共享冷却需求与冷却进度。在解锁后若有至少一个条件再次变为不满足，则该技能重新被锁定，当前冷却进度被保留，直至下一次解锁。如果双方的<span class="color-important">【“同一片星空下”】</span>的【绑定】断开，则冷却进度被清除。</li>
    </ul>

    <h4 id="item-design">⑥物品设计/制作</h4>
    <h5 id="item-design-special">1.专属科技台</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>科技台图标与名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_truth.webp" alt="“真理”" width="40px"><br>“真理”</td>
          <td>建筑/科技台</td>
          <td>初始解锁</td>
          <td>①指南针*1<br>
              ②告密的心*2<br>
              ③地图卷轴*1<br>
              ④蓝色羽毛*2
          </td>
          <td>*仅【星极】【星源】可制作<br>
              <span class="color-important">*不可燃烧，不可拆解</span><br><br>
              <span class="color-important">说明-基础特性：</span><br>
              ①拥有以自身为中心半径距离为6的光照效果。<br>  
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_rack.webp" alt="实验操作台" width="40px"><br>实验操作台</td>
          <td>建筑/制作站</td>
          <td>“真理”</td>
          <td>①废料*4<br>
            ②电子元件*2<br>
            ③空瓶子*2<br>
            ④生物数据*4
          </td>
          <td>*仅【星源】可制作<br>
          <span class="color-important">*不可燃烧，不可拆解</span>
        </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-material">2.专属材料</h5>
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
          <td><img src="@/assets/astesia-astgenne/ast_d32steel.webp" alt="D32钢" width="40px"><br>D32钢</td>
          <td>物品/材料<br>堆叠上限10</td>
          <td>蓝图解锁</td>
          <td>①大理石*20<br>
              ②铥矿碎片*20<br>
              ③蒸馏的知识*5
          </td>
          <td>*仅【星极】【星源】可学习蓝图<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
              <span class="color-important">说明-获取方式：</span><br>
              ①激活蓝色【知识饮水机】产出的【蒸馏的知识】时额外获得该蓝图。（若已学会便不再给予蓝图）<br>
              ②击败【钢羊】30%掉落1个<br>
              ③击败【激光眼】掉落1个<br>
              ④击败【魔焰眼】掉落1个<br>
              ⑤击败【拾荒疯猪】掉落1个<br>
              ⑥击败【天体英雄】三阶段掉落2个
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_swallowgrass.webp" alt="飞燕草" width="40px"><br>飞燕草</td>
          <td>物品/材料<br>堆叠上限40</td>
          <td>///</td>
          <td>///</td>
          <td>
          <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
          <span class="color-important">说明-获取方式：</span><br>
          ①采集【家燕】时获取
        </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-special-item">3.专属功能性物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_badge_astgenne.webp" alt="星源证章" width="40px"><br>星源证章</td>
          <td>物品/功能</td>
          <td>///</td>
          <td>///</td>
          <td>*仅【星源】可使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              用于保存和读取【星源】的各项等级数据，右键使用后可读取预先保存的各项等级数据。<br><br>
              <span class="color-important">说明-获取方式：</span><br>
              当前人物为【星源】，换人时自动掉落一个保存当前各项等级数据的【星源证章】
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_understar_inactive.webp" alt="“同一片星空下”" width="40px"><br>“同一片星空下”</td>
          <td>物品/功能</td>
          <td>“真理”</td>
          <td>①指南针*1<br>
              ②告密的心*2<br>
              ③哀悼荣耀*9<br>
              ④生物数据*9
          </td>
          <td>*仅【星极】【星源】可制作与使用<br>
          <span class="color-important">*不可燃烧，不可沉没</span><br>
          用于与【星极】/【星源】绑定，进入【共鸣】状态<br><br>
          <span class="color-important">说明-基础特性：</span><br>
          ①拥有技能【星光的回响】，仅在双方处于【共鸣】状态中时可使用。
          初始/后续冷却为4分钟。<br>
          携带在物品栏中时右键此物品，即可发起传送的请求，另一位玩家对其右键，即可接受该次请求，<br>
          令<span class="color-important">前者（发起者）</span>立刻传送至<span class="color-important">后者（接受者）</span>所在的方位，并使该技能进入冷却。
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_starkit.webp" alt="星空修补套件" width="40px"><br>星空修补套件</td>
          <td>物品/功能<br>堆叠上限10</td>
          <td>“真理”</td>
          <td>①月岩*1<br>
              ②月亮碎片*1<br>
              ③荧光果*2<br>
          </td>
          <td>*仅【星极】【星源】可制作<br>
              *用于修补【星极】【星源】部分物品<br>
          <span class="color-important">*不可燃烧，不可拆解，不可沉没</span>
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_starkit10.webp" alt="星空修补套件*10" width="40px"><br>星空修补套件</td>
          <td>物品/功能<br>堆叠上限10</td>
          <td>“真理”</td>
          <td>①注能月亮碎片*6<br>
              ②月熠*6<br>
              ③纯粹辉煌*2<br>
          </td>
          <td>*仅【星极】【星源】可制作<br>
              *用于修补【星极】【星源】部分物品<br>
              *一次性制作10个<br>
          <span class="color-important">*不可燃烧，不可拆解，不可沉没</span>
          </td>
        </tr>
      </tbody>

    </table>
    <h5 id="item-design-special-item-explanation">E.【部分说明】</h5>
    <h6>E-1 使用【“同一片星空下”】进入【共鸣】状态步骤：</h6>
    <ul>
      <li>初始该物品处于未【记录】状态，</li>
      <li><span class="color-important2">①手持该物品对自己右键可【记录】自己为【共鸣者1】。</span></li>
      <li>在仅记录【共鸣者1】的情况下再次对自己右键可取消【记录】。在已被记录为【共鸣者1】的状态下无法再使用另一个处于未【记录】状态的该物品进行记录。</li>
      <li><span class="color-important2">②在两个此物品都各自记录了【共鸣者1】，并且为【星极】【星源】各一位后，手持其中一个物品对另一个物品右键，即可进行【绑定】，并为两个此物品相互记录对方为【共鸣者2】。</span></li>
      <li>完成以上的操作之后，两位玩家视为处于同一个【共鸣】状态中，可享受各方面的额外效果。在这种状态中，再次手持其中一个对另一个右键，即可取消此【共鸣】状态，并取消【共鸣者2】的记录。</li>
    </ul>

    <h5 id="item-design-special-item-weapon">4.专属武器</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_wand1.webp" alt="制式源石短杖" width="40px"><br>制式源石短杖</td>
          <td>装备/手部</td>
          <td>炼金引擎</td>
          <td>①硝石*2<br>
              ②蜂刺*2<br>
              ③电子元件*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              <span class="color-important">*不可燃烧，不可沉没</span><br>
              攻击力25.5，攻击距离6<br>
              移速+10%，耐久100次<br>
              最大弹射次数2
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_wand2.webp" alt="残缺星光之愿" width="40px"><br>残缺星光之愿</td>
          <td>装备/手部</td>
          <td>“真理”</td>
          <td>①硝石*20<br>
              ②燧石*40<br>
              ③烂电线*8<br>
              ④电子元件*8
          </td>
          <td>*仅【星源】可制作与使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              攻击力34，攻击距离8<br>
              移速+12%，耐久150次<br>
              最大弹射次数2<br>
              攻击对目标造成伤害后，会令其进入0.5秒的【停顿】状态，即移速-80%。<br><br>

              耐久降至0时不消失，<br>
              但会立刻掉落至物品栏并无法装备。<br>
              使用【生物数据】修补30次耐久。<br>
              使用【星空修补套件】修补100%耐久。<br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              ①拥有技能【星光的指引】。<br>
              ②在月相为【满月】的夜晚，可将其插入【月亮石】触发【月亮石袭击】，并进行转化升级。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_wand3.webp" alt="昭示星光之愿" width="40px"><br>昭示星光之愿</td>
          <td>装备/手部</td>
          <td>“真理”</td>
          <td>①残缺星光之愿+3*1<br>
              ②铥矿*8<br>
              ③废料*8<br>
              ④天气风向标*2<br>
              ⑤D32钢*1
          </td>
          <td>*仅【星源】可制作与使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              攻击力42.5，攻击距离10<br>
              移速+20%，耐久200次<br>
              最大弹射次数2<br>
              攻击对目标造成伤害后，会令其进入0.5秒的【停顿】状态，即移速-80%。<br><br>

              耐久降至0时不消失，<br>
              但会立刻掉落至物品栏并无法装备。<br>
              使用【生物数据】修补60次耐久。<br>
              使用【星空修补套件】修补100%耐久。<br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              ①拥有技能【星光的指引】。<br>
              ②在月相为【满月】的夜晚，可将其插入【月亮石】触发<span class="color-important">特殊的</span>【月亮石袭击】，并进行转化升级。
          </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-special-item-weapon-explanation">E.【部分说明】</h5>
    <h6>E-1 技能<span class="color-important">【星光的指引】</span>说明：</h6>
    <ul>
      <li>在距离自身24范围以内，<span class="color-important">右键</span>可在鼠标当前的位置生成一颗临时【矮星】，存在时间30秒。若【星源】与其距离超过32，则临时【矮星】立刻消失。</li>
      <li>在该临时【矮星】存在期间，再次<span class="color-important">右键</span>会以【星源】为中心出现方向指示箭头，且箭头末端固定指向临时【矮星】，此时右键会取消箭头，<span class="color-important">左键</span>会令【星源】立刻传送至临时【矮星】的位置，并使临时【矮星】立刻消失。在临时【矮星】因任何原因消失后，此技能进入冷却状态，冷却30秒。</li>
    </ul>
    <h6>E-2 武器<span class="color-important">【残缺星光之愿】</span>转化升级说明：</h6>
    <ul>
      <li>以此法触发的【月亮石袭击】，若附近袭击生物数量≤6+2n，则会不断生成袭击生物，补至6+2n个，n为当前武器转化升级的次数。（最多可以此法转化升级3次）</li>
      <li>每成功转化升级一次，<span class="color-important">【残缺星光之愿】</span>攻击力+2，移速+2%。</li>
      <li>并将名称更改为<span class="color-important">【残缺星光之愿】</span>+n，n为当前武器成功转化升级的次数。</li>
    </ul>
    <h6>E-3 武器<span class="color-important">【昭示星光之愿】</span>转化升级说明：</h6>
    <ul>
      <li>初始升级上限为3次，每给予其1个【启迪碎片】，升级上限增加3次。</li>
      <li>以此法触发的【月亮石袭击】中，【月亮石】的血量不再是6次受击频率，而是（200+10n）点生命值，n为当前武器已成功转化升级的次数。此外出怪种类/数量/间隔也与原版机制不同，部分怪物的行为逻辑会得到优化，所有怪物被击败后不会产生掉落物，详细设定如下。</li>
      <li>每次转化升级持续1分钟，在开始时、20秒时、40秒时会分别在距离【月亮石】16~20的随机位置上召唤一波袭击生物。每次召唤的数量和种类与【袭击值】有关。</li>
      <li>同一次【月亮石袭击】中的三波袭击生物召唤的【袭击值】依次为<span class="color-important">20+2n</span>，<span class="color-important">20+4n</span>，<span class="color-important">20+6n</span>，n为当前武器已成功转化升级的次数。</li>
      <li>每波袭击首先会从下列组合中按概率随机选取一种作为袭击生物的种类，然后按照各自的召唤【权重】以及【袭击值】按序进行出怪的分配，以形成一个出怪序列。若最后剩余的【袭击值】不足以召唤部分点数需求高的生物，则将其剔除后按照剩余生物的【权重】继续进行分配，如此往复，直至最大限度利用【袭击值】。</li>
      <li>每波袭击最多召唤20个【袭击生物】。若以上述方式在同一波袭击中分配的出怪序列长度＞20，则将序列中20个以后的每个【袭击生物】的血量叠加到前20个中随机一个与之同名的【袭击生物】上，自身则最终不再被召唤。</li>
      <li>以下为<span class="color-important">【昭示星光之愿】</span>可能出现的【袭击生物】组合、对应概率、对应种类、对应【袭击值】、对应召唤【权重】。</li>
    </ul>
    <h6>武器<span class="color-important">【昭示星光之愿】</span>：</h6>
    <ul>
      <li><span class="color-important">组合①（30%）</span><br>
        【蜘蛛】：1点，权重2<br>
        【洞穴蜘蛛】：2点，权重1<br>
        【蜘蛛战士】：4点，权重1<br>
        【喷射蜘蛛】：4点，权重1</li>

      <li><span class="color-important">组合②（30%）</span><br>
        【青蛙】：1点，权重2<br>
        【明眼青蛙】：2点，权重1<br>
        【火药猴】：2点，权重1<br>
        【坎普斯】：4点，权重1</li>

      <li><span class="color-important">组合③（20%）</span><br>
        【猪人守卫】：4点，权重1<br>
        【皇家兔子警卫】：4点，权重1<br>
        【变异鱼人守卫】：4点，权重1<br>
        【蟹骑士】：6点，权重1</li>

      <li><span class="color-important">组合④（20%）</span><br>
        【墨荒-躁动】：8点，权重1<br>
        【墨荒-狞笑】：8点，权重1<br>
        【墨荒-刮擦】：12点，权重1<br>
        【墨荒-尖叫】：12点，权重1</li>

      <li>每成功转化升级一次，<span class="color-important">【昭示星光之愿】</span>位面伤害+2。</li>
      <li>并将名称更改为<span class="color-important">【昭示星光之愿】</span>+n，n为当前武器成功转化升级的次数。</li>
    </ul>
    <h5 id="item-design-special-item-body">5.专属身体/头部装备</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <!-- 第一组：SOH 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_armor.webp" alt="科研者之星" width="40px"><br>科研者之星</td>
          <td>装备/身体</td>
          <td>“真理”</td>
          <td>①兔绒*2<br>
              ②采下的芦苇*4<br>
              ③针线包*1<br>
              ④飞燕草*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              储物空间格数10<br>
              电表插槽格数4<br>
              防御30%，耐久630<br><br>

              耐久降至0时不消失，<br>
              但会立刻掉落至地面并无法装备。<br>
              使用【星空修补套件】修补100%耐久。<br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              ①初始拥有10格储物空间的背包。<br>
              ②初始拥有4格电表插槽。<br>
              ③<span class="color-important">放在地面上时</span>可给予其【自动修理机】【弹性空间制造器】，<br>
              每种限给予一次且均会令其立刻弹出储物空间及电表插槽中的所有物品，并将储物空间格数增加2，电表插槽格数增加2。<br><br>

              ④可给予以下物品增强此装备的生存向属性。<br>
              【雨伞】：60点【隔热】<br>
              【羽毛扇】：60点【隔热】<br>
              【花衬衫】：60点【隔热】<br>
              【清凉夏装】：60点【隔热】<br>
              【雨衣】：80%【防水]，【绝缘】<br>
              <span class="color-important">（以上每种上限给予1次）</span><br><br>

              ⑤可给予以下物品增强此装备的战斗向属性。<br>
              【木甲】：5%【防御】<br>
              【鳞甲】：5%【防御】<br>
              【暗夜甲】：5%【防御】<br>
              【铥矿甲】：5%【防御】<br>
              【大理石甲】：5%【防御】<br>
              【绝望石盔甲】：5%【防御】<br>
              【亮茄盔甲】：5点【位面防御】<br>
              <span class="color-important">（以上每种上限给予2次）</span><br>
              【D32钢】*1：315点【耐久上限】<br>
              <span class="color-important">（以上每种上限给予6次）</span><br><br>
              
               <span class="color-important">说明-其余设定：</span><br>
              ①装备时每90秒自动回复1格电荷。除此之外无法通过任何手段获取电荷。
          </td>
        </tr>

        <!-- 第二组：S1- 行 -->
        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_hat.webp" alt="科研者之愿" width="40px"><br>科研者之愿</td>
          <td>装备/头部</td>
          <td>“真理”</td>
          <td>①猫尾*2<br>
              ②绳子*2<br>
              ③针线包*1<br>
              ④飞燕草*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              免疫沙尘暴/月亮风暴<br>
              防御30%，耐久630<br><br>

              耐久降至0时不消失，<br>
              但会立刻掉落至地面并无法装备。<br>
              使用【星空修补套件】修补100%耐久。<br><br>

              <span class="color-important">说明-基础特性：</span><br>
              ④可给予以下物品增强此装备的生存向属性。<br>
              【猫帽】：60点【保暖】<br>
              【冬帽】：60点【保暖】<br>
              【兔耳罩】：60点【保暖】<br>
              【牛角帽】：60点【保暖】<br>
              【贝雷帽】：+6/min【理智值回复】<br>
              【雨帽】：80%【防水]，【绝缘】<br>
              <span class="color-important">（以上每种上限给予1次）</span><br><br>

              ⑤可给予以下物品增强此装备的战斗向属性。<br>
              【养蜂帽】：5%【防御】<br>
              【蜂王冠】：5%【防御】<br>
              【饼干切割机帽子】：5%【防御】<br>
              【亮茄头盔】：5【位面防御】<br>
              【铥矿皇冠】：15%【力场护盾】触发概率<br>
              【W.A.R.B.I.S.头戴齿轮】：10%【移速】<br>
              <span class="color-important">（以上每种上限给予2次）</span><br>
              【生物数据】*10：5%【防御】<br>
              【D32钢】*1：315点【耐久上限】<br>
              <span class="color-important">（以上每种上限给予6次）</span><br><br>
          </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-special-item-building">6.【星源】专属物品/建筑</h5>
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
          <td>生物扫描分析仪</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①电子元件*1<br>
              ②蜘蛛丝*1
          </td>
          <td>*仅【星源】可制作与使用<br>
              *功能与WX-78的该物品相同
          </td>
        </tr>

        <tr>
          <td>电路提取器</td>
          <td>物品/功能</td>
          <td>初始解锁</td>
          <td>①树枝*2<br>
              ②石头*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              *功能与WX-78的该物品相同
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/astgenne_wings.webp" alt="翱翔星海之翼" width="40px"><br>翱翔星海之翼</td>
          <td>装备/身体</td>
          <td>“真理”</td>
          <td>①邪天翁羽毛*66<br>
              ②生物数据*66<br>
              ③杯装刚毅勇气*6<br>
              ④壶装乐观混合剂*6
          </td>
          <td>*仅【星源】可制作<br>
              *仅【星极】【星源】可使用<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              耐久8分钟<br>
              使用【邪天翁羽毛】修补25%耐久，<br>
              【星空修补套件】修补100%耐久。<br>
              <span class="color-important">说明-基础特性：</span><br>
              ①装备后右键该物品进入【飞行】，<br>
              再右键/卸下该物品解除【飞行】。<br>
              ②耐久降至0不会消失，<br>
              但会立刻掉落至物品栏并无法再装备。<br>
              ③装备时使玩家获得类似【矿工帽】的范围发光效果。<br>
              <span class="color-important">说明-特殊状态【飞行】：</span><br>
              ①饥饿速率变为4倍，即-37.5/min。<br>
              ②移速+20%，可以踏海与虚空。<br>
              ③每次进行【采集】【工作】等时，<br>
              立刻额外消耗2秒耐久。<br>
              ④每次进行【攻击】时，<br>
              立刻额外消耗20秒耐久。<br>
              <span class="color-important">说明-其余设定</span>：<br>
              ①只要装备，无论是否处于【飞行】状态，<br>
              都会随时间消耗耐久。
              </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_key.webp" alt="黯淡星河之钥" width="40px"><br>黯淡星河之钥</td>
          <td>物品/功能</td>
          <td>“真理”</td>
          <td>①暗影香炉/骨头头盔/骨头盔甲*1<br>（三者选其一）<br>
              ②远古钥匙*1<br>
              ③铥矿*2<br>
              ④生物数据*16
          </td>
          <td>*仅【星源】可制作<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              给予未处于冷却时间的远古大门后会立刻<br>
              触发【遗迹重置】，并消耗。<br>
              （跳过【远古织影者】的 BOSS战）<br>
              <span class="color-important">说明-其余设定</span>：<br>
              类似【远古钥匙】，属于【独特物品】
              </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_bouquet.webp" alt="飞燕草花束" width="40px"><br>飞燕草花束</td>
          <td>装备/手部</td>
          <td>“真理”</td>
          <td>①飞燕草*4<br>
              ②花瓣*4<br>
              ③蓝色羽毛*2<br>
              ④捆绑包装*1
          </td>
          <td>*仅【星源】可制作<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              攻击力4.25，攻击范围2<br>
              移速+20%，无耐久<br>
              <span class="color-important">说明-基础特性：</span><br>
              ①拥有【锤】功能，效率100%<br>
              ②攻击不会引起连锁仇恨。<br>
              ③手持时可快速收获【蜂箱】并且不会引起【蜜蜂】仇恨。<br>
              ④手持时不会引起【杀人蜂】以及春季【蜜蜂】的主动仇恨。
              </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_base.webp" alt="微星投影仪" width="40px"><br>微星投影仪</td>
          <td>建筑/功能</td>
          <td>“真理”</td>
          <td>①约束静电*1<br>
              ②带孔月岩*1<br>
              ③D32钢*1<br>
              ④生物数据*16
          </td>
          <td>*仅【星源】可制作<br>
              <span class="color-important">*不可燃烧，不可拆解</span><br><br>

              <span class="color-important">说明-基础特性：</span><br>
              ①是拥有上下2格储物空间的容器，左边1格只能放入【唤星者魔杖】【唤月者魔杖】。<br>
              右边1格只能放入【启迪碎片】。<br><br>
              ②只放入魔杖时，其获得自然耐久回复，效率为+1%/8分钟。<br>
              在同时放入魔杖和启迪碎片时，其耐久回复效率提高至+1%/4分钟。<br><br>

              ③置入其中的【唤星者魔杖】【唤月者魔杖】耐久回复至100%时，会立刻消耗5%耐久，<br>
              在投影仪中心位置生成对应的矮星/极光。（持续时间不同于原版，皆变为20分钟）
              </td>
        </tr>

      </tbody>

    </table>

    <h5 id="item-design-special-item-experiment">7.【星源】专属实验</h5>
    <ul>
      <li>以下专属实验的制作不会保留原型体配方，每次制作均需要靠近【实验操作台】</li>
    </ul>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td>乐观实验</td>
          <td>①蝴蝶翅膀*1<br>
              ②蜘蛛腺*1<br>
              ③蚊子血囊*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【瓶装乐观混合剂】*1<br>
              1/3概率获得【壶装乐观混合剂】*1
          </td>
        </tr>

        <tr>
          <td>活力实验</td>
          <td>①红蘑菇*1<br>
              ②胡萝卜*1<br>
              ③火荨麻*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【瓶装活力混合剂】*1<br>
              1/3概率获得【壶装活力混合剂】*1
          </td>
        </tr>

        <tr>
          <td>勇气实验</td>
          <td>①花瓣*1<br>
              ②蕨叶*1<br>
              ③必忘我*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【少许刚毅勇气】*1<br>
              1/3概率获得【杯装刚毅勇气】*1
          </td>
        </tr>

        <tr>
          <td>悲意实验</td>
          <td>①荧光果*1<br>
              ②无花果*1<br>
              ③夜梅*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【少许沉沦悲意】*1<br>
              1/3概率获得【杯装沉沦悲意】*1
          </td>
        </tr>
        <tr>
          <td>月光实验</td>
          <td>①月树花*1<br>
              ②月蛾翅膀*1<br>
              ③月亮碎片*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【月亮精华液】*2<br>
              1/3概率获得【月亮精华液】*3
          </td>
        </tr>
        <tr>
          <td>暗影实验</td>
          <td>①木炭*4<br>
              ②活木*1<br>
              ③噩梦燃料*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【完全正常的树根】*2<br>
              1/3概率获得【完全正常的树根】*3
          </td>
        </tr>
        <tr>
          <td>镜面实验</td>
          <td>①飞燕草*1<br>
              ②月亮碎片*1<br>
              ③沙之石*2
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【空瓶子】*1<br>
              1/3概率获得【空瓶子】*2
          </td>
        </tr>
        <tr>
          <td>位面实验</td>
          <td>①飞燕草*2<br>
              ②纯粹辉煌*1<br>
              ③亮茄外壳*1
          </td>
          <td>*仅【星源】可制作<br>
              2/3概率获得【位面晶体炸弹】*2<br>
              1/3概率获得【辉煌晶体炸弹】*2
          </td>
        </tr>
      </tbody>

    </table>
        <h5 id="item-design-special-item-experiment-product">8.【星源】专属实验产物</h5>
        <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_potions_energy.webp" alt="瓶装活力混合剂" width="40px"><br>瓶装活力混合剂</td>
          <td>好东西/功能<br>堆叠上限20</td>
          <td>*【活力实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              属于【好东西】，食用后<br>
              ①饱食度+0，理智值+0，生命值-5<br>
              ②获得8分钟的20%加速效果<br>
              ③生效时重复食用刷新持续时间，效果不叠加。<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①食用后会覆盖之前的【壶装活力混合剂】持续时间。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_potions_energy_big.webp" alt="壶装活力混合剂" width="40px"><br>壶装活力混合剂</td>
          <td>好东西/功能<br>堆叠上限20</td>
          <td>*【活力实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              属于【好东西】，食用后<br>
              ①饱食度+0，理智值+0，生命值-15<br>
              ②获得24分钟的20%加速效果<br>
              ③生效时重复食用刷新持续时间，效果不叠加。<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①食用后会覆盖之前的【瓶装活力混合剂】持续时间。
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_potions_sadness.webp" alt="少许沉沦悲意" width="40px"><br>少许沉沦悲意</td>
          <td>好东西/功能<br>堆叠上限20</td>
          <td>*【悲意实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              属于【好东西】，食用后<br>
              ①饱食度+0，理智值+5，生命值+0<br>
              ②获得8分钟的夜视效果，滤镜同夜梅<br>
              ③生效时重复食用刷新持续时间，效果不叠加。<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①食用后会覆盖之前的【杯装沉沦悲意】持续时间。
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_potions_sadness_big.webp" alt="杯装沉沦悲意" width="40px"><br>杯装沉沦悲意</td>
          <td>好东西/功能<br>堆叠上限20</td>
          <td>*【悲意实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              属于【好东西】，食用后<br>
              ①饱食度+0，理智值-15，生命值+0<br>
              ②获得24分钟的夜视效果，滤镜同夜梅<br>
              ③生效时重复食用刷新持续时间，效果不叠加。<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①食用后会覆盖之前的【少许沉沦悲意】持续时间。
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_bombs_husk.webp" alt="位面晶体炸弹" width="40px"><br>位面晶体炸弹</td>
          <td>装备/手部<br>堆叠上限20</td>
          <td>*【位面实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              攻击范围8，伤害200/500<br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              ①使用方法类似【亮茄炸弹】，落地立即爆炸，<br>
              对4范围内所有生物造成伤害。<br>
              ②若目标不拥有/拥有【位面实体抵抗】，<br>
              则对应造成200/500点位面伤害；<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①会对使用者自身造成伤害。<br>
              ②不会对自身以外的其它玩家造成伤害。<br>
              ③会摧毁范围内的物体，该效果属于强力开采。<br>
              ④造成的伤害会使生物仇恨玩家。
          </td>
        </tr>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_bombs_purebrilliance.webp" alt="辉煌晶体炸弹" width="40px"><br>辉煌晶体炸弹</td>
          <td>装备/手部<br>堆叠上限20</td>
          <td>*【位面实验】生成的衍生物品<br>
              <span class="color-important">*不可燃烧，不可拆解，不可沉没</span><br>
              攻击范围8，伤害400/1000<br><br>
              
              <span class="color-important">说明-基础特性：</span><br>
              ①使用方法类似【亮茄炸弹】，落地立即爆炸，<br>
              对4范围内所有生物造成伤害。<br>
              ②若目标不拥有/拥有【位面实体抵抗】，<br>
              则对应造成400/1000点位面伤害；<br>
              <span class="color-important">说明-其余设定：</span><br>
              ①会对使用者自身造成伤害。<br>
              ②不会对自身以外的其它玩家造成伤害。<br>
              ③会摧毁范围内的物体，该效果属于强力开采。<br>
              ④造成的伤害会使生物仇恨玩家。
          </td>
        </tr>
      </tbody>

    </table>
    <h5 id="item-design-special-item-item">9.晋升/专精用物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td>一级晋升凭证【星源】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*1<br>
              ②羽毛笔*1<br>
              ③红色月眼*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至1<br>
              *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>二级晋升凭证【星源】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*1<br>
              ②羽毛笔*1<br>
              ③绿色月眼*2
          </td>
          <td>*仅【星源】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至2<br>
              *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>三级晋升凭证【星源】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*1<br>
              ②羽毛笔*1<br>
              ③飞燕草*66
          </td>
          <td>*仅【星源】可制作与使用<br>
              *使用后令对应角色精英化阶段提升至3<br>
              *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>技巧概要·卷1【双端导流】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*4<br>
              ②蓝色羽毛*8<br>
              ③废料*8<br>
              ④生命值*75
          </td>
          <td>*仅【星源】可制作与使用<br>
              *使用后令对应角色对应技能阶段提升至【专精一】<br>
              *使用方式类似阅读书籍
              </td>
        </tr>

        <tr>
          <td>技巧概要·卷2【双端导流】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*8<br>
              ②蓝色羽毛*16<br>
              ③拾荒尖帽*1<br>
              ④生命值*95
          </td>
          <td>*仅【星源】可制作与使用<br>
            *使用后令对应角色对应技能阶段提升至【专精二】<br>
            *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>技巧概要·卷3【双端导流】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*12<br>
              ②蓝色羽毛*24<br>
              ③视界扩展器*1<br>
              ④生命值*115
          </td>
          <td>*仅【星源】可制作与使用<br>
            *使用后令对应角色对应技能阶段提升至【专精三】<br>
            *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>技巧概要·卷1【星束交汇】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*4<br>
              ②蓝色羽毛*8<br>
              ③齿轮*8<br>
              ④生命值*75
          </td>
          <td>*仅【星源】可制作与使用<br>
              *使用后令对应角色对应技能阶段提升至【专精一】<br>
              *使用方式类似阅读书籍
              </td>
        </tr>

        <tr>
          <td>技巧概要·卷2【星束交汇】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*8<br>
              ②蓝色羽毛*16<br>
              ③星象探测仪*1<br>
              ④生命值*95
          </td>
          <td>*仅【星源】可制作与使用<br>
            *使用后令对应角色对应技能阶段提升至【专精二】<br>
            *使用方式类似阅读书籍
          </td>
        </tr>

        <tr>
          <td>技巧概要·卷3【星束交汇】</td>
          <td>物品/功能</td>
          <td>制图桌</td>
          <td>①莎草纸*12<br>
              ②蓝色羽毛*24<br>
              ③星象护目镜*1<br>
              ④生命值*115
          </td>
          <td>*仅【星源】可制作与使用<br>
            *使用后令对应角色对应技能阶段提升至【专精三】<br>
            *使用方式类似阅读书籍
          </td>
        </tr>

      </tbody>

    </table>
    <h5 id="item-design-special-item-other">10.其余特殊物品</h5>
    <table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>物品类型</th>
          <th>解锁方式</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_candymachine.webp" alt="“全是兔兔”糖果机" width="40px">“全是兔兔”糖果机</td>
          <td>建筑/功能</td>
          <td>蓝图解锁</td>
          <td>①兔绒*4<br>
              ②太妃糖*4<br>
              ③节日欢愉*2<br>
              ④哀悼荣耀*8
              </td>
          <td>
              <span class="color-important">*不可燃烧，不可拆解</span><br>
              在【冬季】每人每天可使用1次。<br>
              可以摇出随机调味的【太妃糖】或者【彩虹糖豆】。<br><br>
              
              80%概率获得【太妃糖】*1，<br>
              （每种口味均占20%）<br>
              20%概率获得【彩虹糖豆】*1，<br>
              (每种口味均占5%)<br><br>

              <span class="color-important">说明-获取方式：</span><br>
              在【冬季】与同一只【和善兔王】交易满3次后获得一个对应蓝图。<br>
              （一只【和善兔王】限获得一次）<br><br>
              
              <span class="color-important">说明-其余设定：</span><br>
              ①在摇出【辣太妃糖】【辣彩虹糖豆】时，有20%概率在原地生成一只白色兔子。
          </td>
        </tr>

        <tr>
          <td><img src="@/assets/astesia-astgenne/ast_rabbitlamp.webp" alt="兔兔落地灯" width="40px">兔兔落地灯</td>
          <td>建筑/功能</td>
          <td>蓝图解锁</td>
          <td>①兔绒*2<br>
              ②荧光果*4<br>
              ③生物数据*8<br>
              ④黄宝石*1
          </td>
          <td>
              <span class="color-important">*不可燃烧，不可拆解</span><br>
              照明用建筑，进入夜晚时自动点亮<br>
              发出半径距离8的普通光照<br><br>

              <span class="color-important">说明-获取方式：</span><br>
              给予非坍塌的兔洞胡萝卜时，每次有5%概率获得一个对应蓝图。
          </td>
        </tr>
      </tbody>
    </table>
    <h5 id="item-design-new-recipe">11.新增专属原版配方</h5>
<table class="other-system-table">
    <thead>
        <tr>
          <th>物品名称</th>
          <th>制作材料</th>
          <th>效果简述</th>
        </tr>
      </thead>

    <tbody>
        <tr>
          <td>生物数据</td>
          <td>①蝴蝶翅膀*4<br>
              ②灰烬*4<br>
              ③飞燕草*1<br>
              ④理智值*20
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>

        <tr>
          <td>哀悼荣耀</td>
          <td>①生物数据*6<br>
              ③飞燕草*1<br>
              ④理智值*20
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>月亮碎片</td>
          <td>①月岩*2<br>
              ②生物数据*2<br>
              ③飞燕草*1<br>
              ④理智值*20
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>邪天翁羽毛</td>
          <td>①饼干切割机外壳*2<br>
              ②生物数据*2<br>
              ③飞燕草*1<br>
              ④理智值*20
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>蜜脾</td>
          <td>①蜂蜜*40<br>
              ②生物数据*4<br>
              ③飞燕草*2<br>
              ④理智值*40
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>荆棘陷阱</td>
          <td>①活木*2<br>
              ②生物数据*4<br>
              ③飞燕草*2<br>
              ④理智值*40
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>废料</td>
          <td>①烂电线*4<br>
              ②生物数据*8<br>
              ③飞燕草*4<br>
              ④理智值*80
              </td>
          <td>
            *一次性制作4个
          </td>
        </tr>
        <tr>
          <td>约束静电</td>
          <td>①齿轮*4<br>
              ②生物数据*8<br>
              ③飞燕草*4<br>
              ④理智值*80
              </td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>启迪碎片</td>
          <td>①纯粹辉煌*20<br>
              ②生物数据*20<br>
              ③飞燕草*10<br>
              ④理智值*200
              </td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>种子包</td>
          <td>①种子*1<br>
              ②胡萝卜*1<br>
              ③飞燕草*1
              </td>
          <td>
            *一次性制作1个
          </td>
        </tr>
        <tr>
          <td>高级种子包</td>
          <td>①种子*2<br>
              ②胡萝卜*1<br>
              ③飞燕草*2
          </td>
          <td>
            *一次性制作1个
          </td>
        </tr>
      </tbody>
    </table>

    <h4 id="other-matters">⑦其余事项</h4>
    <h5 id="other-mod-config">1.模组配置</h5>
    <ul>
      <li>语言：<br>
      语言
      </li>
      <li>按键设置：<br>
      【星源】信息显示按键设置<br>
      星源【星束交汇】按键设置<br>
      【群星闪烁相映】按键设置
      </li>
      <li>难度调节：<br>
      【星源】初始精英化等级<br>
      【星源】等级提升难度<br>
      </li>
    </ul>
    <h5 id="other-mod-compatibility">2.模组兼容</h5>
    <p>目前已知的在模组兼容上可能存在的问题包括：</p>
    <ul>
      <li>
        1.与其余有修改过【WX-78】相关内容的模组可能存在冲突，请关闭相关改动再尝试游玩。<br>
        例如：Uncompromising Mode（永不妥协）
      </li>
      <li>
        2.与【神话书说】存在未知冲突，会导致家燕无法正常生成。
      </li>
    </ul>
  </main>

</body>
</template>

<script setup lang="ts">
import navigation from './components/navigation.vue'

import { reactive, onMounted, watch, ref } from 'vue'

type MenuKey = 'traits' | 'level' | 'skill' | 'item' | 'other'

const open = reactive<Record<MenuKey, boolean>>({
  traits: false,
  level: false,
  skill: false,
  item: false,
  other: false
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
