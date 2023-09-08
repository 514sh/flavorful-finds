import React, { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import HeaderMain from "./components/Header/HeaderMain";
import BodyMain from "./components/Body/BodyMain";
import Hero from "./components/Body/Hero";
import recipeService from "./services/recipes";
import LoginMain from "./components/Body/LoginMain";

import userRecipeMappingService from './services/user_recipe_mapping'
import userService from './services/users'
import BodyFavorites from "./components/Body/BodyFavorites";

import {
  handleCloseSearchModal,
  handleInputChangeSearch,
  handleInputKeyPressSearch,
  handleOpenSearchModal,
  handleSendSearch,
  handleTagClose,
  toggleMenu,
  handleRadioChange,
} from "./eventHandler/header";
import {
  handleOpenRecipeModal,
  handleCloseRecipeModal,
  loadMoreData,
} from "./eventHandler/body";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenRecipeModal, setIsOpenRecipeModal] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [radioValue, setRadioValue] = useState("1");
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(20);
  const [storedScrollPosition, setStoredScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const [canRunScroll, setCanRunScroll] = useState(true)
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerShowPassword, setRegisterShowPassword] = useState(false)
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)
  

  const handleScroll = () => {
    if(!canRunScroll){
      return
    }

    setCanRunScroll(false)
    setTimeout(() => {
      setCanRunScroll(true)
    }, 3000)
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
          recipeService,
          setHasMore,
          setSearchResult,
          searchResult,
          setOffset
        );
      }
  };

  const handleChangeLoginUsername = (e) => {
    setLoginUsername(e.target.value)
  }

  const handleChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value)
  }

  const handleLoginShowPassword = () => {
    setShowLoginPassword(!showLoginPassword)
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    console.log("im clicked")
    const user = {"username": loginUsername, "password": loginPassword}
    const response = await userService.login(user)
    setIsLoggedIn(true)
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault()
    console.log("im clicked")
    const user = {"username": registerUsername, "password": registerPassword}
    const response = await userService.register(user)
  } 

  const handleAddToFavoritesModal = async (e) => {
    e.preventDefault();
    const req_data = {"recipe_id": e.target.value}
    const response = await userRecipeMappingService.addToFavorites(req_data)
    getFavorites()
  }

  const handleOpenRegister = (e) => {
    e.preventDefault()
  }

  const getFavorites = async () => {
    const userId = userRecipeMappingService.getCookie('userId')
    if(userId){
      const response = await userRecipeMappingService.getFavorites();
      setFavoriteRecipes(response)
    }
  }

  useEffect(() => {
    getFavorites()
  },[isLoggedIn])

  useEffect(() => {
    console.log("Canrun scroll", canRunScroll)
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchResult]);

  return (
    <>
      <Router>
        <Layout>
          <HeaderMain
            handleRadioChange={(value) =>
              handleRadioChange(value, setRadioValue)
            }
            radioValue={radioValue}
            handleOpenModal={() => handleOpenSearchModal(setIsOpenSearchModal)}
            isOpenModal={isOpenSearchModal}
            inputValueSearch={searchInput}
            handleInputChangeSearch={(e) =>
              handleInputChangeSearch(e, setSearchInput)
            }
            handleInputKeyPressSearch={(e) =>
              handleInputKeyPressSearch(
                e,
                searchInput,
                keywords,
                setSearchInput,
                setKeywords
              )
            }
            valuesSearch={keywords}
            handleTagClose={(index) =>
              handleTagClose(index, setKeywords, keywords)
            }
            handleCloseModal={() =>
              handleCloseSearchModal(setIsOpenSearchModal)
            }
            handleSendSearch={(e) =>
              handleSendSearch(
                e,
                setSearchResult,
                recipeService,
                keywords,
                setSearchInput,
                radioValue,
                setIsOpenSearchModal
              )
            }
            toggleMenu={() => toggleMenu(setIsOpenMenu, isOpenMenu)}
            isOpenMenu={isOpenMenu}
          />
          <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route
              path="/home"
              element={
                <BodyMain
                  searchResult={searchResult}
                  keywords={keywords}
                  handleOpenRecipeModal={(index) =>
                    handleOpenRecipeModal(
                      index,
                      setStoredScrollPosition,
                      setRecipe,
                      setIsOpenRecipeModal,
                      searchResult
                    )
                  }
                  handleCloseRecipeModal={() =>
                    handleCloseRecipeModal(
                      setIsOpenRecipeModal,
                      storedScrollPosition
                    )
                  }
                  isOpenRecipeModal={isOpenRecipeModal}
                  recipe={recipe}
                  isLoading={isLoading}
                  handleAddToFavoritesModal={handleAddToFavoritesModal}
                />
              }
            />  
            <Route path="/about" element={<p>about</p>} />
            <Route
              path="/favorites"
              element={
                <BodyFavorites
                  favoriteRecipes={favoriteRecipes}
                  handleOpenRecipeModal={(index) =>
                    handleOpenRecipeModal(
                      index,
                      setStoredScrollPosition,
                      setRecipe,
                      setIsOpenRecipeModal,
                      searchResult
                    )
                  }
                  handleCloseRecipeModal={() =>
                    handleCloseRecipeModal(
                      setIsOpenRecipeModal,
                      storedScrollPosition
                    )
                  }
                  isOpenRecipeModal={isOpenRecipeModal}
                  recipe={recipe}
                  handleAddToFavoritesModal={handleAddToFavoritesModal}
                />
              }
            />  
            <Route path="/login" element={<LoginMain
                handleChangeLoginPassword={handleChangeLoginPassword}
                handleChangeLoginUsername={handleChangeLoginUsername}
                handleLoginShowPassword={handleLoginShowPassword}
                handleSubmitLogin={handleSubmitLogin}
                loginPassword={loginPassword}
                loginUsername={loginUsername}
                handleOpenRegister={() => setIsOpenRegisterModal(true)}
                showLoginPassword={showLoginPassword}

                handleChangeRegisterPassword={(e) => setRegisterPassword(e.target.value)}
                handleChangeRegisterUsername={(e) => setRegisterUsername(e.target.value)}
                handleRegisterShowPassword={() => setRegisterShowPassword(!registerShowPassword)}
                registerShowPassword={registerShowPassword}
                handleSubmitRegister={handleSubmitRegister}
                registerUsername={registerUsername}
                registerPassword={registerPassword}
                

                handleCloseRegister={() => setIsOpenRegisterModal(false)}
                isOpenRegisterModal={isOpenRegisterModal}
              />
            } />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
