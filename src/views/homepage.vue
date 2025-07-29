<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logo from '@/assets/logo.png';
import Header from '@/components/Header.vue';

import { ArrowUp } from '@element-plus/icons-vue';
import PostList from "@/components/PostList.vue";
import Sidebar from "@/components/Sidebar.vue";


const categories = ref(['Vue.js', 'JavaScript', '前端优化']);

const username = '朝汐';
const bio = '万物皆在万物之中';
const school = '中南大学';
const location = '湖南';

// 假设这些路径是动态的，或者是从父级传入的
const avatar = require('@/assets/avatar.png');  // 传递头像图片路径
const coverImage = require('@/assets/cover.jpg');  // 传递封面图片路径
const education = {
  school: '中南大学',
  degree: '本科',
  major: '计算机科学与技术',
  graduationYear: 2026,
  icon: require('@/assets/csu.png') // 假设这是学校图标的路径
};

const posts = [
  {
    title: '使用 Vue 构建 GitHub 个人主页',
    date: '2025-07-28',
    summary: '介绍如何使用 Vue CLI 创建项目并部署到 GitHub Pages。',
    link: '#',
    image: logo // 这里是示例图片链接
  },
  {
    title: '前端性能优化实战',
    date: '2025-06-10',
    summary: '从图片优化到懒加载，手把手教你优化前端性能。',
    link: '#',
    image: logo
  },
  {
    title: 'JavaScript 异步编程指南',
    date: '2025-05-22',
    summary: '彻底搞懂 async/await、Promise 和事件循环机制。',
    link: '#',
    image: logo
  }
];

// 控制返回顶部按钮显示
const showBackToTop = ref(false);

// 滚动事件监听
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300; // 滚动超过300px时显示按钮
};

// 滚动到顶部的函数
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动到顶部
  });
};

// 页面挂载时监听滚动事件
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// 页面卸载时移除滚动事件监听
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="page">
    <!-- 顶部导航 -->
    <div class="headers">
      <Header
          :username="username"
          :bio="bio"
          :school="school"
          :location="location"
          :avatar="avatar"
          :cover-image="coverImage"
          :education="education"
      />
    </div>

    <!-- 主体内容 -->
    <main class="container main-content">
      <PostList
        :posts="posts"
        :categories="categories"
      />


      <Sidebar
        :categories="categories"
      />
    </main>

    <!-- 返回顶部按钮 -->
    <div v-if="showBackToTop" @click="scrollToTop" class="back-to-top">
      <el-icon class="el-icon"><ArrowUp class="el-icons"/></el-icon>
    </div>

    <!-- 页脚 -->
    <footer class="footer">
      <p>&copy; 2025 MyBlog. 由 Vue 3 驱动。</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
/* 页面背景 */
$page-background: #f9f9f9;
$navbar-color: #66ccff;
$avatar-size: 80px;
$sidebar-background: #f0f0f0;
$primary-color: #66ccff;
$text-color: #333;
$footer-background: #eee;

/* 页面布局 */
.page {
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 30px;
  color: $text-color;
  background: $page-background;
  min-height: 100vh;

  .headers {
    margin: 0 auto;
    width: 120vh;
    border: 1px solid #ddd;
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .container{
    display: flex;
    flex-direction: row;
    padding: 2rem;
    margin: 0 auto;
    width: 120vh; /* 设置容器宽度 */
  }

  .footer {
    text-align: center;
    padding: 1rem;
    background-color: $footer-background;
    margin-top: 2rem;
  }

  /* 返回顶部按钮 */
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #66ccff, #0066cc);
    //color: white;
    width: 5vh;
    height: 5vh;
    border-radius: 10px;
    font-size: 1vh;
    display: flex;

    align-items: center;
    justify-content: center;

    //cursor: pointer;
    //border: none;
    //transition: opacity 0.3s;
    //z-index: 2;

    //.arrow {
    //  //font-size: 3.2rem;
    //  z-index: 5;
    //}

    &:hover {
      background: linear-gradient(135deg, #0066cc, #66ccff);
    }
    visibility: visible;

    .el-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icons {
        //font-size: 2.5vh; /* 设置图标大小 */
        color: white;     /* 设置图标颜色 */
        width: 2.5vh;
        height: 2.5vh;
      }
    }


    /* 按钮显示 */
    //opacity: 1;
    //transition: opacity 0.3s;
  }

  .back-to-top[style*="opacity: 1"] {
    opacity: 1;
  }
}

</style>
