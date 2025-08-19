<template>

  <body>
    <navigation />
    <aside class="sidebar">
      <h3 style="color: #007acc;">模组角色</h3>
      <ul>
        <li><router-link to="/astesia-astgenne">星极&星源</router-link></li>
        <li><router-link to="/othercharacter/surtrindex">史尔特尔</router-link></li>
        <li><router-link to="/othercharacter/duskindex">夕</router-link></li>
      </ul>

    </aside>

    <main>
      <header class="mod-info">
        <h1>饥荒联机版MOD介绍</h1>
        
      </header>

      <hr/>

      <section class="characters">
        <div class="character-list">
          <router-link to="/astesia-astgenne" class="character-link">
            <div class="character">
              <img src="@/assets/astesia-astgenne/astesia_none2.webp" alt="星极立绘" width="200px"><br/>
              <h5>星极</h5>
            </div>
            <div class="character">
              <img src="@/assets/astesia-astgenne/astgenne_none2.webp" alt="星源立绘" width="200px"><br/>
              <h5>星源</h5>
            </div>
          </router-link>
        </div>
        <h4>人物分区1</h4>
        <div class="character-list">
          <router-link to="/othercharacter/surtrindex" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/surtr/surtr_none.webp" alt="史尔特尔立绘" width="150px"><br/>
              <h5>史尔特尔</h5>
            </div>
          </router-link>
          <router-link to="/othercharacter/duskindex" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/dusk/dusk_none.webp" alt="夕立绘" width="150px"><br/>
              <h5>夕</h5>
            </div>
          </router-link>
          <!-- <router-link to="/othercharacter/arkshuindex" class="character-link">
            <div class="character">
              <img src="@/assets/othercharacter/arkshu/arkshu_none.webp" alt="黍立绘" width="150px"><br/>
              <h5>黍</h5>
            </div>
          </router-link> -->
        </div>
      </section>

    </main>
  </body>

</template>

<script setup lang="ts">
import navigation from './components/navigation.vue'


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
  display: flex;
  transition: transform 0.3s ease;
}
.character-link:hover {
  transform: scale(1.1);
}
</style>