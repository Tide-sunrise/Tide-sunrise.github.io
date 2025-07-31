<script setup>
import { computed } from 'vue'

const props = defineProps({
  slug: String,
  posts: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['back'])

// 根据 slug 找到对应文章
const post = computed(() => {
  return props.posts.find(p => p.slug === props.slug) || null
})

const goBack = () => {
  emit('back')
}
</script>

<template>
  <div v-if="post" class="post-detail">
    <button @click="goBack" class="back-to-list">返回</button>
    <div class="underline"></div>

    <h1>{{ post.title }}</h1>
    <p>{{ post.date }}</p>
    <div class="markdown-body" v-html="post.content"></div>
  </div>
  <div v-else>
    <p>文章未找到。</p>
  </div>
</template>

<style lang="scss" scoped>
.post-detail {
  width: 95%;
  margin-right: 5%;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  text-align: left; // 保证返回按钮不被居中
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
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  margin-bottom: 0px;
  cursor: pointer;
}

.back-to-list:hover {
  background-color: #f7f7f7;
}

.underline {
  height: 2px;
  background-color: #e0e0e0; /* 默认灰色 */
  margin-top: 0px;
  transition: background-color 0.3s ease;
}

.markdown-body {
  text-align: left;
  code {
    background-color: #f6f8fa;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: monospace;
  }

  pre {
    background: #f6f8fa;
    padding: 1em;
    overflow-x: auto;
    border-radius: 6px;
  }

  h1, h2, h3 {
    margin: 1em 0 0.5em;
    font-weight: bold;
  }

  img {
    display: flex;
    align-items: center;
    margin: 1.5em auto; /* 上下间距 + 居中 */
    max-width: 100%;
  }

  blockquote {
    padding: 0.5em 1em;
    background: #f9f9f9;
    border-left: 4px solid #66ccff;
    color: #555;
    margin: 1em 0;
  }
}

</style>
