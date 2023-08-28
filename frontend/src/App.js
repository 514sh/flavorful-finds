import React, { useState, useEffect } from "react";
import recipeService from "./services/recipes";

const App = () => {
  const baseUrl = BACKEND_URL;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedRecipes, setSearchRecipes] = useState([]);
  const [isSearchByIngredients, setIsSearchByIngredients] = useState(true);

  useEffect(() => {
    recipeService.getAll().then((recipes) => setRecipes(recipes));
    console.log("recipes", recipes);
  }, []);

  console.log("recipes outside", recipes);
  const handleSendSearch = async (e) => {
    e.preventDefault();
    setSearch(search.toLowerCase());
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input onChange={handleSearchChange} value={search} />
      <button onClick={handleSendSearch}>Search</button>
    </>
  );
};

export default App;
