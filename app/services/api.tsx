export async function login(email: string, password: string) {
    const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        },
    });
    return await response.json();
}