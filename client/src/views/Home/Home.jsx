import Cards from "../../components/Cards/Cards";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Home.module.css";
import { getAllPokemons } from "../../redux/actions";
import Pagination from "../../components/Paginacion/Paginacion"
import Loading from "../../components/Loading/Loading";

const Home = () => { //Al montar el componente HOME, debemos ejecutar las actions. Como contiene Cards, Home le pide al Store de redux que haga un cambio

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);
    const [currentPage, setCurrentPage] = useState(1);  //los creamos para controlar la pagina actual del paginado
    const pokemonsPerPage = 12;
    const [loading, setLoading] = useState(true);   //creamos un estado para manejar la demora

    useEffect(()=>{ //para manejar el ciclo de vida del componente. Cuando se monta useEffect recibe una funcion la q se ejecuta cunado el componente se monta o cambia alguna de las dependencias el array de dependencia
        dispatch(getAllPokemons());
    },[dispatch])   
    //SECUENCIA: Se monta HOME y eso dispara el useEffect el cual hace el dispatch. eso hace que se ejecute la action creator getAllPokemons la cual retorna la funcion. El thunk middleware agarra la fc la ejecuta, hace el dispatch y la info va al reducer y crea un estado nuevo q es igual al anterior pero con el cambio que le pasamos

    const handlePaginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
    );

    const changeLoading = () => {   //si la demora en cargar el home es mayor a lo especificado, metemos el loading
        setTimeout(() => {
          setLoading(false);
        }, 3000);
    };
    
    if (loading) {
        changeLoading();
        return <Loading></Loading>;
    } else {
        return (
            <div className={style.HomeBackground}>
                <div>
                    <Pagination
                        pokemonsPerPage={pokemonsPerPage}
                        totalPokemons={allPokemons.length}
                        currentPage={currentPage}
                        handlePaginate={handlePaginate}
                    />
                </div>
                <Cards pokemons={currentPokemons} />    {/*aca pasamos las props al Cards */}
                
            </div>
        );
    };
}

export default Home;