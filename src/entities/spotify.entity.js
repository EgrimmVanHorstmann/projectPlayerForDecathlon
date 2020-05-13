import conf from "@/shared/config";
import axios from "axios";
import { Utils } from "@/utils";

export class SpotifyEntity {
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
}
