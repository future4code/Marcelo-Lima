import connection from "./connection";
// pegar todos os usuários
export const getUsers = async (tableName: string): Promise<any> => {
    const result = await connection()
        .select("*")
        .from(tableName)
    return result
}
// pegar um usuário em especifico
export const getUser = async (id: any): Promise<any> => {
    const result = await connection()
        .select("*")
        .from("TodoListUser")
        .where("id", id)
    return result
}
// criar usuários
export const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES("${Date.now()}", "${name}", "${nickname}", "${email}");
        `)
}
// alterar usuário
export const updateUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)
}
// criar tarefas
export const createTask = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    await connection.raw(`
        INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id)
        VALUES("${Date.now()}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
    `)
}
// pegar tarefas pela id
export const getTaskById = async (id:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT t.id, title, description, limit_date, status, creator_user_id, u.nickname FROM TodoListTask t
    INNER JOIN TodoListUser u ON u.id = creator_user_id WHERE t.id = "${id}";
    `)
    return result
}