import React from "react";
import { useGlobalContext } from "../hooks/Context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={query}
          onChange={e => searchPost(e.target.value)}
          type="text"
          placeholder="Type here..."
        />
      </form>
    </>
  );
};

export default Search;
