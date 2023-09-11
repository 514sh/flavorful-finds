const handleOpenRecipeModal = (
  index,
  setStoredScrollPosition,
  setRecipe,
  setIsOpenRecipeModal,
  searchResult
) => {
  setStoredScrollPosition(window.pageYOffset);
  setRecipe({ ...searchResult[index] }); // Store the selected index
  setIsOpenRecipeModal(true);
  document.body.style.overflow = "hidden";
};

const handleOpenFavoriteRecipeModal = (
  index,
  setStoredScrollPosition,
  setRecipe,
  setIsOpenRecipeModal,
  favoriteRecipes
) => {
  setStoredScrollPosition(window.pageYOffset);
  setRecipe({ ...favoriteRecipes[index] }); // Store the selected index
  setIsOpenRecipeModal(true);
  document.body.style.overflow = "hidden";
};

const handleCloseRecipeModal = (
  setIsOpenRecipeModal,
  storedScrollPosition
) => {
  setIsOpenRecipeModal(false);
  document.body.style.overflow = "";
  window.scrollTo(0, storedScrollPosition);
};

const eventHandlers = { handleOpenRecipeModal, handleCloseRecipeModal, handleOpenFavoriteRecipeModal}

export default eventHandlers