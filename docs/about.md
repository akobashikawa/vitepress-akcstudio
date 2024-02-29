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

## Participantes

<VPTeamMembers size="small" :members="members" />

- **Antonio Kobashikawa Carrasco (Rulo)**
  - Hago desarrollo web. Frontend, backend, devops.
  - En AKC Studio, voy anotando los temas que suelo manejar y otras cosas interesantes.

## Qué se usa

### Plan

- [Jira](https://www.atlassian.com/software/jira)
  - Es un administrador de proyectos.

### Notas

- [Obsidian](https://obsidian.md/)
  - Es un administrador de notas personales.
- [Zettelkasten](https://zettelkasten.de/posts/overview/)
  - Es un método para producir, organizar y procesar notas personales.

### Frontend

- [VitePress](https://vitepress.dev/)
  - Es un framework de documentación basado en Vue.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Es el IDE que suelo usar.

### Backend

- [NGINX](https://www.nginx.com/)
  - Es el web server donde se despliega AKC Studio.

### Devops

- [GitHub](https://github.com/)
  - Es un hosting de repositorios git. Alli tengo alojado [vitepress-akcstudio](https://github.com/akobashikawa/vitepress-akcstudio)
- [Jenkins](https://www.jenkins.io/)
  - Es un servidor de automatizaciones que permite desplegar automáticamente AKC Studio.
- [DigitalOcean](https://www.digitalocean.com/)
  - Es un servicio de hosting. Allí tengo el VPS donde está desplegado AKC Studio.
- [Ubuntu Linux](https://ubuntu.com/blog/tag/22-04-lts)
  - Es el sistema operativo corriendo en el VPS.
- [Namecheap](https://www.namecheap.com/)
  - Es un servicio de venta de dominios. Allí tengo registrado akcstudio.com.
- [Google Analytics](https://analytics.google.com/)
  - Es un servicio de analítica web.


## Cómo se hace AKC Studio

- Aplico ideas de Zettelkasten.
  - Cada día, voy ingresando notas a mi journal.
  - Proceso las notas en obsidian.
  - Con el tiempo, aparece contenido que voy publicando.
    - [AKC Bitácora](https://akc-bitacora.netlify.app/)
    - [Antonio KC](https://antoniokc.netlify.app/)
- Organizo las tareas con Jira.

[Cambios recientes](changes)


