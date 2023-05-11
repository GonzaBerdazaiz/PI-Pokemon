const { Router } = require("express");
const {allPokemonsHandler, pokemonByIdHandler, pokemonByNameHandler, pokemonCreatedHandler} = require("../handlers/PokemonsHandler");

const pokemonRouter = Router();

pokemonRouter.get("/name", pokemonByNameHandler);
pokemonRouter.get("/", allPokemonsHandler);
pokemonRouter.post("/", pokemonCreatedHandler);
pokemonRouter.get("/:id", pokemonByIdHandler);

module.exports = pokemonRouter;