const axios = require("axios");
const {Pokemon, Type} = require("../db")

const getPokemonByIdBD = async(id) =>{
  const pokeBD = await Pokemon.findByPk(id, {
    include: [
      {
        model: Type,
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
  const pokeApi = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (pokeApi) {
    let p = pokeApi;
    return {
      id: p.data.id,
      Name: p.data.name,
      image: p.data.sprites.other.dream_world.front_default,
      Hp: p.data.stats[0].base_stat,
      Attack: p.data.stats[1].base_stat,
      Defense: p.data.stats[2].base_stat,
      Speed: p.data.stats[3].base_stat,
      Height: p.data.height,
      Weight: p.data.weight,
      Types: p.data.types.map((t) => { return {name: t.type.name}}),
      Created: false,
    }; 
  }
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
