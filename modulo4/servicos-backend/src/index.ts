import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getAddressInfo } from "./services/getAddressInfo";

app.post("/createuser", createUser)