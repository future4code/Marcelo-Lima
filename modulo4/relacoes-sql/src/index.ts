import { AddressInfo } from "net";
import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;


// EXERCICIO 1

// a) a chave estrangeira compara o elemento de uma tabela a um elemento de outra tabela

// b)
