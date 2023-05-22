import { useDispatch } from "react-redux";
import {filterPokemon} from "../../redux/actions";
import { useState } from "react";
import style from "./Filter.module.css"

const Filter = () => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handlerFilterPokemon = (event) => {
        dispatch(filterPokemon(event.target.value));
        setAux(true);
    };

    return(
        <div className={style.FilterContainer}>
            <p className={style.LabelFilter}>Filter by</p>
            <select onChange={handlerFilterPokemon} className={style.SelectorFilter}>
                <option key={0} value="all">ALL </option>  
                <optgroup key={1} label="Source" font-weight="bold" disabled selected />  
                <option key={2} value="original">Original</option>
                <option key={3} value="created">Created</option>
                <optgroup key={4} label="Type" font-weight="bold" disabled selected />
                <option key={5} value="all">All Types</option>  
                <option key={6} value="normal">Normal</option>  
                <option key={7} value="fighting">Fighting</option>  
                <option key={8} value="flying">Flying</option>  
                <option key={9} value="poison">Poison</option>  
                <option key={10} value="ground">Ground</option>  
                <option key={11} value="rock">Rock</option>  
                <option key={12} value="bug">Bug</option>  
                <option key={13} value="ghost">Ghost</option>  
                <option key={14} value="steel">Steel</option>  
                <option key={15} value="fire">Fire</option>  
                <option key={16} value="water">Water</option>  
                <option key={17} value="grass">Grass</option>  
                <option key={18} value="electric">Electric</option>  
                <option key={19} value="psychic">Psychic</option>  
                <option key={20} value="ice">Ice</option>  
                <option key={21} value="dragon">Dragon</option>  
                <option key={22} value="dark">Dark</option>  
                <option key={23} value="fairy">Fairy</option>  
                <option key={24} value="unknown">Unknown</option>  
                <option key={25} value="shadow">Shadow</option>  
            </select>
        </div>
    )
}

export default Filter;
