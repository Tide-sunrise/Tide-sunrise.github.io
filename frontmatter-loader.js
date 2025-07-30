const yaml = require('js-yaml');
const marked = require('marked');
const path = require('path');

module.exports = function(source) {
    // 1. 提取 YAML 前言 (frontmatter)
    const match = source.match(/^---[\s\S]*?---/);  // 匹配前面的 YAML 部分
    let frontmatter = {};
    let content = source;

    if (match) {
        // 如果存在 YAML，提取出来并解析
        frontmatter = yaml.load(match[0].replace(/^---/, '').replace(/---$/, '').trim());
        content = source.replace(match[0], ''); // 去除 YAML 部分
    }

    // 2. 转换 Markdown 为 HTML
    const htmlContent = marked(content);

    // 3. 返回的格式
    return `
    module.exports = {
      data: ${JSON.stringify(frontmatter)},
      content: ${JSON.stringify(htmlContent)}
    };
  `;
};
