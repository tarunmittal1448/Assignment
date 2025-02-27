import React, { use, useEffect, useState } from 'react'
import bg from '../assets/bg.jpg';
import '../styles/Quotes.css';

export default function Quotes() {
    let quot=[
     {
            "quote":"Life isn't about getting and having, it's about giving and being.","author":"Kevin Kruse"},
     {
            "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
     {
            "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
     {
            "quote":"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","author":"Robert Frost"},
     {
            "quote":"I attribute my success to this: I never gave or took any excuse.","author":"Florence Nightingale"},
     {
            "quote":"You miss 100% of the shots you don't take.","author":"Wayne Gretzky"},
     {
            "quote":"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.","author":"Michael Jordan"},
     {
            "quote":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart"},
     {
            "quote":"Every strike brings me closer to the next home run.","author":"Babe Ruth"
     }
    ];
    const[quote, setQuote] = useState({});
    useEffect(()=>{
        getRandom();
    }, []);
    let getRandom = () => {
        const idx = Math.floor(Math.random()*quot.length);
        setQuote(quot[idx]);
    }
    return (
        <div className='container' style={{backgroundImage:`url(${bg})`}}>
            <div className='quote-box'>
                <h1>Quotes Generator</h1>
                <br />
                <h2>{quote.quote}</h2>
                <br />
                <h2>{quote.author}</h2>
                <br />
                <button onClick={getRandom}>Generate Random Quote</button>
            </div>
        </div>
    )
}
