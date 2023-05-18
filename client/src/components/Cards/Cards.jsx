import Card from "../Card/Card";
import style from "./Cards.module.css";
import {useSelector} from "react-redux"

const Cards = () => {
    
    const allPokemons = useSelector(state=>state.allPokemons); //nos traemos los pokemones del estado global

    return(
        <div className={style.CardsContainer}>
            {allPokemons?.map(poke=>{
                return <Card 
                    id={poke.id<2000 ? poke.id : null}
                    image = {poke.image ? poke.image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png"} 
                    name = {poke.name}
                    types = {poke.types?.map((v) => v.name).join(' / ')}
                />
            })}
        </div>
    )
}

export default Cards;