import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaInfoCircle
} from "react-icons/fa";

import react from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h4 style={{ padding: "0 0 20px" }}> Connect with Our Social Network</h4>
      <div className="links">
        <FaFacebook size={30} />
        <FaLinkedin size={30} />
        <FaTwitter size={30} />
        <FaInstagram size={30} />
        <Link to="/about" style={{ color: "white" }}>
          <FaInfoCircle size={30} />
        </Link>
      </div>
    </div>
  );
}
