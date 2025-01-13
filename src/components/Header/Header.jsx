import React from "react";
import { Nav } from "./Nav/Nav";
import { Title } from "./Title/Title";
import "../../styles/Header.css";
import SearchBar from "./Search/SearchBar/SearchBar";
import SearchButton from "./Search/SearchButton/SearchButton";

export const Header = ({ search, handleSearchChange, handleSetEvents }) => {
  return (
    <>
      <div id="header">
        <div id="title">
          <Title />
        </div>
        <div id="nav">
          <Nav />
        </div>
      </div>
      <div id="search">
        <SearchBar handleSearchChange={handleSearchChange} />
        <SearchButton search={search} handleSetEvents={handleSetEvents} />
      </div>
    </>
  );
};
