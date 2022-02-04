import { Request, Response } from "express";
import app from "./app";
import { createTask, createUser, getTaskById, getUser, getUsers, updateUser } from "./fuctions";

// get all users desafio 1 / exercicio 6
app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await getUsers("TodoListUser")
        res.status(200).send(users)
    } catch (error: any) {
        res.status(500).send("unexpected error ocurred")
    }
})

// get user by id exercicio 2
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const user = await getUser(id)
        if (user.length === 0) { throw new Error("no user found") }
        res.status(200).send(user)
    } catch (error: any) {
        switch (error.message) {
            case "no user found":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// get task by id exericio 5
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const task = await getTaskById(id)

        if (task[0].length === 0) { throw new Error("no taks found") }
        
        const data = task[0][0].limit_date
        const newDate = `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`
        

        const taskRealize = [...task, task[0][0].limit_date = newDate]
        
        res.status(200).send(taskRealize[0])
    } catch (error: any) {
        switch (error.message) {
            case "no user found":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// endpoint create users exercicio 1
app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) { throw new Error("please fill the filds") }

        const users = await getUsers("TodoListUser")

        users.map((u: any) => { // validação caso o nickname ou email forem existentes
            if (u.nickname === nickname) {
                throw new Error("nickname already exists")
            } else if (u.email === email) {
                throw new Error("email already exists")
            }
        })

        await createUser(name, nickname, email)
        res.status(201).send("Sucessfully")
    } catch (error: any) {
        switch (error.message) {
            case "please fill the filds":
                res.status(400)
                break
            case "nickname already exists":
                res.status(400)
                break
            case "email already exists":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// create task exercicio 4
app.post("/task", async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        const date = limitDate.split("/")
        const newDate = `${date[2]}/${date[1]}/${date[0]}`
        if (!title || !description || !limitDate || !creatorUserId) { throw new Error("please fill the fields") }
        await createTask(title, description, newDate, creatorUserId)
        res.status(201).send("Sucessfully")
    } catch (error: any) {
        switch (error.message) {
            case "please fill the filds":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// edit user exercicio 3
app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const { name, nickname } = req.body

        if (!name || !nickname) { throw new Error("please fill the fields") }

        await updateUser(id, name, nickname)
        res.status(201).send("Sucessfully")
    } catch (error: any) {
        switch (error.message) {
            case "please fill the fields":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})