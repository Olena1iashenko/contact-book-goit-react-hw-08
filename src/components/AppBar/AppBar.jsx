import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import { AuthNav } from "../AuthNav/AuthNav";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {isLoggedIn ? (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      ) : (
        <AuthNav />
      )}
    </nav>
  );
};

export default AppBar;
