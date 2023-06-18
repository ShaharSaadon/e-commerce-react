import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userService } from "../services/user.service";
import { login } from "../store/actions/user.actions";
import { useForm } from "../customHooks/useForm";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export function Login() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginCred, handleChangeLogin, setLoginCred] = useForm(
        userService.getEmptyLoginCred()
    );


    useEffect(() => {
        document.title = 'KingSize | התחברות';
        if (loggedinUser) navigate('/')
    }, [loggedinUser]);

    async function onLogin(ev) {
        ev.preventDefault();
        if (!loginCred.username || !loginCred.password) return;
        try {
            dispatch(login({ ...loginCred }));
        } catch (err) {
            console.error(err);
        }
    }

    return (

        <section className='login-container'>
            <div className="login">
                <h2> {loggedinUser ? ('Hello' + loggedinUser.fullname) : 'Sign In'}</h2>
                <p>Not Registered yet?
                    <Link to="/signup" className="nav-link"> Sign Up </Link>
                </p>
                <form onSubmit={onLogin} className="flex flex-column">
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


                    <FormControlLabel control={<Checkbox defaultChecked />} label="זכור אותי" labelPlacement="end"

                    />

                    <button>Submit</button>
                </form>
                <p>Forgot password?</p>
            </div>

        </section>
    )
}
