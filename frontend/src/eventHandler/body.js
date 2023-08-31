export const handleOpenRecipeModal = (
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

export const handleCloseRecipeModal = (
  setIsOpenRecipeModal,
  storedScrollPosition
) => {
  setIsOpenRecipeModal(false);
  document.body.style.overflow = "";
  window.scrollTo(0, storedScrollPosition);
};

export const loadMoreData = async (
  hasMore,
  isLoading,
  setIsLoading,
  keywords,
  offset,
  radioValue,
  recipeService,
  setHasMore,
  setSearchResult,
  searchResult,
  setOffset
) => {
  if (!hasMore || isLoading) return;

  setIsLoading(true);

  try {
    const obj = { keywords, offset };
    const response =
      radioValue === "1"
        ? await recipeService.searchByIngredients(obj)
        : await recipeService.searchByTitle(obj); // Change the URL accordingly
    if (response.length === 0) {
      setHasMore(false);
    } else {
      setSearchResult([...searchResult, ...response]);
      setOffset(offset + 20);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  setIsLoading(false);
};
