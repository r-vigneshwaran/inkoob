import { CartIcon, HamBurgerIcon } from 'assets/icons';
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="ham-burger" onClick={toggleSidebar}>
        <HamBurgerIcon className="z-mirror-primary" width={32} height={32} />
      </div>
      <div className="logo">
        <div className="title">
          <h2>Lorem</h2>
        </div>
      </div>
      <div className="cart">
        <CartIcon className="mirror-primary" width={32} height={32} />
      </div>
    </div>
  );
};

export default Navbar;
