import { UserDataBaseMock } from "./mocks/userDatabaseMock"


const userDataMock = new UserDataBaseMock()

describe("Testing findUserById", () => {

    test("Should catch error when id is not registered", async () => {
        expect.assertions
        try {
            
            await userDataMock.getUserById("abc")
        } catch (error: any) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Este usuário não existe")
        }
    })

    test("Should return respective user when id is registered", async () => {
        expect.assertions
        try {
            const findUserById = jest.fn(
                (id: string) => userDataMock.getUserById(id)
            )

            const result = await findUserById("id_mockado")

            expect(findUserById).toHaveBeenCalledWith("id_mockado")
            expect(result).toEqual({
                id: "id_mockado",
                name: "astrodev",
                email: "astrodev@gmail.com",
                role: "ADMIN",
              })
        } catch (error: any) {
            console.log(error.message)
        }
    })
})