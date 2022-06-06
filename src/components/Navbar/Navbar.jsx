import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import style from "./Navbar.module.css";

// use react-router Link or NavLink

const Navbar = () => {
  const navigate = useNavigate();
  let { isAuth, logout } = useContext(AuthContext);
  let { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    if (isAuth) {
      logout();
    }
    navigate("login");
  };
  return (
    <div data-cy="navbar" className={style.flex}>
      <Link to="/" data-cy="navbar-home-link">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count">
        cart : {" " + cart + "    "}
      </span>
      <button
        data-cy="navbar-login-logout-button"
        onClick={() => handleClick()}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
