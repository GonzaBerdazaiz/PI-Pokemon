import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={style.navContainer}>
      <div className={style.leftSection}>
        <div className={style.image} />
        <div className={style.LeftContainer}>
          <Link to="/home" className={style.link}>
            Home
          </Link>
          <Link to="/create" className={style.link}>
            Create
          </Link>
        </div>
      </div>
      <div className={style.middleSection} >
        <SearchBar/>
      </div>
      {/* <div className={style.RightContainer}>
        <Link to="/contact" className={style.Contacto}>
          Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default NavBar;