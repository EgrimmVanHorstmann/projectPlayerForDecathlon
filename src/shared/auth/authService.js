import axios from "axios";
import conf from '@/shared/config'
import { Utils, keyLocalStorageUserCode, keyLocalStorageUserToken } from '@/utils';
import AuthStore from '@/shared/auth/authStore'

class AuthService {
    async authenticate () {
        const tokenFromLocalStorage = Utils.getTokenFromLocalStorage()
        const tokenInfo = Utils.getUrlTokenInfo()
        if (tokenInfo.userCode) {
            try {
                localStorage.setItem(keyLocalStorageUserCode, JSON.stringify(tokenInfo))
                const tokenResponse = await this.getUserToken(tokenInfo.userCode);
                localStorage.setItem(keyLocalStorageUserToken, JSON.stringify(tokenResponse.data.access_token))
                const userInformations = await this.getUserInfo(tokenResponse.data.access_token)
                AuthStore.user = userInformations.data
                window.history.replaceState(null, '', window.location.origin);
                return true;
            } catch (error) {
                this.redirectToErrorState()
                return false;
            }
        } else if (tokenFromLocalStorage && tokenFromLocalStorage.userCode) {
            try {
                const userToken = localStorage.getItem(keyLocalStorageUserToken).replace(/['"]+/g, '')
                const userInformations = await this.getUserInfo(userToken) // je recheck à chaque fois car les informations utilisateurs ont put changer
                AuthStore.user = userInformations.data
                return true;
            } catch (error) {
                this.redirectToErrorState()
                return false;
            }
        } else {
            this.redirectToSpotifyLogin();
        }
        return false;
    }

    redirectToForbidden () {
        // eslint-disable-next-line
        window.location.href = `${process.env.BASE_URL}forbidden.html`
    }

    redirectToErrorState () {
        // eslint-disable-next-line
        window.location.href = `${process.env.BASE_URL}error.html`
    }

    redirectToHome () {
        // eslint-disable-next-line
        window.location.href = `${process.env.BASE_URL}`
    }

    redirectToSpotifyLogin () {
        const urlForLogin = new URL(`${conf.auth.serviceProviderBaseUrl }/authorize`)
        const callbackUrl = `${window.location.origin}/`

        urlForLogin.searchParams.append("client_id", conf.auth.clientId)
        urlForLogin.searchParams.append("response_type", "code")
        urlForLogin.searchParams.append("redirect_uri", callbackUrl)
        urlForLogin.searchParams.append("scope", "user-read-private")

        window.location = urlForLogin;
    }

    getUserToken (userCode) {
        const authorization = btoa(`${conf.auth.clientId }:${ conf.auth.clientSecret}`)
        return axios.post(`${conf.auth.serviceProviderBaseUrl }/api/token`, null, {
            params: {
                'grant_type': 'authorization_code',
                code: userCode,
                'redirect_uri': `${window.location.origin}/`
            },
            headers: {
                Authorization: 'Basic '.concat(authorization), //the token is a variable which holds the token
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        },
        ).then(response => response);

        //@Todo gérer les erreurs et le refresh du token
    }

    getUserInfo (UserAccessToken) {
        return axios.get(conf.apis.baseAPI, {
            headers: {
                Authorization: `Bearer ${ UserAccessToken}`, //the token is a variable which holds the token
            }
        },
        ).then(response => response);
    }
}

export default new AuthService()