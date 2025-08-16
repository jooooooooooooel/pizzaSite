import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Swift Pizza</h1>
          <p>Authentic Italian pizza made with passion and fresh ingredients</p>
          <div className="hero-buttons">
            <button className="cta-button primary">Order Now</button>
            <button className="cta-button secondary">View Menu</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Why Choose Swift Pizza?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🍕</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the finest, freshest ingredients in every pizza</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Hot, delicious pizza delivered to your door in 30 minutes or less</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Our experienced chefs craft each pizza with traditional techniques</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💯</div>
              <h3>Quality Guaranteed</h3>
              <p>We stand behind every pizza with our satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <h2>Featured Pizzas</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <h3>Margherita Classic</h3>
              <p>Fresh mozzarella, basil, and tomato sauce on our signature crust</p>
              <span className="price">Starting at $14.99</span>
            </div>
            <div className="featured-item">
              <h3>Meat Lovers</h3>
              <p>Loaded with pepperoni, sausage, ham, and bacon</p>
              <span className="price">Starting at $19.99</span>
            </div>
            <div className="featured-item">
              <h3>Veggie Supreme</h3>
              <p>Fresh vegetables and herbs for the perfect healthy option</p>
              <span className="price">Starting at $17.99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Order?</h2>
          <p>Experience the taste that keeps our customers coming back</p>
          <button className="cta-button large">Order Your Pizza Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
