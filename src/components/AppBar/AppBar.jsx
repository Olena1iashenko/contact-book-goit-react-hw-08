import s from "./AppBar.module.css";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <nav className={s.nav}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>;
};

export default AppBar;
