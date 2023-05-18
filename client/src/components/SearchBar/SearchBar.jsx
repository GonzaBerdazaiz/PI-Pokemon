import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getPokemonByName } from "../../redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch()
    const [ name, setName ] = useState("")

    function handleInputChange(event){
        event.preventDefault();
        setName(event.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
    }

    function handleSubmit(event){
        event.preventDefault();
        if(name !== ''){
            dispatch(getPokemonByName(name))
            setName("")
        }
    }
    return (
        <div className={style.SearchBar}>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className={style.searchBox}>
              <input
                className={style.SearchInput}
                type="text"
                placeholder="Search Pokemon..."
                value={name}
                onChange={(event) => handleInputChange(event)}
              />
              <button type="submit" className={style.SearchButton}>Search</button>
            </div>
          </form>
        </div>
      );
}

export default SearchBar;