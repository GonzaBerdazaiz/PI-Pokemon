import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./Home.module.css";
import { getAllPokemons } from "../../redux/actions";

const Home = () => { //Al montar el componente HOME, debemos ejecutar las actions. Como contiene Cards, Home le pide al Store de redux que haga un cambio

    const dispatch = useDispatch();

    useEffect(()=>{ //para manejar el ciclo de vida del componente. Cuando se monta useEffect recibe una funcion la q se ejecuta cunado el componente se monta o cambia alguna de las dependencias el array de dependencia
        dispatch(getAllPokemons());
    },[dispatch])
    //SECUENCIA: Se monta HOME y eso dispara el useEffect el cual hace el dispatch. eso hace que se ejecute la action creator getAllPokemons la cual retorna la funcion. El thunk middleware agarra la fc la ejecuta, hace el dispatch y la info va al reducer y crea un estado nuevo q es igual al anterior pero con el cambio que le pasamos

    return(
        <div className={style.HomeBackground}>
            <Cards />
        </div>
    )
};

export default Home;