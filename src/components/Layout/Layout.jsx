import { Outlet } from "react-router-dom";

import s from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export const Layout = () => {
  // const username = useSelector(selectUserName);
  return (
    <div>
      <header className={s.header}>
        <h2>My contact book</h2>
        {/* {username && <p>Welcome, {username}</p>} */}
        <AppBar />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
