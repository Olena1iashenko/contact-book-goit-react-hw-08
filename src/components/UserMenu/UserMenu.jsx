import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </>
  );
};

export default UserMenu;
