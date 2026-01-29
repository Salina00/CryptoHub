import React from "react";
import "./CookiePolicy.css";

const CookiePolicy = () => {
  return (
    <div className="cookie-container">
      <h1>Cookie Policy</h1>

      <p>Last Updated: January 2026</p>

      <section>
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help improve your browsing experience by remembering preferences
          and providing better functionality.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <ul>
          <li>To remember user preferences</li>
          <li>To improve website performance</li>
          <li>To analyze traffic and usage patterns</li>
          <li>To enhance security</li>
        </ul>
      </section>

      <section>
        <h2>3. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for basic functionality.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand user behavior.</li>
          <li><strong>Performance Cookies:</strong> Improve speed and performance.</li>
        </ul>
      </section>

      <section>
        <h2>4. Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings.
          However, disabling cookies may affect certain features of the website.
        </p>
      </section>

      <section>
        <h2>5. Contact Us</h2>
        <p>
          If you have questions about our Cookie Policy, please contact us
          at support@cryptohub.com.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
