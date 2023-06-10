import React, { useEffect } from 'react'
import clock from '../assets/images/Contact/clock.svg'
import mail from '../assets/images/Contact/mail.svg'
import phone from '../assets/images/Contact/phone.svg'
import { useForm } from "react-hook-form";


export function ContactPage() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        document.title = `KingSize |  צור קשר`;
    }, [])
    console.log(watch("lastName")); // watch input value by passing the name of it

    return (
        <section className='contact-container'>

            <div className="contact-header flex flex-column">
                <h2>צרו איתנו קשר</h2>
                <div className='navigator'>דף הבית | צרו קשר</div>
            </div>
            <div className="contacts">
                <div className="box">
                    <img src={clock} alt="" className='icon' />
                    <h1>שעות עבודה</h1>
                    <p>ראשון עד חמישי</p>
                    <p>09:00 - 21:00</p>
                </div>
                <div className="box">
                    <img src={mail} className='icon' alt="" />
                    <h1>מייל</h1>
                    <a href="mailto=kingSize@KingSize.co.il">kingSize@KingSize.co.il</a>
                    <a href="mailto=kingSize@KingSize.co.il">kingSize@KingSize.co.il</a>

                </div>
                <div className="box">
                    <img src={phone} className='icon' alt="" />
                    <h1>טלפון</h1>
                    <p>+97254-3944574</p>
                    <p>+97254-3944574</p>
                </div>
            </div>

            <div className="form-container">
                <h2 className='form-title'>שלח הודעה</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("fullname", { required: true, maxLength: 20 })}
                        placeholder="שם מלא"
                    />
                    <input
                        {...register("mail", {
                            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                        })}
                        placeholder="כתובת המייל שלך"
                    />
                    <textarea
                        {...register("message", { required: true, maxLength: 500 })}
                        placeholder="הודעה"
                        className='message'

                    ></textarea>
                    <input type="submit" className='submit' />
                </form>
            </div>



        </section >
    )
}




