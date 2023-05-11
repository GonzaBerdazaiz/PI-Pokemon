const { Router } = require("express");
const {allPokemonsHandler, pokemonByIdHandler, pokemonCreatedHandler} = require("../handlers/PokemonsHandler");
const pokemonRouter = Router();

pokemonRouter.get("/", allPokemonsHandler);
pokemonRouter.post("/", pokemonCreatedHandler);
pokemonRouter.get("/:id", pokemonByIdHandler);

module.exports = pokemonRouter;


//const {allPokemonsHandler, pokemonByIdHandler, pokemonByNameHandler, pokemonCreatedHandler} = require("../handlers/PokemonsHandler");
//pokemonRouter.get("/name", pokemonByNameHandler);