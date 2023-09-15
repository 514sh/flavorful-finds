import recipeService from '../services/recipes'


const handleInputKeyPressSearch = (
  e,
  searchInput,
  keywords,
  setSearchInput,
  setKeywords
) => {
  const ifKeys = e.key === "Enter";
  if (ifKeys && searchInput != "" && searchInput.length > 1) {
    setKeywords(keywords.concat(searchInput.toLowerCase().replace(" ", "")));
    setSearchInput("");
  }
};


const handleSendSearch = async (
  e,
  setSearchResult,
  keywords,
  setSearchInput,
  radioValue,
  setIsOpenSearchModal
) => {
  e.preventDefault();
  const response =
    radioValue === "1"
      ? await recipeService.searchByIngredients({ keywords, offset: 0 })
      : await recipeService.searchByTitle({ keywords, offset: 0 });
  setSearchResult(response);
  setSearchInput("");
  setIsOpenSearchModal(false);
};

const eventHandlers = { handleInputKeyPressSearch, handleSendSearch}

export default eventHandlers