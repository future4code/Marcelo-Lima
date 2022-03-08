import { Request, Response } from 'express'
import connection from '../data/connection';
import { getData } from '../services/getTokenData';
import { getUserById } from '../services/getUserById';

export const getUserInfo = async (req: Request, res: Response): Promise<any> => {
  let errorCode = 400
  try {
    const token: string = req.headers.authorization as string
    const [userResult] = await connection('to_do_list_users')
         .where("role", "NORMAL")

    const authenticationData = getData(token)
    if(authenticationData.role !== "NORMAL"){
        throw new Error("Only a normal user can access this funcionality")
    }
    const user = await getUserById(authenticationData.id)

    res.status(200).send({
      id: user.id,
      email: user.email
    })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message || error.sqlMessage })
  }
} 