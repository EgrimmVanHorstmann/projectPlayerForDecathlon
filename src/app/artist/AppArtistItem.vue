<script>
export default {
  name: "AppArtistItem",
  components: {},
  props: {
    artist: { type: Object, default: () => {} }
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <RouterLink :to="{ name: 'albums', query: { artistID: artist.id } }" class>
    <div class="artist">
      <span class="name">{{ artist.name }}</span>
      <br />
      <img :src="`${artist.images[2].url}`" alt="image de l'artiste" />`
      <span class="followersNumber">
        {{ $t(`my_artists`) }} {{ `${artist.followers.total}` }}</span
      >
    </div>
  </RouterLink>
</template>

<style lang="css" scoped>
.artist {
  display: flex;
  flex-direction: column;
  margin: 30px;
}

.artist img {
  width: 100%;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

.artist span {
  text-align: center;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  overflow: hidden;
}
</style>
