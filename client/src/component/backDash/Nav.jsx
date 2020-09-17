import React, { useState, useContext } from "react";
import Menu from "../svg/bars-solid.svg";
import Close from "../svg/times-solid.svg";
import CartIcon from "../svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "../css/nav.css";
import { DataContext } from "../context";

function Nav({ setIsLogin }) {
  const { cart } = useContext(DataContext);

  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  //Logout
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };
  return (
    <div>
      <heeader>
        <div className="menu" onClick={menuToggle}>
          <img src={Menu} alt=" Menu" width="20" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/"> Welcome Nike</Link>
          </h1>
        </div>
        <nav className="nav">
          <ul className={toggle ? "toggle" : ""}>
            <li onClick={menuToggle}>
              <Link to="/login">Product</Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/login/contact">Contact</Link>
            </li>

            <li onClick={menuToggle}>
              <Link onClick={logoutSubmit} to="/login">
                Logout
              </Link>
            </li>
            <li onClick={menuToggle}>
              <Link to="/login/myaccount">My Account</Link>
            </li>
            <li className="close" onClick={menuToggle}>
              <img src={Close} alt="" width="15" />
            </li>
          </ul>
          <div className="nav-carts">
            <span>{cart.length}</span>

            <Link to="/login/dashCart">
              <img src={CartIcon} alt=" CartIcon" width="20" />
            </Link>
          </div>
        </nav>
      </heeader>
    </div>
  );
}
export default Nav;
