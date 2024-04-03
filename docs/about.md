<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/akobashikawa.png',
    name: 'Antonio Kobashikawa',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/akobashikawa' },
      { icon: 'twitter', link: 'https://twitter.com/rulokoba' }
    ]
  },
]
</script>

# Acerca de este sitio

```mermaid
flowchart TB

classDef link stroke:blue,fill:#abe
classDef purple fill:#daf
classDef lime fill:lime
classDef yellow fill:yellow
classDef rose fill:#fea

akcstudio((AKCStudio)):::purple --- people((people)):::rose --- akc[Antonio KC]
akcstudio --- gdev
akcstudio --- gdevops
akc -.-o gdev
akc -.-o gdevops

subgraph gdev[Dev]
  direction TB
  dev --- frontend((frontend))
  frontend --- vitepress(vitepress):::link
  dev --- backend((backend))
  backend --- nginx(nginx):::link
  dev --- plan((plan)):::lime --- jira(jira):::link
  dev --- notes((notes)):::yellow --- zettelkasten(zettelkasten):::link --- obsidian(obsidian):::link
end

subgraph gdevops[Devops]
  devops((devops)) --- github(github):::link
  devops --- jenkins(jenkins):::link
  devops --- digitalocean(digitalocean):::link
  devops --- ubuntu(ubuntu):::link
  devops --- namecheap(namecheap):::link
  devops --- ga(google analytics):::link
  devops --- vscode(VSCode):::link
end

click jira "https://www.atlassian.com/software/jira" _blank
click zettelkasten "https://zettelkasten.de/posts/overview/" _blank
click obsidian "https://obsidian.md/" _blank
click vitepress "https://vitepress.dev/" _blank
click nginx "https://www.nginx.com/" _blank
click github "https://github.com/" _blank
click jenkins "https://www.jenkins.io/" _blank
click digitalocean "https://m.do.co/c/87053dad838b" _blank
click ubuntu "https://ubuntu.com/blog/tag/22-04-lts" _blank
click namecheap "https://www.namecheap.com/" _blank
click ga "https://analytics.google.com/" _blank
click vscode "https://code.visualstudio.com/" _blank
```

## Gente

<VPTeamMembers size="small" :members="members" />

- **Antonio Kobashikawa Carrasco (Rulo)**
  - Desarrollo web: Frontend, Backend, Devops.
  - AKC Studio es como mi digital garden.

## Qué se usa

### Plan

- [Jira](https://www.atlassian.com/software/jira)
  - Ayuda en el seguimiento de proyectos.

### Notas

- [Zettelkasten](https://zettelkasten.de/posts/overview/)
  - Método para producir, organizar y procesar notas personales.
- [Obsidian](https://obsidian.md/)
  - Administración de notas personales.

### Frontend

- [VitePress](https://vitepress.dev/)
  - Framework de documentación, basado en Vue.

### Backend

- [NGINX](https://www.nginx.com/)
  - Web server.

### Devops

- [GitHub](https://github.com/)
  - Hosting de repositorios git. Aloja a [vitepress-akcstudio](https://github.com/akobashikawa/vitepress-akcstudio)
- [Jenkins](https://www.jenkins.io/)
  - Servidor de automatizaciones para despliegues automáticos.
- [DigitalOcean](https://m.do.co/c/87053dad838b)
  - [![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=87053dad838b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
  - Hosting de VPS.
- [Ubuntu Linux](https://ubuntu.com/blog/tag/22-04-lts)
  - Sistema operativo corriendo en el VPS.
- [Namecheap](https://www.namecheap.com/)
  - Servicio de venta de dominios.
- [Google Analytics](https://analytics.google.com/)
  - Servicio de analítica web.
- [Visual Studio Code](https://code.visualstudio.com/)
  - IDE para desarrollar html, css, js, java, etc


## Cómo se hace AKC Studio

- Aplico ideas de Zettelkasten.
  - Cada día, voy ingresando notas a mi journal.
  - Proceso las notas en obsidian.
  - Con el tiempo, aparece contenido que voy publicando en [Proyectos](projects/)
- Organizo las tareas con Jira.

[Cambios recientes](changes)


