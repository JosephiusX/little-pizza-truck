import React from 'react';
import NavLinksHead from './NavLinksHead';



const Header = () => {

  return (
    <div>
      <header className="header">
            <div className="header__text-box">
              <NavLinksHead />

              <h1 className="heading-primary">
                <span className="heading-primary--main">Little Pizza Truck</span>
                <span class="heading-primary--sub">Cultivating connections by breaking bread</span>
              </h1>
            </div>
      </header>
    </div>
  );
};


export default Header;