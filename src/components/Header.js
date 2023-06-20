import React from "react";
import Search from "./Search";

function Header({setSearch,currentSearch, sortByLocationToggle}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search currentSearch={currentSearch} setSearch={setSearch}/>
      <input type="checkbox" onClick={sortByLocationToggle}></input>
    </header>
  );
}

export default Header;
