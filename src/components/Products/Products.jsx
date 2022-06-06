import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product/Product";
import style from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className={style.grids}>
        {products.map((elem) => (
          <div key={elem.id} className={style.gridItem}>
            <Product elem={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
