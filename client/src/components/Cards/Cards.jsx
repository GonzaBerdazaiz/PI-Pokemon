import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ pokemons }) => {   //nos traemos x props los pokemons del currentPage

    return (
        <div className={style.CardsContainer}> 
            {pokemons.map((poke) => {
            return (
                <Card
                key={poke.id}
                id={poke.id}
                image={poke.image ? poke.image : 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png'}
                name={poke.name}
                types={poke.types?.map((v) => v.name).join(' / ')}
                />
            );
            })}
        </div>
    );
  };
  
  export default Cards;