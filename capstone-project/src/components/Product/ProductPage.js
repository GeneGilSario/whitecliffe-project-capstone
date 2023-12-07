import React, { useState } from "react";
import "./ProductPage.css";
import Plant1 from "./Plant1.jpg";
import Plant2 from "./Plant2.jpg";
import Plant3 from "./Plant3.jpg";
import Plant4 from "./Plant4.jpg";
import Plant5 from "./Plant5.jpg";
import Plant6 from "./Plant6.jpg";
import Plant7 from "./Plant7.jpg";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <main className="main-layout section-padding">
      <h1 className="products-header">
        <span className="product-textcolour-contrast">Explore our</span>{" "}
        <span className="product-textcolour">green</span>{" "}
        <span className="product-textcolour-contrast">world</span>
      </h1>
      <section className="product-section-padding">
        <div className="product-card">
          <img
            src={Plant1}
            alt="Plant-Product-1"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Blue</h1>
            <p className="product-price">$ 18.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant2}
            alt="Plant-Product-2"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Venus</h1>
            <p className="product-price">$ 30.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant3}
            alt="Plant-Product-3"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Cleo</h1>
            <p className="product-price">$ 25.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant4}
            alt="Plant-Product-4"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Ford</h1>
            <p className="product-price">$ 35.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant5}
            alt="Plant-Product-5"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Cora</h1>
            <p className="product-price">$ 18.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant6}
            alt="Plant-Product-6"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Fetra</h1>
            <p className="product-price">$ 30.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img
            src={Plant7}
            alt="Plant-Product-7"
            className="product-image"
          ></img>

          <div className="product-details">
            <h1 className=" product-name">Hera</h1>
            <p className="product-price">$ 18.00 NZD</p>

            <label htmlFor="quantity"></label>
            <div className="product-value">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                max={5}
                min={1}
                onChange={handleQuantityChange}
                className="product-input"
              />
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
