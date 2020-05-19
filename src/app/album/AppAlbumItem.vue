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
      <span class="name">{{ album.name }}</span>
      <br />
      <img :src="`${album.images[1].url}`" alt="image de l'album" />
    </div>
  </RouterLink>
</template>

<style lang="css" scoped>
.album {
  display: flex;
  flex-direction: column;
  margin: 30px;
}

.album img {
  width: 100%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

.name {
  text-align: center;
  font-weight : bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  width : 300px;
  overflow: hidden;
}
</style>
