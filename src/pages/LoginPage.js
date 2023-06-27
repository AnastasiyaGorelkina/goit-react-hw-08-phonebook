import { HelmetProvider, Helmet } from "react-helmet-async";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsloggeIn } from "redux/auth/selectors";
import { LoginForm } from "components/LoginForm/LoginForm";


export default function Login() {
    const isLoggedIn = useSelector(selectIsloggeIn);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {!isLoggedIn && <LoginForm />}
        </HelmetProvider>
    );
};