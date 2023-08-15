import React, { useEffect } from "react";
import { linkService } from "../services/link.service";
import { useForm } from "react-hook-form";

export function ContactPage() {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => console.log(data);
    const { contactData } = linkService;
    useEffect(() => {
        document.title = `KingSize |  צור קשר`;
    }, []);

    return (
        <section className="contact-container">
            <div className="contact-header flex flex-column">
                <h2>צרו איתנו קשר</h2>
                <div className="navigator">דף הבית | צרו קשר</div>
            </div>
            <div className="contacts">
                {contactData.map((box, index) => (
                    <div key={index} className={box.className}>
                        <img src={box.imgSrc} alt={box.alt} className="icon" />
                        <h1>{box.title}</h1>
                        {box.content &&
                            box.content.map((text, idx) => (
                                <p key={idx}>{text}</p>
                            ))}
                        {box.links &&
                            box.links.map((link, idx) => (
                                <a key={idx} href={link.href}>
                                    {link.text}
                                </a>
                            ))}
                    </div>
                ))}
            </div>

            <div className="form-container">
                <h2 className="form-title">שלח הודעה</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("fullname", {
                            required: true,
                            maxLength: 20,
                        })}
                        placeholder="שם מלא"
                    />
                    <input
                        {...register("mail", {
                            pattern:
                                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                        })}
                        placeholder="כתובת המייל שלך"
                    />
                    <textarea
                        {...register("message", {
                            required: true,
                            maxLength: 500,
                        })}
                        placeholder="הודעה"
                        className="message"
                    ></textarea>
                    <input type="submit" className="submit" />
                </form>
            </div>
        </section>
    );
}
