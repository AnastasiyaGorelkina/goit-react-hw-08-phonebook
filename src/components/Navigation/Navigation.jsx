import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import { selectIsloggeIn } from "redux/auth/selectors";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsloggeIn);

    return (
        <nav>
            <div>
                <NavLink to="/">Home</NavLink>
                {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </div>
        </nav>
    );
};