export async function post(url: string, method: string, params: any) {
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        },
    });

    return await response.json();
}