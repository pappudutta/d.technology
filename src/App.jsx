import { useState } from "react";
import "./App.css";
import Search from "./services/Search";
import Pagination from "./services/Pagination";
import Stories from "./services/Stories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Welcome</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
