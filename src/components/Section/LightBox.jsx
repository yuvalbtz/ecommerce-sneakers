import React, {useState,useEffect,useContext, useMemo, memo} from "react";
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'

import Product1thumbnail from '../../images/image-product-1-thumbnail.jpg'
import Product2thumbnail from '../../images/image-product-2-thumbnail.jpg'
import Product3thumbnail from '../../images/image-product-3-thumbnail.jpg'
import Product4thumbnail from '../../images/image-product-4-thumbnail.jpg'

import { useImage } from "../../Hooks/useImage";

import {CartContext} from '../../utils/UseContext'
import { LightBoxContext } from "../../utils/UseLightBoxContext";

const images = [
    Product1,
    Product2,
    Product3,
    Product4
]


function LightBox(){
   
const {
    handleNextImage,
    handlePreviousImage,
    handleThumbClick,
    index
} = useImage(images)


const {handleClick} = useContext(LightBoxContext)
  
    return (
      <>
        <div className={`overlay`}>
           <div className="image-wrapper">
           <span  onClick={handleClick}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/></svg>
          </span>
           <img src={images[index]}  alt="bigger  pic" />
           <button  className="overlay-arrows_left" onClick={() => handlePreviousImage(index)}>
            <div>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
            </div>
          </button>
          <button className="overlay-arrows_right" onClick={() => handleNextImage(index)}>
            <div>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
            </div>            
          </button>
           </div>
          <div className="thumnails-wrapper">
            {images.map((img, i) =>(
            <div key={`img-${i}`} onClick={() => handleThumbClick(i)}  className={index === i ? "current-img-border" : ''}>
                <img  src={img} className={index === i ? "current-image-border" : ''}  alt={`img-${i}`} />
            </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default LightBox;