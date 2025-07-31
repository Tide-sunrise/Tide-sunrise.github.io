<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  },
  selectedCategories: {
    type: Array,
    default: () => []
  }
})

// 根据选中的分类过滤文章
const filteredPosts = computed(() => {
  if (!props.selectedCategories || props.selectedCategories.length === 0) {
    return props.posts
  }
  return props.posts.filter(post => props.selectedCategories.includes(post.category))
})

// 点击文章标题或阅读全文时，触发事件告诉父组件“查看文章详情”
const viewPost = (slug) => {
  // 触发自定义事件，传递文章的 slug 或 id
  // 这个事件需要父组件监听 @view-post="handleViewPost"
  // 这样父组件就能知道用户点击了哪篇文章
  emit('view-post', slug)
}

const emit = defineEmits(['view-post'])
</script>

<template>
  <div class="posts">
    <h2>最新文章</h2>
    <!-- 遍历筛选后的文章 -->
    <article v-for="(post, index) in filteredPosts" :key="index" class="post-card" >
      <div class="image-container">
        <img :src="post.image" alt="Post image" class="post-image" />
      </div>
      <div class="content-container">
        <div class="title-date-container">
          <!-- 用普通元素替代 router-link，点击触发事件 -->
          <h3 class="title" @click="viewPost(post.slug)">
            {{ post.title }}
          </h3>
          <p class="date">{{ post.date }}</p>
        </div>
        <p class="summary">{{ post.summary }}</p>
        <div class="last-container">
          <div class="category">
            <span class="category-label">分类: </span>
            <span class="category-name">{{ post.category }}</span>
          </div>
          <a href="javascript:;" class="read-more" @click.prevent="viewPost(post.slug)">
            阅读全文 →
          </a>
        </div>
      </div>
    </article>
  </div>
</template>


<style lang="scss" scoped>
$primary-color: #66ccff;
$background-color: #f9f9f9;
$card-background: white;
$box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
$border-radius: 8px;
$padding: 1rem;

.posts {
  margin: 0 auto;
  width: 95%;
  margin-right: 5%;
  padding: 20px 0;

  h2 {
    text-align: center;
    font-size: 2rem;
    color: $primary-color;
    margin-bottom: 1.5rem;
  }

  .post-card {
    display: flex;
    gap: 1rem;
    background: $card-background;
    padding: $padding;
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    margin: 20px 0;

    .image-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 200px;
      height: 200px;
      border-radius: $border-radius;
      overflow: hidden;

      .post-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .content-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title-date-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;

        .title {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          text-decoration: none;

          &:hover {
            color: $primary-color;
          }
        }

        .date {
          color: #888;
          font-size: 0.9rem;
        }
      }

      /* 分类部分样式 */
      .category {
        margin-top: 10px;
        font-size: 0.9rem;
        color: #666;

        .category-label {
          font-weight: 500;
        }

        .category-name {
          color: $primary-color;
          font-weight: 600;
        }
      }

      .summary {
        color: #555;
        margin-bottom: 1rem;
      }

      .last-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .category {
          margin-top: 10px;
          font-size: 0.9rem;
          color: #666;

          .category-label {
            font-weight: 500;
          }

          .category-name {
            color: $primary-color;
            font-weight: 600;
          }
        }

        .read-more {
          text-decoration: none;
          color: $primary-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
