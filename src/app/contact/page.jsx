"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import axios from "axios";
import Image from 'next/image';
import bg from "../images/3.png";
import './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/submit-form", formData);
      router.push("/");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="img">
        <Image className="image" src={bg} alt="Contact" />
      </div>
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label htmlFor="name">Your Full Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>

          <label htmlFor="email">Your Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

          <label htmlFor="message">How Can We Help?</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
