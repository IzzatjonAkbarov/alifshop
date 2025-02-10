import React from "react";
import { Link } from "react-router-dom";

const LinksArea = () => {
  return (
    <div className="overflow-x-scroll container1 max-w-[1440px]">
      <div className="flex items-center gap-3 max-[1400px]:gap-10 justify-between container1 whitespace-nowrap">
        <Link>Smartfonlar va gadjetlar</Link>
        <Link>Noutbuklar, kompyuterlar</Link>
        <Link>TV va proektorlar</Link>
        <Link>Audiotexnikalar</Link>
        <Link>Transport</Link>
        <Link>Uy uchun texnika</Link>
        <Link>Oshxona uchun texnika</Link>
        <Link>Go'zallik va sog'liq</Link>

        <select name="" id="">
          <option value="">yana</option>
        </select>
      </div>
    </div>
  );
};

export default LinksArea;
