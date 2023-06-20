import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [currentSearch, setSearch] = useState("")

  return (
    <div className="app">
      <Header currentSearch={currentSearch} setSearch={setSearch}/>
      <ListingsContainer currentSearch={currentSearch}/>
    </div>
  );
}

export default App;
