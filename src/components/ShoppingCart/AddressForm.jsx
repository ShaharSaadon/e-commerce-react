import React from 'react';
import { useForm } from 'react-hook-form';
import CountrySelect from '../CountrySelect'
import { GoogleLogin } from '@react-oauth/google';

export function AddressForm({ onNext, onAddressComplete, onPrevious }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        onAddressComplete(data);
        onNext();
    };
    function responseMessage(response) {
        console.log(response);
    };
    function errorMessage(error) {
        console.log(error);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='address-form'>
            <div className="contact">
                <label>
                    אמצעי ליצירת קשר
                </label>
                <input {...register("fullName", { required: true })} placeholder="דוא''ל" className='mail' />
                {errors.fullName && <p>אנא הזן כתובת מייל</p>}
                <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} onSuccess={responseMessage} onError={errorMessage} className='google' />

                <div className="box">
                    <input type="checkbox" className='register' />
                    <label htmlFor="register" className='add-me'>צרפו אותי לחברי מועדון משפחת kingSize בחינם, שלחו לי התראות על מצבעים וקופני הנחה בלעדיים.</label>
                </div>
            </div>


            <label className='details'>
                פרטים אישיים וכתובת מגורים
            </label>


            <div className="fields">
                <CountrySelect className='country-select' />

                <input {...register("firstname", { required: true })} placeholder='שם פרטי' />
                {errors.firstname && <p>אנא הזן שם פרטי</p>}

                <input {...register("latsname", { required: true })} placeholder='שם משפחה' />
                {errors.latsname && <p>אנא הזן שם משפחה</p>}

                <input {...register("street", { required: true })} placeholder='כתובת מגורים' className='address' />
                {errors.street && <p>אנא הזן כתובת מגורים</p>}

                <input {...register("city", { required: true })} placeholder='עיר' />
                {errors.city && <p>אנא הזן עיר</p>}

                <input {...register("zip", { required: true })} placeholder='מיקוד(אופציונלי)' />
                {errors.zip && <p>אנא הזן מיקוד</p>}

                <input {...register("phone", { required: true })} placeholder='טלפון נייד' className='phone' />
                {errors.zip && <p>אנא הזן מיקוד</p>}


            </div>

            <div className="box">
                <input type="checkbox" />
                <label className='save-me'>שמור מידע זה לפעם הבאה שתבקר אצלנו </label>
            </div>


            <div className="actions">
                <div className="back" onClick={() => onPrevious()}>חזרה אל סל הקניות</div>
                <input type="submit" className='nice-button' />
            </div>
        </form >
    );
}