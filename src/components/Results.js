import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Results = () => {
  const { resultList, page, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (resultList.length === 0) {
    return (
      <h2 className="results-warning">No Search Result Has Been Found...</h2>
    );
  }
  return (
    <>
      {resultList[page].map((item) => {
        const { id, title, description, date } = item;
        const properDate =
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear();
        return (
          <div key={id} className="single-result">
            <div className="result-info">
              <h4>{title}</h4>
              {description.length >= 100 ? (
                <p>{description.substring(0, 70)}...</p>
              ) : (
                <p>{description}</p>
              )}
            </div>
            <p className="time">Created at {properDate}</p>
          </div>
        );
      })}
    </>
  );
};

export default Results;
