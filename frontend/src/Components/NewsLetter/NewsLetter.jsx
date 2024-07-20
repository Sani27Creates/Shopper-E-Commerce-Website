import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (email) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxNdNTKI4-mcgvrBL-wtHOwD7SiqEH_MDsiYAqIPq6ktp20gCzMJaxaa8v9P2tHwP0a/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ email }),
        });
        if (response.ok) {
          setSubscribed(true);
        } else {
          console.error('Subscription failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email Id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {subscribed && <span>Thank You For Subscribing!</span>}
    </div>
  );
};

export default NewsLetter;
