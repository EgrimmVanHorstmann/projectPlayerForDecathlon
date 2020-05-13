<script>

export default {
  name: 'PlayerApp',
  components: {
  }
}
</script>

<template>
  <div id="player">
    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
#player {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;

  #main {
    flex: 1 0 1px;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    @include print {
       overflow-y: visible !important;
       height: auto;
       display: block;
    }
  }
}
</style>
