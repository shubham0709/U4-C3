import React, { useState, useContext } from "react";
import style from "./Product.module.css";
import { CartContext } from "../../../context/CartContext";

const Product = ({ elem }) => {
  const [count, setCount] = useState(0);
  // Note: this id should come from api
  const product = { id: elem.id };
  const { cart, setCart } = useContext(CartContext);

  return (
    <div data-cy={("product", elem.id)} className={style.flex}>
      <h3 data-cy="product-name">{elem.name}</h3>
      <h6 data-cy="product-description">{elem.description}</h6>
      <button
        className={count > 0 ? style.hide : style.show}
        data-cy="product-add-item-to-cart-button"
        onClick={() => {
          setCart(cart + 1);
          !count ? setCount(1) : setCount(count);
        }}
      >
        Add to cart
      </button>
      <div className={style.flex}>
        <div className={style.hflex}>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => setCount(count + 1)}
            className={count !== 0 ? style.show : style.hide}
          >
            +
          </button>
          <span data-cy="product-count">
            {
              // Count here from CartItems
              count > 0 ? count : null
            }
          </span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className={count !== 0 ? style.show : style.hide}
            disabled={count <= 1}
          >
            -
          </button>

          <button
            data-cy="product-remove-cart-item-button"
            className={count !== 0 ? style.show : style.hide}
            onClick={() => {
              setCount(0);
              setCart(cart - 1);
            }}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
