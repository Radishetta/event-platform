import React from "react";
import "../../../../styles/SearchButton.css";
import { searchWithAlgolia } from "../../../../utils/searchAlgolia";
import { Link } from "react-router-dom";

export default function SearchButton({ search, handleSetEvents }) {
  const handleSearch = async () => {
    try {
      const results = await searchWithAlgolia(search);
      results.forEach((result) => {
        handleSetEvents(result.hits);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Link to="/events">
        <button onClick={handleSearch} id="search-btn" type="submit">
          Search!
        </button>
      </Link>
    </div>
  );
}
