import Cookies from "js-cookie";

export async function post(url: string, params: any) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get('token')
        },
    });

    return await response.json();
}

export async function get(url: string) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + Cookies.get('token')
        },
    });

    return await response.json();
}