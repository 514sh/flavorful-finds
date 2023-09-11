import React from "react";
import { useLocation } from "react-router-dom";


import SearchBar from "./SearchBar/SearchBar";
import SearchModal from "./SearchModal/SearchModal";
import MenuLinks from "./MenuLinks/MenuLinks";
import MenuToggle from "./MenuToggle/MenuToggle";
import Logo from "./Logo/Logo";
import HeaderContainer from "./HeaderContainer";

const HeaderMain = ({ ...props }) => {
  const location = useLocation();
  const showSearchBar = location.pathname === "/home";
  return (
    <HeaderContainer>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      {showSearchBar ? <SearchBar {...props} /> : ""}
      <SearchModal {...props} />
      <MenuToggle {...props} />
      <MenuLinks {...props} />
    </HeaderContainer>
  );
};

export default HeaderMain;
