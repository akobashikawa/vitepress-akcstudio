<template>
    <div class="video-gallery">
      <div v-for="url in videoUrls" :key="url" class="video-wrapper">
        <iframe :src="`${url}&rel=0`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </template>

<script setup lang="ts">

const videoUrls = [
    'https://www.youtube.com/embed/3UMncGbocAU?si=RUkg1ZnJfZ3I-pyx',// Every single Obsidian plugin I use (Obsidian tour 2023)
    'https://www.youtube.com/embed/t2z9mdX1j4A?si=I5svtoV7vm0mVhcw',// Improve Your Listening Skills with Active Listening
    'https://www.youtube.com/embed/EIKmNMWDawQ?si=PMNy20EBeslb-0lS',// Viajes en el Tiempo y Paradojas: El enigma que trae locos a los físicos
    'https://www.youtube.com/embed/x5mi55JPIQU?si=bmJnYRaJMVD_nfOx',// DaVinci Resolve 18 - COMPLETE Tutorial For Beginners in 2024!
    'https://www.youtube.com/embed/_3nOA4tpGHQ?si=AqR0j29jeRJuDcMy',// Logra cantar la CANCIÓN IMPOSIBLE que nadie ha podido nunca.
    'https://www.youtube.com/embed/TtBOHvaw5pQ?si=yjL_u3KXRLZErbSg',// Mejora Tu Visión (con Un Consejo Ridículamente Fácil de aplicar)
]

</script>

<style scoped>
.video-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.video-wrapper {
  flex: 1 1 calc(33.333% - 1rem);
  box-sizing: border-box;
}

iframe {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
</style>