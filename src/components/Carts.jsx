import React, { useEffect, useState } from "react";
import { addAllCarts } from "../slices/productsSlice";
import { fetchProductsApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import SingleCart from "./SingleCart";

const Carts = () => {
  const { loading, setLoading } = useState(true);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.products.carts);
  const getCarts = async () => {
    const { data } = await fetchProductsApi("carts");
    console.log(data);
    dispatch(addAllCarts(data?.carts));
    // setLoading(false);
  };
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          className=" flex flex-wrap gap-4
        "
        >
          {carts?.map((cart) => (
            <div className="" key={cart?.id}>
              <h2 className=" text-4xl text-red-400">Cart - {cart?.id}</h2>
              <div className=" flex flex-wrap overflow-hidden items-center justify-center gap-1 w-32 h-32 border border-red-400">
                {cart?.products?.map((product) => (
                <img key={product?.id} src={product?.thumbnail} className=" w-14 h-14 bg-black" alt="" />
                ))}
              </div>
              {/* <div className=" flex flex-wrap gap-2" key={cart?.id}>
                {cart?.products?.map((product) => (
                  <SingleCart cart={product} key={product?.id} />
                ))}
              </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carts;
