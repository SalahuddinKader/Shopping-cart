import React from "react";
import "../css/Search.css";

function Search() {
  return (
    <div className="search">
      <div className="dropdown-filter dropdown">
        <form action="">
          <label className="filters">Filters: </label>
          <select className="filters-by">
            <option value="Newest">Shoes</option>
            <option value="Oldest">Clothes</option>
            <option value="High-Low">Accessories</option>
            <option value="Low-High">Equipment</option>
          </select>
        </form>
      </div>
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text lighten-3 mt-2" id="basic-text1">
            <i className="fas fa-search text-dark" aria-hidden="true"></i>
          </span>
        </div>
        <input
          className=" input-search form-control my-0 py-1 mt-2 mr-2  "
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>

      <div className="dropdown-sort">
        <form action="">
          <label className="sort">Sort By: </label>
          <select className="Sort-by">
            <option value="Shoes">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="High-Low">High-Low</option>
            <option value="Low-High">Low-High</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Search;
