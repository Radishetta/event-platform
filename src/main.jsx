import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

const searchClient = algoliasearch("4NL05C7K9S", "e239413c079057eafcf1ebdd2b803117");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <InstantSearch searchClient={searchClient} indexName="events">
        <App />
      </InstantSearch>
    </BrowserRouter>
  </StrictMode>
);
