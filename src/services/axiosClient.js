import { createAxiosClient } from "./createAxiosClient";
import { useAuthStore } from "../stores/authStore";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL + 'api/' || 'http://localhost:8000/api/'
const REFRESH_TOKEN_URL = BASE_URL + 'refresh/'

function getCurrentAccessToken() {
    return useAuthStore.getState().accessToken
}

function getCurrentRefreshToken() {
    return useAuthStore.getState().refreshToken
}

function setRefreshedTokens(tokens){
    const login = useAuthStore.getState().login
    login(tokens)
}

async function logout(){
    const logout = useAuthStore.getState().logout
    logout()
}

export const client = createAxiosClient({
    options: {
        baseURL: BASE_URL,
        timeout: 300000,
        headers: {
            'Content-Type': 'application/json',
        }
    },
    getCurrentAccessToken,
    getCurrentRefreshToken,
    refreshTokenUrl: REFRESH_TOKEN_URL,
    logout,
    setRefreshedTokens
})