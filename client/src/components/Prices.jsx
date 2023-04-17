import React from 'react';
import NavLinksHead from './NavLinksHead';
import PricingOverview from './PricingOverview';
import BreakdownCards from './BreakdownCards';
import Footer from './Footer'


const Prices = () => {

return (
  <div className=''>
  <header className="prices">
          <div className="prices__text-box">

            <NavLinksHead />

            <h1 className="heading-primary">
              <span className="heading-primary--main">Request Event</span>
              <span class="heading-primary--sub">Let Us Make Your Day</span>
            </h1>  
          </div>
    </header>
      <div className="">
    <PricingOverview />
    <BreakdownCards />
  </div>
    <Footer />
  </div>
  );
};


export default Prices;