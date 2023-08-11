import React, { useState } from "react";

import "./Contact.scss"

const Contact = () => {
  // État local pour les champs de formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

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
    // Vous pouvez ajouter ici la logique pour envoyer les données du formulaire
    // à votre serveur ou à un service de gestion de formulaires.
    console.log("Données soumises :", formData);
    // Réinitialiser les champs après la soumission
    setFormData({
      name: "",
      email: "",
      comment: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
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
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Veuillez écrire votre e-mail..."
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Commentaire</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          rows="4"
          cols={25}
          placeholder="Si vous avez des suggestions ou si vous êtes tombé sur des bugs, n'hésitez pas à communiquer avec moi."
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