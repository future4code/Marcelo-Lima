import { Post } from "../model/Post";

export interface PostRepository{
    insert(post: Post, idUser: string): Promise<Post>
}