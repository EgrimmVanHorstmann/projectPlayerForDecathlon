import conf from "@/shared/config";
import axios from "axios";
import { Utils } from "@/utils";

export default class SpotifyEntity {
  static getArtists() {
    const ids =
      "2HALYSe657tNJ1iKVXP2xA,0qT79UgT5tY4yudH9VfsdT,0DCw6lHkzh9t7f8Hb4Z0Sx,0YmolFQDFIoVNgOOrcHgiG,6XyY86QOPPrYVGvF9ch6wz";
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .get(conf.apis.artists.url, {
        headers: {
          Authorization: `Bearer ${tokenFromLocalStorage.access_token}` //the token is a variable which holds the token
        },
        params: {
          ids: ids
        }
      })
      .then(response => response.data);
  }
  static getAlbums() {
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .get(conf.apis.albums.url, {
        headers: {
          Authorization: `Bearer ${tokenFromLocalStorage.access_token}` //the token is a variable which holds the token
        },
        params: {
          ids:
            "6L4Vdc6RUm3UM71i65Cw3B,5PiAGY4YxmDVCv5kOhOeBL,3sGDniFo4e5r0bwmSL2upZ,7sRNEe2FCkTYhrEimChdkC,3qzrNVuUyOJxfzMYRCh5qN"
        }
      })
      .then(response => response.data);
  }
  static getAlbumsByArtist(artistID) {
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .get(conf.apis.artists.url + "/" + artistID + "/albums", {
        headers: {
          Authorization: `Bearer ${tokenFromLocalStorage.access_token}` //the token is a variable which holds the token
        },
        params: {
          limit: 5
        }
      })
      .then(response => response.data);
  }

  static getAlbumTracks(albumID) {
    if (!albumID) albumID = "6L4Vdc6RUm3UM71i65Cw3B";
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .get(conf.apis.albums.url + "/" + albumID + "/tracks", {
        headers: {
          Authorization: `Bearer ${tokenFromLocalStorage.access_token}` //the token is a variable which holds the token
        }
      })
      .then(response => response.data);
  }

  static playMusic(trackUri, deviceID) {
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .put(
        conf.apis.users.url + "/player/play",
        {
          uris: [trackUri]
        },
        {
          headers: {
            Authorization: `Bearer ${tokenFromLocalStorage.access_token}`,
            "Content-Type": "application/json"
          },
          params: {
            device_id: deviceID
          }
        }
      )
      .then(response => response.data);
  }

  static getDevice() {
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios
      .get(conf.apis.users.url + "/player/devices", {
        headers: {
          Authorization: `Bearer ${tokenFromLocalStorage.access_token}` //the token is a variable which holds the token
        }
      })
      .then(response => response.data);
  }

  static nextTrack(device_id) {
    return axios.post("https://api.spotify.com/v1/me/player/next", {
      device_id
    });
  }

  static previousTrack(device_id) {
    return axios.post("https://api.spotify.com/v1/me/player/previous", {
      device_id
    });
  }

  static pause(device_id) {
    return axios.put("https://api.spotify.com/v1/me/player/pause", {
      device_id
    });
  }

  static play(context_uri, offset, uris) {
    return axios.put("https://api.spotify.com/v1/me/player/play", {
      offset,
      uris,
      ...(context_uri && { context_uri })
    });
  }

  static volume(volume_percent, device_id) {
    return axios.put("https://api.spotify.com/v1/me/player/volume", {
      volume_percent,
      device_id
    });
  }

  static shuffle(state, device_id) {
    return axios.put("https://api.spotify.com/v1/me/player/shuffle", {
      state: !state,
      device_id: device_id
    });
  }

  static repeat(state, device_id) {
    return axios.put("https://api.spotify.com/v1/me/player/repeat", {
      state,
      device_id
    });
  }

  static seekToPosition(position_ms, device_id) {
    return axios.put("https://api.spotify.com/v1/me/player/seek", {
      position_ms,
      device_id
    });
  }

  static getUserDevices() {
    return axios.get("https://api.spotify.com/v1/me/player/devices");
  }

  static getCurrentPlayback() {
    return axios.get("https://api.spotify.com/v1/me/player");
  }

  static transferUsersPlayback(device_ids, play = false) {
    const tokenFromLocalStorage = Utils.getInformationsCoFromLocalStorage();
    return axios({
      url: "https://api.spotify.com/v1/me/player",
      method: "put",
      data: {
        device_ids: device_ids,
        play
      },
      headers: {
        Authorization: `Bearer ${tokenFromLocalStorage.access_token}`
      }
    });
    /*return axios
      .put(
        "https://api.spotify.com/v1/me/player",
        {
          device_ids : JSON.stringify(device_ids),
          play
        },
        {
          headers: {
            Authorization: `Bearer ${tokenFromLocalStorage.access_token}`
          }
        }
      )
      .then(response => response.data);*/
  }
}
