import React from "react";
import { Nav } from "./Nav/Nav";
import { Title } from "./Title/Title";
import "../../styles/Header.css";
import "../../styles/Search.css";
import Search from "./Search/Search";

export const Header = () => {
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
        <Search />
      </div>
    </>
  );
};
