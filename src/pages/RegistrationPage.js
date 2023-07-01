import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsLoggeIn } from "redux/auth/selectors";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

export default function Register() {
    const isLoggedIn = useSelector(selectIsLoggeIn);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            {!isLoggedIn && <RegisterForm />}
        </HelmetProvider>
    );
};