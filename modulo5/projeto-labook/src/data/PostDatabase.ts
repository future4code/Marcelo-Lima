import { PostRepository } from "../business/PostRepository";
import { Post } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase implements PostRepository{
    insert = async (post: Post, idUser: string) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    type: post.getType(),
                    created_at: post.getCreatedAt(),
                    author_id: idUser
                })
            return post
        } catch (error: any) {
            throw new Error("Erro ao criar post no banco de dados")
        }
    }
}