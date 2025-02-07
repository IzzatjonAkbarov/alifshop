import React, { useContext, useEffect, useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { data } from "react-router-dom";
import { addtocartcontext } from "../../../context/addtocartcontext";
let baseurl = import.meta.env.VITE_BASE_URL;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const SingleItem = ({
  id,
  img,
  price,
  installment,
  storage,
  color,
  name,
  value,
}) => {
  const [liked, setLiked] = useState(false);
  const { addToCart } = useContext(addtocartcontext);
  //   const getTheItemid = () => {
  //     // axios
  //     //   .get(`${baseurl}/${id}`)
  //     //   .then((data) =>
  //     //     // localStorage.setItem("cart", JSON.stringify([...cart, data.data]))
  //     //   );
  //     // console.log(slicedData);

  //     let newsingledata = slicedData.filter((value) => value.id == id);
  //     console.log(newsingledata);
  //   };

  return (
    <div className=" rounded-2xl shadow-lg p-2 w-full bg-white">
      <div className="relative">
        <img
          src={img}
          alt="Google Pixel 5"
          className="w-full h-40 object-contain mb-3"
        />
        <button
          onClick={() => setLiked(!liked)}
          className={`p-2 rounded-full absolute top-0 right-0 ${
            liked ? "bg-red-500" : "bg-gray-200"
          } transition-colors`}>
          <CiHeart
            className={`w-6 h-6 ${liked ? "text-white" : "text-gray-500"}`}
          />
        </button>
      </div>

      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">
        {storage} {color}
      </p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-xl font-bold">{price}</p>
        <p className="text-sm text-gray-500">12 x {installment}</p>
      </div>
      <div className="flex justify-between mt-4 w-full">
        <button
          id={id}
          onClick={() => addToCart(value)}
          className="flex items-center w-full gap-2 bg-[#FFBE1E] text-white px-4 py-2 rounded-lg">
          <TbShoppingBagPlus className="w-5 h-5" /> Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
