import { CreatePostInputDTO, Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGeneration } from "../services/IdGenerator";
import { PostRepository } from "./PostRepository";

export class PostBusiness {
    private postData: PostRepository
    private idGenerator: IdGeneration
    private authentication: Authenticator
    constructor(postDataImplementation: PostRepository) {
        this.postData = postDataImplementation
        this.idGenerator = new IdGeneration()
        this.authentication = new Authenticator()
    }
    createPost = async (input: CreatePostInputDTO, token: string) => {
        const {photo, description, type, author_id} = input

        const id = this.idGenerator.generateId()
        if(!photo || !description || !type || !author_id){
            throw new Error("Campos vazios")
        }

        const tokenExist = this.authentication.getTokenData(token)
        if(!tokenExist){
            throw new Error("Token inválido")
        }
        const created_at = new Date().getTime()
        console.log(tokenExist.id)
        const post = new Post(
            id,
            photo,
            description,
            type,
            created_at,
            author_id
        )

        await this.postData.insert(post, tokenExist.id)
        return "Post criado com sucesso"
    }
}