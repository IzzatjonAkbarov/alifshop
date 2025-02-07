import React from "react";
import { Link } from "react-router-dom";

const LinksArea = () => {
  return (
    <>
      <div className="flex items-center justify-between container1">
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
    </>
  );
};

export default LinksArea;
