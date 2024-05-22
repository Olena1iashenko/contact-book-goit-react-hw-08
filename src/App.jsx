import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Loader } from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
