import React from "react";

const FormComponent = () => {
  return (
    <div className=" gap-2 w-full  border-2 border-[#FFBE1E] flex items-center  rounded-lg justify-between ">
      <form action="" className="w-full">
        <input
          className="pl-3 w-full outline-none"
          type="search"
          placeholder="Tovarlarni izlash"
        />
      </form>
      <button className="flex items-center justify-center p-2 px-4 bg-[#FFBE1E]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5C17 12.2917 16.2751 13.9141 15.1025 15.0899C15.1004 15.092 15.0982 15.0941 15.0961 15.0962C15.094 15.0983 15.0919 15.1004 15.0898 15.1026C13.9141 16.2751 12.2917 17 10.5 17C6.91015 17 4 14.0899 4 10.5ZM15.7618 17.1761C14.3145 18.3183 12.4868 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4869 18.3183 14.3146 17.176 15.7619L21.707 20.2929C22.0976 20.6834 22.0976 21.3166 21.707 21.7071C21.3165 22.0976 20.6833 22.0976 20.2928 21.7071L15.7618 17.1761Z"
            fill="#000"></path>
        </svg>
      </button>
    </div>
  );
};

export default FormComponent;
