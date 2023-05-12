import { Route, Routes, useLocation } from "react-router-dom";
//import { useDispatch } from "react-redux";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Form from "./views/Form/Form";
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
        {/* <Route path="/detail/:detailId"></Route> */}
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
