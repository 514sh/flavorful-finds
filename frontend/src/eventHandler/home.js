import recipeService from "../services/recipes"
import userRecipeMappingService from '../services/user_recipe_mapping'

const setFavorites = async (setFavoriteRecipes) => {
  const userId = userRecipeMappingService.getCookie('userId')
  if(userId){
    try{
      const response = await userRecipeMappingService.getFavorites();
      setFavoriteRecipes(response)
    }catch(exception){
      return
    }
  }
}

const handleAddToFavoritesModal = async (e, setFavoriteRecipes, toast, setIsOpenRecipeModal) => {
  e.preventDefault();
  try{
    const req_data = {"recipe_id": e.target.value}
    const response = await userRecipeMappingService.addToFavorites(req_data)
    toast({
      position: "top",
      title: "Add Favorite Recipe Alert",
      status: "success",
      description: response["success"],
      duration: 5000,
      isClosable: true,
    })
    setFavorites(setFavoriteRecipes)
  }catch(exception){
    console.log(exception)
  }
  setIsOpenRecipeModal(false)
}


const loadMoreData = async (
  hasMore,
  isLoading,
  setIsLoading,
  keywords,
  offset,
  radioValue,
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

const handleScroll = (     
  hasMore,
  isLoading,
  setIsLoading,
  keywords,
  offset,
  radioValue,
  setHasMore,
  setSearchResult,
  searchResult,
  setOffset) => {

  if (
    window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100 &&
    searchResult.length >= 20 &&
    keywords.length !== 0
  ) {
      loadMoreData(
        hasMore,
        isLoading,
        setIsLoading,
        keywords,
        offset,
        radioValue,
        setHasMore,
        setSearchResult,
        searchResult,
        setOffset
      );
    }
};

const eventHandlers = { 
  setFavorites, 
  handleAddToFavoritesModal, 
  handleScroll 
}

export default eventHandlers