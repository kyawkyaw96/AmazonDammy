import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountBtn from "./CountBtn";
import { Link } from "react-router-dom";
import { checkOut } from "../slices/productsSlice";

const AddToCartPage = () => {
  const dispatch = useDispatch();
  const [checkOutBtn, setCheckOutBtn] = useState(false);
  const [allTotalPrice, setAllTotalPrice] = useState(0);
  const products = useSelector((state) => state.products.addToCartPageProducts);
  // console.log(products);
  const [totalQty, setTotalQty] = useState();
  // console.log(totalQty);

  useEffect(() => {
    setAllTotalPrice(
      products.reduce((initial, current) => initial + current.price, 0)
    );
    setTotalQty(products?.length);
    // console.log(allTotalPrice);
  }, []);
  const increaseTotal = (price) => {
    setAllTotalPrice(allTotalPrice + price);
  };
  const decreaseTotal = (price) => {
    setAllTotalPrice(allTotalPrice - price);
  };
  // const confirmBtn = () => {
  //   dispatch(checkOut());
  //   setCheckOutBtn(false);
  //   console.log(products);
  //   setTimeout(() => {
  //     alert("Order Placed Successfully");
  //   }, 1000);
  // };
  let timeoutTriggered = false;
  const confirmBtn = () => {
    if (!timeoutTriggered) {
      dispatch(checkOut());
      setCheckOutBtn(false);
      timeoutTriggered = true;
      setTimeout(() => {
        alert("Order Placed Successfully");
      }, 1000);
    }
  };

  return (
    <div className="">
      <div
        id="customConfirm"
        className={`${
          checkOutBtn ? "flex" : "hidden"
        } fixed inset-0 items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="bg-white p-6 rounded shadow-lg">
          <p className="mb-4">Are you sure you want to proceed?</p>
          <div className="flex justify-end">
            <button
              id="confirmBtn"
              onClick={confirmBtn}
              className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
            >
              Yes
            </button>
            <button
              id="cancelBtn"
              onClick={() => setCheckOutBtn(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              No
            </button>
          </div>
        </div>
      </div>
      {products?.length > 0 ? (
        <div className="px-2 sm:px-4 flex flex-col py-2 mx-1 sm:mx-2  ">
          <div className=" bg-gray-100 p-2 rounded">
            <h1 className=" text-2xl text-gray-600">
              Subtotal : <sup className=" text-sm text-yellow-400"> $ </sup>
              <h1 className=" inline font-bold">{allTotalPrice?.toFixed(3)}</h1>
            </h1>
            <p className=" text-green-700">
              Parts of your order qualifies for <b>Free Shipping.</b> See each
              items for details.{" "}
              <a href="" className=" hover:underline">
                Details
              </a>
            </p>
            <button
              onClick={() => setCheckOutBtn(true)}
              className=" bg-yellow-300 rounded-full my-2 py-1 px-2"
            >
              Process to Checkout ({totalQty} items){" "}
            </button>
          </div>
          {products?.map((product) => (
            <div className=" my-2 bg-gray-100 p-2 rounded" key={product?.id}>
              <div className="inline-flex gap-2 h-36 w-full">
                <div className=" w-[145px] h-[135px] ">
                  <img
                    src={product?.images?.[0]}
                    className=" w-[145px] h-[135px]"
                    alt=""
                  />
                </div>
                <div className=" w-full h-36">
                  <h1 className="">{product?.title}</h1>
                  <h2 className=" overflow-hidden h-10 sm:h-12 text-sm sm:text-base text-black/50 ">
                    {" "}
                    {product?.description}
                  </h2>
                  <h3 className=" font-semibold text-lg">
                    <span className=" text-sm text-yellow-400">$ </span>
                    {product?.price}
                  </h3>
                  <h3 className=" text-green-500 font-semibold">
                    In stock: {product?.stock}
                  </h3>
                </div>
              </div>

              <div className="w-full h-full space-x-2 flex items-center justify-start mx">
                <div>
                  <CountBtn
                    product={product}
                    increaseTotal={increaseTotal}
                    decreaseTotal={decreaseTotal}
                    dispatch={dispatch}
                    totalQty={totalQty}
                    setTotalQty={setTotalQty}
                  />
                </div>
                {/* <div className=" px-3 flex justify-between py-1 rounded-full w-32 border-2 border-yellow-400 ">
              <button
                onClick={decreaseCount}
                className=" text-xl font-bold mx-0 my-0"
              >
                -
              </button>
              <span className="">{total}</span>
              <button
                onClick={increaseCount}
                className=" text-xl font-bold mx-0 my-0"
              >
                +
              </button>
            </div> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex flex-col w-full h-screen items-center justify-center">
          <h1>No Item !</h1>
          <Link
            to={"/"}
            className={
              " rounded-full hover:bg-yellow-600 hover:border-2 border-yellow-800 bg-yellow-400 py-1 px-2"
            }
          >
            Let choose{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCartPage;
