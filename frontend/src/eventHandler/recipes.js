import userRecipeMappingService from '../services/user_recipe_mapping'

export const getFavorites = async (setFavoriteRecipes) => {
  const userId = userRecipeMappingService.getCookie('userId')
  if(userId){
    const response = await userRecipeMappingService.getFavorites();
    setFavoriteRecipes(response)
  }
}

export const handleAddToFavoritesModal = async (e) => {
  e.preventDefault();
  const req_data = {"recipe_id": e.target.value}
  await userRecipeMappingService.addToFavorites(req_data)
  getFavorites()
}

