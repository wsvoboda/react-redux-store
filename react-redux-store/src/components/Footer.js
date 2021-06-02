import React from "react";
import "../App.css";

import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="footer-links">
      <a href="https://facebook.com">
        <img src={fb} alt="facebook" />
      </a>
      <a href="https://instagram.com">
        <img src={insta} alt="instagram" />
      </a>
      <a href="https://twitter.com">
        <img src={twitter} alt="twitter" />
      </a>
    </div>
  );
}
