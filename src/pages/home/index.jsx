import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleItem from "./singleitem";
import { useSearchParams } from "react-router-dom";

let baseurl = import.meta.env.VITE_BASE_URL;
// let count = 1; // Remove this line

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseurl).then(({ data }) => setData(data));
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
      <div className="container1 grid grid-cols-5 gap-6">
        {slicedData.map((value) => (
          <SingleItem key={value.id} {...value} value={value} />
        ))}
      </div>
      <div className="container1">
        <button
          disabled={data.length == limit * page}
          onClick={() => setsearchparam({ page: parseInt(page) + 1 })}
          className="w-full m-6 mx-auto p-4 bg-[#FFBE1E] hover:bg-[#ffbf1ec5] rounded-lg">
          Show 5 more
        </button>
      </div>
    </>
  );
};

export default HomePage;
