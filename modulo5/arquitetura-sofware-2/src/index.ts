import { TaskBusiness } from "./business/TaskBusiness"
import { UserBusiness } from "./business/UserBusiness"
import { app } from "./controller/app"
import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/UserController"
import { TaskDatabase } from "./data/TaskDatabase"
import { UserDatabase } from "./data/UserDatabase"
import { Authenticator } from "./services/authenticator"
import { HashManager } from "./services/hashManager"
import { IdGenerator } from "./services/idGenerator"

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

const taskController = new TaskController(
    new TaskBusiness(
        new TaskDatabase(),
        new IdGenerator()
    )
)

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)

app.put('/task', taskController.createTask)
app.get('/task/:id', taskController.getTaskById)

