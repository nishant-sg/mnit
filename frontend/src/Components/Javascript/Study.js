import '../CSS/Study.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Flipcard1 from './Flipcard1.js';
import React, { useState } from 'react';


function Study() {
    const responsive = {
        desktop: {
          breakpoint: { max: 5000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30 
        }
      }

  return (
    <div className="study">
        <div className='study-top'>
            <div className='study-top-right'>
                Study At MNIT
            </div>
        </div>
        <div className='study-bottom'>
            <Carousel
            responsive={responsive}
            arrows={true}
            infinite={true}
            >
                <div className='flipcard-container'>
                    <Flipcard1 title='B-Tech' desc='hello'/>
                </div>
                <div className='flipcard-container'>
                    <Flipcard1/>
                </div>
                <div className='flipcard-container'>
                    <Flipcard1/>
                </div><div className='flipcard-container'>
                    <Flipcard1/>
                </div>

            </Carousel>
        </div>
    </div>  
  );
}

export default Study;
