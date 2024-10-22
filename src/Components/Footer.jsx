import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-part">
        <div className="footer-links">
          <h5>Company Information</h5>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Customer Service</h5>
          <ul>
            <li>Help/FAQ</li>
            <li>Shipping Information</li>
            <li>Returns & Exchange</li>
            <li>Order Tracking</li>
            <li>Payment Methods</li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Legal Links</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Shopping Links</h5>
          <ul>
            <li>Men's Collection</li>
            <li>Women's Collection</li>
            <li>Kid's Collection</li>
            <li>Sales/Discounts</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
