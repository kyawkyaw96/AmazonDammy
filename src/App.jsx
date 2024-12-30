import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";
import About from "./components/About";
import Home from "./components/Home";
import SingleCart from "./components/SingleCart";
import AddToCartPage from "./components/AddToCartPage";
import { fetchProductsApi } from "./api";
import { useDispatch } from "react-redux";
import { addAllProducts } from "./slices/productsSlice";
import { useEffect, useState } from "react";
import Details from "./components/Details";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const { data } = await fetchProductsApi("products");
    // console.log(data);
    dispatch(addAllProducts(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className=" bg-gray-50 dark:bg-gray-300 font-sans">
      <Navbar />
      {loading ? (
        <h1 className=" w-full h-screen flex items-center justify-center text-2xl">
          Loading...
        </h1>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleCart/:id" element={<SingleCart />} />
          <Route path="/addToCartPage" element={<AddToCartPage />} />
          <Route path="/details/:id" element={<Details /> }/>
        </Routes>
      )}
    </div>
  );
}

export default App;
