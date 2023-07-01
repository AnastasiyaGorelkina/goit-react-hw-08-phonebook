import { useSelector } from "react-redux/es/hooks/useSelector";
import { NavLink } from "react-router-dom";
import { selectIsLoggeIn } from "redux/auth/selectors";
import { NavBox } from "./Navigation.styled";

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggeIn);

    return (
        <nav>
            <NavBox>
                <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </NavBox>
        </nav>
    );
};