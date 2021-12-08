export const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcelo-maia-carver"

export const TOKEN = localStorage.getItem('token')

export const headers = {
    headers: {
        auth: TOKEN
    }
}