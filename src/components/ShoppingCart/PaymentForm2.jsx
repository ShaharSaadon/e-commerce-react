import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export function PaymentForm({ onPrevious }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit} className='payment-form'>

            <div className="fields">

                <input {...register("card-number", { required: true })} placeholder='מספר כרטיס' />
                {errors.firstname && <p>אנא הזן שם פרטי</p>}

                <input {...register("date", { required: true })} placeholder='שנה' />
                {errors.firstname && <p>אנא הזן שם פרטי</p>}

                <input {...register("firstname", { required: true })} placeholder='חודש' />
                {errors.firstname && <p>אנא הזן שם פרטי</p>}

                <input {...register("firstname", { required: true })} placeholder='CVV' />
                {errors.firstname && <p>אנא הזן שם פרטי</p>}



            </div>

            <div className="actions">
                <div className="back" onClick={() => onPrevious()}>חזרה אל סל הקניות</div>
                <input type="submit" className='nice-button' />
            </div>
        </form >
    );
};

