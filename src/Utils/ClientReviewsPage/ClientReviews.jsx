import React from "react";
import Slider from "react-slick";
import "./ClientReviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Grace Emmanuel",
      message:
        "Bite House food is always fresh and delicious! The delivery is fast and customer service is amazing.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Raymond Johnson",
      message:
        "Their meals are top-notch! I love the grilled chicken and jollof rice. Highly recommended.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sharon Peter",
      message:
        "Very neat packaging and tasty food. The best around my area, no regrets ordering!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Samuel Ade",
      message:
        "Nice portions, affordable, and tastes great. Bite House never disappoints.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Linda Okafor",
      message:
        "The desserts are heavenly! I always look forward to my orders every week.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=55",
    },
    {
      name: "Emeka Nwosu",
      message:
        "Fast delivery, tasty meals, and excellent packaging. Highly satisfied!",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=66",
    },
    {
      name: "Chinwe Oke",
      message:
        "Bite House never disappoints. The food quality and service are top notch!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=77",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
    ],
  };

  return (
    <section className="review-section">
      <div className="review-header">
        <span>Customer Reviews</span>
        <p>See what our happy customers say about Bite House</p>
      </div>

      <Slider {...settings} className="review-slider">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.image} alt={review.name} className="review-photo" />

            <h3 className="review-name">{review.name}</h3>

            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>

            <p className="review-message">“{review.message}”</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientReviews;
