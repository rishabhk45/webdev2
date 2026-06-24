import { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const items = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1299,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 999,
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 799,
      img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    },
  ];

  const addItem = (product) => {
    setCart([...cart, product]);
    setOrderPlaced(false); // reset message when new item added
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      setOrderPlaced(true);
      setCart([]);
    } else {
      alert("Cart is Empty!");
    }
  };

  return (
    <>
      
      <nav className="top-bar">
        <h1>ShopEase</h1>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div className="cart">Cart: {cart.length}</div>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </div>
      </nav>

      
      <section className="hero">
        <h2>Welcome to ShopEase</h2>
        <p>Best Deals at Affordable Prices</p>
      </section>

      
      {orderPlaced && (
        <h2 style={{ textAlign: "center", color: "green" }}>
          ✅ Order Successfully Placed!
        </h2>
      )}

      
      <div className="products">
        {items.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button onClick={() => addItem(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}