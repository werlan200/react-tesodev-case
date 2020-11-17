import React from "react";
import { useGlobalContext } from "../context";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
const ResultButtons = () => {
  const { resultList, handlePage } = useGlobalContext();

  return (
    <div className="page-container">
      <button
        className="page-btn"
        onClick={() => handlePage({ request: "decrease" })}
      >
        <MdNavigateBefore className="page-icon" />
      </button>

      {resultList.map((item, index) => {
        if (
          resultList.length > 4 &&
          (index < 3 || index >= resultList.length - 2)
        ) {
          if (index === resultList.length - 2) {
            return <span key={index}>...</span>;
          } else {
            return (
              <button
                className="page-btn"
                key={index}
                onClick={() => handlePage({ request: "choose", index })}
              >
                {index + 1}
              </button>
            );
          }
        } else if (resultList.length <= 4) {
          return (
            <button
              className="page-btn"
              key={index}
              onClick={() => handlePage({ request: "choose", index })}
            >
              {index + 1}
            </button>
          );
        }
      })}

      <button
        className="page-btn"
        onClick={() => handlePage({ request: "increase" })}
      >
        <MdNavigateNext className="page-icon" />
      </button>
    </div>
  );
};

export default ResultButtons;
