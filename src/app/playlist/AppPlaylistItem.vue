<script>
import SpotifyEntity from "@/entities/spotify.entity";

export default {
  name: "AppPlaylistItem",
  components: {},
  props: {
    track: { type: Object, default: () => {} }
  },
  computed: {},
  methods: {
    play() {
      SpotifyEntity.getDevice().then(response =>
        SpotifyEntity.playMusic(this.track.uri, response.devices[0].id)
      );
      //SpotifyEntity.getDevice().then(reponse =>);
    }
  }
};
</script>

<template>
  <div class="track">
    <span @click="play" class="name">{{ track.name }}</span>
  </div>
</template>

<style lang="css" scoped></style>
