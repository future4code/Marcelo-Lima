import express, { Request, Response } from "express";
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

app.get("/ping", (req, res) => {
    res.send("pong! 🏓")
})

// Exercício 2

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}[]

// Exercício 3

const toDos: ToDo = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "fugiat veniam minus",
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: "et porro tempora",
        completed: false
    },
    {
        userId: 3,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: true
    },
    {
        userId: 3,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    }
]

// Exercício 4
// Pegar todos os afazeres
app.get("/todos", (req: Request, res: Response) => {
    res.status(200).send(toDos)
})
// Pegar todos os afazeres não concluidos
app.get("/todos/unfinished", (req: Request, res: Response) => {
    const toDo = toDos.filter((t) => {
        return t.completed === false
    })
    res.status(200).send(toDo)
})
// Pegar todos os afazeres concluidos
app.get("/todos/finished", (req: Request, res: Response) => {
    const toDo = toDos.filter((t) => {
        return t.completed
    })
    res.status(200).send(toDo)
})

// Exercício 8

app.get("/todos/user", (req: Request, res: Response) => {
    const userId = Number(req.query.id)

    if(!userId) res.status(400).send("Não é possível realizar a operação. ID do usuário ausente!")
    
    const userTasks = toDos.filter((task) => {
        return task.userId === userId
    })
    
    if(userTasks.length === 0) res.status(400).send("Usuário não encontrado!")
    res.status(200).send(userTasks)
})

// Exercício 5

app.post("/todos/create", (req: Request, res: Response) => {
    const {title, completed} = req.body
    toDos.push({userId: Date.now(), id: toDos.length +1, title, completed})

    res.status(200).send(toDos)
})

// Exercício 6

app.put("/todos/:taskId", (req: Request, res: Response) => {
    const taskId: number = Number(req.params.taskId)
    toDos.map((task) => {
        if(taskId === task.id){
           return task.completed = !task.completed
        }
        return toDos
    })

    res.status(200).send(toDos)
})

// Exercício 7

app.delete("/todos/delete", (req: Request, res: Response) => {
    const taskId = Number(req.query.id)

    toDos.forEach((task, index) => {
        if(task.id === taskId) {
            return toDos.splice(index, 1)
        }
        return task
    })

    res.status(200).send(toDos)
})

