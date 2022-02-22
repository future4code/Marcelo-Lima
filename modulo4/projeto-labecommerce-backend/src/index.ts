import app from "./app";
import { createProdutc } from "./endpoints/createProduct";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesByUser } from "./endpoints/getPurchasesByUser";
import { createPurchases } from "./endpoints/purchases";

app.get("/users", getAllUsers)
app.post("/users", createUser)
app.get("/users/:userId/purchases", getPurchasesByUser)

app.get("/products", getAllProducts)
app.post("/products", createProdutc)

app.post("/purchases", createPurchases)