const getAllPokemons = require("../controllers/getAllPokemons");
const getPokemonById = require("../controllers/getPokemonById");

const allPokemonsHandler = async(req,res) =>{
    try{
        const getPokemons = await getAllPokemons();
        res.status(200).json(getPokemons);
    } catch(error){
        res.status(404).json({error: error.message});
    }
}

const pokemonByIdHandler = async(req,res) => {
    const {id} = req.params;
    try {
        const pokemonId = await getPokemonById(id)
        if (!pokemonId) throw new Error("Pokemon not founded")
        res.status(200).json(pokemonId)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const pokemonByNameHandler = async(req,res)=>{
    const { name } = req.query;
    try{

    }catch(error){

    }
}

module.exports = {allPokemonsHandler, pokemonByIdHandler};