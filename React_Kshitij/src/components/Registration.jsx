import React, { useState } from 'react';
import '../styles/registration.css'
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Username is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
      
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can perform registration logic here
      console.log('Form submitted:', { username, email, password });

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (response.ok) {
          console.log('Form data submitted successfully');
          navigate('/login')
        } else {
          console.error('Error submitting form data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </label>
        {/* Email input */}
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        {/* Password input */}
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
