<template>
  <div v-if="post" class="post-detail">
    <!-- 使用 router.back() 返回上一页 -->
    <button @click="goBack" class="back-to-list">返回</button>

    <h1>{{ post.title }}</h1>
    <p>{{ post.date }}</p>
    <div v-html="post.content"></div>
  </div>
  <div v-else>
    <p>文章未找到。</p>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {READING} from "@/data/art";

const route = useRoute();
const router = useRouter();
const post = ref(null);
const pages = ref(0);

// 模拟文章数据
const postsData = [
  {slug: 'vue-2', title: 'Vue 2 入门教程', date: '2025-06-01', content: '这是 Vue 2 的内容'},
  {slug: 'vue-3', title: 'Vue 3 入门教程', date: '2025-07-01', content: '这是 Vue 3 的内容'}
];

onMounted(() => {
  const postSlug = route.params.slug;
  post.value = postsData.find(item => item.slug === postSlug);
  pages.value = READING; // 记录阅读状态
});

// 返回上一页
const goBack = () => {
  router.back();
  // eslint-disable-next-line no-import-assign
  READING = pages.value-1; // 恢复阅读状态
};
</script>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.back-to-list {
  display: inline-block;
  padding: 10px 20px;
  background-color: #66ccff;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}

.back-to-list:hover {
  background-color: #3399cc;
}
</style>
