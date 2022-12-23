import {useCallback, useEffect, useState} from "react"

export const useImage = (images = []) => { 
 
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [index, setCurrentIndex] = useState(0)


    const handleNextImage = (e) => {
        
        if (index === (images.length - 1)){
            setCurrentIndex((prev) => prev = -1)
        }
          setCurrentIndex((prev) => prev + 1)
          setCurrentImage(images[index])
    }
   
    const handlePreviousImage = (e) => {
       
        if (index === 0){
         setCurrentIndex(images.length)
        }
        setCurrentIndex((prev) => prev - 1)
         setCurrentImage(images[index])
   }
   
   const handleThumbClick = (i) =>{
     setCurrentIndex(i)
     setCurrentImage(images[index])
   
    }

    return {
        handleNextImage,
        handlePreviousImage,
        handleThumbClick,
        currentImage,
        index
       
    }
}