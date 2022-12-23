import { createContext, useCallback, useRef, useState } from "react";

export const LightBoxContext = createContext()


export const LightBoxProvider = ({children}) => {

    const [hidden , setHidden] = useState(false)

 const handleClick = useCallback(() => setHidden((prev) => !prev),[])

 console.log('render!!!');
    
  
  return (
       <LightBoxContext.Provider value={{handleClick, hidden}}> 
        {children}
       </LightBoxContext.Provider>
    );
}
