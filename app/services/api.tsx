import {Requireable} from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

import {post, get} from "./requisitions";

export async function login(email: string, password: string) {
    return await post(`${BASE_URL}auth/login`, {email, password})
}

export async function verifyToken(token: string | undefined) {
    return await post(`${BASE_URL}getToken`, {token})
}

export async function register(name: string, email: string, password: string, condominium_id: Requireable<number>) {
    return await post(`${BASE_URL}auth/register`, {name, email, password, condominium_id})
}

export async function getCondominiums() {
    return await get(`${BASE_URL}condominium`)
}

export async function getUsers(){
    return await get(`${BASE_URL}users`)
}