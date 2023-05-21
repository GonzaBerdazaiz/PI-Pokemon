import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getPokemonByName} from "../../redux/actions";
import style from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch()
  const [ nameSearch, setNameSearch ] = useState("")

  const handleChange = (event) =>{
    event.preventDefault();
    setNameSearch(event.target.value)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (nameSearch.length > 0) {
      dispatch(getPokemonByName(nameSearch.toLocaleLowerCase()));
      setNameSearch('');
    }
  }

  return (
    <div className={style.SearchBar}>
      <form onSubmit={handleSubmit}>
        <div className={style.DivInput}>
          <input
            className={style.SearchInput}
            type="search"
            placeholder="Search a Pokemon..."
            value={nameSearch}
            onChange={handleChange}
          />
        </div>
        <div className={style.DivButton}>
          <button type="submit" className={style.SearchBarButton}>Search</button>
        </div>
      </form> 
    </div>
  )
}

export default SearchBar;