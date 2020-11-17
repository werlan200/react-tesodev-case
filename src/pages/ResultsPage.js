import React from "react";
import Sidebar from "../components/Sidebar";
import tesodev from "./tesodev-logo.JPG";
import List from "../components/List";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  const { handleSearch, search } = useGlobalContext();
  return (
    <section className="result-page">
      <Sidebar />
      <article className="result-page-container">
        <header className="result-header">
          <Link to="/">
            <img src={tesodev} alt="tesodev logo" className="logo" />
          </Link>
          <div className="result-search">
            <h3>TESODEV Search Console</h3>
            <form className="input-container">
              <AiOutlineSearch className="search-logo" />
              <input
                type="text"
                className="input"
                value={search}
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
              />
            </form>
          </div>
        </header>
        <List />
      </article>
    </section>
  );
};

export default ResultsPage;
