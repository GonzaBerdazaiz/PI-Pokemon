const axios = require("axios");
const {Tipo} = require("../db");

const getTypes = async() =>{
    const typesApi = await axios.get("https://pokeapi.co/api/v2/type")
    const tiposApi = typesApi.data.results.map((e)=>e.name);
    for (const types of tiposApi) {
        await Tipo.findOrCreate({ where: { name: types }, });
    }
    const typeDB = await Tipo.findAll();
    return typeDB;
}

module.exports = getTypes;
