import React from "react";
import { useGlobalContext } from "../hooks/Context";

const Search = () => {
  const data = useGlobalContext();
  return <div>Search - {data}</div>;
};

export default Search;
