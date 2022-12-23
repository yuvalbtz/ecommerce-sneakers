import React, {useContext, useState} from 'react'
import hamburgerIcon from '../../images/icon-menu.svg'
import closeIcon from '../../images/icon-close.svg'
import avatarImg from '../../images/image-avatar.png'
import Logo from '../../images/logo.svg'
import imageProduct1 from '../../images/image-product-1-thumbnail.jpg';
import trashIcon from '../../images/icon-delete.svg'

import { CartContext } from '../../utils/UseContext'
import './style.css'



function Index() {
  
 const [cartBasketIsOpen, setCartBasketIsOpen] = useState(false) 
 const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false) 
 const {state, dispatch} = useContext(CartContext)
  
 let cartStatus; 
if(localStorage.getItem('cartItems')){
  cartStatus = JSON.parse(localStorage.getItem('cartItems')) 
}

  return (
    <header>
     <div className="primary-header">
      <div className="header-container">
        <div className="nav-wrapper">
       <div className='col-1-nav'>
          <button onClick={() => setMobileMenuIsOpen((prev) => !prev)}  className={`mobile-nav-toggle ${!mobileMenuIsOpen ? 'mobile-nav-toggle-position' :'' } `} aria-controls="primary-heading">
             {mobileMenuIsOpen ? (<img src={closeIcon} alt="close" className="close-icon" />) : (<img src={hamburgerIcon} alt="menu" className="hamburger-icon" />)}   
            </button>
          <a href="#">
            <img src={Logo} alt="sneakers" />
            </a>
           
            <nav className={`primary-navigation ${mobileMenuIsOpen ? 'animate-primary-bg': ''}`}>
              <ul className={`nav-list`} role={"list"} id="primary-heading">
                <li>
                  <a href="#">Collections</a>
                  </li>
                <li>
                  <a href="#">Men</a>
                  </li>
                <li>
                  <a href="#">Women</a>
                  </li>
                <li>
                  <a href="#">About</a>
                  </li>
                <li>
                  <a href="#">Contact</a>
                  </li>
              </ul>
            </nav>
            </div>
             <div className='col-2-nav'>
             <button onClick={() => setCartBasketIsOpen(((prev) => !prev))} className="cart-button-header">
              <svg className={`cart-icon-nav ${cartBasketIsOpen ? 'cart-icon-open-color' : ''}`} width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" /></svg>
              { state.basketCurrentQuentity > 0 ? <span className="cart-badge">{state.basketCurrentQuentity}</span> : <></>}
            </button>
            <div className={`cart-dropdown-list-nav ${cartBasketIsOpen ? 'animate-cart-basket' : ''}`}>
                <h3 className="cart-dropdown-title">
                  Cart
                </h3>
                <hr className='dropdown-line'/>
                {state.basketCurrentQuentity > 0 ? (<div className='dropdown-footer-wrapper'>
                <div className="cart-dropdown-item-wrapper">
                    <img className='item-image-info' src={imageProduct1} alt="item" />
                    <div className='item-dropdown-info-wrapper'>
                      <div>
                      <p className="item-dropdown-title">
                        Fall Limited Edition Sneakers
                        </p>
                        <div className="item-col-3-info">
                          <div className="item-dropdown-price">
                            $125.00
                            </div>
                            <div className='item-dropdown-quentitiy'>
                               x {state.basketCurrentQuentity}
                            </div>
                            <div className="item-dropdown-total">
                              ${state.basketCurrentTotalPrice}.00
                            </div>
                        </div>
                      </div>
                        
                    </div> 
                    <button onClick={() => dispatch({type:'deleteFromCart'})} className='trash-dropdown-button'>
                    <img className='trash-dropdown-icon'  src={trashIcon} alt="trash-icon" />
                    </button>  
                </div>
                <button className="checkout-dropdown-button">
                      Checkout
                    </button>
                </div>) : (<p className="empty-cart-basket-dropdown">Your cart is empty.</p>)}
              </div>
            <button className="avatar-image-header" >
              <img src={avatarImg} alt="avatar" />
            </button>
             </div>
        </div>
        <hr />
      </div>
     </div>
    </header>
  )
}

export default Index