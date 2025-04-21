import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header>
      <nav className={css.navMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.navLinkActive)
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            clsx(css.navLink, isActive && css.navLinkActive)
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
