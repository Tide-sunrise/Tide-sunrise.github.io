<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  posts: {
    type: Array,
    default: () => []
  },
  selectedCategories: {
    type: Array,
    default: () => []
  }
});

const filteredPosts = computed(() => {
  if (props.selectedCategories.length === 0) {
    return props.posts; // 如果没有选中分类，显示所有文章
  }
  return props.posts.filter(post => props.selectedCategories.includes(post.category));
});
</script>

<template>
  <div class="posts">
    <h2>最新文章</h2>
    <article v-for="(post, index) in filteredPosts" :key="index" class="post-card">
      <div class="image-container">
        <img :src="post.image" alt="Post image" class="post-image"/>
      </div>
      <div class="content-container">
        <div class="title-date-container">
          <h3 class="title">
            <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
          </h3>
          <p class="date">{{ post.date }}</p>
        </div>
        <p class="summary">{{ post.summary }}</p>
        <div class="last-container">
          <div class="category">
            <span class="category-label">分类: </span>
            <span class="category-name">{{ post.category }}</span>
          </div>
          <router-link :to="`/post/${post.id}`" class="read-more">阅读全文 →</router-link>
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
  width: 75%;
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
