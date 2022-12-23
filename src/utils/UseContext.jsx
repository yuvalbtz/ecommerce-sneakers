import React,{createContext, useReducer,useState} from 'react'
import itemImage from '../images/image-product-1-thumbnail.jpg'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const initialState = 
        {
            ItemTitle:'Fall Limited Edition Sneakers',
            cartImage: itemImage,
            itemPrice:125 ,
            itemQuentity:0,
            itemTotalPrice:0,
            basketCurrentQuentity:0,
            basketCurrentTotalPrice:0

        };  
      

    function reducer(state, action) {
        switch (action.type) {
            
        case 'increment':
            
            return {...state, 
            itemQuentity: state.itemQuentity + 1,
            itemTotalPrice:(state.itemQuentity + 1) * state.itemPrice,
            
        };
        case 'decrement':
        
        return state.itemQuentity > 0 ?  {
            ...state, 
            itemQuentity: state.itemQuentity - 1,
            itemTotalPrice:(state.itemQuentity - 1) * state.itemPrice } : state;
        
        case 'addToCart':

        return {...state,
            itemTotalPrice:0,
            itemQuentity:0,
            basketCurrentQuentity:state.basketCurrentQuentity +  state.itemQuentity,
            basketCurrentTotalPrice:(state.basketCurrentQuentity +  state.itemQuentity) * state.itemPrice
        }
        case 'deleteFromCart':
            
        return {
                ...state,
                basketCurrentQuentity:0,
                basketCurrentTotalPrice:0
            }
        
        
        default:
          
        return {...state};
      }

      
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
   
    return (
      <CartContext.Provider value={{state, dispatch}}>
        {children}
      </CartContext.Provider>
    );
  } 