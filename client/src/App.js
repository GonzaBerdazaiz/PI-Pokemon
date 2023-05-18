import { Route, Routes, useLocation } from "react-router-dom";
//import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import {Landing, Home, Form, Contacto, Detail} from "./views";
import style from "./App.module.css";

function App() {

//HOOKS
const location = useLocation();
//const dispatch = useDispatch();

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
