import { Request, Response } from "express";
import app from "./app";
import { addResponsibleToTask, createTask, createUser, getResponseUserByTask, getTaskById, getTasksByUserId, getUser, getUserByQuery, getUsers, getUsersAll, updateUser } from "./fuctions";

// get all 
app.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await getUsers("TodoListUser")
        res.status(200).send(users)
    } catch (error: any) {
        res.status(500).send("unexpected error ocurred")
    }
})

// get all users exercicio 6
app.get("/users/all", async (req: Request, res: Response) => {
    try {
        const users = await getUsersAll("TodoListUser")
        res.status(200).send({ users: users })
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
        const newDate = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`

        const taskRealize = { ...task[0][0], limit_date: newDate }

        res.status(200).send(taskRealize)
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

// get task by user id exercicio 7
app.get("/task", async (req: Request, res: Response) => {
    try {
        const creatorUserId: string = req.query.creatorUserId as string
        const task = await getTasksByUserId(creatorUserId)

        if (!creatorUserId) { throw new Error("you didn't send the userId") }

        if (task[0].length > 0) {
            for (let i of task[0]) {
                const data = i.limitDate
                i.limitDate = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`
            }
        }

        res.status(200).send({ tasks: task[0] })
    } catch (error: any) {
        switch (error.message) {
            case "you didn't send the userId":
                res.status(400)
                break
            case "no user found":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// get user by id or email in query exercicio 8
app.get("/user", async (req: Request, res: Response) => {
    try {
        const q: string = req.query.q as string
        const user = await getUserByQuery(q)
        if (user.length === 0) { throw new Error("no user found") }
        res.status(200).send({ user: user[0] })
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

// get users response by task exercicio 10
app.get("/task/:id/responsible", async (req: Request, res: Response) => {
    try {
        const id = req.params.id 
        if(!id){ throw new Error("please fill the filds") }
        const result = await getResponseUserByTask(id)
        if(result[0].length === 0){throw new Error("no task found")}
        res.status(200).send({users: result[0]})
    } catch (error:any) {
        switch (error.message) {
            case "please fill the filds":
                res.status(400)
                break
            case "no task found":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }

})

// get task with respon by id exercicio 11
app.get("/task/response/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id
        
    }catch(error:any){

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

// atribuir um usuário responsável a uma tarefa exercicio 9
app.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        const { taskId, responsibleUserId } = req.body
        if (!taskId || !responsibleUserId) { throw new Error("please fill the fields") }
        await addResponsibleToTask(taskId, responsibleUserId)
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

