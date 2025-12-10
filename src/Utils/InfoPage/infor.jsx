import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import "./Info.css";

function Infor() {
  return (
    <>
      <div className="infoContainer">
        {/* Address */}
        <div className="infoCard">
          <div className="info-icon">
            <span className="icon-inner">
              <LuMapPin />
            </span>
          </div>
          <div className="infor-Details">
            <h2>Address</h2>
            <p>25 AYEKALE OTA EFUN OSOGBO OSUN STATE</p>
          </div>
        </div>

        {/* Email */}
        <div className="infoCard">
          <div className="info-icon">
            <span className="icon-inner">
              <MdMarkEmailRead />
            </span>
          </div>
          <div className="infor-Details">
            <h2>Email</h2>
            <p>jelilioladunjoye04@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="infoCard">
          <div className="info-icon">
            <span className="icon-inner">
              <FaPhoneVolume />
            </span>
          </div>
          <div className="infor-Details">
            <h2>Phone</h2>
            <a href="tel:+2349129069652">+234 912 906 9652</a>
            <a href="tel:+2347075052461">+234 707 505 2461</a>
          </div>
        </div>
      </div>

  <div className="info-map-wrapper">
        <div className="info-map-container">
  <iframe
    title="google-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5126.128841722613!2d4.566983601507808!3d7.812504601010081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103789001cd87827%3A0xd59a3d10bbad71ed!2sAyekale!5e0!3m2!1sen!2sng!4v1765362386408!5m2!1sen!2sng"
    style={{ border: 0, width: "100%", height: "100%" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
  </div>
    </>
  );
}

export default Infor;
