import React from "react";



const BreakdownCards = () => {
    return (
        <section class="section-price-breakdown" id="section-price-breakdown">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Price Breakdown
            </h2>
        </div>
    
        <div class="row">
            <div class="col-1-of-2">
               <div class="breakdown-card">
                   <div class="breakdown-card__side breakdown-card__side--front">
                        <div class="breakdown-card__picture breakdown-card__picture--1">
                            &nbsp;
                        </div>
                        <h4 class="breakdown-card__heading">
                            <span class="breakdown-card__heading-span breakdown-card__heading-span--1">Package 1</span>
                        </h4>
                        <div class="breakdown-card__details">
                            <ul>
                                <li>  1-25</li>
                                <li> 3 Pizza menu (base) </li>
                                <li>$2.50 per mile traveled to the event(roundtrip)</li>
                                <li>Tax and 20% gratuity applied</li>
                                <li>Additional menu items available ($4 per guest per hour)</li>
                            </ul>
                        </div>
                   </div>
                   <div class="breakdown-card__side breakdown-card__side--back breakdown-card__side--back-1">
                        <div class="breakdown-card__cta">
                            <div class="breakdown-card__price-box">
                                <p class="breakdown-card__about-me"></p>
                                <p class="breakdown-card__price-value u-center-text">$1800.00</p>
                            </div>
                            <a href="#popup" class="btn btn--white">Contact Us</a>
                        </div>
                    </div>
               </div>
            </div>
    
    
            <div class="col-1-of-2">
                <div class="breakdown-card">
                    <div class="breakdown-card__side breakdown-card__side--front">
                        <div class="breakdown-card__picture breakdown-card__picture--2">
                            &nbsp;
                        </div>
                        <h4 class="breakdown-card__heading">
                            <span class="breakdown-card__heading-span breakdown-card__heading-span--2">Package 2 </span>
                        </h4>
                        <div class="breakdown-card__details">
                            <ul>
                                <li>  1-25</li>
                                <li> 3 Pizza menu (base) </li>
                                <li>$2.50 per mile traveled to the event(roundtrip)</li>
                                <li>Tax and 20% gratuity applied</li>
                                <li>Additional menu items available ($4 per guest per hour)</li>
                            </ul>
                        </div>
    
                    </div>
                    <div class="breakdown-card__side breakdown-card__side--back breakdown-card__side--back-2">
                        <div class="breakdown-card__cta">
                            <div class="breakdown-card__price-box">
                            <p class="breakdown-card__price-value u-center-text">$1800.00</p>
                                {/* <p class="breakdown-card__price-value">$497</p> */}
                            </div>
                            <a href="#popup" class="btn btn--white">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

        {/* <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--green">Contact Us</a>
        </div> */}
    </section>
      );
    };

export default BreakdownCards;