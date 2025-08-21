<template>
  <div class="notice-container">
    <!-- 返回主页按钮 -->
    <div class="header">
      <div class="back-button" @click="goToHome">
        <span class="arrow">←</span> 返回主页
      </div>
      <h1>公告 Notice</h1>
      <p>关于本站的一些说明</p>
    </div>

    <!-- 公告正文 -->
    <div class="notice-box">
      <p>本站由 <b>GitHub Pages</b> 免费托管，可能会遇到访问延迟或图片加载缓慢的情况。</p>
      <p>
        若访问不畅，可以切换至
        <a href="https://shirokagenemu.site/dstmain" target="_blank">备用站点</a>。
        （更新不会及时同步，也可能随时挂掉）
      </p>
      <p>
        本站资源均存放于公开仓库，如遇加载错误或页面缺失，可通过
        <a
          href="https://github.com/dst-AstesiaAstgenne/dst-AstesiaAstgenne.github.io/issues"
          target="_blank"
          >GitHub Issues</a
        >
        反馈。
      </p>
      <p>本站仅为模组资料整理与展示，不代表游戏官方立场，不代表模组作者立场。</p>
      <hr>
      <p>之前修改构建方式和开发环境导致不少信息出现问题（偷懒用python结果发现没弄好），在修了在修了。</p>
      <p>资源哪里来的？模组群、创意工坊介绍、介绍视频等。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goToHome = () => {
  router.push("/");
};
</script>

<style scoped>
.notice-container {
  max-width: 800px;
  margin: 60px auto;
  padding: 2rem 1rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
  position: relative;
}

.back-button {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  color: #3498db;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #f0f9ff;
}

.arrow {
  margin-right: 8px;
  font-size: 1.2rem;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.header p {
  color: #666;
  font-size: 1rem;
}

.notice-box {
  background: #fff3cd;
  border: 1px solid #ffeeba;
  padding: 20px;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}

.notice-box a {
  color: #007acc;
  text-decoration: underline;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }
  .notice-box {
    font-size: 1rem;
  }
}
</style>
