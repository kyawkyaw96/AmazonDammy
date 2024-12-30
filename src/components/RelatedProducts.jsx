import React from 'react'
import { Link } from 'react-router-dom';

const RelatedProducts = () => {
  return (
    <div>
      <div
        key={product?.id}
        className=" flex flex-col gap-1 bg-gray-200 p-2 shadow-sm"
      >
        <Link to={`/details/${product?.id}`}>
          <img src={product?.images?.[0]} className=" w-40 h-40" alt="" />
        </Link>
        <h2 className=" font-semibold text-black/75">{product?.title}</h2>
        <h2 className=" text-black/50">${product?.price}</h2>
      </div>
    </div>
  );
}

export default RelatedProducts