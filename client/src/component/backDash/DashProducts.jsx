import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context";
import "../css/Products.css";

const DashProducts = () => {
  const { products } = useContext(DataContext);
  if (!products) {
    return "Loading...";
  }
  return (
    <div>
      <div id="product">
        {products.map((product, i) => (
          <div className="card" key={i}>
            <Link to={`/login/products/${product._id}`}>
              <img src={product.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/login/products/${product._id}`}>
                  {product.title}
                </Link>
              </h3>
              <span>£{product.price * product.count}</span>
              <p>{product.description}</p>
              <strong style={{ fontSize: 26 }}>{product.review}</strong>
              {/* <button onClick={() => addCart(product._id)}>Add to cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashProducts;
