import { useDispatch } from "react-redux";
import {orderPokemon} from "../../redux/actions"
import style from "./Order.module.css"

const Order = ({ setCurrentPage }) => {

    const dispatch = useDispatch();

    const orderPokemonName = (event) => {
        dispatch(orderPokemon(event.target.value));
        setCurrentPage(1)
    };

    return (
        <div className={style.OrderContainer}>
            <p className={style.LabelOrder}>Sort by</p>
            <select name="OrderPokemonName" onChange={orderPokemonName} className={style.SelectorOrder}>
                <option key={0} value="all" > Pokemon # </option>  
                <optgroup key={1} label="Alphabetical" font-weight="bold" disabled selected />  
                <option key={2} value="asc">A - Z</option>
                <option key={3} value="des">Z - A</option>
                <optgroup key={4} label="Attack" font-weight="bold" disabled selected />  
                <option key={5} value="str">STRONGEST</option>
                <option key={6} value="wea">WEAKEST</option>
            </select>
        </div>
    )
}

export default Order;