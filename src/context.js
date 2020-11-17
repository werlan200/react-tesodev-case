import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import data from "./data";
import { Redirect, Link } from "react-router-dom";
const AppContext = React.createContext();
const initialState = {
  list: data,
  resultList: [],
  searchList: [],
  search: "",
  page: 0,
  loading: true,
  redirect: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (e) => {
    dispatch({ type: "SEARCH", payload: e });
  };

  const handlePage = (info) => {
    dispatch({ type: "SET_PAGE", payload: info });
  };

  const handleRedirect = (e) => {
    dispatch({ type: "REDIRECT", payload: e });
  };
  const handleOrder = (order) => {
    dispatch({ type: "ORDER", payload: order });
    dispatch({ type: "PAGINATE" });
  };

  useEffect(() => {
    dispatch({ type: "REDIRECT", payload: null });
  }, [state.redirect]);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    dispatch({ type: "FILTER" });
    dispatch({ type: "PAGINATE" });
  }, [state.search]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSearch,
        handlePage,
        handleRedirect,
        handleOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
