export interface PokemonType {
    type: {
        name: string
    }
}

export interface PokemonResponse {
    name: string
    sprites: {
        front_default: string
    }
    types: PokemonType[]
}