import React from "react";
import { FiFacebook } from "react-icons/fi";
import { PiWhatsappLogo } from "react-icons/pi";
import {  FaWhatsapp, FaInstagram } from "react-icons/fa";

import "./OurChef.css";

const chefs = [
  {
    name: "Chef Daniel Thompson",
    role: "Head Chef • Continental & African Dishes",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574145/afe66aac-e4d0-413a-99c6-35e074df3959-removebg-preview_baxr1t.png",

  },
  {
    name: "Chef Amanda Cole",
    role: "Pastry & Dessert Specialist",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574439/cbb05b05-f2bb-43f6-987d-81d6c8a63692-removebg-preview_muve9h.png",

  },
  {
    name: "Chef Ibrahim Musa",
    role: "Grill & BBQ Master",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574920/1bd085b7-5f86-4bca-8994-538c4e66bb6b-removebg-preview_wvwuvj.png",

  },
  {
    name: "Chef Sandra Ade",
    role: "Healthy Meal Expert",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574937/e336b089-14af-460a-a329-65aa51fee2c2-removebg-preview_yuehcz.png",

  },

  {
    name: "Chef Michael Ojo",
    role: "Seafood & Special Dishes",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574970/8193e7c9-420e-4c3f-a120-964c07c352e0-removebg-preview_xmlkzx.png",
   
  },
  {
    name: "Chef Fatima Bello",
    role: "Traditional Nigerian Cuisine",
    image: "https://res.cloudinary.com/divio4grm/image/upload/v1765574985/d6d49c77-f464-48cc-9f14-aa12b18e2733-removebg-preview_onnxzl.png",
   
  }
];


const OurChef = () => {
  return (
    <section className="chef-section">
      <div className="chef-header">
        <span>Meet Our Chefs</span>
        <p>Talented professionals dedicated to preparing the best meals for you.</p>
      </div>

      <div className="chef-grid">
        {chefs.map((chef, index) => (
          <div className="chef-card" key={index}>
            <div className="chef-image-wrapper">
              <img src={chef.image} alt={chef.name} className="chef-image" />
            </div>

            <h2 className="chef-name">{chef.name}</h2>
            <p className="chef-role">{chef.role}</p>
         <div className="medial">
  <a href="#" aria-label="Facebook" className="social-icon facebook">
   <FiFacebook />
  </a>

  <a href="#" aria-label="WhatsApp" className="social-icon whatsapp">
    <PiWhatsappLogo />
  </a>

  <a href="#" aria-label="Instagram" className="social-icon instagram">
    <FaInstagram />
  </a>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default OurChef;
