<script setup>
import logo from '@/assets/logo.png';
import Header from '@/components/Header.vue';


const username = '朝汐';
const bio = '万物皆在万物之中';
const school = '中南大学';
const location = '湖南';

// 假设这些路径是动态的，或者是从父级传入的
const avatar = require('@/assets/avatar.png');  // 传递头像图片路径
const coverImage = require('@/assets/cover.jpg');  // 传递封面图片路径
const education={
  school: '中南大学',
  degree: '本科',
  major: '计算机科学与技术',
  graduationYear: 2026,
  icon: require('@/assets/csu.png') // 假设这是学校图标的路径
}


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

<!--    <img src="@/assets/cover.jpg"/>-->
    <!-- 主体内容 -->
    <main class="container main-content">
      <div class="content-area">
        <!-- 文章列表 -->
        <h2>最新文章</h2>
        <div class="posts">
          <article v-for="(post, index) in posts" :key="index" class="post-card">
            <div class="image-container">
              <img :src="post.image" alt="Post image" class="post-image"/>
            </div>
            <div class="content-container">
              <div class="title-date-container">
                <h3 class="title">
                  <a :href="post.link">{{ post.title }}</a>
                </h3>
                <p class="date">{{ post.date }}</p>
              </div>
              <p class="summary">{{ post.summary }}</p>
              <a :href="post.link" class="read-more">阅读全文 →</a>
            </div>
          </article>
        </div>
      </div>

      <!-- 侧边栏 -->
      <aside class="sidebar">
        <div class="search-box">
          <input type="text" placeholder="搜索文章..." />
        </div>
        <div class="categories">
          <h3>分类</h3>
          <ul>
            <li><a href="#">Vue.js</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">前端优化</a></li>
          </ul>
        </div>
        <div class="recent-posts">
          <h3>近期文章</h3>
          <ul>
            <li><a href="#">如何优化前端性能</a></li>
            <li><a href="#">深度学习 Vue.js</a></li>
            <li><a href="#">从零开始了解异步编程</a></li>
          </ul>
        </div>
      </aside>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>&copy; 2025 MyBlog. 由 Vue 3 驱动。</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$page-background: #f9f9f9;
$navbar-color: #66ccff;
$avatar-size: 80px;
$sidebar-background: #f0f0f0;
$primary-color: #66ccff;
$text-color: #333;
$footer-background: #eee;

$header-background-color: #f9f9f9;
$username-color: #333;
$bio-color: #666;
$additional-info-color: #888;
$button-background-color: #eef2ff;
$button-text-color: #66ccff;


.page {
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 30px;
  color: $text-color;
  background: $page-background;
  min-height: 100vh;
  //margin: auto;

  .headers{
    margin: 0 auto;
    width: 120vh;
    //margin: 0 10%;
    border: 1px solid #ddd;
    border-radius: 30px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .container {
    display: flex;
    width: 120vh;
    margin: auto;
    padding: 1rem 10%;
    //border: 1px solid #ddd;
    .main-content {
      display: flex;
      gap: 2rem;
      flex: 1;

      .content-area {
        flex: 3;
      }

      .sidebar {
        flex: 1;
        background-color: $sidebar-background;
        padding: 1rem;
        border-radius: 8px;
      }
    }
  }

  .content-area {
    width: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    .post-card {
      margin: 20px 0;
      display: flex;
      gap: 1rem;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 200px; /* 固定图片宽度 */
        height: 200px; /* 固定图片高度 */
        border-radius: 8px;
        overflow: hidden;

        .post-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* 让图片填充整个容器 */
          object-position: center; /* 让图片居中显示 */
        }
      }

      .content-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title-date-container {
          display: flex;
          justify-content: space-between; /* 标题和日期两端对齐 */
          align-items: baseline; /* 确保标题和日期的垂直对齐 */
          margin-bottom: 1rem;
          width: 100%;
          .title {
            display: inline-block;  /* 改为 inline-block 或 flex */
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; /* 超过长度显示省略号 */
          }

          .date {
            color: #888;
            font-size: 0.9rem;
            margin-left: 1rem;
          }
        }



        .summary {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #555;
          text-align: left; /* 明确设置左对齐 */
        }


        .read-more {
          text-decoration: none;
          color: #66ccff;
          font-weight: bold;
          align-self: flex-end; /* 右对齐 */
        }
      }
    }
  }

  .sidebar {
    width: 20%;
    .search-box {
      width: 100%;
      input {
        //width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 8px;
      }
    }

    .categories,
    .recent-posts {
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        margin: 0.5rem 0;
      }

      a {
        text-decoration: none;
        color: $primary-color;
      }
    }
  }

  .footer {
    text-align: center;
    padding: 1rem;
    background-color: $footer-background;
    margin-top: 2rem;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .main-content {
      flex-direction: column;
    }

    .sidebar {
      margin-top: 2rem;
    }
  }
}

</style>
