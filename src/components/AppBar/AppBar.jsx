import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsloggeIn } from "redux/auth/selectors";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsloggeIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};