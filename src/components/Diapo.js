



import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/slide.css'



 
const Slideshow = () => {
    const images = [
        'fruits.jpg',
        'coke.jpg',
        'cookies.jpg',
        'nutella.jpg',
        'water.jpg',
        'vegetables.jpg'
      ];

    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} className = "img_diapo"  src={each} /> )
          }
        </Zoom>
      </div>
    )
}



export  default Slideshow;