// src/components/DriverForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './DriverForm.css';
const DriverForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    licenseNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/jobs', formData)
      .then(response => {
        alert('Application submitted successfully!');
      })
      .catch(error => {
        alert('There was an error submitting your application.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Experience</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
      </div>
      <div>
        <label>License Number</label>
        <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DriverForm;
