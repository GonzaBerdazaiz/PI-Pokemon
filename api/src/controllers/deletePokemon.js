const {Pokemon} = require("../db");

const pokemonDeleted = async(id) =>{
    const deletePokemon = await Pokemon.destroy({where: {id}});
    if(deletePokemon) return `El Pokemon con ID ${id} ha sido eliminado`;
};

module.exports = pokemonDeleted;