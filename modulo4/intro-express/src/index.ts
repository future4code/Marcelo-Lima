import express from "express";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercício 1

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

// Exercício 2

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}[]

// Exercício 3

const users: User = [
    {
        id: 1,
        name: 'Marcelo',
        phone: '99988-5566',
        email: 'marcelo@labenu.com',
        website: 'marcelo.com'
    },
    {
        id: 2,
        name: 'Igor',
        phone: '99758-5486',
        email: 'igor@labenu.com',
        website: 'igor.com'
    },
    {
        id: 3,
        name: 'Pedro',
        phone: '99845-1258',
        email: 'pedro@labenu.com',
        website: 'pedro.com'
    }
]

// Exercício 4

app.get("/users", (req, res) => {
    const getUsers = users.map((user) => {
        return user
    })
    res.status(200).send(getUsers)
})

// Exercício 5

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}[]

// Exercício 6

// R: Fora para facilitar a alteração e organização melhor aproveitada

const posts: Post = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 3,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 3,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
]

// Exercício 7

app.get("/posts", (req, res) => {
    const getPosts = posts.map((post) => {
        return post
    })
    res.status(200).send(getPosts)
})

// Exercício 8

app.get("/posts/:id", (req, res) => {
    const postId = Number(req.params.id)

    if(!postId) res.status(400).send("não é possível realizar a requisição, ID ausente")

    const allPosts: Post = posts.filter((post) => {
        return post.userId === postId
    })

    res.status(200).send(allPosts)
})