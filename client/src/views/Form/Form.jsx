import style from "./Form.module.css";
import axios from "axios";
import validations from "./Validaciones";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllPokemons, getAllTypes} from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading"

const Form = () =>{

    const allTypes = useSelector(state => state.allTypes)
    const allPokemons = useSelector(state=>state.allPokemons) 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({ 
        name:"",
        hp:"",
        attack:"",
        image:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[],
    })

    const [errors, setErrors] = useState({
        name:"",
        hp:"",
        attack:"",
        image:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[]
    })

    const changeHandler = (event) =>{ 
        const property = event.target.name;
        const value = event.target.value;   
        
        setForm({ ...form, [property]: value });    
        setErrors(validations({ ...form, [property]: value },allPokemons))
    }

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const submitHandler = (event) => {
        event.preventDefault(); 
        axios.post("http://localhost:3001/pokemon", form)
        .then(res=>dispatch(getAllPokemons()))
        .catch(err=>alert(err))
        navigate("/home");
      };

    const typesHandler = (event) =>{
        setForm({...form, types: [...form.types, event.target.value]})
    }

    return(
        <div>
            {!allPokemons ? (
                <Loading></Loading>
            ) : (
            <>
                <div className={style.PageContainer}>
                    <p className={style.Title}> Hola! En esta seccion podremos crear un nuevo Pokemon. Por favor, ingresa los datos requeridos en la Pokedex</p>
                    <img src="https://www.safarizone.sqwordle.io/static/media/prof-oak-3.a83cb5bb65a9b3d1b537.png" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola1" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola2" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola3" alt=""></img>
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola4" alt=""></img>
                    <img src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif" id="gifPokebola" alt=""></img>
                    <form onSubmit={submitHandler} className={style.Container}>
                        <div className={style.NameTextContainer}>
                            <label htmlFor="name">Name: </label>
                            <input 
                                type="text"
                                name="name"
                                maxLength="18"
                                size="25"
                                autoComplete="off"
                                placeholder="Escriba un nombre.."
                                value={form.name}
                                onChange={changeHandler}
                            />   
                        </div>
                        <div className={style.StatsContainer}>
                            <div>
                                <label htmlFor="hp">Hp: </label>
                                <input 
                                    type="integer"
                                    maxLength="3"
                                    name="hp"
                                    size="25"
                                    value={form.hp}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="attack">Attack: </label>
                                <input 
                                    type="integer"
                                    maxLength="3"
                                    name="attack"
                                    size="25"
                                    value={form.attack}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="defense">Defense: </label>
                                <input 
                                    type="integer"
                                    maxLength="3"
                                    name="defense"
                                    size="25"
                                    value={form.defense}
                                    onChange={changeHandler}/>
                            </div>
                            <div>
                                <label htmlFor="speed">Speed: </label>
                                <input 
                                    type="integer"
                                    maxLength="3"
                                    name="speed"
                                    size="25"
                                    value={form.speed}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="height">Height: </label>
                                <input 
                                    type="integer"
                                    maxLength="3"
                                    name="height"
                                    size="25"
                                    value={form.height}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="weight">Weight: </label>
                                <input 
                                    type="integer"
                                    maxLength="4"
                                    name="weight"
                                    size="15"
                                    value={form.weight}
                                    onChange={changeHandler}/>
                            </div>
                        </div>
                        <div className={style.ImageTextContainer}>
                            <label htmlFor="image">Image</label>
                            <input 
                                type="text"
                                name="image"
                                size="25"
                                placeholder="Coloque una url"
                                autoComplete="off"
                                value={form.image}
                                onChange={changeHandler}/>
                        </div>
                        <div className={style.TypesContainer}>
                            <label className={style.LabelType}>Type </label>
                            <input type=""
                                value={form.types}
                                onChange={changeHandler}
                                name="types"/>
                        </div>
                        <select onChange={typesHandler} multiple={5} className={style.typesHandler} >
                            {allTypes?.map((tipo)=>{
                                return <option name="type" key={tipo.id} value={tipo.id}>
                                {tipo.name} </option>
                            })} 
                        </select>
                        <button type="submit" className={style.FormButton} disabled={Object.keys(errors).length ? true : false}>CREAR</button>
                        <div className={style.ErrorValidation}>
                            {errors.name && <p>{errors.name}</p>}
                            {errors.hp && <p>{errors.hp}</p>}
                            {errors.attack && <p>{errors.attack}</p>}
                            {errors.defense && <p>{errors.defense}</p>}
                            {errors.speed && <p>{errors.speed}</p>}
                            {errors.height && <p>{errors.height}</p>}
                            {errors.weight && <p>{errors.weight}</p>}
                            {errors.types && <p>{errors.types}</p>}
                        </div>
                    </form>
                </div>
            </>
        )}
        </div>
    )
}

export default Form;