module.exports = {
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'no-undef': 'off',  // 关闭 `no-undef` 检查
        'vue/multi-word-component-names': 'off'
    }
};
