import React from 'react';

import image from '../img/gallery.jpg';
import imageLarge from '../img/gallery.jpg';

import image1 from '../img/gallery1.jpg';
import image1Large from '../img/gallery1-large.jpg';

import image2 from '../img/gallery2.jpg';
import image2Large from '../img/gallery2-large.jpg';

import image3 from '../img/gallery3.jpg';
import image3Large from '../img/gallery3-large.jpg';

import image4 from '../img/gallery4.jpg';
import image4Large from '../img/gallery4-large.jpg';

import image5 from '../img/gallery5.jpg';
import image5Large from '../img/gallery5-large.jpg';

import image6 from '../img/gallery6.jpg';
import image6Large from '../img/gallery6-large.jpg';

import image7 from '../img/gallery7.jpg';
import image7Large from '../img/gallery7-large.jpg';

import image8 from '../img/gallery8.jpg';
import image8Large from '../img/gallery8-large.jpg';

import image9 from '../img/gallery9.jpg';
import image9Large from '../img/gallery9-large.jpg';

import image10 from '../img/gallery10.jpg';
import image10Large from '../img/gallery10-large.jpg';

const AboutUs = () => {
  return (
    <section className="section-about">
      <div className="row">
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-medium">
          About Us
        </h2>
      </div>

        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
          Our Philosophy
          </h3>
          <p className="paragraph">
          At Little Pizza Truck, we believe that sharing pizza has the unique power to unite people with joyful hearts and full stomachs. As a family-owned catering business, we provide tailored, upscale experiences using fresh, seasonal ingredients and eco-friendly practices like locally-sourced produce. Our team is committed to enhancing events, fostering connections, and respecting our food's origins while minimizing our environmental impact. We strive to create unforgettable experiences that can be enjoyed anywhere. 
          </p>

          {/* <a href="#" className="btn-text">
            Learn more &rarr;
          </a> */}
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${image} 300w, ${imageLarge} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 0"
              className="composition__photo composition__photo--p0"
              src={imageLarge}
            />

            <img
              srcSet={`${image1} 300w, ${image1Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={image1Large}
            />

            <img
              srcSet={`${image2} 300w, ${image2Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={image2Large}
            />

            <img
              srcSet={`${image3} 300w, ${image3Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={image3Large}
            />

            <img
              srcSet={`${image4} 300w, ${image4Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 4"
              className="composition__photo composition__photo--p4"
              src={image4Large}
            />

            <img
              srcSet={`${image5} 300w, ${image5Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 5"
              className="composition__photo composition__photo--p5"
              src={image5Large}
            />

            <img
              srcSet={`${image6} 300w, ${image6Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 6"
              className="composition__photo composition__photo--p6"
              src={image6Large}
            />

            <img
              srcSet={`${image7} 300w, ${image7Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 7"
              className="composition__photo composition__photo--p7"
              src={image7Large}
            />

            <img
              srcSet={`${image8} 300w, ${image8Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 8"
              className="composition__photo composition__photo--p8"
              src={image8Large}
            />

            <img
              srcSet={`${image9} 300w, ${image9Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 9"
              className="composition__photo composition__photo--p9"
              src={image9Large}
            />

            <img
              srcSet={`${image10} 300w, ${image10Large} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 20vw, 300px"
              alt="Photo 10"
              className="composition__photo composition__photo--p10"
              src={image10Large}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;