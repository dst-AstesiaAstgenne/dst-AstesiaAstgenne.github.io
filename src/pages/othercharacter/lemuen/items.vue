<template>
  <navigation />
  <button class="sidebar-toggle" @click="toggleSidebar">目录</button>
  <aside class="sidebar" :class="{ active: isSidebarActive }">
    <sidebar />
  </aside>
  <main v-if="currentPage">
    <h1 style="font-size: 48px;">{{ currentPage.details?.name}}</h1>
    <h3 style="margin-bottom: 20px;">{{ currentPage.subtitle }}</h3>

    <div class="main-container">
      <!-- 左侧 -->
      <div class="left-container">
        <div class="avatar-container">
          <img 
            v-for="(, key) in currentPage.avatars"
            :key="key"
            :src="`/images/description/${key}2.webp`"
            :alt="key"
            class="avatar"
            :class="{ active: activeAvatar[currentPage.id] === key }"
            @click="setActiveAvatar(currentPage.id, key)"
          />
        </div>
        <div class="description-container" v-html="currentPage.avatars[activeAvatar[currentPage.id]]">
        </div>

        <div class="analysis-container">
          <ul>
            <!-- 单条氛围 -->
            <li 
              v-for="(desc, index) in currentPage.description?.single || []" 
              :key="'single-' + index" 
              v-html="desc"
              style="margin-bottom: 20px;"
            ></li>

            <!-- 多条氛围 -->
            <li 
              v-for="(desc, index) in currentPage.description?.multi || []" 
              :key="'multi-' + index" 
              v-html="desc"
            ></li>

            <li>
              <div v-if="currentPage.craftableItems" class="craftable-items">
                <div class="craftable-label">
                  <span class="color-important">可制作：</span>
                </div>
                <div class="craftable-list">
                  <RouterLink 
                    v-for="item in currentPage.craftableItems" 
                    :key="item.name" 
                    :to="item.link" 
                    class="craftable-item"
                  >
                    <img :src="item.image" :alt="item.name" />
                    <span>{{ item.name }}</span>
                  </RouterLink>
                </div>
              </div>
            </li>


            <hr>

            <!-- tip -->
            <li v-for="(tip, index) in currentPage.tip || []" 
                :key="'tip-' + index" 
                v-html="tip"
            ></li>
          </ul>

          
          </div>
        </div>

      <!-- 右侧：详情页 -->
      <div class="right-container" v-if="currentPage.details">
        <h2 style="color: #007acc;">{{ currentPage.details.name }}</h2>
        <p>{{ currentPage.details.code }}</p>
        <hr>
        <img :src="`${currentPage.details.image}`" 
             :alt="currentPage.details.name" width="100px" />
        <hr>
        <p v-if="currentPage.details.category">分类：<span v-html="currentPage.details.category"></span></p>
        <p v-if="currentPage.details.stack">堆叠上限：{{ currentPage.details.stack }}</p>
        <p v-if="currentPage.details.unlock">解锁方式：<span v-html="currentPage.details.unlock"></span></p>
        <p v-if="currentPage.details.materials">制作材料：<br>
          <span v-for="mat in currentPage.details.materials" :key="mat">{{ mat }}<br></span>
        </p>
        <p v-if="currentPage.cooking?.requirement">
          烹饪条件：<br>
          <span v-for="(mat, index) in currentPage.cooking.requirement" :key="'cookingmat-' + index">{{ mat }}<br></span>
        </p>
        <p v-if="currentPage.cooking?.limit">
          烹饪限制：<br>
          <span v-for="(mat, index) in currentPage.cooking.limit" :key="'cookinglimit-' + index">{{ mat }}<br></span>
        </p>
        <p v-if="currentPage.cooking?.time">
          烹饪时间：{{ currentPage.cooking.time }}
        </p>
      </div>

    </div>

    <h1 style="font-size: 48px;">{{ currentPage.details2?.name}}</h1>
    <h3 style="margin-bottom: 20px;">{{ currentPage.subtitle2 }}</h3>
    <div class="main-container">
      <!-- 左侧 -->
      <div class="left-container">
        <div class="avatar-container">
          <img 
            v-for="(, key) in currentPage.avatar2"
            :key="key"
            :src="`/images/description/${key}2.webp`"
            :alt="key"
            class="avatar"
            :class="{ active: activeAvatar[currentPage.id] === key }"
            @click="setActiveAvatar(currentPage.id, key)"
          />
        </div>
        <!-- <div class="description-container" v-html="currentPage.avatar2[activeAvatar[currentPage.id]]">
        </div> -->
      </div>
      <div class="right-container" v-if="currentPage.details2">
        <h2 style="color: #007acc;">{{ currentPage.details2.name }}</h2>
        <p>{{ currentPage.details2.code }}</p>
        <hr>
        <img :src="`${currentPage.details2.image}`" 
             :alt="currentPage.details2.name" width="100px" />
        <hr>
        <p v-if="currentPage.details2.category">分类：<span v-html="currentPage.details2.category"></span></p>
        <p v-if="currentPage.details2.stack">堆叠上限：{{ currentPage.details2.stack }}</p>
        <p v-if="currentPage.details2.unlock">解锁方式：<span v-html="currentPage.details2.unlock"></span></p>
        <p v-if="currentPage.details2.materials">制作材料：<br>
          <span v-for="mat in currentPage.details2.materials" :key="mat">{{ mat }}<br></span>
        </p>
      </div>
    </div>

  </main>

  <main v-else>
    <p>未找到对应物品。</p>
  </main>
</template>

<script setup lang="ts">
import '@/pages/css/item.css'
import navigation from './components/navigation.vue'
import sidebar from './components/sidebar.vue'
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import items from './components/items.json'

interface Page {
  id: string
  title: string
  subtitle: string
  avatars: Record<string, string>
  description?: { single: string[]; multi?: string[] }
  tip?: string[]
  craftableItems?: { name: string; image: string; link: string }[]
  details?: { name: string; code: string; image: string; category: string; stack?: number; unlock?: string; materials?: string[] }
  cooking?:{ requirement?: string[]; time?: string; limit?: string[] }

  title2?: string
  subtitle2?: string
  avatar2?: Record<string, string>
  description2?: { single: string[]; multi?: string[] }
  tip2?: string[]
  details2?: { name: string; code: string; image: string; category: string; stack?: number; unlock?: string; materials?: string[] }
}

const typedPages: Page[] = items
const route = useRoute()
const currentId = ref(route.params.id as string)

watch(
  () => route.params.id,
  (newId) => {
    currentId.value = newId as string
    initActiveAvatar()
  }
)
watch(
  () => route.fullPath,
  () => {
    isSidebarActive.value = false
  }
)

const currentPage = computed(() => typedPages.find(p => p.id === currentId.value))

const activeAvatar = reactive<Record<string,string>>({})

function initActiveAvatar() {
  if (!currentPage.value) return
  const keys = Object.keys(currentPage.value.avatars)
  activeAvatar[currentPage.value.id] = keys[Math.floor(Math.random() * keys.length)]
}

onMounted(() => initActiveAvatar())

function setActiveAvatar(entryId: string, key: string) {
  activeAvatar[entryId] = key
}

// 侧边栏状态
const isSidebarActive = ref(false);

// 切换侧边栏状态
const toggleSidebar = () => {
  isSidebarActive.value = !isSidebarActive.value;
};


</script>

<style scoped>
/* 可以根据需要自定义样式 */
</style>
