<script>
export default {
  name: "AppHome",
  components: {},
  props: {},
  computed: {}
};
</script>

<template>
  <div class="home">
    <RouterLink :to="{name: 'artists'}" class>
      <img src="/img/click.gif" />
    </RouterLink>
  </div>
</template>

<style lang="css" scoped>
.home {
  text-align: center;
}
</style>