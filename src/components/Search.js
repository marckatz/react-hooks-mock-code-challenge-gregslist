import React from "react";

function Search({currentSearch, setSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target[0].value)
    // console.log(e.target[0].value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value=""
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
