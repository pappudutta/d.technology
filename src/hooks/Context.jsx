import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

// context creation
// provider
// useContext hook

const AppContext = React.createContext();

// create provider function

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async url => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE POST
  const removePost = post_id => {
    dispatch({ type: "REMOVE_POST", payload: post_id });
  };

  // SEARCH POST
  const searchPost = searchQuery => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery }); //in payload we can write any name related to that function it is an extra pair of information that we are passing here
  };

  // Pagination
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  // Calling api function
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removePost,
        searchPost,
        getNextPage,
        getPrevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider, useGlobalContext };
export { AppProvider, useGlobalContext };
