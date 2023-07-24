const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          currElem => currElem.objectID !== action.payload
        ),
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "NEXT_PAGE":
      let pageNumberNext = state.page + 1;
      if (pageNumberNext >= state.nbPages) {
        pageNumberNext = 0;
      }
      return {
        ...state,
        page: pageNumberNext,
      };

    case "PREV_PAGE":
      let pageNumber = state.page;
      pageNumber <= 0 ? 0 : (pageNumber -= 1);

      return {
        ...state,
        page: pageNumber,
      };
  }
};

export default reducer;
