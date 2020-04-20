import React, { useEffect, useState } from "react";

export const useBackground = ( backgroundObject ) => {
  const [ backgroundObject, setBackgroundObject ] = useState( backgroundObject );
  const [ backgroundStyles, setStyle ] = useState( {} );
  
  useEffect( () => {
    if( backgroundObject.backgroundColor ){
      const { r, g, b, a } = backgroundObject.backgroundColor;
      setStyle( { "background": `rgba(${ r }, ${ g }, ${ b }, ${ a })` } );
    }
  }, backgroundObject );
  
};