import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrent } from "../redux/auth/operations";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { selectIsRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return isRefreshing ? null : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
