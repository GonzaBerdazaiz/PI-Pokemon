import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {getPokemonDetail, clearDetail} from "../../redux/actions";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";
import Loading from "../../components/Loading/Loading";

const Detail =() =>{

    const {id} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state=>state.detail);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        dispatch(getPokemonDetail(id))
        .then(() => setLoading(false))
        .catch(() => setLoading(false))
        dispatch(clearDetail())
    },[dispatch,id])

    return (
        <div className={style.DetailContainer}>
            {loading?(
                <Loading></Loading>
            ): !detail.id ? (
            <div> 
              <h1 className={style.PokemonNotFounded}>That Pokemon doesn't exist</h1>
              <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola5" alt=""></img>
              <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola6" alt=""></img>
              <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola7" alt=""></img>
              <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola8" alt=""></img>
            </div>
            ) : (
                <div>
                    <div className={style.Detalles}> 
                        <img className={style.DetailImage}src={detail.image ? detail.image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png"} alt="imagen"/>
                        <div className={style.NameContainer}>
                            <p className={style.DetailName}> {detail.name} </p>
                        </div>
                        <div className={style.ContainerDetail}>
                            <p className={style.DetailHp}> 
                                <span className={style.DetailHpSpan}>HP {detail.hp}</span>
                            </p>
                        </div>    
                        <div className={style.TypeWeightHeight}>
                            <p className={style.DetailTypes}> 
                                {detail.types?.map((v) => v.name).join(' / ')}
                                <span className={style.LettersTypeWeightHeight}>Type</span>
                            </p>
                            <p className={style.DetailWeight}>
                                {detail.weight}
                                <span className={style.LettersTypeWeightHeight}>Weight</span>    
                            </p>
                            <p className={style.DetailHeight}> 
                                {detail.height}
                                <span className={style.LettersTypeWeightHeight}>Height</span>
                            </p>
                        </div>
                        <div className={style.StatsArea}>
                            <div className={style.menu}><div className={style.prueba} style={{ width:`${detail.attack / 150 * 100}%`}}></div>   
                            <span className={style.SpanStatsAreaName}> Attack: {detail.attack}</span>
                            </div>
                            <div className={style.menu}><div className={style.prueba} style={{ width:`${detail.defense / 200 * 100}%`}}></div>
                            <span className={style.SpanStatsAreaName}> Defense: {detail.defense}</span>
                            </div>
                            <div className={style.menu}><div className={style.prueba} style={{ width:`${detail.speed / 180 * 100}%`}}></div>    
                            <span className={style.SpanStatsAreaName}> Speed: {detail.speed}</span>
                            </div>
                        </div> 
                        <div className={style.IdContainer}>
                            <p> # {detail.id} </p>
                        </div>    
                        <Link to='/home' className={style.BackHome}><button className={style.BomeButton}>X</button></Link>                           
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;