const {Pokemon, Tipo} = require("../db");
const { Op } = require("sequelize");

const pokemonCreated = async(name, hp, attack, defense, speed, height, weight, types) => {
    const postPokemon = await Pokemon.create({
        name: name,
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
    });
    const pokemonTypes = await Tipo.findAll({
        where: { name: types},
        })
    await postPokemon?.addTipo(pokemonTypes);  
    return postPokemon;
    
}

module.exports = pokemonCreated;