import React, { useContext, useState } from "react";
import { ShopContext } from "../../../context/addtocartcontext";
import { CiHeart } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { toast } from "react-toastify";

const Likeiktem = ({ id, img, price, installment, storage, color, name }) => {
  const [liked, setLiked] = useState(true);
  const { dispatch } = useContext(ShopContext);

  return (
    <div className=" rounded-2xl shadow-lg p-2 w-full bg-white">
      <div className="relative">
        <img
          src={img}
          alt="Google Pixel 5"
          className="w-full h-40 object-contain mb-3"
        />
        <button
          onClick={() => {
            dispatch({
              type: "deletefromlike",
              deletedId: id,
            }),
              toast.error("Deleted from like");
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
        <p className="text-xl font-bold">{price?.toLocaleString()} so'm</p>
        <p className="text-sm text-gray-500">
          12 x {installment?.toLocaleString()} so'm/oy
        </p>
      </div>
      <div className="flex justify-between mt-4 w-full">
        <button
          id={id}
          onClick={() => {
            dispatch({
              type: "add",
              product: { id, img, price, installment, storage, color, name },
            });
          }}
          className="flex items-center w-full gap-2 bg-[#FFBE1E] text-white px-4 py-2 rounded-lg transition-all active:scale-95 hover:bg-[#ffbf1ec3]">
          <TbShoppingBagPlus className="w-5 h-5" /> Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Likeiktem;
