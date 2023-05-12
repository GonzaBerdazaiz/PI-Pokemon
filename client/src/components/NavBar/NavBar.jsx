import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
    return (
      <div className={style.navContainer}>
        <div className={style.leftSection}>
          <div className={style.image} />
          <div className={style.linkContainer}>
            <Link to="/home" className={style.link}>
              Home
            </Link>
            <Link to="/create" className={style.link}>
              Create
            </Link>
          </div>
        </div>
        <SearchBar />
      </div>
    );
  };

export default NavBar;