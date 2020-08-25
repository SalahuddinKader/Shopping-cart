import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { Link } from "react-router-dom";
import Colors from "./colors";
import "../css/Details.css";
import Header from "../header";

const Details = (props) => {
  const { products, addCart } = useContext(DataContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const product = products.filter(
      (item) => item._id === props.match.params.id
    );
    setProduct(product);
  }, [products, props.match.params.id]);

  return (
    <div>
      <Header />
      {product.map((item) => (
        <div className="details" key={item._id}>
          <img src={item.src} alt="" />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>£{item.price}</span>
            </div>

            <Colors colors={item} />

            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link
              to="/product"
              className="cart"
              style={{ background: "crimson" }}
            >
              Back To Product
            </Link>
            <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
              Add to bag
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
