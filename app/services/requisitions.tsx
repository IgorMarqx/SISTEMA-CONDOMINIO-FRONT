import Cookies from "js-cookie";

export async function post(url: string, method: string, params: any) {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get('token')
        },
    });

    return await response.json();
}

export async function get(url: string, method: string) {
    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
    });

    return await response.json();
}