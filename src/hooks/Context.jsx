import React, { useContext, useEffect } from "react";
import { useReducer } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
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

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, removePost }}>
      {children}
    </AppContext.Provider>
  );
};

// create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
