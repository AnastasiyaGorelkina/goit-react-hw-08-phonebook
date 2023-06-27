import { logOut } from "redux/auth/authAPI";
import { useDispatch, useSelector } from "react-redux";

export const UserMenu = () => {
    const name = useSelector(state => state.auth.user.email);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    };

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleLogOut}>Exit</button>
        </div>
    );
};