import axios from "axios";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"; //ponemos esto en una cte para evitar errores ya que no podemos darnos cuenta si x ej tipeamos mal
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const ORDER_POKEMON = "ORDER_POKEMON"

const url = "http://localhost:3001";

export const getAllPokemons = () => {
    return async (dispatch) =>{ // el dispatch es para llegar al reducer
        const resp = await axios(`${url}/pokemon`);
        return dispatch({type: GET_ALL_POKEMONS, payload: resp.data})
    }
}

export const getPokemonDetail = (id) =>{
    return async (dispatch) =>{
        const resp = await axios.get(`${url}/pokemon/${id}`);
        return dispatch({type: GET_POKEMON_DETAIL, payload: resp.data})
    }
}

export const getPokemonByName = (name) =>{
    return async (dispatch) =>{
        try{
            const resp = await axios.get(`${url}/pokemon?name=${name}`)
            return dispatch({ type: GET_POKEMON_BY_NAME, payload: resp.data })
        } catch (error){
            console.log(error.message)
        }
    }
}

export const getAllTypes = () =>{
    return async (dispatch) =>{
        const resp = await axios.get(`${url}/types`)
        return dispatch({type: GET_ALL_TYPES, payload: resp.data})
    }
}

export const createPokemon = (payload) =>{
    return async () =>{
        let createPokemon = await axios.post(`${url}/pokemon`);
        return createPokemon;
    }
}

export const clearDetail = () => {
    return { type: CLEAR_DETAIL };
};

export const filterPokemon = (payload) => {
    return { type: FILTER_POKEMON, payload };
};

export const orderPokemon = (order) => {
    return { type: ORDER_POKEMON, payload: order };
};