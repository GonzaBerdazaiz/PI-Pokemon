const getAllPokemons = require("../controllers/getAllPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
const pokemonCreated = require("../controllers/pokemonCreated");

const allPokemonsHandler = async(req,res)=>{
    const { name } = req.query;
    try{
        const pokemonName = name ? await getPokemonByName(name) : await getAllPokemons();
        res.status(200).json(pokemonName);
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


// const allPokemonsHandler = async(req,res) =>{
//     try{
//         const getPokemons = await getAllPokemons();
//         res.status(200).json(getPokemons);
//     } catch(error){
//         res.status(404).json({error: error.message});
//     }
// }

// const pokemonByNameHandler = async(req,res)=>{
//     const { name } = req.query;
//     try{
//         const pokemonName = await getPokemonByName(name);
//         res.status(200).json(pokemonName);
//     }catch(error){
//         res.status(400).json({error: error.message});
//     }
// }

//module.exports = {allPokemonsHandler, pokemonByIdHandler, pokemonByNameHandler, pokemonCreatedHandler};