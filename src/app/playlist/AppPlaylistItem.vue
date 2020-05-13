<script>
export default {
  name: "AppPlaylistItem",
  components: {},
  props: {
    track: { type: Object, default: () => {} }
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <div class="track">
    <span class="name">{{ track.name }}</span>
  </div>
</template>

<style lang="css" scoped></style>
