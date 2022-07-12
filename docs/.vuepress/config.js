module.exports = {
  title: 'Haili\'s blog',
  description: 'haili的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 导航栏配置
    nav:[
      {text: 'HOME', link: '/' },
      {text: 'ABOUT', link: '/about/'},
      {text: 'TAGS', link: '/tags/'}      
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: 'tags',
        path: '/tags',
        collapsable: false, // 不折叠
        children: [
          {title: "前言", path: "/tags/index"},
        ]
      },
      {
        title: '关于我',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          {title: "about", path: "/about/index/"},
          {title: "js", path: "/about/js/"},
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  }
};