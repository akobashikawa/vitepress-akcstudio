import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AKC Studio",
  description: "explore | thinking | tinkering | playing | solving | dev | learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dev', link: '/webdev' },
      { text: 'Frontend', link: '/frontend' },
      { text: 'Backend', link: '/backend' },
      { text: 'Devops', link: '/devops' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Dev',
        items: [
          { text: 'WebDev', link: '/webdev' },
          { text: 'Frontend', link: '/frontend' },
          { text: 'Backend', link: '/backend' },
          { text: 'Devops', link: '/devops' },
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akcstudio' }
    ]
  }
})
