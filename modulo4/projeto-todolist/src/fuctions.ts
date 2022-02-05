import connection from "./connection";

// pegar todos os usuários
export const getUsers = async (tableName: string): Promise<any> => {
    const result = await connection()
        .select("*")
        .from(tableName)
    return result
}
// criar usuários exercicio 1
export const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO TodoListUser (id, name, nickname, email)
    VALUES("${Date.now()}", "${name}", "${nickname}", "${email}");
    `)
}
// pegar um usuário pelo id exercicio 2
export const getUser = async (id: any): Promise<any> => {
    const result = await connection()
        .select("*")
        .from("TodoListUser")
        .where("id", id)
    return result
}
// alterar usuário exercicio 3
export const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)
}
// criar tarefas exercicio 4
export const createTask = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
    VALUES("${Date.now()}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
    `)
}
// pegar tarefas pela id exercicio 5
export const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT t.id, title, description, limit_date, status, creator_user_id, u.nickname FROM TodoListTask t
    INNER JOIN TodoListUser u ON u.id = creator_user_id WHERE t.id = "${id}";
    `)
    return result
}
// desafio 1 / exercicio 6
export const getUsersAll = async (tableName: string): Promise<any> => {
    const result = await connection()
        .select("id", "nickname")
        .from(tableName)
    return result
}
// pegar tarefa pelo usuario exercicio 7
export const getTasksByUserId = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT t.id as taskId, title, description, limit_date as limitDate, status, creator_user_id as creatorUserId, u.nickname as creatorUserNickName FROM TodoListTask t
    INNER JOIN TodoListUser u ON u.id = creator_user_id WHERE creator_user_id = "${id}";
    `)
    return result
}
// pegar usuario pela query exercicio 8
export const getUserByQuery = async (query: any): Promise<any> => {
    const result = await connection.raw(`
        SELECT id, nickname FROM TodoListUser
        WHERE id = "${query}" OR email = "${query}";
    `)
    return result
}
// atribuir um usuário responsável a uma tarefa exercicio 9
export const addResponsibleToTask = async (taskId: string, responsibleId: string): Promise<any> => {
    await connection.raw(`
        INSERT INTO TodoListResponsibleUserTaskRelation (task_id, responsible_user_id)
        VALUES("${taskId}", "${responsibleId}");
    `)
}
// pegar usuários responsáveis por uma tarefa
export const getResponseUserByTask = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT res.responsible_user_id as id, u.nickname FROM TodoListResponsibleUserTaskRelation res
        INNER JOIN TodoListUser u ON res.responsible_user_id = u.id
        WHERE res.task_id = "${id}";
    `)
    return result
}