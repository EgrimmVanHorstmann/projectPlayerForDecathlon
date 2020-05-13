<script>
export default {
  name: "AppAlbumItem",
  components: {},
  props: {
    album: { type: Object, default: () => {} }
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <RouterLink :to="{ name: 'playlist', query: { albumId: album.id } }" class>
    <div class="album">
      <img :src="`${album.images[2].url}`" alt="image de l'album" />
      <span class="name">{{ album.name }}</span>
    </div>
  </RouterLink>
</template>

<style lang="css" scoped></style>
