import React, { useState } from 'react';
import'./App.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Handle payment processing here (e.g., using a payment gateway API)
    const paymentData = {
      cardNumber: formData.cardNumber,
      expirationDate: formData.expirationDate,
      cvv: formData.cvv,
    };

    try {
      // Send paymentData to your backend for processing and validation
      // If payment is successful, proceed with user registration
      console.log('Payment data:', paymentData);

      // Handle user registration here (e.g., storing user data in your database)
      const userData = {
        name: formData.name,
        email: formData.email,
      };

      // Reset the form
      setFormData({
        name: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      });
      setEmailError('');

      console.log('User registered:', userData);
      // You can navigate to a confirmation page or perform other actions here
    } catch (error) {
      console.error('Payment or registration failed:', error);
      // Handle error scenarios (e.g., show error message to the user)
    }
  };

  return (
    <div className='innerbox'>
      <header className="header">
        <div className="logo">
          <img src={"images/Logo.png"} />
        </div>
        <h1>Freezin' For A Reason 5K</h1>
      </header>
      <div className="event-description">
        <h2>Event Description</h2>
        <div className='containerthing'>
          <p>
          Participate in the University of Minnesota's College of Science and Engineering Student Board's annual 5K Friday, November 17! Registration includes post-run hot chocolate and snacks, as well as a long-sleeve athletic Freezin' for a Reason T-Shirt. <br></br> <br></br>
          This year's Freezin' for a Reason 5k benefits Make a Wish Minnesota, a charity dedicated to granting wishes to create hope and joy for Minnesota children with life-threatening medical conditions.<br></br> <br></br>
          Race check-in and bag check will occur in Bruininks Hall, room . Post-event hot chocolate and snacks will be provided. Runners and walkers will be expected to be ready at the start at 3:25, and the event will begin at 3:30. <br></br> <br></br>
          Early bird pricing ends November 14. Students can use the code goldengopher to get an additional $5 off registration! <br></br> <br></br>Campus Race Route: https://z.umn.edu/5k-map
          </p>
          <div className="image-container">
            <img src={"images/runners.jpg"} width="300" height="200"/>
            <img src={"images/event-image1.jpg"} width="300" height="200" />
          </div>
        </div>
      </div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p className="error">{emailError}</p>
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up & Pay</button>
      </form>
      <footer className="footer">
        <ul>
          <li><a href="https://umnsesb.us13.list-manage.com/subscribe?u=46799060309b2abe01790c310&id=80e8638832">Join Our Newsletter</a></li>
          <li><a href="https://sesb.umn.edu/">SESB Home Page</a></li>
          <li><a href="https://sesb.umn.edu/contact-us-0">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
