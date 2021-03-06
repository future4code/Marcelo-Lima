import { taskData } from "../model/task";
import { IdGenerator } from "../services/idGenerator";
import { TaskDatabase } from "../data/TaskDatabase";

export class TaskBusiness {
   constructor(
      private taskData: TaskDatabase,
      private idGenerator: IdGenerator
   ) { }
   createTaskBusiness = async (
      taskData: taskData
   ) => {

      if (
         !taskData.title ||
         !taskData.description ||
         !taskData.deadline ||
         !taskData.authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }

      const id: string = this.idGenerator.generateId()

      await this.taskData.insertTask({
         id,
         ...taskData
      })
   }
   getTaskByIdBusiness = async (
      id: string
   ) => {
      const result = await this.taskData.selectTaskById(id)

      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      const taskWithUserInfo = {
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline,
         status: result.status,
         authorId: result.author_id,
         authorNickname: result.nickname
      }

      return taskWithUserInfo
   }
}