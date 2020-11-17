import React from "react";

import { useGlobalContext } from "../context";
import Results from "./Results";
import ResultButtons from "./ResultButtons";
import OrderBtn from "./Submenu";
const List = () => {
  const { resultList } = useGlobalContext();
  return (
    <div className="list-container">
      <header className="list-header">
        <h3>Search Results</h3>
        <OrderBtn />
      </header>
      <article className="result-container">
        <Results />
      </article>
      {resultList.length > 1 && <ResultButtons />}
    </div>
  );
};

export default List;
