import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
