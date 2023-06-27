import { logIn } from "redux/auth/authAPI";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email
                <input type="email" name="email" />
            </label>
            <label>Password
                <input type="passeord" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};