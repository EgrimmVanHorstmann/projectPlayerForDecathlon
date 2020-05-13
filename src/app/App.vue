<script>
import AppHeader from "@/app/header/AppHeader";
export default {
  name: "PlayerApp",
  components: {
    AppHeader
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
html {
  flex: 1;
  background-color: #cb9cdc;
}
.header-screen {
  flex: 1;
  width: 100%;
  height: 82px;
  text-align: center;
}
#main {
  flex: 3;
}
.footer-screen {
  flex: 1;
  height: 82px;
  background-color: #5546a6;
}
</style>
