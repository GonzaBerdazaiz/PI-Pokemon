import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getPokemonByName, getAllPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css"
import Loading from "../Loading/Loading";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const [ pokemonName, setPokemonName ] = useState("")

  const handleChange = (event) =>{
    event.preventDefault();
    setPokemonName(event.target.value);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (pokemonName.length > 0) {
      dispatch(getPokemonByName(pokemonName.toLocaleLowerCase()));
      setPokemonName('');
      console.log(setPokemonName)
    }
  }

  const handleReset = (event) => {
    event.preventDefault()
    dispatch(getAllPokemons())
  }

  return (
    <div className={style.SearchBar}>
      {!handleChange ? (
        <Loading></Loading>
      ):(
      <>
        <form onSubmit={handleSubmit}>
          <div className={style.DivInput}>
            <input
              className={style.SearchInput}
              type="search"
              placeholder="Search a Pokemon..."
              value={pokemonName}
              onChange={handleChange}
            />
          </div>
          <div className={style.DivButton}>
            <button type="submit" className={style.SearchBarButton}>Search</button>
            <button className={style.ResetButton} onClick={handleReset}>Reset</button>
          </div>
        </form> 
      </>
      )}
    </div>
  )
}

export default SearchBar;