<script>
  import { mapActions } from "vuex";
import AppHeader from "@/app/header/AppHeader";
export default {
  name: "PlayerApp",
  components: {
    AppHeader
  },
  methods: {
    ...mapActions({
      init: "player/init"
    })
  },

  created() {
    this.init();
  }
};
</script>

<template>
  <div id="player">
    <AppHeader />
    <main id="main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="css">
body {
  margin: 0;
  height: 100%;
}
#player {
  background-color: #f1dfdd;
  height: 100%;
}
.header-screen {
  width: 100%;
  height: 82px;
  text-align: center;
}
#main {
}
.footer-screen {
  background-color: #5546a6;
}
</style>
