import { Route, Routes } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <h1>Henry Pokemon</h1>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
