import {loginUser} from "../lib/api";
import { useDispatch } from "react-redux";
import { setMode, setIsLoggedIn} from "../store/appSlice";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        const result = await loginUser(username, password);
        if (result.ok) {
            dispatch(setIsLoggedIn(true));
            
            if (result.status === 'admin') {
                dispatch(setMode('admin'));
                navigate('/admin');
                alert('Logged in as admin');
            }

        }
        else {
            alert('Login failed');
        }
    }

    return (
        <div className="main-container">
            <main className="login-page">
                <h1>Login Page</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <button type="submit">Login</button>
                </form>

            </main>
        </div>
    )
}