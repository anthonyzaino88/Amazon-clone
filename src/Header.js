import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
/*import { Button } from "./globalStyles";*/
import {
  Nav,
  NavbarContainer,
  NavLogo,
  /*NavIcon,*/
  MobileIcon,
  NavMenu,
  NavItem,
  /*NavItemBtn.*/
  NavLinks,
  /* NavBtnLink,*/
} from "./HeaderElements";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                onClick={closeMobileMenu}
              ></img>
            </NavLogo>
            <div className="header__search">
              <input className="header__searchInput" type="text" />
              <SearchIcon className="header__searchIcon "></SearchIcon>
            </div>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  to={!user && "/login"}
                  onClick={(handleClick, handleAuthentication)}
                  click={click}
                >
                  <div onClick={closeMobileMenu} className="header__menu">
                    <span className="header__menuLineOne">
                      Hello, {!user ? "Guest" : user?.email}
                    </span>

                    <span className="header__menuLineTwo">
                      {user ? "Sign Out" : "Sign In"}
                    </span>
                  </div>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/orders">
                  <div onClick={closeMobileMenu} className="header__menu">
                    <span className="header__menuLineOne">Returns</span>

                    <span className="header__menuLineTwo">Orders</span>
                  </div>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to={!user && "/login"} onClick={closeMobileMenu}>
                  <div className="header__menu">
                    <span className="header__menuLineOne">Your</span>

                    <span className="header__menuLineTwo">Prime</span>
                  </div>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/checkout">
                  <div onClick={closeMobileMenu} className="header__menuBasket">
                    <ShoppingBasketIcon className="basketIcon" />
                    <span className="header__menuLineTwo header__basketCount">
                      {basket?.length}
                    </span>
                  </div>
                </NavLinks>
              </NavItem>
              {/* <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontBig>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Header;
