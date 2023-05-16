import React from 'react';

import image from '../assets/img/gallery.webp';
import imageLarge from '../assets/img/gallery.webp';

import image1 from '../assets/img/gallery1.webp';
import image1Large from '../assets/img/gallery1-large.webp';

import image2 from '../assets/img/gallery2.webp';
import image2Large from '../assets/img/gallery2-large.webp';

import image3 from '../assets/img/gallery3.webp';
import image3Large from '../assets/img/gallery3-large.webp';

import image4 from '../assets/img/gallery4.webp';
import image4Large from '../assets/img/gallery4-large.webp';

import image5 from '../assets/img/gallery5.webp';
import image5Large from '../assets/img/gallery5-large.webp';

import image6 from '../assets/img/gallery6.webp';
import image6Large from '../assets/img/gallery6-large.webp';

import image7 from '../assets/img/gallery7.webp';
import image7Large from '../assets/img/gallery7-large.webp';

import image8 from '../assets/img/gallery8.webp';
import image8Large from '../assets/img/gallery8-large.webp';

import image9 from '../assets/img/gallery9.webp';
import image9Large from '../assets/img/gallery9-large.webp';

import image10 from '../assets/img/gallery10.webp';
import image10Large from '../assets/img/gallery10-large.webp';

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