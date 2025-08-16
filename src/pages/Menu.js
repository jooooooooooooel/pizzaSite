import React from 'react';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Delicious pizzas made with fresh ingredients</p>
      </div>
      
      <div className="menu-section">
        <h2>Specialty Pizzas</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Margherita Classic</h3>
            <p>Fresh mozzarella, basil, tomato sauce</p>
            <span className="price">$14.99</span>
          </div>
          <div className="menu-item">
            <h3>Pepperoni Supreme</h3>
            <p>Pepperoni, mozzarella, Italian herbs</p>
            <span className="price">$16.99</span>
          </div>
          <div className="menu-item">
            <h3>Meat Lovers</h3>
            <p>Pepperoni, sausage, ham, bacon</p>
            <span className="price">$19.99</span>
          </div>
          <div className="menu-item">
            <h3>Veggie Delight</h3>
            <p>Bell peppers, mushrooms, onions, olives</p>
            <span className="price">$17.99</span>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <h2>Sides & Appetizers</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Garlic Bread</h3>
            <p>Fresh baked bread with garlic butter</p>
            <span className="price">$6.99</span>
          </div>
          <div className="menu-item">
            <h3>Chicken Wings</h3>
            <p>Buffalo, BBQ, or mild sauce</p>
            <span className="price">$8.99</span>
          </div>
          <div className="menu-item">
            <h3>Caesar Salad</h3>
            <p>Crisp romaine, parmesan, croutons</p>
            <span className="price">$7.99</span>
          </div>
        </div>
      </div>

      <div className="menu-section">
        <h2>Beverages</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Soft Drinks</h3>
            <p>Coca-Cola, Sprite, Orange</p>
            <span className="price">$2.99</span>
          </div>
          <div className="menu-item">
            <h3>Fresh Lemonade</h3>
            <p>Made fresh daily</p>
            <span className="price">$3.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;