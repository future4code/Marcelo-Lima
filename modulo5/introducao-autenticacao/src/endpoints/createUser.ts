import connection from "../data/connection";

const userTableName = "User";

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      