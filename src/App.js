import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import RequireAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="products" element={<RequireAuth><Products /></RequireAuth>} />
        <Route path="product" element={<RequireAuth><Product /></RequireAuth>} />
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div >
  );
}

export default App;
