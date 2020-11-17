const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload, page: 0 };

    case "FILTER":
      const resultLista = state.list.filter((item) =>
        item.title.toLowerCase().includes(state.search.toLowerCase())
      );

      return { ...state, searchList: resultLista };

    case "PAGINATE":
      const itemsPerPage = 3;
      const resultListam = state.searchList;

      const numberOfPages = Math.ceil(resultListam.length / itemsPerPage);

      const newArr = Array.from({ length: numberOfPages }, (_, index) => {
        const initial = index * itemsPerPage;
        return resultListam.slice(initial, initial + itemsPerPage);
      });

      return { ...state, resultList: newArr, loading: false };

    case "SET_PAGE":
      const { request } = action.payload;
      const btnLength = state.resultList.length;

      if (request === "increase") {
        if (btnLength === state.page + 1) {
          return { ...state, page: 0 };
        } else {
          return { ...state, page: state.page + 1 };
        }
      } else if (request === "decrease") {
        if (state.page - 1 < 0) {
          return { ...state, page: btnLength - 1 };
        } else {
          return { ...state, page: state.page - 1 };
        }
      } else if (request === "choose") {
        return { ...state, page: action.payload.index };
      }
      break;
    case "LOADING":
      return { ...state, loading: true };

    case "REDIRECT":
      if (action.payload !== null) {
        if (action.payload.keyCode === 13 || action.payload.type === "click")
          return { ...state, redirect: true };
      }
      return { ...state, redirect: false };

    case "ORDER":
      let neww = [];
      for (let i = 0; i < state.resultList.length; i++) {
        neww = [...neww, ...state.resultList[i]];
      }
      if (action.payload === "name") {
        neww.sort((a, b) => {
          var nameA = a.title.toLowerCase().split(" ").join("");
          var nameB = b.title.toLowerCase().split(" ").join("");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === "date") {
        neww.sort((a, b) => {
          return b.date - a.date;
        });
      }

      console.log(neww);
      return { ...state, searchList: neww };
    default:
      break;
  }
};

export default reducer;
