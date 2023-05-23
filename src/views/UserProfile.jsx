import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actions/user.actions';


export function UserProfile() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    useEffect(() => {
        if (!loggedinUser) navigate('/')
    }, [loggedinUser]);


    async function onLogout(ev) {
        ev.preventDefault();
        try {
            dispatch(logout());
        } catch (err) {
            console.error(err);
        }
    }


    if (!loggedinUser) return
    return (
        <section className='user-profile-container'>
            <pre>{JSON.stringify(loggedinUser)}</pre>
            <h2>fullname: {loggedinUser.fullname}</h2>
            <h2>username: {loggedinUser.fullname}</h2>
            {/* <img src={loggedinUser.imgURL} alt="" /> */}
            <button onClick={onLogout}>logout</button>
        </section>
    )
}
