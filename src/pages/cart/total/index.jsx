import React from "react";
const Total = ({ shoptotal }) => {
  let countoftheitem = 0;
  let price = 0;
  let totalPrice = 0;

  shoptotal.map((value) => {
    totalPrice = value.price * value.counter;
    price += totalPrice;
    countoftheitem += value.counter;
  });
  return (
    <div className=" w-[90%] mx-auto p-3 rounded-lg  bg-[#f6f6f6] h-fit">
      <div>
        <div className="flex items-center gap-3">
          <p>Jami:</p>
          <p> {price.toLocaleString()} so'm</p>
        </div>
        <div className="flex flex-col mt-2.5 gap-x-1 text-sm text-gray-900 py-3 border-b border-b-gray-200">
          <div className="flex items-center gap-6 justify-between ">
            <p className="pr-10  text-gray-400">Tovarlar soni</p>
            <p className="pr-10 fon-normal ">{countoftheitem}</p>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <p className=" text-gray-400">Yetkazib berish</p>
            <p className="pr-10 text-green-500">Bepul</p>
          </div>
        </div>
      </div>
      <div className="mb-14 pb-4 md:pb-0 md:mb-0 fixed md:static left-0 right-0 px-4 md:px-0 bottom-0 w-full z-20">
        <button
          type="submit"
          className="transition duration-200 rounded-lg  disabled:bg-grey-100 disabled:border-grey-100 disabled:text-grey-300 flex items-center justify-center gap-2  bg-[#FFBE1E] border-2 border-[#FFBE1E] hover:bg-[#FFBE1E] hover:border-[#FFBE1E] active:bg-[#FFBE1E] active:border-[#FFBE1E]  relative mt-4 w-full font-medium !py-2 !px-4 md:!py-3 md:!px-5"
          aria-label="btn">
          Muddatli to'lovga olish
        </button>
        <button
          type="submit"
          className="transition duration-200 rounded-lg  disabled:bg-grey-100 disabled:border-grey-100 disabled:text-grey-300 flex items-center justify-center gap-2  bg-white border-2 border-grey-200 hover:bg-grey-50 active:bg-grey-100 shadow-md relative mt-2 w-full font-medium !py-2 !px-4 md:!py-3 md:!px-5"
          aria-label="btn">
          Karta orqali sotib olish
        </button>
      </div>
    </div>
  );
};

export default Total;
