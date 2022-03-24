// 1- a)
export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}
// 1- b)
export const validateCharacter = (input: Character) => {
    if (!input.name ||
        !input.life ||
        !input.strength ||
        !input.defense
    ) {
        return false
    }
    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }
    return true
}

// 3- a)

// export const performAttack = (attacker: Character, defender: Character) => {
//     if(!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("invalid character")
//     }
//     if(attacker.strength > defender.defense) {
//         defender.life -= attacker.strength - defender.defense
//     } else if (defender.defense > attacker.strength) {
//         defender.life = defender.life
//     }

// }

// b)

export const performAttack = (
    attacker: Character, 
    defender: Character, 
    validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    } else if (defender.defense > attacker.strength) {
        defender.life = defender.life
    }
}

// c) Com a inversão de dependências vai ser possivel fazer o mock

// 4- a) Da função validateCharacter, pq é ela que está sendo chamada pela performAttack

// b) 
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return true
//     })
// })
// c)
// test("Creating Mocks", () => {
//     const validatorMock = jest.fn(() => {
//         return false
//     })
// })