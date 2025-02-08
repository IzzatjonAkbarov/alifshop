import { useContext } from "react";
import { ShopContext } from "../../context/addtocartcontext";
import Emptycard from "../../components/Emptycard";
import Likeiktem from "./likeItem/inex";

const LikesPage = () => {
  let { state } = useContext(ShopContext);

  return state.like.length ? (
    <div className="container1 grid grid-cols-4 gap-5 py-5">
      {state.like.map((value) => (
        <Likeiktem key={value.id} {...value} />
      ))}
    </div>
  ) : (
    <Emptycard />
  );
};

export default LikesPage;
