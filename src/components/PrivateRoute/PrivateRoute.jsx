import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";
import { selectIsRefreshing, selectIsloggeIn } from "redux/auth/selectors";

export const PrivateRoute = ({ component: Comment, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsloggeIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Comment;
};