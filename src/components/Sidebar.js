import { CloseIcon } from 'assets/icons';
import React from 'react';

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="title">
        <h2>Lorem Ipsum</h2>
      </div>
      <span className="back" onClick={toggleSidebar}>
        <CloseIcon width={32} height={32} />{' '}
      </span>
      <div className="sidebar-items">
        <ul>
          <li className="active ">About</li>
        </ul>
        <ul>
          <li>Service</li>
        </ul>
        <ul>
          <li>Cuisine</li>
        </ul>
        <ul>
          <li>Gallery</li>
        </ul>
        <ul>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Book</li>
        </ul>
      </div>
      <div className="cart">
        <button className="btn-cart">Cart</button>
      </div>
    </div>
  );
};

export default Sidebar;
