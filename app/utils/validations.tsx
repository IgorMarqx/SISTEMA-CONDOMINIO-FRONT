export function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isValidName(name: string) {
    return name.trim() !== ''
}