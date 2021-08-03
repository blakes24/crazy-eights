import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.main}>
      <NavLink to="/" className={styles.title}>
        Crazy Eights
      </NavLink>
      <NavLink to="/" className={styles.link}>
        About
      </NavLink>
      <NavLink to="/game" className={styles.link}>
        Game
      </NavLink>
    </div>
  );
}

export default Navbar;
