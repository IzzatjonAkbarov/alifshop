import React, { useContext } from "react";
import { ShopContext } from "../../context/addtocartcontext";
import Emptycard from "../../components/Emptycard";
import Cartimtem from "./cartitem/idnex";
import Cartitem from "./cartitem/idnex";
import Total from "./total";

const CardPage = () => {
  const { state } = useContext(ShopContext);

  return state.shop.length ? (
    <div className="container1 py-3">
      <div className="grid items-starts grid-cols-[2fr_1fr]">
        <div className="flex gap-5 flex-col ">
          {state.shop.map((value) => (
            <Cartitem key={value.id} {...value} />
          ))}
        </div>
        <Total shoptotal={state.shop} />
      </div>
    </div>
  ) : (
    <Emptycard />
  );
};

export default CardPage;
