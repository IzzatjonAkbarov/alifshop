import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "./singleitem";
import { useSearchParams } from "react-router-dom";

let baseurl = import.meta.env.VITE_BASE_URL;
// let count = 1; // Remove this line

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(baseurl).then(({ data }) => (setData(data), setLoading(false)));
  }, []);
  const [searchparam, setsearchparam] = useSearchParams({ page: 1 });
  let page = searchparam.get("page") || 1;
  let limit = 5;
  const [slicedData, setSlicedData] = useState([]);
  useEffect(() => {
    const startindex = 0;
    const endindex = limit * page;
    let newsliceddata = data.slice(startindex, endindex);
    setSlicedData(newsliceddata);
  }, [page, data]);

  return (
    <>
      <br />
      {loading ? (
        <>
          <div className=" container1 grid grid-cols-5  max-[1128px]:grid-cols-4 max-[900px]:grid-cols-3 max-[665px]:grid-cols-2 max-[445px]:grid-cols-1 gap-5 ">
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <div className="container1 grid grid-cols-5 gap-6 max-[1128px]:grid-cols-4 max-[900px]:grid-cols-3 max-[665px]:grid-cols-2 max-[445px]:grid-cols-1">
          {slicedData.map((value) => (
            <SingleItem key={value.id} {...value} props={value} />
          ))}
        </div>
      )}
      <div className="container1">
        <button
          disabled={data.length == limit * page}
          onClick={() => setsearchparam({ page: parseInt(page) + 1 })}
          className="w-full text-white m-6 mx-auto p-4 bg-[#FFBE1E] hover:bg-[#ffbf1ec5] rounded-lg">
          Show 5 more
        </button>
      </div>
    </>
  );
};

export default HomePage;
