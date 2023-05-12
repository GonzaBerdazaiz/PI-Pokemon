const {Pokemon, Tipo} = require("../db")
const axios = require("axios");
const { Op } = require("sequelize"); //operadores de sequelize

const getPokemonsByNameBD = async(name) =>{
    const pokemonByNameBD = await Pokemon.findAll({
        where: {name: {
            [Op.iLike]: `%${name}%`,
          }},
        include: [{
            model: Tipo,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        }]
    })
    return [...pokemonByNameBD];
}

const getPokemonsByNameApi = async(name) =>{
    try {
        const response = [];
        name = name.toLowerCase();
        const filteredByNamePokemons = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (filteredByNamePokemons.data) {
            response.push({
                Id: filteredByNamePokemons.data.id,
                Name: filteredByNamePokemons.data.name,
                Image: filteredByNamePokemons.data.sprites.other.dream_world.front_default,
                hp: filteredByNamePokemons.data.stats[0].base_stat,
                Attack: filteredByNamePokemons.data.stats[1].base_stat,
                Defense: filteredByNamePokemons.data.stats[2].base_stat,
                Speed: filteredByNamePokemons.data.stats[3].base_stat,
                Height: filteredByNamePokemons.data.height,
                Weight: filteredByNamePokemons.data.weight,
                Types: filteredByNamePokemons.data.types.map((t) => { return {name: t.type.name}}),
                created: false,
        })};
        return response;
    } catch (error){
        return [];
    }
}

const getPokemonsByName = async(name)=>{
    const response = {
        data: [],
        message: '',
        status: 200,
    };
    const DBPokemons = await getPokemonsByNameBD(name);
    const APIPokemons = await getPokemonsByNameApi(name);
    
    const pokemons = [...DBPokemons, ...APIPokemons];
    if (response.length < 0) {
        response.message = 'No se encontraron resultados.';
    } else {
        response.message = 'Pokemons encontrados'
        response.data = pokemons;
    }
    return response;
}

module.exports = getPokemonsByName;

// DTO --> Data Transfer Object

// DTOs are used to transfer data between client and server

// LLAMADA A API --> []
// LLAMADA A BASE DE DATOS --> []

//CASO NO ENCONTRAR NADA: Devolvemos
//return 'No se encontraron resultados';

// CASO ENCONTRAR POKEMONS
//return [1, 2];

// UNIFICAR NUESTRA RESPUESTO --> DTO

//   const DBPokemons = [];
//   const APIPokemons = [];

//   if (pokemons.length < 0) {
//     response.message = 'No se encontraron resultados.';
//   } else {
//     response.message = 'Pokemons encontrados'
//     response.data = pokemons
//   }

//   return response;
// };


// EL FRONT HACE ESTO

// const getPokemons = GET pokemons/?name=poke
//if(pokemons.data.length < 0) {
  //mostras getPokemons.message
//getPokemons.data.map(/RENDERIZO CARDS/)