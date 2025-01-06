import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchButton from "./SearchButton/SearchButton";

export default function Search() {
  return (
    <>
      <div id="search-bar">
        <SearchBar />
      </div>
      <div id="search-btn">
        <SearchButton />
      </div>
    </>
  );
}
