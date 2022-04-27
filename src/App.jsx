import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Bundle from "../src/pages/Bundle";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/Register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/Products/bundle" element={<Bundle />} />
          <Route path="/Products/:category" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/productShowcase/:product" element={<SingleProduct />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
