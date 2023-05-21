import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect} from "react"
import NavBar from "./components/NavBar/NavBar";
import {Landing, Home, Form, Contacto, Detail} from "./views";
import style from "./App.module.css";
import { getAllPokemons, getAllTypes } from "./redux/actions";

function App() {

//HOOKS
const location = useLocation();
const dispatch = useDispatch();

useEffect(()=>{ //para manejar el ciclo de vida del componente. Cuando se monta useEffect recibe una funcion la q se ejecuta cunado el componente se monta o cambia alguna de las dependencias el array de dependencia
  dispatch(getAllPokemons())
  dispatch(getAllTypes())
},[dispatch])   
//SECUENCIA: Se monta HOME y eso dispara el useEffect el cual hace el dispatch. eso hace que se ejecute la action creator getAllPokemons la cual retorna la funcion. El thunk middleware agarra la fc la ejecuta, hace el dispatch y la info va al reducer y crea un estado nuevo q es igual al anterior pero con el cambio que le pasamos

  return (
    <div className={style.App}>
      {location.pathname !=="/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/contact" element={<Contacto />}></Route>
      </Routes>
    </div>
  );
}

export default App;
