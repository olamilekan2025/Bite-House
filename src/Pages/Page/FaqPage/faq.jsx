// import "./Faq.css"

// function Faq() {
//     return (
//         <main className="faq">
//             <div className="faq-container">
//                 <h1>Frequently Asked Questions</h1>
//                 <p>Find answers to common questions about our services.</p>
//             </div>
//         </main>
//     )
// }

// export default Faq




import React, { useState } from "react";
import "./Faq.css";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is Bite House?",
    answer:
      "Bite House is a food delivery and restaurant platform offering freshly prepared meals, fast delivery, and great customer service.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our menu, add meals to your cart, and proceed to checkout. You can order as a guest or log in to your account.",
  },
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes! We provide fast and reliable home delivery to your location within our service areas.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept debit cards, bank transfers, and other secure online payment options.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely. Once your order is confirmed, you can track its status in real time from your account dashboard.",
  },
  {
    question: "Do you offer special discounts?",
    answer:
      "Yes! Registered users receive exclusive offers, promo codes, and seasonal discounts.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Everything you need to know about Bite House</p>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {item.question}
              <FaChevronDown className="faq-icon" />
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

