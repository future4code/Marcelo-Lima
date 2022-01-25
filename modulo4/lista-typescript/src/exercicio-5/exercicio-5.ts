// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e 
// retorne uma lista com apenas os emails dos usuários “admin”. 
enum ROLE {
    USER = 'user',
    ADMIN = 'admin'
}

type User = {
    name: string,
    email: string,
    role: string
}[]

const users =
    [
        { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
        { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
        { name: "Aline", email: "aline@email.com", role: ROLE.USER },
        { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
        { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
        { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
    ]

function getAdmin(user: User) {
    const admin = user.filter((u) => {
        return u.role === ROLE.ADMIN
    }).map((e) => {
        return e.email
    })
    return admin
}

console.log(getAdmin(users))