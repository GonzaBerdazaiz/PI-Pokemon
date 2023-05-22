import {GET_ALL_POKEMONS, 
    GET_POKEMON_BY_NAME, 
    GET_POKEMON_DETAIL, 
    GET_ALL_TYPES, 
    CLEAR_DETAIL, 
    FILTER_POKEMON, 
    ORDER_POKEMON} from "./actions";

const initialState = {
    allPokemons: [],
    pokemons: [],
    allTypes: [],
    detail: [],
    pokemonFiltered: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) { //switch que evalua el action type
        case GET_ALL_POKEMONS:
            return { 
                ...state, allPokemons: action.payload, pokemons: action.payload};
        case GET_POKEMON_BY_NAME:
            return { 
                ...state, pokemons: action.payload};
        case GET_POKEMON_DETAIL:
            return { ...state, detail: action.payload};
        case CLEAR_DETAIL:
            return { ...state, detail: {} };
        case GET_ALL_TYPES:
            return { ...state, allTypes: action.payload};
        case FILTER_POKEMON: 
            const allPokemons = [...state.allPokemons];
            let filters = action.payload  === 'all'
                ? allPokemons
                : allPokemons.filter((poke) => {
                    const extractTypes = poke.types?.map(type => type.name);
                    return extractTypes?.includes(action.payload);
                });
            return {...state, pokemons: filters}
                // case "created":
                //     filter = allPokemons.filter((a) => !isNaN(a.id))
                // break;
                // case "original":
                //     filter = allPokemons.filter((a) => isNaN(a.id))
                // break;
                // default:
                //     filter = allPokemons;
            // return {...state, pokemons: action.payload === "all" ? allPokemons : filter};
            // const filter =
            //     action.payload === "created"
            //     ? filteredPokemons.filter((v) => v.created)
            //     : filteredPokemons.filter((v) => !v.created);
            // return {
            //     ...state, pokemons: action.payload === "all" ? state.filteredPokemons : filter};
        case ORDER_POKEMON:
            const orderPokemons = [...state.allPokemons];
            let order;
            switch (action.payload) {
                case "all":
                    order = orderPokemons.sort((a, b) => {
                        if(a.id > b.id) return 1
                        if(b.id > a.id) return -1;
                        return 0
                    })
                break;
                case "asc":
                    order = orderPokemons.sort((a, b) => {
                        if(a.name > b.name) return 1
                        if(b.name > a.name) return -1;
                        return 0
                    })
                break;
                case "des":
                    order = orderPokemons.sort((a, b) => {
                        if(b.name > a.name) return 1
                        if(a.name > b.name) return -1;
                        return 0
                    })
                break;
                case "wea":
                    order = orderPokemons.sort((a, b) => {
                        return a.attack - b.attack;
                    })
                break;
                case "str":
                    order = orderPokemons.sort((a, b) => {
                        return b.attack - a.attack;
                    })
                break;
                default:
                    order = orderPokemons;
            }
            return {...state, pokemons: order, allPokemons: order};
            
        default:
            return { ...state };
    }
};

export default reducer;

//El reducer es una funcion que es quien sabe que hacerle al estado global. Lo recibe y recibe la action que dice que hacer
//para que finalmente se ejecuten estas funciones, debemos montarlas en el HOME