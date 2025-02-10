import React, { useContext, useEffect, useState } from "react";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { ShopContext } from "../../../context/addtocartcontext";
let like = JSON.parse(localStorage.getItem("like")) || [];
let baseurl = import.meta.env.VITE_BASE_URL;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
import { ToastContainer, toast } from "react-toastify";
const SingleItem = ({ id, img, price, installment, storage, color, name }) => {
  const [liked, setLiked] = useState(false);
  const { dispatch } = useContext(ShopContext);
  let add = () => toast.success("Added to cart 🛒");
  let likingcard = () => toast.success("Added to like 🛒");
  let unlikingcard = () => toast.warning("Removed from like ");
  return (
    <div className=" rounded-2xl shadow-lg p-2 w-full bg-white">
      <div className="relative">
        <img
          src={`${img}`}
          alt=""
          className="w-full h-40 object-contain mb-3"
        />
        <button
          onClick={() => {
            let toggledata = like.find((value) => value.id == id);
            if (toggledata) {
              like = like.filter((value) => value.id !== id);
              localStorage.setItem("like", JSON.stringify(like));
              dispatch({
                type: "deletefromlike",
                deletedId: id,
              });
              unlikingcard();
              setLiked(false);
            } else {
              like.push({ id, img, price, installment, storage, color, name });
              localStorage.setItem("like", JSON.stringify(like));
              dispatch({
                type: "addtolike",
                product: { id, img, price, installment, storage, color, name },
              });
              setLiked(true);
              likingcard();
            }
            //shu joyida ai ishlatdim
          }}
          className={`p-2 rounded-full absolute top-0 right-0 ${
            liked ? "bg-red-500" : "bg-gray-200"
          } transition-colors`}>
          <CiHeart
            className={`w-6 h-6 ${liked ? "text-white" : "text-gray-500"}`}
          />
        </button>
      </div>

      <h2 className="text-lg font-semibold">{name}</h2>
      <div className="flex items-center justify-between">
        <p className="text-gray-600">{storage}</p>
        <p>{color}</p>
      </div>
      <div className="flex  items-start mt-2 flex-col">
        <p className="text-xl font-bold">
          {price.toLocaleString().replace(/,/g, " ")} so'm
        </p>
        <p className="text-sm text-gray-500">
          12 x {installment.toLocaleString().replace(/,/g, " ")} so'm/oy
        </p>
      </div>
      <div className="flex justify-between mt-4 w-full">
        <button
          id={id}
          onClick={() => {
            dispatch({
              type: "add",
              product: { id, img, price, installment, storage, color, name },
            }),
              add();
          }}
          className="flex btnlike items-center w-full gap-2 text-[13px] bg-[#FFBE1E] text-white px-4 py-2 rounded-lg transition-all active:scale-95 hover:bg-[#ffbf1ec3]">
          <TbShoppingBagPlus className="w-5 h-5 " /> Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
