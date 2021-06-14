const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const otraFuncion = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    const hija = await fetchData(origin.residents[0]);
    const genero = await fetchData(hija.gender);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
    console.log(hija.name);
    console.log(genero);
    // investigar porque generar error cuando se ejecuta con node.jss
  } catch (error) {
    console.error(error);
  }
};
console.log("Antesitos");
otraFuncion(API);
console.log("Despuesito");

const promiseAll = async () => {
  try {
    const [character, episodes, locations] = await Promise.all([
      getCharacters(),
      getEpisodes(),
      getLocations(),
    ]);
    console.log(character);
    console.log(episodes);
    console.log(locations);
  } catch (error) {
    console.error(error);
  }
};
