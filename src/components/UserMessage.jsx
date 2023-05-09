import React, { useState } from 'react';

export function UserMessage() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Message sent:', message);
        setMessage('');
    };

    return (
        <div className="user-message">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your message here"
                    value={message}
                    onChange={handleMessageChange}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
