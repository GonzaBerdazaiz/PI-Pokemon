import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = ({setCurrentPage}) => {

  return (
    <nav className={style.navContainer}>
      <div className={style.leftSection}>
      <img src="https://i.pinimg.com/originals/47/14/28/47142839defcb4270fffff88cf9f082b.gif" id="gifPikachu" alt="gifPikachu"></img>
        <div className={style.image} />
        <div className={style.LeftContainer}>
          <Link to="/home" className={style.link}>
            Home
          </Link>
          <Link to="/create" className={style.link}>
            Create
          </Link>
          <Link to="/about" className={style.About}>
            About
          </Link>
        </div>
      </div>
      <div className={style.middleSection} >
        <SearchBar setCurrentPage={setCurrentPage}/>
      </div>
    </nav>
  );
};

export default NavBar;