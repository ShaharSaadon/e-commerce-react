import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/user.service";
import { signup } from "../store/actions/user.actions";
import { useForm } from "../customHooks/useForm";

export function Signup() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signupCred, handleChangeSignup, setSignupCred] = useForm(
        userService.getEmptySignupCred()
    );


    useEffect(() => {
        if (loggedinUser) navigate('/user-profile')
    }, [loggedinUser]);

    async function onSignUp(ev) {
        ev.preventDefault();
        if (!signupCred.username || !signupCred.password || !signupCred.fullname)
            return;
        try {
            dispatch(signup({ ...signupCred }));
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <section className='signup-container'>
            <form onSubmit={onSignUp}>
                <label htmlFor="fullname">Full name:</label>
                <input value={signupCred.fullname} type="text"
                    onChange={handleChangeSignup}
                    name="fullname"
                    id="fullname" />
                <label htmlFor="username">User Name:</label>
                <input value={signupCred.username} type="text"
                    onChange={handleChangeSignup}
                    name="username"
                    id="username" />
                <label htmlFor="password">Password:</label>
                <input value={signupCred.password} type="password"
                    onChange={handleChangeSignup}
                    name="password"
                    id="password" />

                <button>Sign Up</button>
            </form>
        </section>
    )
}
