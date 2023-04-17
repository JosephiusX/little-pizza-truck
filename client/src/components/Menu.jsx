import React from 'react';
// import videoMp4 from '../img/video.mp4'
// import videoWebm from '../img/video.webm'

const Menu = () => {
  return (
    <section className="section-menu">
      <div className="row">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          {/* <source src={videoWebm} type="video/webm" /> */}
          {/* <source src={videoMp4} type="video/mp4" /> */}
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary-white u-position-sample-menu-title">
          Sample Menu
        </h2>
      </div>

     

        <div className="story u-margin-bottom-big">
          <div className="story__text">

            <h3 className=" u-center-text u-color-white heading-tertiary   u-font-big u-margin-bottom-small ">
              Salads
            </h3>
            <h3 className=" u-center-text u-color-white heading-tertiary   u-font-medium">
              The Kale
            </h3>
            <p className=' u-center-text u-color-white u-margin-bottom-medium '>Colatura and anchovy vinaigrette, squash, radishes, croutons, pumpkin seeds. </p>
            <h3 className="u-center-text u-color-white heading-tertiary   u-font-medium">
            The Roasted Beet
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium  u-margin-bottom-medium'>Fennel, olives, almonds, ricotta salata.</p>

            <h3 className=" u-center-text u-color-white heading-tertiary u-margin-bottom-small  u-font-big ">
              Pizzas
            </h3>
            <h3 className=" u-center-text u-color-white heading-tertiary   u-font-medium">
            The Classic
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '> The Spicy Soppressata</p>
            <h3 className="u-center-text u-color-white heading-tertiary   u-font-medium">
            The Fungi
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '>Cream, fior di latte, hen of the woods, garlic, radicchio, chives.</p>
            <h3 className="u-center-text u-color-white heading-tertiary   u-font-medium">
            The Squash
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '>Cipollini, grana, fior de latte, delicata.</p>
            <h3 className="u-center-text u-color-white heading-tertiary   u-font-medium">
            The Patata
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '>Black truffle cream, fontina, yukon potatoes, guanciale, pickled red onions.</p>
            <h3 className="u-center-text u-color-white heading-tertiary u-font-medium">
            The Spicy Soppressata
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '>Tomato, smoked mozzarella, stracciatella, spicy soppressata, garlic, oregano.</p>
            
            <h3 className="u-center-text u-color-white heading-tertiary u-margin-bottom-small  u-font-big">
              Dissert
            </h3>
            <h3 className="u-center-text u-color-white heading-tertiary   u-font-medium">
            Tiramisu
            </h3>
            <p className='u-center-text u-color-white u-margin-bottom-medium '>Tiramisu with caramel masala.</p>
        
          </div>
        </div>
      </div>

      {/* <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div> */}
    </section>
  );
};

export default Menu;
