const getAllPokemons = require("../controllers/getAllPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonsByName = require("../controllers/getPokemonsByName");
const pokemonCreated = require("../controllers/pokemonCreated");

const allPokemonsHandler = async(req,res)=>{
    const { name } = req.query;
    try{
        const response = name ? await getPokemonsByName(name) : await getAllPokemons();
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

const pokemonCreatedHandler = async (req,res) => {
    const { name, hp, attack, defense, speed, height, weight, types } = req.body
    try { 
        if(!name || !hp || !attack || !defense || !speed || !height || !weight || !types){
            throw Error ("There's some Pokemon information is missing")
        } else {
            const newPokemon = await pokemonCreated(name, hp, attack, defense, speed, height, weight, types);
            res.status(200).json(newPokemon);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const pokemonByIdHandler = async(req,res) => {
    const {id} = req.params;
    try {
        const pokemonId = await getPokemonById(id)
        if (!pokemonId) throw new Error("Pokemon not found")
        res.status(200).json(pokemonId)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = {allPokemonsHandler, pokemonByIdHandler, pokemonCreatedHandler};