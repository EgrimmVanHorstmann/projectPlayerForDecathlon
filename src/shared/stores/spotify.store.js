import SpotifyEntity from "@/entities/spotify.entity";

// mutations
export const SET_SPOTIFY = "SET_SPOTIFY";
export const SET_SPOTIFY_VALUES = "SET_SPOTIFY_VALUES";

const initialState = {
  albums: [],
  artists: []
};

const getters = {};

const mutations = {
  [SET_SPOTIFY_VALUES](state, object) {
    const realValues = object.values[object.key];
    if (realValues.length) {
      state[object.key] = realValues;
    } else {
      state[object.key] = [];
    }
  }
};

const actions = {
  fetchArtists({ commit }) {
    SpotifyEntity.getArtists().then(artists =>
      commit(SET_SPOTIFY_VALUES, { values: artists, key: "artists" })
    );
  },
  fetchAlbums({ commit }, artistID) {
    SpotifyEntity.getAlbums(artistID).then(albums =>
      commit(SET_SPOTIFY_VALUES, { values: albums, key: "albums" })
    );
  }
};

export default {
  state: initialState,
  getters,
  mutations,
  actions
};
