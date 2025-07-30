// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
        .rule('md')
        .test(/\.md$/)
        .use('frontmatter-markdown-loader')
        .loader('frontmatter-markdown-loader')
        .end();
  }
};
