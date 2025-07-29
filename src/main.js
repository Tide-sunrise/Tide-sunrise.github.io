import { createApp } from 'vue'
import App from './App.vue'  // 引入主组件
import router from './router'  // 引入路由配置
import ElementPlus from 'element-plus'  // 引入 Element Plus
import 'element-plus/dist/index.css'  // 引入 Element Plus 的样式文件

// 创建 Vue 实例
const app = createApp(App)

// 使用 ElementPlus 和路由
app.use(ElementPlus)
app.use(router)

// 挂载应用
app.mount('#app')
