const axios = require("axios");
const {Pokemon, Tipo} = require("../db")

const getPokemonByIdBD = async(id) =>{
    const pokeBD = await Pokemon.findByPk(id, {
        include: [
          {
            model: Tipo,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
    return pokeBD;
}
    
const getPokemonByIdApi = async(id) => {
    const pokeApi = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/?limit=150`);
    return pokeApi.data;
}

const getPokemonById = async(id) =>{
    if (!isNaN(id)) { // Si es NaN es de la DB, sino, el id va a ser de la API xq de ahi trae no numero, un UUID.
        const PokemonId = await getPokemonByIdApi(id);
        return PokemonId;
    } else {
        const PokemonId = await getPokemonByIdBD(id);
        return PokemonId;
    }
};

module.exports = getPokemonById;
