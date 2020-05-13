import Vue from "vue";
import Router from "vue-router";
import AppHome from "@/app/player/AppHome";
import AppExplore from "@/app/player/AppExplore";
import AppAlbums from "@/app/album/AppAlbums";
import AppArtists from "@/app/artist/AppArtists";
import AppPlaylist from "@/app/playlist/AppPlaylist";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome
    },
    {
      path: "/albums",
      name: "albums",
      component: AppAlbums
    },
    {
      path: "/artists",
      name: "artists",
      component: AppArtists
    },
    {
      path: "/playlist",
      name: "playlist",
      component: AppPlaylist
    },
    {
      path: "/explore",
      name: "explore",
      component: AppExplore
    },
    {
      path: "/compilations",
      name: "compilations",
      component: AppExplore
    },
    {
      path: "/mix",
      name: "mix",
      component: AppExplore
    },
    {
      path: "/error",
      name: "error",
      component: () => import(/* webpackChunkName: "error" */ "@/app/Error.vue")
    },
    {
      path: "**",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "notFound" */ "@/app/NotFound.vue")
    }
  ]
});
