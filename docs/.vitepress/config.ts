import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "AKC Studio",
//   description: "explore | thinking | tinkering | playing | solving | dev | learning",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'WebDev', link: '/webdev' },
//       { text: 'Frontend', link: '/frontend' },
//       { text: 'Backend', link: '/backend' },
//       { text: 'Devops', link: '/devops' },
//       { text: 'Acerca', link: '/about' },
//       // { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Dev',
//         items: [
//           { text: 'WebDev', link: '/webdev' },
//           { text: 'Frontend', link: '/frontend'},
//           { text: 'Backend', link: '/backend' },
//           { text: 'Devops', link: '/devops' },
//           { text: 'Cambios', link: '/changes' },
//         ]
//       },
//       // {
//       //   text: 'Examples',
//       //   items: [
//       //     { text: 'Markdown Examples', link: '/markdown-examples' },
//       //     { text: 'Runtime API Examples', link: '/api-examples' }
//       //   ]
//       // },
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akcstudio' }
//     ]
//   },
//   head: [
//     [
//       'script',
//       {
//         async: 'true',
//         src: 'https://www.googletagmanager.com/gtag/js?id=G-V13H3VTPBL',
//       },
//     ],
//     [
//       'script',
//       {},
//       "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-V13H3VTPBL');",
//     ],
//     [
//       'script',
//       {},
//       "(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3791609,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
//     ],
//   ],
// });

export default withMermaid({
  // your existing vitepress config...
  title: "AKC Studio",
  description: "explore | thinking | tinkering | playing | solving | dev | learning",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Leyendo', link: '/reading/' },
      { text: 'Webdev', link: '/webdev' },
      { text: 'Frontend', link: '/frontend' },
      { text: 'Backend', link: '/backend' },
      { text: 'Devops', link: '/devops' },
      { text: 'Acerca', link: '/about' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Dev',
        items: [
          { text: 'Leyendo', link: '/reading/',
            items: [
              { text: '100 Ways To Motivate...', link: '/reading/100-ways-to-motivate-yourself.md' },	
            ]
          },
          { text: 'Webdev', link: '/webdev' },
          { text: 'Frontend', link: '/frontend' },
          { text: 'Backend', link: '/backend' },
          { text: 'Devops', link: '/devops' },
          { text: 'Novedades', link: '/changes' },
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
  },
  head: [
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-V13H3VTPBL',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-V13H3VTPBL');",
    ],
    [
      'script',
      {},
      "(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3791609,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
    ],
  ],
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
});
