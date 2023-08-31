export const handleOpenSearchModal = (setIsOpenSearchModal) => {
  setIsOpenSearchModal(true);
};

export const handleCloseSearchModal = (setIsOpenSearchModal) => {
  setIsOpenSearchModal(false);
};

export const handleInputChangeSearch = (e, setSearchInput) => {
  setSearchInput(e.target.value);
};

export const handleRadioChange = (value, setRadioValue) => {
  setRadioValue(value);
};

export const handleInputKeyPressSearch = (
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

export const handleTagClose = (index, setKeywords, keywords) => {
  const newValues = keywords.filter((_, i) => i !== index);
  setKeywords(newValues);
};

export const handleSendSearch = async (
  e,
  setSearchResult,
  recipeService,
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

export const toggleMenu = (setIsOpenMenu, isOpenMenu) =>
  setIsOpenMenu(!isOpenMenu);
