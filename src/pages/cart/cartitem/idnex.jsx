import React, { useContext } from "react";
import deleteimg from "../../../assets/icons/delete.svg";
import { ShopContext } from "../../../context/addtocartcontext";
import { toast } from "react-toastify";
const Cartitem = ({
  id,
  img,
  storage,
  price,
  installment,
  color,
  name,
  counter,
}) => {
  const { dispatch } = useContext(ShopContext);
  return (
    <div className="flex items-start max-[450px]:flex-col gap-2 shadow-xl rounded-xl  p-5 border-b border-b-gray-300">
      <div className="max-[450px]:mx-auto">
        <img
          className="w-[90px] h-[70px] max-[450px]:w-full max-[450px]:h-full "
          src={img}
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="text-sm font-medium mb-1">{name}</h1>
        <p className="text-gray-400 font-bold">{storage}</p>

        <p>Color: {color}</p>
        <p>
          <span className="text-[12px] font-medium text-gray-400">Narx: </span>
          <span className="text-gray-500 text-[14px]">
            {price.toLocaleString().replace(/,/g, " ")}so'm
          </span>
        </p>
        <div className="bg-gray-50 p-2 rounded-md md:w-60 cursor-pointer max-[780px]:w-fit mt-2.5">
          <p className="text-gray-300 text-xs">Muddatli to'lov</p>
          <div className="flex justify-between items-center gap-10">
            <div className="text-sm font-medium m-0 flex gap-x-1 items-end">
              <p className="m-0 whitespace-nowrap">
                {installment.toLocaleString().replace(/,/g, " ")}
                <span className="text-xs font-normal"> so'm</span>
              </p>
              <span className="nuxt-icon nuxt-icon--fill nuxt-icon--stroke text-gray-200 font-light w-2.5 h-2.5 mb-auto mt-1.5">
                <svg
                  width={6}
                  height={7}
                  viewBox="0 0 6 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 1L5.5 6M5.5 1L0.5 6" stroke="#24272C" />
                </svg>
              </span>
              <p className="text-sm whitespace-nowrap">
                12 <span className="text-xs font-normal"> oyga</span>
              </p>
            </div>
            <span className="nuxt-icon nuxt-icon--fill nuxt-icon--stroke text-gray-400 h-6 w-6">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 9L12 5L16 9"
                  stroke="#A5B1BB"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 15L12 19L8 15"
                  stroke="#A5B1BB"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="bg-gray-50   flex w-fit gap-3   items-center px-2 rounded-lg">
            <button
              onClick={() => {
                counter !== 1
                  ? dispatch({
                      type: "decreaseTheCount",
                      product: {
                        id,
                        img,
                        storage,
                        price,
                        installment,
                        color,
                        name,
                        counter,
                      },
                    })
                  : dispatch({ type: "delete", deletedId: id });
              }}
              className="border-0 bg-gray-50 p-1.5 text-[19px]"
              aria-label="decrease offer quantity btn">
              -
            </button>
            <span className="mx-2 font-medium">{counter}</span>
            <button
              onClick={() =>
                dispatch({
                  type: "increaseTheCount",
                  product: {
                    id,
                    img,
                    storage,
                    price,
                    installment,
                    color,
                    name,
                    counter,
                  },
                })
              }
              className="border-0 bg-gray-50 p-1.5 text-[19px]"
              aria-label="Increase offer quantity btn">
              +
            </button>
          </div>

          <button
            className="flex cursor-pointer items-center gap-2"
            onClick={() => {
              dispatch({ type: "delete", deletedId: id }),
                toast.error("Deleted from cart");
            }}>
            <img src={deleteimg} alt="" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
