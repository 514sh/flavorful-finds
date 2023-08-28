import React, { useState, useEffect } from "react";
import recipeService from "./services/recipes";

const App = () => {
  const baseUrl = BACKEND_URL;
  const [keywords, setKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    console.log("result", searchResult);
  }, [searchResult]);

  useEffect(() => {
    console.log("keywords", keywords);
  }, [keywords]);
  const handleSendSearch = async (e) => {
    e.preventDefault();
    const response = await recipeService.searchByIngredients(keywords);
    setSearchResult(response);
    setKeywords([]);
    setSearchInput("");
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchInput) {
      setKeywords(keywords.concat(searchInput.toLowerCase().replace(" ", "")));
      setSearchInput("");
    }
  };

  return (
    <>
      <input
        onKeyPress={handleSearchKeyPress}
        onChange={handleSearchInputChange}
        value={searchInput}
      />
      <button onClick={handleSendSearch}>Search</button>
      <ul>
        {searchResult
          ? searchResult.map((recipe) => (
              <li key={recipe.id}>{recipe.title}</li>
            ))
          : "search now"}
      </ul>
    </>
  );
};

export default App;
