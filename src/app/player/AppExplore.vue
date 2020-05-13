<script>
import { mapActions } from "vuex";
export default {
  name: "AppExplore",
  components: {},
  data() {
    return {};
  },
  created() {
    this.fetchAlbums();
  },
  methods: {
    ...mapActions("spotify", ["fetchAlbums"])
  }
};
</script>

<template>
  <div>explore</div>
</template>

<style lang="css" scoped></style>
