import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Serving authentic Italian pizza since 1985</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            What started as a small family restaurant in the heart of the city has grown into 
            a beloved pizza destination. Our passion for authentic Italian flavors and fresh 
            ingredients drives everything we do.
          </p>
          <p>
            We believe that great pizza brings people together. Every pizza is handcrafted 
            with care, using traditional recipes passed down through generations and the 
            finest ingredients sourced locally when possible.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To create memorable dining experiences by serving exceptional pizza in a warm, 
            welcoming environment. We are committed to quality, community, and bringing 
            the authentic taste of Italy to your table.
          </p>
        </div>

        <div className="about-section">
          <h2>What Makes Us Special</h2>
          <ul>
            <li>Hand-stretched dough made fresh daily</li>
            <li>San Marzano tomatoes imported from Italy</li>
            <li>Fresh mozzarella made in-house</li>
            <li>Wood-fired brick oven for authentic flavor</li>
            <li>Family recipes perfected over decades</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Visit Us Today</h2>
          <p>
            Come experience the difference that passion and quality make. Whether you're 
            dining in with family, picking up a quick lunch, or ordering delivery for 
            a cozy night in, we're here to serve you the best pizza in town.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;