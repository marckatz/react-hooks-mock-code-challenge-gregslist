import React from "react";
import Search from "./Search";

function Header({currentSearch, setSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search currentSearch={currentSearch} setSearch={setSearch}/>
    </header>
  );
}

export default Header;
