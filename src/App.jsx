import  React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import {CartProvider} from './utils/UseContext'
import {LightBoxProvider} from './utils/UseLightBoxContext'

import './index.css';

function App() {
  
  return (
     <>
    <LightBoxProvider>
    <CartProvider>
      <Header/>
      <Section/>
     </CartProvider>
    </LightBoxProvider>
   
     </>
  )
}

export default App

