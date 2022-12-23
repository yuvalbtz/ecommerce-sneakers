import React,{useContext, useState,useEffect, useRef} from 'react';
import Product1 from '../../images/image-product-1.jpg'
import Product2 from '../../images/image-product-2.jpg'
import Product3 from '../../images/image-product-3.jpg'
import Product4 from '../../images/image-product-4.jpg'
import mainImage from '../../images/image-product-1.jpg';
import minusSVG from '../../images/icon-minus.svg';
import plusSVG from '../../images/icon-plus.svg';
import LightBox from './LightBox';
import { CartContext } from '../../utils/UseContext';
import './style.css'
import { useImage } from '../../Hooks/useImage';
import { LightBoxContext } from '../../utils/UseLightBoxContext';


function Index() {
  
  const images = [
    Product1,
    Product2,
    Product3,
    Product4
]


const {handleThumbClick, handleNextImage, handlePreviousImage, index} = useImage(images)






 const {state, dispatch} = useContext(CartContext)
  const {hidden,handleClick} = useContext(LightBoxContext)




 const addToCart = () => {
   
  // localStorage.setItem('cartItems',JSON.stringify({
  //   itemQuentity: state.basketCurrentQuentity,
  //   itemTotalPrice: state.basketCurrentTotalPrice 
  // }))
  dispatch({type:'addToCart'})
 }




 console.log('index section', index);

  return (
   <section>
    {hidden && (<LightBox />)}
    <div className="section-container event-columns">
      <div className='carousel'>
        <div className='main-image'>
          <img src={images[index]}  onClick={handleClick} alt="main image" />
          
        
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
        <div className='images'>
          {images.map((thumb, i) =>(
             <div key={`thumbnail-${i}`} onClick={() => handleThumbClick(i)} className={`thumbWrapper ${index === i ? 'current-img-border' : ''}`}>
              <img  className={`thumbnail-img ${index === i ? 'current-img-section-border' : '' }`} src={thumb} alt={`thumb-${i}`} />
             </div>
          ))}
         
        </div>
      </div>
      <div className="cart-info text-align-left">
        <h5 className="sub-title-product">
          sneaker company
        </h5>
        <h2 className="title-product">
          Fall Limited Edition Sneakers
        </h2>
        <p >
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-info-product">
          <div className='price-discount-wrapper'>
          <div className="price-discount-container">
          <h3 className="price-product">$125.00</h3>
          <span className='discount-price'>50%</span>
          </div>
          <h6 className="price-before-discount">
            $250.00
          </h6>
          </div>
          
          <div className="buttons-product-wrapper">
            <div className='cart-quentity-wrapper'>
              <button onClick={() => dispatch({type:'decrement'})} className="minus-quentity-btn">
               <img src={minusSVG} alt="minus" />
              </button>
              <span className='quentitiy-number'>{state.itemQuentity}</span>
               <button onClick={() => dispatch({type:'increment'})} className="plus-quentity-btn">
                  <img src={plusSVG} alt="plus" />
                 </button> 
            </div>
            <button onClick={addToCart} className="add-to-cart-btn">
            <svg className='cart-svg' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" /></svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Index