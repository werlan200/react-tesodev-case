import React from "react";
import { useGlobalContext } from "../context";
import { MdMoreVert } from "react-icons/md";
const Submenu = () => {
  const { handleOrder } = useGlobalContext();
  return (
    <div className="order-btn">
      <div>
        <span>
          <MdMoreVert /> Order By
        </span>
      </div>

      <button className="filter-btn" onClick={() => handleOrder("name")}>
        Filter By Name
      </button>
      <button className="filter-btn second" onClick={() => handleOrder("date")}>
        Filter By Date
      </button>
    </div>
  );
};

export default Submenu;
