import React, { useState, useEffect } from 'react';

const quotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You miss 100% of the shots you don't take.",
    "If you want to achieve greatness, stop asking for permission.",
    "You are never too old to set another goal or to dream a new dream.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are capable of more than you know. Choose a goal that seems right for you and strive to be the best, however hard the path. Aim high. Behave honorably. Prepare to be alone at times, and to endure failure. Persist! The world needs all you can give.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "Don't let yesterday take up too much of today.",
    "You can't use up creativity. The more you use, the more you have.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "There are no shortcuts to any place worth going.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The best way to predict the future is to create it.",
    "The biggest adventure you can ever take is to live the life of your dreams.",
    "You are the only one who can limit your greatness.",
    "Strive not to be a success, but rather to be of value.",
    "Do what you can, with what you have, where you are.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Your time is limited, don't waste it living someone else's life.",
    "You can't build a reputation on what you are going to do.",
];

const styles = {

    quote: {
        textAlign: 'center',
        fontSize: '22px',
        fontFamily: 'Edu NSW ACT Foundation, Oswald, sans-serif',
        color: '#222831',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '80%'
    }
}

export const TextBox = () => {
    const initialQuote = localStorage.getItem('quote') || quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, setQuote] = useState(initialQuote);

    useEffect(() => {
        const storedQuote = localStorage.getItem('quote');
        if (storedQuote) {
            setQuote(storedQuote);
        } else {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(randomQuote);
            localStorage.setItem('quote', randomQuote);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(randomQuote);
            localStorage.setItem('quote', randomQuote);
        }, 1000 * 60 * 60 * 12);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={styles.container}>
            <p style={styles.quote}>{quote}</p>
        </div>
    );
};