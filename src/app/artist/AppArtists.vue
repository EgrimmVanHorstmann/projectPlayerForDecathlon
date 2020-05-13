<script>
import AppArtistItem from "@/app/artist/AppArtistItem";
import { SpotifyEntity } from "@/entities/spotify.entity";

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
    <AppArtistItem
      v-for="artist in artists"
      :key="artist.id"
      :artist="artist"
    />
  </div>
</template>

<style lang="css" scoped>
.artists {
  flex: 1;
  flex-direction: row;
}
</style>
