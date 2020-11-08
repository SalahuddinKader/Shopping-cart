import React, { useState, useContext } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header2nd.css";
import { DataContext } from "./context";
const Header2nd = () => {
  const { cart } = useContext(DataContext);
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <headers>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} alt=" Menu" width="20" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">
              <img src="/images/nike.png" alt="png" width="70px" />
            </Link>
          </h1>
        </div>
        <nav className="nav">
          <ul className={toggle ? "toggle" : ""}>
            <li onClick={menuToggle}>
              <Link to="/">New Releases</Link>
              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Men</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>Shoes </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>Clothing </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>Shop By Sport </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>Shop By Trends </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Women</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>v
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Kids</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Sale</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Back To School</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={menuToggle}>
              <Link to="/">Collection</Link>

              <div className="sub-menu">
                <ul>
                  <li>
                    <h4>New For Men </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Women </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                  <li>
                    <h4>New For Kids </h4>
                    <Link to="/">Shoes</Link>
                    <Link to="/">Clothing</Link>
                    <Link to="/">Accessories & Equipment</Link>
                    <Link to="/">Shop All New</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li onClick={menuToggle}>
              <Link to="/contact">Contact</Link>
            </li>
            <h4 className="member">
              Become a Nike Member for the best products, inspiration and
              stories in sport.
            </h4>
            <li className="join-us  btn" onClick={menuToggle}>
              <Link to="/register">Join Us</Link>
            </li>
            <li className="login btn  btn-md" onClick={menuToggle}>
              <Link to="/login">Sign In</Link>
            </li>

            <li className="close" onClick={menuToggle}>
              <img src={Close} alt="" width="15" />
            </li>
          </ul>

          <div className="nav-cart">
            <span>{cart.length}</span>

            <Link to="/cart">
              <img src={CartIcon} alt=" CartIcon" width="20" />
            </Link>
          </div>
        </nav>
      </headers>
    </div>
  );
};

export default Header2nd;
