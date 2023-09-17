//dependencies
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

//components
import Layout from "./components/Layout";
import HeaderMain from "./components/Header/HeaderMain";
import HomeMain from "./components/Body/Home/HomeMain";
import Hero from "./components/Body/Hero/Hero";
import LoginMain from "./components/Body/Login/LoginMain";
import FavoritesMain from "./components/Body/Favorites/FavoritesMain";

//eventHandlers
import headerHandler from "./eventHandler/header";
import homeHandler from "./eventHandler/home";
import loginHandler from "./eventHandler/login";
import recipeModalHandler from "./eventHandler/recipeModal"


const App = () => {
  const toast =useToast()
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
  const [loginShowPassword, setLoginShowPassword] = useState(false)
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerShowPassword, setRegisterShowPassword] = useState(false)
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false)
  const [location, setLocation] = useState("")
  const [canLoadMore, setCanLoadMore] = useState(true)

  useEffect(() => {
    homeHandler.setFavorites(setFavoriteRecipes)
    setLocation("/home")
  },[isLoggedIn])

  useEffect(() => {
    if (location === "/home" && !isOpenRecipeModal){
      const handleScroll = () => homeHandler
      .handleScroll(     
        hasMore,
        isLoading,
        setIsLoading,
        keywords,
        offset,
        radioValue,
        setHasMore,
        setSearchResult,
        searchResult,
        setOffset,
        canLoadMore,
        setCanLoadMore
      )
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } 
  }, [searchResult, location, canLoadMore]);


  return (
    <>
      <Router>
        <Layout>          
          <HeaderMain
            handleLogout={() => loginHandler.handleLogout(setLoginUsername, setLoginPassword)}
            setLocation={setLocation}
            handleRadioChange={(value) => setRadioValue(value)}
            handleOpenModal={() => setIsOpenSearchModal(true)}
            handleCloseModal={() => setIsOpenSearchModal(false)}
            toggleMenu={() => setIsOpenMenu(!isOpenMenu)}
            handleInputChangeSearch={(e) => setSearchInput(e.target.value)}
            handleTagClose={(index) => setKeywords(keywords.filter((_, i) => i !== index)) }
            handleSendSearch={(e) =>
              headerHandler.handleSendSearch(
                e,
                setSearchResult,
                keywords,
                setSearchInput,
                radioValue,
                setIsOpenSearchModal
              )
            }
            handleInputKeyPressSearch={(e) =>
              headerHandler.handleInputKeyPressSearch(
                e,
                searchInput,
                keywords,
                setSearchInput,
                setKeywords
              )
            }

            isOpenModal={isOpenSearchModal}
            inputValueSearch={searchInput}
            radioValue={radioValue}
            valuesSearch={keywords}
            isOpenMenu={isOpenMenu}
          />
          <Routes>
            <Route path="/" exact element={<Hero handleOpenRegister={() => setIsOpenRegisterModal(true)} />} />
            <Route
              path="/home"
              element={
                <HomeMain
                  recipeList={searchResult}
                  keywords={keywords}
                  handleOpenRecipeModal={(index) =>
                    recipeModalHandler.handleOpenRecipeModal(
                      index,
                      setStoredScrollPosition,
                      setRecipe,
                      setIsOpenRecipeModal,
                      searchResult
                    )
                  }
                  handleCloseRecipeModal={() =>
                    recipeModalHandler.handleCloseRecipeModal(
                      setIsOpenRecipeModal,
                      storedScrollPosition
                    )
                  }
                  isOpenRecipeModal={isOpenRecipeModal}
                  recipe={recipe}
                  isLoading={isLoading}
                  handleAddToFavoritesModal={(e) => homeHandler.handleAddToFavoritesModal(e, setFavoriteRecipes, toast, setIsOpenRecipeModal)}
                />
              }
            />  
            <Route
              path="/favorites"
              element={
                <FavoritesMain
                  favoriteRecipes={favoriteRecipes}
                  recipeList={favoriteRecipes}
                  handleOpenRecipeModal={(index) =>
                    recipeModalHandler.handleOpenFavoriteRecipeModal(
                      index,
                      setStoredScrollPosition,
                      setRecipe,
                      setIsOpenRecipeModal,
                      favoriteRecipes
                    )
                  }
                  handleCloseRecipeModal={() =>
                    recipeModalHandler.handleCloseRecipeModal(
                      setIsOpenRecipeModal,
                      storedScrollPosition
                    )
                  }
                  isOpenRecipeModal={isOpenRecipeModal}
                  recipe={recipe}
                />
              }
            />  
            <Route path="/login" element={<LoginMain
                handleChangeLoginPassword={(e) => setLoginPassword(e.target.value)}
                handleChangeLoginUsername={(e) => setLoginUsername(e.target.value)}
                handleLoginShowPassword={() => setLoginShowPassword(!loginShowPassword)}
                handleSubmitLogin={(e) => loginHandler.handleSubmitLogin(e, setLoginUsername, setLoginPassword, loginUsername, loginPassword, setIsLoggedIn, toast)}
                loginPassword={loginPassword}
                loginUsername={loginUsername}
                showLoginPassword={loginShowPassword}

                handleChangeRegisterPassword={(e) => setRegisterPassword(e.target.value)}
                handleChangeRegisterUsername={(e) => setRegisterUsername(e.target.value)}
                handleRegisterShowPassword={() => setRegisterShowPassword(!registerShowPassword)}
                handleSubmitRegister={(e) => loginHandler.handleSubmitRegister(e, setIsOpenRegisterModal, setRegisterUsername, setRegisterPassword, registerUsername, registerPassword, toast)}
                registerUsername={registerUsername}
                registerPassword={registerPassword}
                registerShowPassword={registerShowPassword}
                
                handleOpenRegister={() => setIsOpenRegisterModal(true)}
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
