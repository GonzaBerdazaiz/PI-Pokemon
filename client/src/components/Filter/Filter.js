import { useDispatch, useSelector } from "react-redux";
import {filterBySource, filterPokemon} from "../../redux/actions";
import style from "./Filter.module.css"

const Filter = ({ setCurrentPage }) => {

    const dispatch = useDispatch();
    const allTypes = useSelector(state=>state.allTypes)

    const handlerFilterBySource = (event) => {
        dispatch(filterBySource(event.target.value));
        setCurrentPage(1)
    };

    const filterType = (event) => {
        event.preventDefault();
        dispatch(filterPokemon(event.target.value));
        setCurrentPage(1)
    };

    return(
        <div className={style.FilterContainer}>
            <p className={style.LabelFilter}>Filter by</p>
            <select onChange={handlerFilterBySource} className={style.SelectorFilter}>
                <option key={0} value="all" disabled selected>Source</option>
                <option key={1} value="original">Original</option>
                <option key={2} value="created">Created</option>
                <option key={3} value="all">ALL </option>  
            </select>
            <select onChange={filterType} className={style.SelectorFilter}>
                <option value="" disabled selected>Types</option> 
                <optgroup key={0} label="Type" font-weight="bold" disabled selected />
                <option value="all">All Types </option>
                {allTypes?.map((type) => {
                    return (
                    <option key={type.id} name={type.id} value={type.name}>
                        {type.name}
                    </option>
                    )
                })}                 
            </select>
        </div>
    )
}

export default Filter;
