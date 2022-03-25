export type PokemonInfo = {
    Row: number,
    name: string,
    Type_1: string,
    Type_2: string,
    ATK: number,
    DEF: number,
    STA: number
}

export class Pokemon{
    constructor(){}
    static toUserModel(data: any): Pokemon {
        return new Pokemon()
    }
}