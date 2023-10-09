

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/registered_user.css';
import { useNavigate } from 'react-router-dom';

const Registered_user = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    city: '',
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Fetch countries from the API
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data.map(country => country.name.common));
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    
    if (name === 'country') {
      axios.get(`YOUR_CITY_API_ENDPOINT/${value}`)
        .then((response) => {
          setCities(response.data); // Assuming the response contains an array of cities
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      navigate('/login');
      window.scrollTo(0, 0);
    } else {
      console.log('Invalid form data. Please fill out all required fields.');
    }
  };

  const validateForm = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password &&
      formData.contactNumber &&
      formData.passportNumber &&
      formData.birthday
    );
  };

  return (
    <div className="background-container-register">
      <div className="form-container-guest">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="guest-form-row">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Address Line 1:
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Address Line 2:
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                required
              />
            </label>
          </div>


          <div className="guest-form-row">
            <label>
              City:
              <input
              type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
           
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Country:
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>

          

          <div className="guest-form-row">
            <label>
              Contact Number:
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Passport Number:
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="guest-form-row">
            <label>
              Birthday
              <input
                type="date"
                name="birhtday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          
          <button className="btn-primary"  onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registered_user;
