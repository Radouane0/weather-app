import React, { useState } from "react";

import "./Contact.scss"

const Contact = () => {
  // État local pour les champs de formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");


  // Gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!checkName() || !checkEmail()) {
      return 
    }

    console.log("Données soumises :", formData);
    setFormData({
      name: "",
      email: "",
      comment: ""
    });
  };

  const checkName = () => {

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(formData.name)) {
      setNameError("Le nom doit contenir uniquement des lettres.")
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const checkEmail = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide.")
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };


  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <h2>Nous Contacter</h2>
      <div className="name">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Veuillez écrire votre nom..."
          required
        />
        <span>{nameError}</span>
      </div>
      <div className="email">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Veuillez écrire votre e-mail..."
        />
        <span>{emailError}</span>
      </div>
      <div className="comment">
        <label htmlFor="comment">Commentaire</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          maxLength={150}
          rows={4}
          cols={25}
          placeholder="Si vous avez des suggestions ou si vous êtes tombé sur des bugs, n'hésitez pas à communiquer avec nous."
          required
          style={{ resize: "none" }}
        />
      </div>
      <div>
        <button type="submit" className="submit" style={{ borderRadius: "10px", marginTop: "10px"}}>Envoyer</button>
      </div>
    </form>
  );
};

export default Contact;