import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "components/Layout/Layout";
import { refreshUser } from "redux/auth/authAPI";
import { PrivateRoute } from "components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute/RestrictedRoute";

const Home = lazy(() => import('../../pages/HomePage'));
const Login = lazy(() => import('../../pages/LoginPage'));
const Registr = lazy(() => import('../../pages/RegistrationPage'));
const Contacts = lazy(() => import('../../pages/ContactsPage'));

export const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<h3>Refreshing user...</h3>) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute
            redirectTo="/contacts"
            component={<Registr />}
          />}
        />
        <Route path="/login"
          element={<RestrictedRoute
            redirectTo="/contacts"
            component={<Login />}
          />}
        />
        <Route path="/contacts"
          element={<PrivateRoute
            redirectTo="/login"
            component={<Contacts />}
          />}
        />
        <Route path="/register" element={<Registr />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};