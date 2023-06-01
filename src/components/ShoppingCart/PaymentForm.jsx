import React, { useState } from 'react';
import { ordersService } from '../../services/order.service'

export function PaymentForm() {
    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        CVV: '',
    });

    const { tokenizeCard } = ordersService

    const handleInputChange = (e) => {
        setCardData({
            ...cardData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Tokenize the card
            const response = await tokenizeCard(cardData);
            console.log('Card token:', response.data.token);
            // Do something with the card token (e.g., save it for later use)
        } catch (error) {
            console.error('Error tokenizing card:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="cardNumber" onChange={handleInputChange} placeholder="Card number" required />
            <input type="text" name="cardholderName" onChange={handleInputChange} placeholder="Cardholder name" required />
            <input type="text" name="expiryDate" onChange={handleInputChange} placeholder="Expiry date (MM/YYYY)" required />
            <input type="text" name="CVV" onChange={handleInputChange} placeholder="CVV" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PaymentForm;