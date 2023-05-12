const { Router } = require("express");
const {allPokemonsHandler, pokemonByIdHandler, pokemonCreatedHandler, pokemonDeletedHandler} = require("../handlers/PokemonsHandler");
const pokemonRouter = Router();

pokemonRouter
.get("/", allPokemonsHandler)
.post("/", pokemonCreatedHandler)
.get("/:id", pokemonByIdHandler)
.delete("/:id", pokemonDeletedHandler); 

module.exports = pokemonRouter;


//const {allPokemonsHandler, pokemonByIdHandler, pokemonByNameHandler, pokemonCreatedHandler} = require("../handlers/PokemonsHandler");
//pokemonRouter.get("/name", pokemonByNameHandler);