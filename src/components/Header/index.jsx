import React, { useContext, useState } from "react";
import { Link, Links } from "react-router-dom";
import { ShopContext } from "../../context/addtocartcontext";
import FormComponent from "../FormComponent";
let im = "https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg";
const Header = () => {
  const { state } = useContext(ShopContext);

  return (
    <>
      <nav className="container1 flex items-center justify-between py-3">
        <Link to={"/"}>
          <img className="w-[133px] h-[32px]" src={im} alt="" />
        </Link>
        <button className="flex items-center gap-2 bg-[#FFBE1E] px-4 py-2 rounded-lg max-[1024px]:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 12H22"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M2 6H22"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
            <path
              d="M2 18H22"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>

          <p>Tovarlar katalogi</p>
        </button>
        <div className=" w-[30%] max-[1024px]:w-[40%] max-[600px]:hidden">
          <FormComponent />
        </div>{" "}
        <div className="flex items-center gap-10 max-[600px]:gap-3">
          <Link
            to={"/cart"}
            className="flex items-center text-xs gap-1 flex-col relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>

            <p className=" max-[600px]:hidden">Savat</p>
            {state.shop.length ? (
              <p className=" absolute top-[-2px] right-0 rounded-full bg-red-500 text-white px-1 text-[10px]">
                {state.shop.length}
              </p>
            ) : (
              ""
            )}
          </Link>
          <Link
            to={"/likes"}
            className="flex items-center text-xs gap-1 flex-col relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.4172C18.3879 3.14064 17.6725 2.99829 16.95 2.99829C16.2275 2.99829 15.5121 3.14064 14.8446 3.4172C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 2.99883 7.05 2.99883C5.59096 2.99883 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.54871 7.04108 1.54871 8.50012C1.54871 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0329 10.6055C22.3095 9.93801 22.4518 9.2226 22.4518 8.50012C22.4518 7.77763 22.3095 7.06222 22.0329 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012V4.61012Z"
                fill="white"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
            <p className=" max-[600px]:hidden">Saralanganlar</p>
            {state.like.length ? (
              <p className=" absolute top-[-2px] right-5 rounded-full bg-red-500 text-white px-1 text-[10px]">
                {state.like.length}
              </p>
            ) : (
              ""
            )}
          </Link>
        </div>
        <button className=" p-3 px-5 rounded-lg border bg-white border-amber-400 hover:bg-amber-200 max-[1024px]:hidden">
          Kirish
        </button>
        <div className="text-[18px] font-medium  gap-1 flex items-center max-[1024px]:hidden">
          <p>РУС</p> / <p>UZB</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
