import React, { useState } from "react";
import { deleteFromCart } from "../slices/productsSlice";

const CountBtn = ({
  product,
  dispatch,
  increaseTotal,
  decreaseTotal,
  totalQty,
  setTotalQty,
}) => {
  const [qty, setQty] = useState(1);

  const increaseCount = () => {
    if (product?.stock > qty) {
      setQty(qty + 1);
      setTotalQty(totalQty + 1);
      increaseTotal(product?.price);
      // console.log(product?.price);
    }
  };
  const decreaseCount = () => {
    if (qty > 1) {
      setQty(qty - 1);
      decreaseTotal(product?.price);
      setTotalQty(totalQty - 1);
    }
  };
  const deleteProduct = () => {
    decreaseTotal(product?.price * qty);
    setTotalQty(totalQty - qty);
    dispatch(deleteFromCart(product?.id));
    // console.log(product?.price * qty);
  };
  return (
    <div className="w-full h-full flex items-center space-x-2 justify-start mx">
      <div className=" px-3 flex justify-between py-1 rounded-full w-32 border-2 border-yellow-400 ">
        <button
          onClick={decreaseCount}
          className=" text-xl hover:scale-105 font-bold mx-0 my-0"
        >
          -
        </button>
        <span className={`${product?.stock == qty && "text-red-400"}`}>
          {qty}
        </span>
        <button
          onClick={increaseCount}
          className=" text-xl hover:scale-105 font-bold mx-0 my-0"
        >
          +
        </button>
      </div>
      <button
        onClick={deleteProduct}
        className="px-2 py-1 rounded-full text-red-400 border border-red-500 hover:bg-red-500 hover:text-white mx-0 my-0"
      >
        Delete
      </button>
      <h3 className=" font-semibold text-lg">
        Total : <sup className="text-yellow-400 text-sm">$</sup>{" "}
        {(product?.price * qty).toFixed(3)}
      </h3>
    </div>
  );
};

export default CountBtn;
