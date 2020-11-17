import React from "react";
import Sidebar from "../components/Sidebar";
import tesodevLogo from "./tesodev-logo.JPG";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Home = () => {
  const { handleSearch, search, handleRedirect } = useGlobalContext();

  return (
    <section className="home">
      <Sidebar />
      <article className="home-container">
        <img src={tesodevLogo} alt="tesodev logo" className="logo" />
        <h2>Tesodev Search Console</h2>
        <form className="input-container">
          <AiOutlineSearch className="search-logo" onClick={handleRedirect} />
          <input
            type="text"
            className="input"
            value={search}
            placeholder="Search..."
            autoFocus={true}
            onKeyDown={handleRedirect}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </form>
      </article>
    </section>
  );
};

export default Home;
