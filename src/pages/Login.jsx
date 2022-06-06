import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let { login } = useContext(AuthContext);
  const [cred, setCred] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };

  const submitLoginForm = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: cred.email,
        password: cred.password,
      })
      .then((res) => {
        console.log(res);
        login();
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
        alert("wrong credentials");
      });
  };

  return (
    <div>
      <input
        name="email"
        data-cy="login-email"
        placeholder="enter email"
        onChange={handleChange}
      />
      <input
        name="password"
        data-cy="login-password"
        placeholder="enter password"
        onChange={handleChange}
      />
      <button data-cy="login-submit" onClick={() => submitLoginForm()}>
        Login
      </button>
    </div>
  );
};

export default Login;
