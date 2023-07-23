import "./App.css";
import Search from "./services/Search";
import Pagination from "./services/Pagination";
import Stories from "./services/Stories";
import { useGlobalContext } from "./hooks/Context";

function App() {
  const data = useGlobalContext();

  return (
    <>
      <div>Welcome {data}</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
