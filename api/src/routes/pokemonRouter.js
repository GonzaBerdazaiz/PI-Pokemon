const { Router } = require("express");
const {allPokemonsHandler, pokemonByIdHandler} = require("../handlers/PokemonsHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", allPokemonsHandler);
pokemonRouter.get("/:id", pokemonByIdHandler);

module.exports = pokemonRouter;