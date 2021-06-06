import React from 'react';
import Navlogo from '../images/logo.png';
import like from "../images/icons/hand-holding-heart-solid.svg";
import user from "../images/icons/user-solid.svg";
import cart from "../images/icons/shopping-cart-solid.svg";
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
const Nav = () => {
    return (
     <>
          <nav className="navigation">
              <a href="#" className="Navlogo">
                  <img src={Navlogo} alt="Navbar Logo"/>
              </a>

              <div className="Search">
                  <form>
                      <input
                       type="text" 
                       className="searchInput"
                       placeholder="Search for products , Brands & Categories"
                       />
                       
                      <button className="searchBtn" type="button">
                          <SearchIcon/>
                      </button>
                  </form>
              </div>

              <div className="icons">
                  <a href="#" className="bolimlar">
                      <FavoriteIcon/>
                  </a>

                  <a href="#" className="bolimlar">
                     <PermIdentityIcon/>
                 </a>

                 <a href="#" className="bolimlar">
                      <ShoppingCartIcon/>
                  </a>
              </div>
          </nav>
        </>
    );
};

export default Nav;