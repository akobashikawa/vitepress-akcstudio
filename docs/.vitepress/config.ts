// import { defineConfig } from 'vitepress';
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
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      title: "AKC Studio",
      description: "explorar | pensar | jugar | resolver | desarrollar | aprender",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "AKC Studio",
        logo: '/img/reshot-icon-code-V24MA9F78Z.svg',
    
        lastUpdated: {
          text: 'Última actualización',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
          }
        },
    
        docFooter: {
          prev: 'Anterior',
          next: 'Siguiente'
        },
    
        search: {
          provider: 'local'
        },
    
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Leyendo', link: '/reading/' },
          { text: 'WebDev', link: '/webdev/' },
          { text: 'Catálogo', link: '/catalog/' },
          { text: 'Acerca', link: '/about' },
          // { text: 'Examples', link: '/markdown-examples' }
        ],
    
        sidebar: [
          {
            text: 'Studio',
            items: [
              { text: 'Leyendo', link: '/reading/',
                items: [
                  { text: '100 Ways To Motivate...', link: '/reading/100-ways-to-motivate-yourself.md' },	
                ]
              },
            ]
          },
          {
            text: 'Dev',
            items: [
              { text: 'WebDev', link: '/webdev/' },
              { text: 'Frontend', link: '/webdev/frontend' },
              { text: 'Backend', link: '/webdev/backend' },
              { text: 'Devops', link: '/webdev/devops' },
              { text: 'Changes', link: '/changes' },
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
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "AKC Studio",
      description: "explore | thinking | playing | solving | dev | learning",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "AKC Studio",
        logo: '/img/reshot-icon-code-V24MA9F78Z.svg',
    
        lastUpdated: {
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
          }
        },
    
        search: {
          provider: 'local'
        },
    
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Reading', link: '/en/reading/' },
          { text: 'WebDev', link: '/en/webdev/' },
          { text: 'Catalog', link: '/en/catalog/' },
          { text: 'About', link: '/en/about' },
          // { text: 'Examples', link: '/markdown-examples' }
        ],
    
        sidebar: [
          {
            text: 'Studio',
            items: [
              { text: 'Reading', link: '/en/reading/',
                items: [
                  { text: '100 Ways To Motivate...', link: '/reading/100-ways-to-motivate-yourself.md' },	
                ]
              },
            ]
          },
          {
            text: 'Dev',
            items: [
              { text: 'WebDev', link: '/en/webdev/' },
              { text: 'Frontend', link: '/en/webdev/frontend' },
              { text: 'Backend', link: '/en/webdev/backend' },
              { text: 'Devops', link: '/en/webdev/devops' },
              { text: 'Changes', link: '/en/changes' },
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
    },
  },
  
  lastUpdated: true,
  
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
    [
      'script',
      {},
      "var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); (function(){ var s1=document.createElement('script'),s0=document.getElementsByTagName('script')[0]; s1.async=true; s1.src='https://embed.tawk.to/65e0139d8d261e1b5f66ca34/1hnpkp8ge'; s1.charset='UTF-8'; s1.setAttribute('crossorigin','*'); s0.parentNode.insertBefore(s1,s0); })();",
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
