import { NavLink } from "react-router-dom";
import { AuthBox } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <AuthBox>
            <NavLink to="/register">Registration</NavLink>
            <NavLink to="/login">Log In</NavLink>
        </AuthBox>
    );
};