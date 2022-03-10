import app from "./app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)

const postController = new PostController()

app.post("/post", postController.createPost)
app.get("/post/:id", postController.getPostById)