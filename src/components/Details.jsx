import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../slices/productsSlice";
import { FaRegUserCircle } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState();
  const [related, setRelated] = useState([]);
  const { products } = useSelector((state) => state.products.products);

  useEffect(() => {
    const product = products?.find((i) => i.id == id);
    // console.log(product);
    setData(product);
    const relatedProducts = products?.filter(
      (i) => i.category == product?.category
    );
    // console.log(relatedProducts);
    setRelated(relatedProducts);
  }, [id]);
  const dispatch = useDispatch();
  const addProductToCartPage = (product) => {
    dispatch(addToCart(product));
    // console.log(product);
  };

  return (
    <div className={`  w-full inline-flex justify-around`}>
      <div className=" w-2/3 h-full ps-2 inline-block ">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <img src={data?.images?.[0]} className=" w-80 h-80" alt="" />
          <div className=" flex flex-col gap-1">
            <h2 className=" text-base font-semibold ">{data?.title}</h2>
            <h2 className=" text-black/50 text-justify">{data?.description}</h2>
            <h2 className=" text-sm text-black/50">
              <span>Warranty: {data?.warrantyInformation}</span>
              <br />
              <span>Shipping Infos: {data?.shippingInformation}</span>{" "}
            </h2>
            <h2 className=" font-semibold text-gray-700">
              <sup className=" text-yellow-400">$ </sup>
              {data?.price}
            </h2>
            <h2>
              <span>Rating: {data?.rating} | </span>
              <span>Stock: {data?.stock}</span>{" "}
            </h2>
            <a
              onClick={() => addProductToCartPage(data)}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className=" ">
          <h1 className=" text-2xl font-semibold text-black/75 my-2">
            Reviews
          </h1>
          <div className=" flex flex-col sm:flex-row gap-4">
            {data?.reviews?.map((review) => (
              <div
                key={review?.comment}
                className=" flex flex-col gap-1 bg-gray-200 p-2 shadow-sm"
              >
                <div className=" flex items-center space-x-1">
                  <FaRegUserCircle className=" text-2xl text-gray-600" />
                  <h2 className=" font-semibold text-black/75">
                    {review?.reviewerName}
                  </h2>
                </div>
                <h2 className=" text-black/50">Rating: {review?.rating}</h2>
                <h2 className=" text-black/50">{review?.comment}</h2>
                <h2 className=" text-black/50">
                  {review?.date?.split("T")[0]}
                </h2>
                <h2>
                  <span className=" border-2 border-gray-400 rounded-full px-2  hover:text-green-600 hover:border-green-600">
                    Helpful
                  </span>
                  <span className=" text-black/50"> | </span>
                  <span className=" text-black/50 text-sm hover:underline hover:text-red-600">
                    Report
                  </span>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-1/4 h-full inline-block">
        {related?.length > 0 && (
          <div className=" mt-4 w-full">
            <h1 className=" text-lg sm:text-2xl font-semibold text-black/75 my-2">
              Related Products
            </h1>
            <div className=" flex flex-wrap gap-4">
              {related?.map((product) => (
                <div
                  key={product?.id}
                  className={`${
                    product?.id == id ? "hidden" : " flex "
                  } flex-col gap-1 sm:w-2/3 bg-gray-200 p-2 shadow-sm`}
                >
                  <Link to={`/details/${product?.id}`}>
                    <img
                      src={product?.images?.[0]}
                      className=" w-40 h-40"
                      alt=""
                    />
                  </Link>
                  <h2 className=" font-semibold text-sm sm:text-base text-black/75">
                    {product?.title}
                  </h2>
                  <h2 className=" text-black/50 text-sm sm:text-base">
                    ${product?.price}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
