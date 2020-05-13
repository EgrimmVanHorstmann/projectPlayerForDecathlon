<script>
import AppAlbumItem from "@/app/album/AppAlbumItem";
import { SpotifyEntity } from "@/entities/spotify.entity";

export default {
  name: "AppAlbums",
  components: {
    AppAlbumItem
  },
  data() {
    return {
      albums: null
    };
  },
  mounted() {
    const artistID = this.$route.query.artistID;
    if (artistID) {
      SpotifyEntity.getAlbumsByArtist(artistID).then(
        response => (this.albums = response ? response.items : null)
      );
    } else {
      SpotifyEntity.getAlbums().then(
        response => (this.albums = response ? response.albums : null)
      );
    }
  }
};
</script>

<template>
  <div class="albums">
    <AppAlbumItem v-for="album in albums" :key="album.id" :album="album" />
  </div>
</template>

<style lang="css" scoped></style>
