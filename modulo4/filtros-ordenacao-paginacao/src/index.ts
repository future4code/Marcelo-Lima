import app from "./app";
import { getUsersByName, getUsersByType } from "./endpoints/exercicio1";
import { getByOrder } from "./endpoints/exercicio2";
import { getUserByPage } from "./endpoints/exercicio3";
import { getUsers } from "./endpoints/exercicio4";
import { getAllUsers } from "./endpoints/getAllUsers";



// app.get("/users", getAllUsers)

app.get("/users", getUsersByName)

app.get("/order", getByOrder)

app.get("/user/:type", getUsersByType)

app.get("/users/page", getUserByPage)

app.get("/users/order/offset", getUsers)
