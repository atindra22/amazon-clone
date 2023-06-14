import React from "react";

import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";



import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {
  const[{basket}, dispatch] = useStateValue();
  

  return (
    <nav className="header">
      <Link to={"/Home"}>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon logo"
        /> 
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={"/login"} className="header_link">
          <div className="header_option1">
            <span className="sspan">Hello,</span>
            <span className="lspan">Sign in</span>
          </div>
        </Link>

        <Link to={"/returns"} className="header_link">
          <div className="header_option2">
            <span className="sspan">Returns</span>
            <span className="lspan">& orders</span>
          </div>
        </Link>

        <Link to={"/prime_login"} className="header_link">
          <div className="header_option3">
            <span className="sspan">Your</span>
            <span className="lspan">Prime</span>
          </div>
        </Link>

        <Link to={"/checkout"} className="headerbasket_link">
          <div className="headeroption_basket">
            <span className="header_basket">
              <ShoppingBasketIcon className="headerBasket_icon"></ShoppingBasketIcon>
            </span>

            <span className="header_no_of_items">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
