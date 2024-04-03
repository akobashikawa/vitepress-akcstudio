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

# About this site

```mermaid
flowchart TB

classDef link stroke:blue,fill:#abe
classDef purple fill:#daf
classDef lime fill:lime
classDef yellow fill:yellow
classDef rose fill:#fea

akcstudio((AKCStudio)):::purple --- people((people)):::rose --- akc[Antonio KC]
akc -.-o gdev
akcstudio --- gdev
akcstudio --- gdevops
akc -.-o gdevops

subgraph gdev[Dev]
  direction TB
  
  dev --- plan((plan)):::lime --- jira(jira):::link
  dev --- notes((notes)):::yellow --- zettelkasten(zettelkasten):::link --- obsidian(obsidian):::link
  dev --- frontend((frontend))
  frontend --- vitepress(vitepress):::link
  dev --- backend((backend))
  backend --- nginx(nginx):::link
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

## People

<VPTeamMembers size="small" :members="members" />

- **Antonio Kobashikawa Carrasco (Rulo)**
  - Web development. Frontend, Backend, Devops.
  - AKC Studio is like my digital garden.

## What it uses

### Planning

- [Jira](https://www.atlassian.com/software/jira)
  - Help on project management.

### Notes

- [Zettelkasten](https://zettelkasten.de/posts/overview/)
  - Method to produce, organize and process personal knowledge.
- [Obsidian](https://obsidian.md/)
  - Personal knowledge manager.

### Frontend

- [VitePress](https://vitepress.dev/)
  - Framework for documentation, based on Vue.

### Backend

- [NGINX](https://www.nginx.com/)
  - Web server.

### Devops

- [GitHub](https://github.com/)
  - Hosting for git repositories like [vitepress-akcstudio](https://github.com/akobashikawa/vitepress-akcstudio)
- [Jenkins](https://www.jenkins.io/)
  - Automation server for deploy.
- [DigitalOcean](https://www.digitalocean.com/)
  - [![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%203.svg)](https://www.digitalocean.com/?refcode=87053dad838b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
  - Hosting of VPS.
- [Ubuntu Linux](https://ubuntu.com/blog/tag/22-04-lts)
  - Operating System running on VPS.
- [Namecheap](https://www.namecheap.com/)
  - Domain name seller.
- [Google Analytics](https://analytics.google.com/)
  - Analytics service by Google.
- [Visual Studio Code](https://code.visualstudio.com/)
  - IDE to develop html, css, js, java, etc.


## How I do AKC Studio

- I apply ideas from Zettelkasten.
  - Every day, I enter notes into my journal.
  - I process the notes in obsidian.
  - Over time, content appears that I publish in [Projects](projects/) 
  - I organize tasks with Jira. 

[Recent changes](/changes)


