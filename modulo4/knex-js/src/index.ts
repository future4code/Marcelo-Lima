import { AddressInfo } from "net";
import express, { Request, Response } from "express";
import cors from "cors";
import { connection } from "./connection";

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


// // Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)

// 	return result[0][0]
// }


// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error: any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// })

// ---------------------------------------------------------------------

// EXERCÍCIO 1

// a) ele retorna dois objetos

// b)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result
}

app.get('/actors', async (req: Request, res: Response): Promise<void> => {
    try {
        const name: any = req.query.name
        const result = await getActorByName(name)
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

// c)
const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
    const count = result[0][0].count;
    return count;
}

app.get('/actorsgender', async (req: Request, res: Response): Promise<void> => {
    try {
        const gender: any = req.query.gender
        const result = await getActorByGender(gender)
        res.status(200).send({ message: result })
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 2

// a)
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary,
        })
        .where("id", id);
};

app.put('/actorsalary/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        await updateActor(req.params.id, req.body.salary)
        res.status(201).send("Sucessfully")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})

// b)
const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id)
}

app.delete('/deleteactor/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        await deleteActor(req.params.id)
        res.status(201).send("Sucessfully")
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

// c)
const getAvgSalary = async (gender: any): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender })
    return result[0].average
}

app.get('/avgsalary', async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await getAvgSalary(req.query.gender)
        res.status(200).send(result.toString())
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

// EXERCÍCIO 3

// a)
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result
}

app.get('/actors/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await getActorById(req.params.id)
        res.status(200).send(result[0])
    } catch (error: any) {
        res.status(500).send("Unexpected error")
    }
})

// b)
// const getActorByGender = async (gender: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
//     `)
//     const count = result[0][0].count;
//     return count;
// }
// app.get('/actorsgender', async (req: Request, res: Response): Promise<void> => {
//     try {
//         const gender: any = req.query.gender
//         const result = await getActorByGender(gender)
//         res.status(200).send({ message: result })
//     } catch (error: any) {
//         res.status(500).send("Unexpected error")
//     }
// })

// EXERCÍCIO 4

// a)
// const updateActor = async (id: string, salary: number): Promise<any> => {
//     await connection("Actor")
//         .update({
//             salary: salary,
//         })
//         .where("id", id);
// };

// app.put('/actorsalary/:id', async (req: Request, res: Response): Promise<void> => {
//     try {
//         await updateActor(req.params.id, req.body.salary)
//         res.status(201).send("Sucessfully")
//     } catch (error) {
//         res.status(500).send("Unexpected error")
//     }
// })

// b)

// const deleteActor = async (id: string): Promise<any> => {
//     await connection("Actor")
//         .delete()
//         .where("id", id)
// }

// app.delete('/deleteactor/:id', async (req: Request, res: Response): Promise<void> => {
//     try {
//         await deleteActor(req.params.id)
//         res.status(201).send("Sucessfully")
//     } catch (error: any) {
//         res.status(500).send("Unexpected error")
//     }
// })
