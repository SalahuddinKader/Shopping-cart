import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context";
import Header from "../header";
import "../css/Products.css";
const Products = () => {
  const { products } = useContext(DataContext);

  return (
    <div>
      <Header />
      <div id="product">
        {products.map((product, i) => (
          <div className="card" key={i}>
            <Link to={`/product/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </h3>
              <span style={{ fontSize: 18, fontWeight: "bold" }}>
                £{product.price * product.count}
              </span>
              <p>{product.description}</p>

              <strong style={{ fontSize: 20 }}>{product.review}</strong>
              {/* <button onClick={() => addCart(product._id)}>Add to cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
