<script>
import { SpotifyEntity } from "@/entities/spotify.entity";
import AppPlaylistItem from "@/app/playlist/AppPlaylistItem";

export default {
  name: "AppPlaylist",
  components: {
    AppPlaylistItem
  },
  data() {
    return {
      playlist: null
    };
  },
  mounted() {
    const albumId = this.$route.query.albumId;
    SpotifyEntity.getAlbumTracks(albumId).then(
      response => (this.playlist = response ? response.items : null)
    );
  }
};
</script>

<template>
  <div class="playlist">
    <AppPlaylistItem v-for="track in playlist" :key="track.id" :track="track" />
  </div>
</template>

<style lang="css" scoped></style>
