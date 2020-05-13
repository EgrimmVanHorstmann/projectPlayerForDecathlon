export const keyLocalStorageUserCode = "auth.userCode";
export const keyLocalStorageUserToken = "auth.userToken";

export class Utils {
  static getUserCodeFromLocalStorage() {
    const userCodeInfoString = localStorage.getItem(keyLocalStorageUserCode);
    return userCodeInfoString ? JSON.parse(userCodeInfoString) : undefined;
  }

  static getUrlTokenInfo() {
    // Find token into current url
    const query = location.search || "";
    const resultUserCode = /[&?]code=(.+)(&|$)/.exec(query) || [null, null];
    return {
      userCode: resultUserCode && resultUserCode[1]
    };
  }

  static getInformationsCoFromLocalStorage() {
    const InfoString = localStorage.getItem(keyLocalStorageUserToken);
    return InfoString ? JSON.parse(InfoString) : undefined;
  }
}
