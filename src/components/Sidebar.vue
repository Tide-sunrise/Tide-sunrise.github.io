<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>分类</h3>
    </div>
    <ul>
      <li v-for="category in categories" :key="category">
        <button
            @click="toggleCategory(category)"
            :class="{'selected': selectedCategories.includes(category)}">
          {{ category }}
        </button>
        <div :class="{'underline': true, 'selected-underline': selectedCategories.includes(category)}"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref, watch, emit } from 'vue';

const props = defineProps({
  selectedCategories: {
    type: Array,
    default: () => [] // 保证传入的是数组，避免 undefined
  },
  categories: {
    type: Array,
    default: () => [] // 保证分类也是数组
  }
});

const selectedCategories = ref([...props.selectedCategories]); // 保证 selectedCategories 是一个响应式的 ref

// 切换分类
const toggleCategory = (category) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter(item => item !== category);
  } else {
    selectedCategories.value.push(category);
  }

  // 触发父组件更新选中分类
  emit('updateSelectedCategories', selectedCategories.value);
};

// 观察 selectedCategories 的变化
watch(selectedCategories, (newVal) => {
  console.log('Selected categories changed:', newVal);
}, { deep: true });
</script>

<style scoped>
/* 侧边栏外观 */
.sidebar {
  width: 250px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 100%;
  margin-top: 20px;
  margin-right: 20px;
}

/* 标题 */
.sidebar-header {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: left;
}

/* 分类列表 */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* 每个分类项 */
li {
  margin: 15px 0;
}

/* 按钮样式 */
button {
  width: 100%;
  padding: 12px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  color: #333;
  transition: background-color 0.3s ease;
}

/* 分类按钮：悬停与选中状态 */
button:hover {
  background-color: #f7f7f7;
}

/* 选中状态的按钮下方的横线 */
.underline {
  height: 2px;
  background-color: #e0e0e0; /* 默认灰色 */
  margin-top: 6px;
  transition: background-color 0.3s ease;
}

.selected-underline {
  background-color: #0078d4; /* 选中时的蓝色 */
}

button:focus {
  outline: none;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .sidebar {
    width: 220px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }
}
</style>
