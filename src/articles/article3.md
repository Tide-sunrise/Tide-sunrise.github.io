---
title: "Vue 3 入门教程3"
date: "2025-07-30"
category: "前端1"
summary: "Vue 3 是一个渐进式的 JavaScript 框架，本文介绍 Vue 3 的基础知识。"
image: "logo.png"
---

# Vue3 文章示例

> 这是一个包含各种 Markdown 语法示例的文章，演示如何写漂亮的博客内容。

---

## 文章亮点

- 支持 **代码高亮**
- 支持图片展示
- 支持表格与列表
- 支持内联和块级代码
- 支持自定义 HTML

---

### 图片展示

![Vue Logo](https://vuejs.org/images/logo.png)

---

### 代码示例：Vue 组合式 API 组件

```vue
<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubled = computed(() => count.value * 2);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}, doubled: {{ doubled }}
  </button>
</template>
````

---

### 代码示例：普通 JavaScript

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

---

### 表格示例

| 文章标题            | 分类         | 发布日期       |
| --------------- | ---------- | ---------- |
| Vue 3 入门教程      | Vue        | 2025-07-01 |
| JavaScript 深入指南 | JavaScript | 2025-06-15 |
| 前端性能优化技巧        | 性能优化       | 2025-07-20 |

---

### 引用示例

> “代码即诗歌，每一行都在表达思想。”
> — 某位前端大师

---

### 内联代码示例

使用 `npm install` 来安装依赖。

---

### 有序列表示例

1. 初始化项目
2. 编写组件
3. 测试与调试
4. 部署上线

---

### 自定义 HTML：彩色盒子

<div style="background: #66ccff; color: white; padding: 10px; border-radius: 8px;">
  💡 这是一个自定义的彩色提示框！
</div>

---

### 超链接示例

* [Vue 官方文档](https://vuejs.org)
* [GitHub](https://github.com)

---

**完** 🎉

```

如果你需要我帮你保存成文件，或者帮你定制格式，也可以告诉我！
```
