import style from "./Form.module.css";
import axios from "axios";
import validations from "./Validaciones";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllTypes} from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Form = () =>{

    const allTypes = useSelector(state => state.allTypes)
    const allPokemons = useSelector(state=>state.allPokemons.map((pok) => pok.name)) //traemos todos los pokemon para validar que no exista el nombre
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({ //Estado inicial de mi form
        name:"",
        hp:"",
        attack:"",
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
        defense:"",
        speed:"",
        height:"",
        weight:"",
        types:[]
    })

    const changeHandler = (event) =>{ 
        const property = event.target.name;  //Con el name sabemos que evento es el que se dispara
        const value = event.target.value;   //es el valor que se le ingresa
        
        setForm({ ...form, [property]: value });    //modificamos el estado: todo lo que tenemos y agregamos lo que se ingrese en el form
        setErrors(validations({ ...form, [property]: value },allPokemons))   //validate va a recibir el estado del formulario que quiere validar. le pasamos esas propiedades para evitar la demora que se genera al validar
    }

    useEffect(() => {
        dispatch(getAllTypes());
    }, [dispatch]);

    const submitHandler = (event) => {
        event.preventDefault(); //para que no recargue la pagina. Si no hacemos esta funcion, se recarga la pagina y perdemos lo que cargamos en el estado
        axios.post("http://localhost:3001/pokemon", form)
        .then(res=>alert("Pokemon creado correctamente"))
        .catch(err=>alert(err))
        navigate("/home"); //con esto nos dirigimos a home cuando se termine el formulario
      };

    const typesHandler = (event) =>{
        setForm({...form, types: [...form.types, event.target.value]})
    }

    return(
        <div className={style.PageContainer}>
            <p className={style.Title}> Hola! En esta seccion podremos crear un nuevo Pokemon. Por favor, ingresa los datos requeridos en la Pokedex</p>
            <img src="https://www.safarizone.sqwordle.io/static/media/prof-oak-3.a83cb5bb65a9b3d1b537.png" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola1" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola2" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola3" alt=""></img>
            <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" id="bola4" alt=""></img>
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
                    <label htmlFor="imagen">Image</label>
                    <input 
                        type="text"
                        name="image"
                        size="25"
                        placeholder="Coloque una url"
                        autoComplete="off"
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
                <button type="submit" disabled={Object.keys(errors).length ? true : false}>CREAR</button>
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
    )
}

export default Form;