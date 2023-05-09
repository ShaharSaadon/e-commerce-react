import React from 'react'
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export function UserProfile() {
    const loggedinUser = useSelector((storeState) => storeState.userModule.loggedinUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedinUser) navigate('/')
    }, [loggedinUser]);

    return (
        <section className='user-profile-container'>
            <pre>{JSON.stringify(loggedinUser)}</pre>
            <h2>fullname: {loggedinUser.fullname}</h2>
            <h2>username: {loggedinUser.fullname}</h2>
            <img src={loggedinUser.imgURL} alt="" />
        </section>
    )
}
