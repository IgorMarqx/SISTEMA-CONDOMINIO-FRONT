const BASE_URL = process.env.NEXT_PUBLIC_API_URL

import {post} from "./requisitions";
export async function login(email: string, password: string) {
    return await post(`${BASE_URL}auth/login`, 'POST', {email, password})
}

export async function verifyToken(token: string | undefined) {
    return await post(`${BASE_URL}getToken`, 'POST', {token})
}

export async function register(name: string, email: string, password:string) {
    return await post(`${BASE_URL}auth/register`, 'POST', {name, email, password})
}