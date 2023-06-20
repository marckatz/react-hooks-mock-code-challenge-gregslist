import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [currentSearch, setSearch] = useState("")
  const [locationToggle, setLocationToggle] = useState(false)

  function sortByLocationToggle(){
    setLocationToggle(!locationToggle)
  }

  return (
    <div className="app">
      <Header sortByLocationToggle={sortByLocationToggle} currentSearch={currentSearch} setSearch={setSearch}/>
      <ListingsContainer currentSearch={currentSearch} locationToggle={locationToggle}/>
      {/* <NewListingForm /> */}
    </div>
  );
}

export default App;
