const {Pokemon, Tipo} = require("../db")
const axios = require("axios");
const { Op } = require("sequelize"); //operadores de sequelize

const getPokemonByNameApi = async(name) =>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const p = response.data
    if (p) {
        return {
          Id: p.id,
          Name: p.name,
          Image: p.sprites.other.dream_world.front_default,
          hp: p.stats[0].base_stat,
          Attack: p.stats[1].base_stat,
          Defense: p.stats[2].base_stat,
          Speed: p.stats[3].base_stat,
          Height: p.height,
          Weight: p.weight,
          Types: p.types.map((t) => { return {name: t.type.name}}),
          created: false,
        }; 
      }
}

const getPokemonByNameBD = async(name) =>{
    const pokeBD = await Pokemon.findAll({
        where: {name: {[Op.iLike]: `%${name}%`}}, //iLike no distingue entre may y minusc
        include: {
            model: Tipo,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    })
    return pokeBD;
}

const getPokemonByName = async(name) =>{
    let pokemonNameApi = await getPokemonByNameApi(name.toLowerCase()); //llevamos todo a minuscula
    let pokemonNameBD = await getPokemonByNameBD(name);
    pokemonNameApi = [pokemonNameApi];
    
    if (!pokemonNameApi.length && !pokemonNameBD.length) {
        throw new Error(`The pokemon ${name} doesn't exist`);
    }
    return [...pokemonNameBD, ...pokemonNameApi];
}

module.exports = getPokemonByName;