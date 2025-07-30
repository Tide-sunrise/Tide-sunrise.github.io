<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import Header from '@/components/Header.vue';
import {ArrowUp} from '@element-plus/icons-vue';
// import PostList from "@/components/PostList.vue";
import Sidebar from "@/components/Sidebar.vue";


// 父组件状态：当前选中的分类
const selectedCategories = ref([]);

// 获取用户信息和文章数据
const username = '朝汐';
const bio = '万物皆在万物之中';
const school = '中南大学';
const location = '湖南';

const avatar = require('@/assets/avatar.png');
const coverImage = require('@/assets/cover.jpg');
const education = {
  school: '中南大学',
  degree: '本科',
  major: '计算机科学与技术',
  graduationYear: 2026,
  icon: require('@/assets/csu.png')
};

// 存储文章数据
const posts = ref([]);



// 使用 require.context 来动态加载 Markdown 文件
const requireArticles = require.context('@/articles', false, /\.md$/);

// 动态加载所有文章
const loadArticles = async () => {
  const articles = requireArticles.keys().map((file) => {
    const module = requireArticles(file);

    const { title, date, category, summary, image } = module.attributes || {};
    const content = module.html || '';

    // 使用标题生成一个 slug
    const slug = title
        .toLowerCase()
        .replace(/\s+/g, '-')  // 替换空格为-
        .replace(/[^\w-]/g, '') // 去掉非字母数字字符
        .replace(/-$/, '');     // 去掉末尾的短横线

    let imagePath = require(`@/assets/${image}`);

    return {
      slug,       // 生成 slug
      title,
      date,
      category,
      summary,
      content,
      image: imagePath,
    };
  });

  posts.value = articles;
};


// 控制返回顶部按钮显示
const showBackToTop = ref(false);

// 滚动事件监听
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300; // 滚动超过300px时显示按钮
};

// 滚动到顶部的函数
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'}); // 平滑滚动到顶部
};

// 页面挂载时监听滚动事件
onMounted(() => {
  loadArticles(); // 加载文章
  window.addEventListener('scroll', handleScroll);
});

// 页面卸载时移除滚动事件监听
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

// 通过计算属性获取唯一的分类
const categories = computed(() => {
  const allCategories = posts.value.map(post => post.category);
  return [...new Set(allCategories)];  // 使用 Set 去重
});

const navigateToPosts = () => {
  router.push({
    name: 'PostList',
    params: {
      posts: posts.value,  // 传递 posts 数据
      selectedCategories: selectedCategories.value  // 传递选中的分类
    }
  });
};
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
      <!-- 传递选中的分类到 PostList 组件 -->
      <div @click="navigateToPosts">
        <router-view/>
      </div>

      <!-- 传递 categories 给 Sidebar，监听分类选择 -->
      <Sidebar
          :categories="categories"
          v-model:selectedCategories="selectedCategories"
      />
    </main>

    <!-- 返回顶部按钮 -->
    <div v-if="showBackToTop" @click="scrollToTop" class="back-to-top">
      <el-icon class="el-icon">
        <ArrowUp class="el-icons"/>
      </el-icon>
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

  .container {
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
    width: 5vh;
    height: 5vh;
    border-radius: 10px;
    font-size: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: linear-gradient(135deg, #0066cc, #66ccff);
    }

    .el-icon {
      display: flex;
      align-items: center;
      justify-content: center;

      .el-icons {
        color: white;
        width: 2.5vh;
        height: 2.5vh;
      }
    }
  }

  .back-to-top[style*="opacity: 1"] {
    opacity: 1;
  }
}
</style>
