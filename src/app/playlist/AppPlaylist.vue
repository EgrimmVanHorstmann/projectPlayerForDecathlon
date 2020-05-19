<script>
import SpotifyEntity from "@/entities/spotify.entity";
import AppPlaylistItem from "@/app/playlist/AppPlaylistItem";

export default {
  name: "AppPlaylist",
  components: {
    AppPlaylistItem
  },
  data() {
    return {
      playlist: null,
      albumId: null
    };
  },
  mounted() {
    this.albumId = this.$route.query.albumId;
    console.log(this.albumId)
    SpotifyEntity.getAlbumTracks(this.albumId).then(
      response => (this.playlist = response ? response.items : null)
    );
  }
};
</script>

<template>
  <div class="playlist">
    <iframe
      :src="`https://open.spotify.com/embed/album/${albumId}`"
      width="300"
      height="300"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <AppPlaylistItem v-for="track in playlist" :key="track.id" :track="track" />
  </div>
</template>

<style lang="css" scoped></style>
