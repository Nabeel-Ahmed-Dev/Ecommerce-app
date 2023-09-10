"use client";

import Root from "@/layout/Root/Root";
import "./styles.scss";

const Navbar = () => {
  return (
    <Root className="navbar__root">
      <div className="navbar__menu">
        <p className="navbar__menu__item">
          <span>
            <img src="/icons/hamburger.svg" />
          </span>
          <span>SHOP/MENU</span>
        </p>
      </div>
      <div className="navbar__items">
        <p className="navbar__item">
          <span>
            <img src="/icons/search.svg" />
          </span>
          <span>SEARCH</span>
        </p>
        <p className="navbar__item">
          <span>
            <img src="/icons/wishlist.svg" />
          </span>
          <span>WISHLIST</span>
        </p>
        <p className="navbar__item">
          <span>
            <img src="/icons/account.svg" />
          </span>
          <span>ACCOUNT</span>
        </p>
        <p className="navbar__item">
          <span>
            <img src="/icons/cart.svg" />
          </span>
          <span>CART</span>
        </p>
      </div>
    </Root>
  );
};

export default Navbar;
