import app from "./app";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import { getUserInfo } from "./endpoints/getUserInfo";
import { login } from "./endpoints/loginUser";

app.get('/user/profile', getUserInfo)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)