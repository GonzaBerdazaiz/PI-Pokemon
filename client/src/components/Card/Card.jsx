import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({id, name,image,types}) => {
    return(
        <div className={style.CardContainer}>
            <div className={style.NameContainer}>
                <Link to={`/detail/${id}`} className={style.PokemonName}>{name} </Link>
            </div>
            <div className={style.IDContainer}>
                <div className={style.ID}># {id}</div>
            </div>
            <div className={style.PokemonImagenContainer}>
                <img src={image} className={style.PokemonImage} alt=""/>
            </div>
            <div className={style.PokemonType}>
                <div>Type: {types}</div>
            </div>
        </div>
    )
}

export default Card;