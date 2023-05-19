import Cards from "../../components/Cards/Cards";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Home.module.css";
import { getAllPokemons } from "../../redux/actions";
import Pagination from "../../components/Paginacion/Paginacion"

const Home = () => { //Al montar el componente HOME, debemos ejecutar las actions. Como contiene Cards, Home le pide al Store de redux que haga un cambio

    const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12;

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
          <Cards pokemons={currentPokemons} />
        </div>
    );
  
};



    // return(
    //     <div className={style.HomeBackground}>
    //         {/* <div>
    //             <Paginacion
    //                 setCurrentPage={setCurrentPage}
    //                 currentPage={currentPage}
    //                 totalPokemon={allPokemons.length}
    //                 pokemonPerPage={pokemonPerPage}
    //             />
    //         </div> */}
    //         {/* <Cards Pokemon={currentPokemon}/> */}
    //         <Cards/>
    //     </div>
    // )
//};

export default Home;