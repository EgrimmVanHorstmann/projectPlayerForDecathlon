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
    <div class="artiste">
      <img :src="`${artist.images[2].url}`" alt="image de l'artiste" />
      <span class="name">{{ artist.name }}</span>
      <span class="followersNumber">{{ artist.followers.total }}</span>
    </div>
  </RouterLink>
</template>

<style lang="css" scoped>
.artiste {
  display: flex;
  flex: 1;
}
</style>
