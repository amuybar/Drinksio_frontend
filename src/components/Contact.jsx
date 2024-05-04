import React, { useState } from 'react';
import '../styles/Contact.css';
const Contact = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Message:', message); // Simulate sending the message
    setMessage(''); // Clear the input field after submission
  };

  return (
    <div className="contact">
      <h2>Signup to the News letter and get 25% discount</h2>
      <p>Feel free to send us a message and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type='email'
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          placeholder='Enter your email'
          />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
