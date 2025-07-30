import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/PostList.vue';
import PostDetail from '../components/PostDetail.vue';

const routes = [
    {
        path: '/posts',
        name: 'PostList',
        component: PostList,
        props: route => ({
            posts: route.params.posts || [],  // 传递文章列表
            selectedCategories: route.params.selectedCategories || []  // 传递选中的分类
        })
    },
    {
        path: '/post/:slug',
        name: 'PostDetail',
        component: PostDetail,
        props: true  // 使用 slug 作为 props 传递给 PostDetail
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
