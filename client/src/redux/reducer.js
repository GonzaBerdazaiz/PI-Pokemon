import {GET_ALL_POKEMONS, GET_POKEMON_DETAIL, GET_POKEMON_BY_NAME, GET_ALL_TYPES, CLEAR_DETAIL, FILTER_BY_SOURCE} from "./actions";

const initialState = {
    allPokemons: [],
    pokemons: [],
    allTypes: [],
    detail: [],
}

const reducer = (state = initialState, action) =>{
    switch (action.type) { //switch que evalua el action type
        case GET_ALL_POKEMONS:
            return { 
                ...state, pokemons: action.payload, allPokemons: action.payload};
        case GET_POKEMON_DETAIL:
            return { ...state, detail: action.payload};
        case CLEAR_DETAIL:
            return { ...state, detail: {} };
        case GET_POKEMON_BY_NAME:
            return { ...state, pokemons:[ action.payload ]};
        case GET_ALL_TYPES:
            return { ...state, allTypes: action.payload};
        case FILTER_BY_SOURCE: 
            const allPokemons = state.allPokemons;
            const filter =
                action.payload === "created"
                ? allPokemons.filter((v) => v.created)
                : allPokemons.filter((v) => !v.created);
            return {
                ...state, pokemons: action.payload === "all" ? state.allPokemons : filter};
        default:
            return { ...state };
    }
};

export default reducer;

//El reducer es una funcion que es quien sabe que hacerle al estado global. Lo recibe y recibe la action que dice que hacer
//para que finalmente se ejecuten estas funciones, debemos montarlas en el HOME