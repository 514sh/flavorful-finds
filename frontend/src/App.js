import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import HeaderMain from "./components/Header/HeaderMain";
import BodyMain from "./components/Body/BodyMain";
import Hero from "./components/Body/Hero";
import recipeService from "./services/recipes";
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
  const baseUrl = BACKEND_URL;
  const [keywords, setKeywords] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [radioValue, setRadioValue] = useState("1");
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(20);
  const [storedScrollPosition, setStoredScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [searchResult]);

  const handleScroll = () => {
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
                />
              }
            />
            <Route path="/about" element={<p>about</p>} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
