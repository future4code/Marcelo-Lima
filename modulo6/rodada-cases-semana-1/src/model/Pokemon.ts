export type PokemonInfo = {
    Row: number,
    name: string,
    Type_1: string,
    Type_2: string,
    ATK: number,
    DEF: number,
    STA: number
}

export class Pokemon {
    constructor(
        private Row: number,
        private name: string,
        private Type_1: string,
        private Type_2: string,
        private ATK: number,
        private DEF: number,
        private STA: number
    ) { }
    static toUserModel(data: any): Pokemon {
        return new Pokemon(data.Row, data.name, data.Type_1, data.Type_2, data.ATK, data.DEF, data.STA)
    }
}