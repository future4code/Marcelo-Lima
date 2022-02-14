import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import { addResponsibleToTask, createTask, createUser, getResponseUserByTask, getTaskAndResponUsers, getTaskById, getTaskByStatus, getTaskDelayed, getTasksByUserId, getUser, getUserByQuery, getUsers, getUsersAll, searchTask, updateStatus, updateUser } from "./fuctions";

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
        if (!id) { throw new Error("please fill the filds") }
        const result = await getResponseUserByTask(id)
        if (result[0].length === 0) { throw new Error("no task found") }
        res.status(200).send({ users: result[0] })
    } catch (error: any) {
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
    try {
        const id: string = req.params.id
        const task = await getTaskAndResponUsers(id)

        if (task[0].length === 0) { throw new Error("no taks found") }

        const data = task[0][0].limitDate
        const newDate = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`

        const taskRealize = { ...task[0][0], limitDate: newDate }

        const responsibleUsersTask = await connection()
            .select("id", "nickname")
            .from("TodoListResponsibleUserTaskRelation")
            .join("TodoListUser", "TodoListResponsibleUserTaskRelation.responsible_user_id", "TodoListUser.id")
            .where("TodoListResponsibleUserTaskRelation.task_id", id)

        const result = { ...taskRealize, responsibleUsers: responsibleUsersTask }

        res.status(200).send(result)
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

//exercicio 13
app.get("/taskstatus", async (req: Request, res: Response) => {
    try {
        const status = req.query.status as string
        if (!status) { throw new Error("please fill the fields") }
        const task = await getTaskByStatus(status)

        if (task[0].length > 0) {
            for (let i of task[0]) {
                const data = i.limitDate
                i.limitDate = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`
            }
        }

        res.status(200).send({ tasks: task[0] })
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

// exercicio 14
app.get("/tasks/delayed", async (req: Request, res: Response) => {
    try {
        const dateActual = new Date().getTime()
        const task = await getTaskDelayed()
        const taskDelayed = task[0].filter((t: any) => {
            let dateControl = t.limitDate.getTime()
            if (dateControl < dateActual) { return t }
        })

        if (taskDelayed.length > 0) {
            for (let i of taskDelayed) {
                const data = i.limitDate
                i.limitDate = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`
            }
        }

        res.status(200).send({ tasks: taskDelayed })
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

// exercicio 17
app.get("/tasks/search", async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string
        const result = await searchTask(q)
        if (!q) { throw new Error("please fill the field") }
        if (result.length === 0) { throw new Error("task not found") }

        res.status(200).send({ tasks: result })
    } catch (error: any) {
        switch (error.message) {
            case "task not found":
                res.status(400)
                break
            case "please fill the field":
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

// exercicio 9 e 16
app.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        const { task_id, responsibleUserId } = req.body

        if (!task_id || !responsibleUserId) { throw new Error("please fill the fields") }

        // await addResponsibleToTask(taskId, responsibleUserId) // exercicio 9

        for (let i of responsibleUserId) {
            let responsible_user_id = i
            await connection('TodoListResponsibleUserTaskRelation').insert({ task_id, responsible_user_id })
        }

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

// exercicio 12
app.put("/task/status", async (req: Request, res: Response) => {
    try {
        const id = req.query.id as string
        const status = req.body.status as string
        await updateStatus(id, status)
        if (!id || !status) { throw new Error("please fill the field") }
        res.status(201).send("Sucessfully")
    } catch (error: any) {
        switch (error.message) {
            case "please fill the field":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

// exercicio 18
app.put("/task/status/edit", async (req: Request, res: Response): Promise<void> => {
    try {
        const { task_ids, status } = req.body

        if (!status) { throw new Error("please fill the fields") }

        for (let i of task_ids) {
            let id = i
            await connection("TodoListTask")
                .update({
                    status
                })
                .where("id", id)
        }

        res.status(200).send("sucessfully")
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
});

// exercicio 15
app.delete("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
    try {
        const taskId = req.params.taskId
        const responsibleUserId = req.params.responsibleUserId

        if (!taskId || !responsibleUserId) { throw new Error("please fill the fields") }

        const taskCheck = await connection()
            .select("task_id")
            .from("TodoListResponsibleUserTaskRelation")
            .where("task_id", taskId)

        if (taskCheck[0].length === 0) { throw new Error("task id not found") }

        const userCheck = await connection()
            .select("responsible_user_id")
            .from("TodoListResponsibleUserTaskRelation")
            .where("responsible_user_id", responsibleUserId)

        if (userCheck[0].length === 0) { throw new Error("user id not found") }

        await connection.raw(`
            DELETE FROM TodoListResponsibleUserTaskRelation 
            WHERE task_id = "${taskCheck[0].task_id}" AND responsible_user_id = "${userCheck[0].responsible_user_id}"
        `)

        res.status(201).send("Sucessfully")
    } catch (error: any) {
        switch (error.message) {
            case "please fill the field":
                res.status(400)
                break
            case "task id not found":
                res.status(400)
                break
            case "user id not found":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})