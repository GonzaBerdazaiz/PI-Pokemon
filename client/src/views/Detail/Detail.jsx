import { useEffect } from "react";
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

    useEffect (()=>{
        dispatch(getPokemonDetail(id))
        dispatch(clearDetail())
    },[dispatch,id])

    return (
        <div className={style.DetailContainer}>
            {!detail.name ? (
                <Loading></Loading>
            ):(
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
                        <div className={style.AttackContainer}>
                            {/* <img src="https://www.pngitem.com/pimgs/m/178-1789882_sword-fighting-attack-icon-png-transparent-png.png" alt="png" className={style.AttackIcon}></img> */}
                            <p className={style.DetailAttack}> Attack: {detail.attack}</p>
                        </div>
                        <div className={style.DefenseContainer}>
                            {/* <img src="https://png.pngtree.com/png-clipart/20200311/ourmid/pngtree-shield-gray-and-white-png-image_2133647.jpg" alt="png" className={style.DefenseIcon}></img> */}
                            <p className={style.DetailDefense}> Defense: {detail.defense}</p>
                        </div>
                        <div className={style.SpeedContainer}>
                            {/* <img src="https://cdn.onlinewebfonts.com/svg/img_81086.png" alt="png" className={style.SpeedIcon}></img> */}
                            <p className={style.DetailSpeed}> Speed: {detail.speed}</p>
                        </div>    
                        <div className={style.IdContainer}>
                            <p className={style.DetailId}> # {detail.id} </p>
                        </div> 
                        <Link to='/home' className={style.BackHome}><button className={style.BomeButton}>X</button></Link>                           
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;