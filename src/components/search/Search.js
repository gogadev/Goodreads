import React from "react";

import "./search.style.css";

const Search = ({ handleSearch, searchBooks, handleSort }) => {
  return (
    <form className="form" onSubmit={searchBooks}>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <button className="btn" type="submit">
        Search
      </button>
      <select defaultValue="Sort" onChange={handleSort}>
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </form>
  );
};

export default Search;
