import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Image from "next/image";
import bg from "../images/3.png";

function Edit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { id } = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/item/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData); 
    try {
      const response = await axios.patch(`http://localhost:5000/item/${id}`, formData);
      if (response.status === 200) {
        console.log("Redirecting to /dashboard"); 
        navigate("/dashboard");
      } else {
        console.log("Response status:", response.status); 
      }
    } catch (error) {
      console.error("There was an error editing the form!", error);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label htmlFor="name">Your Full Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Your Email Address:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

          <label htmlFor="message">How Can We Help?</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit the Edited Form</button>
        </form>
      </div>
      <div className="img">
        <Image className="image" src={bg} alt="Contact" />
      </div>
    </div>
  );
}

export default Edit;
