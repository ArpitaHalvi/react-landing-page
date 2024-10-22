import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/home";
import Navbar from "./Components/navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Error from "./Components/Error";

const categories = ["women's wear", "men's wear", "kids wear"];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop category={categories} />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
