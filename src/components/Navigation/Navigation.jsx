import { useSelector } from "react-redux/es/hooks/useSelector";
// import { NavLink } from "react-router-dom";
import { selectIsLoggeIn } from "redux/auth/selectors";
import { NavBox } from "./Navigation.styled";
import HomeIcon from '@mui/icons-material/Home';
import { StyledLink } from "./Navigation.styled";


export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggeIn);

    return (
        <nav>
            <NavBox>
                <StyledLink to="/"><HomeIcon sx={{ fontSize: 25 }} /></StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
            </NavBox>
        </nav>
    );
};