import { logOut } from "redux/auth/authAPI";
import { useDispatch, useSelector } from "react-redux";
import { MenuBox } from "./UserMenu.styled";
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "components/ContactList/ContactList.styled";

export const UserMenu = () => {
    const name = useSelector(state => state.auth.user.email);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    };

    return (
        <MenuBox>
            <p>{name}</p>
            <Button onClick={handleLogOut}><LogoutIcon sx={{ fontSize: 25 }}/></Button>
        </MenuBox>
    );
};