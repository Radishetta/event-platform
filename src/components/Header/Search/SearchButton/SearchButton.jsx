import React from "react";
import "../../../../styles/SearchButton.css";
import { searchWithAlgolia } from "../../../../utils/searchAlgolia";

export default function SearchButton({ search }) {
  const handleSearch = async () => {
    try {
      const results = await searchWithAlgolia(search);
      results.forEach((result) => {
        console.log(result.hits);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSearch} id="search-btn" type="submit">
        Search!
      </button>
    </div>
  );
}
