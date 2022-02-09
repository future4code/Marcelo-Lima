import { Request, Response } from "express";
import connection from "../data/connection";
import { getAddressInfo } from "../services/getAddressInfo";
import { mailTransporter } from "../services/mailTransporter";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { cep, email, number, complement } = req.body
        const address = await getAddressInfo(cep)
        const response = {
            email,
            cep,
            ...address,
            number,
            complement
        }

        await connection("AdressInfoList").insert(response)

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Cadastro na plataforma API",
            text: `Olá, ${email}! Parabéns pela inscrição!
            Segue abaixo seus dados:
            ENDEREÇO: ${address?.city}/${address?.state} ${address?.neighborhood}, ${address?.street}`,
            html: `<p>Olá, ${email}! <strong>Parabéns pela inscrição!</strong>
            Segue abaixo seus dados:
            ENDEREÇO: ${address?.city}/${address?.state} ${address?.neighborhood}, ${address?.street}</p>`
        })

        res.status(200).send({ info, message: "cadastro realizado com sucesso" })
    } catch (error) {
        console.log(error)
    }
}