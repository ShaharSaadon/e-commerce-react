import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.service";
import { login } from "../store/actions/user.actions";
import { useForm } from "../customHooks/useForm";

export function Login() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginCred, handleChangeLogin, setLoginCred] = useForm(
        userService.getEmptyLoginCred()
    );


    useEffect(() => {
        if (loggedinUser) navigate('/')
    }, [loggedinUser]);

    async function onLogin(ev) {
        ev.preventDefault();
        if (!loginCred.username || !loginCred.password) return;
        try {
            dispatch(login({ ...loginCred }));
            // navigate('/recipe')
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className='login-container'>
            <h2> hello{loggedinUser ? loggedinUser.fullname : ''}</h2>
            <form onSubmit={onLogin}>
                <label htmlFor="username">User Name:</label>
                <input value={loginCred.username} type="text"
                    onChange={handleChangeLogin}
                    name="username"
                    id="username" />
                <label htmlFor="password">Password:</label>
                <input value={loginCred.password} type="password"
                    onChange={handleChangeLogin}
                    name="password"
                    id="password" />

                <button>Login</button>
            </form>
        </section>
    )
}
