const axios = require("axios");
const {Pokemon, Tipo} = require("../db")

//TRAEMOS POKEMON DE LA API
const getPokemonApi = async()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150");
    const pokemonUrls = response.data.results.map(pokemon => pokemon.url);

    const pokemonResponses = await Promise.all(pokemonUrls.map(url => axios.get(url)));

    const pokemonList = pokemonResponses.map(pokemonResponse => ({
        id: pokemonResponse.data.id,
        Name: pokemonResponse.data.name,
        Image: pokemonResponse.data.sprites.front_default,
        Hp: pokemonResponse.data.stats[0].base_stat,
        Attack: pokemonResponse.data.stats[1].base_stat,
        Defense: pokemonResponse.data.stats[2].base_stat,
        Speed: pokemonResponse.data.stats[5].base_stat,
        Height: pokemonResponse.data.height,
        Weight: pokemonResponse.data.weight,
        Types: pokemonResponse.data.types.map((type) => ({
            name: type.type.name
        }))
    }));
    return pokemonList;
}
   
//TRAEMOS POKEMON DE LA BD
const getPokemonDB = async()=>{ 
    const dbPokemon = await Pokemon.findAll({
        include: {
          model: Tipo,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
    });
    return dbPokemon;
}

//CONCATENAMOS 
const getAllPokemons = async()=>{
    const ApiPokemons = await getPokemonApi();
    const DBPokemons = await getPokemonDB();
    return [...ApiPokemons, ...DBPokemons];
}
    
module.exports = getAllPokemons;