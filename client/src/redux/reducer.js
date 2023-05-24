import {GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL, 
    GET_ALL_TYPES, 
    CLEAR_DETAIL, 
    FILTER_TYPE, 
    FILTER_BY_SOURCE,
    ORDER_POKEMON} from "./actions";

const initialState = {
    allPokemons: [],
    pokemons: [],
    allTypes: [],
    detail: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return { 
                ...state, allPokemons: action.payload, pokemons: action.payload};
        case GET_POKEMON_BY_NAME:
            return { 
                ...state, pokemons: action.payload.data};
        case GET_POKEMON_DETAIL:
            return { ...state, detail: action.payload};
        case CLEAR_DETAIL:
            return { ...state, detail: {} };
        case GET_ALL_TYPES:
            return { ...state, allTypes: action.payload};
        case FILTER_TYPE: 
            let allPokemonsType = [...state.allPokemons];
            let typeFiltered = 
            action.payload  === 'all'
                ? allPokemonsType
                : allPokemonsType.filter((poke) => {
                return poke.types.some((type) => type.name === action.payload);
                });
            return {...state, pokemons: typeFiltered}

        case FILTER_BY_SOURCE:
            const allPokemons = [...state.allPokemons];
            const filter =
            action.payload === "created"
                ? allPokemons.filter((p) => p.created)
                : allPokemons.filter((p) => !p.created);
            return {
                ...state,
                pokemons: action.payload === "all" ? allPokemons : filter,
            };
            
        case ORDER_POKEMON:
            const allPokemonsCopy = [...state.allPokemons];
            let order;
            switch (action.payload) {
                // case "all":
                //     order = allPokemonsCopy;
                // break;
                case "asc":
                    order = allPokemonsCopy.sort((a, b) => {
                        if(a.name > b.name) return 1
                        if(b.name > a.name) return -1;
                        return 0
                    })
                break;
                case "des":
                    order = allPokemonsCopy.sort((a, b) => {
                        if(b.name > a.name) return 1
                        if(a.name > b.name) return -1;
                        return 0
                    })
                break;
                case "wea":
                    order = allPokemonsCopy.sort((a, b) => {
                        return a.attack - b.attack;
                    })
                break;
                case "str":
                    order = allPokemonsCopy.sort((a, b) => {
                        return b.attack - a.attack;
                    })
                break;
                default:
                    order = allPokemonsCopy;
            }
            return {...state, pokemons: order};
            
        default:
            return { ...state };
    }
};

export default reducer;

//El reducer es una funcion que es quien sabe que hacerle al estado global. Lo recibe y recibe la action que dice que hacer
//para que finalmente se ejecuten estas funciones, debemos montarlas en el HOME