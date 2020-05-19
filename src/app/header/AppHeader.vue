<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "AppHeader",
  components: {
    Slide
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<template>
  <div>
    <header class="header-screen">
      <Slide :closeOnNavigation="true">
        <RouterLink :to="{name: 'home'}" class>
          <span>{{ $t('menu.home') }}</span>
        </RouterLink>
        <RouterLink :to="{name: 'albums'}" class>
          <span>{{ $t('menu.albums') }}</span>
        </RouterLink>
        <RouterLink :to="{name: 'artists'}" class>
          <span>{{ $t('menu.artists') }}</span>
        </RouterLink>
        <RouterLink :to="{name: 'explore'}" class>
          <span>{{ $t('menu.explore') }}</span>
        </RouterLink>
        <RouterLink :to="{name: 'compilations'}" class>
          <span>{{ $t('menu.compilations') }}</span>
        </RouterLink>
        <RouterLink :to="{name: 'mix'}" class>
          <span>{{ $t('menu.mix') }}</span>
        </RouterLink>
      </Slide>
    </header>
  </div>
</template>

<style lang="css" scoped>
</style>
