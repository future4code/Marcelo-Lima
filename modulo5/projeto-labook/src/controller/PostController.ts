import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostDatabase } from "../data/PostDatabase"
import { CreatePostInputDTO } from "../model/Post"

export class PostController{
    private postBusiness: PostBusiness
    constructor(){
        this.postBusiness = new PostBusiness(
            new PostDatabase()
        )
    }
    createPost = async (req: Request, res: Response) => {
        const {photo, description, type, author_id} = req.body
        const token = req.headers.authorization as string

        const post: CreatePostInputDTO = {
            photo,
            description,
            type,
            author_id
        }
        try {
            const result = await this.postBusiness.createPost(post, token)
            console.log(result)
            res.status(201).send({message: "a"})
        } catch (error: any) {
            if(error.message) return res.status(400).send(error.message)
            res.status(400).send("Erro ao tentar criar post")
        }
    }
}