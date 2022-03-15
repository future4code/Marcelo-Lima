import { Character, validateCharacter } from "../src"

// 2-
describe("Testing validateCharacterFeature", () => {
    // a)
    test("Should return false, Character without the name", () => {
        const input: Character = {
            name: "",
            life: 1500,
            strength: 100,
            defense: 100
        }
        const result = validateCharacter(input)

        expect(result).toBe(false)
    })
    // b)
    test("Should return false, Character life 0", () => {
        const input: Character = {
            name: "PH",
            life: 0,
            strength: 100,
            defense: 100
        }
        const result = validateCharacter(input)

        expect(result).toBe(false)
    })
    // c)
    test("Should return false, Character strength 0", () => {
        const input: Character = {
            name: "PH",
            life: 1500,
            strength: 0,
            defense: 100
        }
        const result = validateCharacter(input)

        expect(result).toBe(false)
    })
    // d)
    test("Should return false, Character defense 0", () => {
        const input: Character = {
            name: "PH",
            life: 1500,
            strength: 100,
            defense: 0
        }
        const result = validateCharacter(input)

        expect(result).toBe(false)
    })
    // e)
    test("Should return false, Character negative life", () => {
        const input: Character = {
            name: "PH",
            life: -100,
            strength: 100,
            defense: 100
        }
        const result = validateCharacter(input)

        expect(result).toBe(false)
    })
    // f)
    test("Should return true, character ok", () => {
        const input: Character = {
            name: "PH",
            life: 1500,
            strength: 100,
            defense: 100
        }
        const result = validateCharacter(input)

        expect(result).toBe(true)
    })
})

