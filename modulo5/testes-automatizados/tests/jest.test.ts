import { verifyPucharse } from "../src"

describe("testando saldo maior que o valor da compra", () => {
    test("testando", () => {
        const result = verifyPucharse({name: "marcelo", balance: 1000}, 400)
        
        expect(result).toEqual({name: "marcelo", balance: 600})
    })
})

describe("testando saldo maior que o valor da compra", () => {
    test("testando", () => {
        const result = verifyPucharse({name: "marcelo", balance: 1000}, 1000)
        
        expect(result).toEqual({name: "marcelo", balance: 0})
    })
})

describe("testando saldo maior que o valor da compra", () => {
    test("testando", () => {
        const result = verifyPucharse({name: "marcelo", balance: 1000}, 2000)
        
        expect(result).toEqual({name: "marcelo", balance: -1000})
    })
})