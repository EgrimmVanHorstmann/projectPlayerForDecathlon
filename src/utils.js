export const keyLocalStorageUserCode = 'auth.userCode';
export const keyLocalStorageUserToken = 'auth.userToken';


export class Utils {
    static getTokenFromLocalStorage () {
        const tokenInfoString = localStorage.getItem(keyLocalStorageUserCode);
        return tokenInfoString ? JSON.parse(tokenInfoString) : undefined;
    }

    static getUrlTokenInfo () {
        // Find token into current url
        const query = location.search || '';
        const resultUserCode = /[&?]code=(.+)(&|$)/.exec(query) || [null, null];
        return {
            userCode: resultUserCode && resultUserCode[1]
        };
    }
}