import React from "react";
import { useGlobalContext } from "../hooks/Context";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();

  return (
    <>
      <h1>Posts</h1>

      {isLoading ? <h2>Loading...</h2> : null}
      {hits.map(currPost => {
        const { title, author, objectID, url, num_comments } = currPost;
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p>
              By <span> {author} </span> | <span> {num_comments} </span>
              Comments
            </p>
            <div className="card-button">
              <a href={url} target="_blank">
                Read More
              </a>
              <button onClick={() => removePost(objectID)}>Remove</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
