import app from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post("/user/signup", userController.signup)
app.get("/user/profile/:id", userController.findUserById)