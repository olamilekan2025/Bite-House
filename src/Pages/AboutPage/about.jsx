import "./About.css"
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function About() {
      useEffect(() => {
            Aos.init({
                offset: 120,
                duration: 700,
                easing: 'ease-in-out',
                delay: 100,
                once: true,
            });
        }, []);
    return (
        <main className="about">
            <div className="about-overlay">
                <div className="about-content">
                    <div className="text-block"data-aos="fade-right">
                        <div>
                            <span>About Bite House</span>
                            <p>
                                Welcome to Bite House, where passion for authentic flavors meets culinary excellence. 
                                Our journey began with a simple mission: to bring the finest spicy fried chicken and 
                                traditional dishes to your table with exceptional quality and service.
                            </p>
                            <p>
                                We believe in using only the freshest ingredients and time-honored recipes, combined with 
                                modern techniques to create unforgettable dining experiences. Every dish is prepared with love 
                                and dedication by our experienced chefs.
                            </p>
                            <button className="read-btn">Learn More</button>
                        </div>
                    </div>
                    <div className="image-block"data-aos="fade-left">
                        <img 
                            src="https://res.cloudinary.com/divio4grm/image/upload/v1765255922/ctaThumb1_1_xmgjp1.png" 
                            alt="About Bite House" 
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
