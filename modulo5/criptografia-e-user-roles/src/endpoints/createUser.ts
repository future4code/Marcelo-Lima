import { Request, Response } from "express";
import connection from "../data/connection";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/HashManager";
import { user } from "../types/types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname, email, password, role } = req.body
      const id: string = generateId()

      if (!name || !nickname || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e role")
      }
      const [user] = await connection('to_do_list_users')
         .where({ email })
      console.log(user)
      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      const token = generateToken({ id, role })
      const passwordHash = new HashManager().createHash(password)

      const newUser: user = { id, name, nickname, email, password: passwordHash, role }

      await connection('to_do_list_users')
         .insert(newUser)

      res.status(201).send({ newUser, token })

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}