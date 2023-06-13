import React, { useEffect, useRef } from 'react';

export function PaymentForm() {
    const cardNumberRef = useRef();
    const cardExpirationRef = useRef();
    const cardCvvRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.paymeservice.com/hf/v1/hostedfields.js';
        script.onload = () => {
            if (window.payme) {
                const settings = {
                    // your settings here
                };
                const hf = window.payme.hostedFields(settings);
                const cardNumber = hf.create('cardNumber');
                const cardExpiration = hf.create('cardExpiration');
                const cvc = hf.create('cvc');
                cardNumber.mount(cardNumberRef.current);
                cardExpiration.mount(cardExpirationRef.current);
                cvc.mount(cardCvvRef.current);
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <form>
            <div ref={cardNumberRef}></div>
            <div ref={cardExpirationRef}></div>
            <div ref={cardCvvRef}></div>
            <button type="submit">Submit</button>
        </form>
    );
};

