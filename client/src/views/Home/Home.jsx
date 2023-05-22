import Cards from "../../components/Cards/Cards";
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import Pagination from "../../components/Paginacion/Paginacion"
//import Loading from "../../components/Loading/Loading";
import { getAllPokemons } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Order from "../../components/Order/Order";
import Filter from "../../components/Filter/Filter";

const Home = ({pokemons}) => {

    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);
    const [currentPage, setCurrentPage] = useState(1);  //los creamos para controlar la pagina actual del paginado
    const pokemonsPerPage = 12;
    //const [loading, setLoading] = useState(true);   

    const handlePaginate = (pageNumber) => {    //recibe el num de pag y actualiza el estado y lo pasamos como prop al Pagination
        setCurrentPage(pageNumber);
    };

    const indexOfLastPokemon = currentPage * pokemonsPerPage; //calculamos el primer y ultimo indice de la pagina para ver cuales son los pokemones de la pag actual
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = allPokemons.length > 0 && allPokemons.slice(  //con slice obtenemos una porcion de allPokemons, los q corresponden a la pag actual
        indexOfFirstPokemon,
        indexOfLastPokemon
    );

    useEffect(() => {
        dispatch(getAllPokemons());
    }, [dispatch])

    // const changeLoading = () => {   //si la demora en cargar el home es mayor a lo especificado, metemos el loading
    //     setTimeout(() => {
    //       setLoading(false);
    //     }, 6000);
    // };
    
    // if (loading) {
    //     changeLoading();
    //     return <Loading></Loading>;
    // } else {
    
        return (
            <div className={style.HomeBackground}>
                <NavBar/>
                <div>
                    <div className={style.PaginationOrdenContainer}>
                        <Filter currentPage={currentPage} setCurrentPage={setCurrentPage}></Filter>
                        <Pagination
                            pokemonsPerPage={pokemonsPerPage}
                            totalPokemons={allPokemons.length}
                            currentPage={currentPage}
                            handlePaginate={handlePaginate}
                        />
                        <Order setCurrentPage={setCurrentPage}></Order>
                    </div>
                    <Cards pokemons={currentPokemons} />
                </div> 
            </div>
        );
    //};
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, null)(Home);