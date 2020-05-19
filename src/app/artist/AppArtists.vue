<script>
import AppArtistItem from "@/app/artist/AppArtistItem";
import SpotifyEntity  from "@/entities/spotify.entity";

export default {
  name: "AppArtists",
  components: {
    AppArtistItem
  },
  data() {
    return {
      artists: null
    };
  },
  mounted() {
    SpotifyEntity.getArtists().then(
      response => (this.artists = response ? response.artists : null)
    );
  }
};
</script>

<template>
  <div class="artists">
    <h1>Ma selection artistes</h1>
    <div class="jacket-artist">
      <AppArtistItem
        v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  text-align: center;
  font-size: 40px;
}
.jacket-artist {
  display: flex;
  overflow: auto;
}

.jacket-artist a {
  text-decoration: none;
  color: black;
}
</style>
