import { Character, performAttack } from "../src"


describe("Testing validateCharacterFight", () => {
    
    test("Should attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
        const attacker: Character = {
            name: "Liu Kang",
            life: 1500,
            strength: 150,
            defense: 150
        } 
        const defender: Character = {
            name: "Kung Lao",
            life: 1500,
            strength: 200,
            defense: 100
        } 
        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toEqual(1450)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
        const attacker: Character = {
            name: "",
            life: 1500,
            strength: 150,
            defense: 150
        } 
        const defender: Character = {
            name: "Kung Lao",
            life: 1500,
            strength: 200,
            defense: 100
        } 
        try {
            performAttack(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toBe("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
        

        
    })
})