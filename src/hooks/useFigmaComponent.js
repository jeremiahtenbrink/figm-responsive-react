import React, { useEffect, useState } from "react";
import Frame from "../figmaComponents/Frame.js";
import Unknown from "../figmaComponents/Unknown.js";

export const useFigmaComponents = ( elements = [] ) => {
  
  const [ Components, setComponents ] = useState( [] );
  const [ storedElements, setStoredElements ] = useState( elements );
  
  useEffect( () => {
    if( elements.length > 0 ){
      setComp( elements );
    }
  }, [ elements ] );
  
  const setComp = ( elements ) => {
    let array = [];
    if( Array.isArray( elements ) ){
      elements.forEach( element => {
        array.push( makeComponent( element ) );
      } );
    }else{
      array.push( makeComponent( elements ) );
    }
    
    setComponents( array );
  };
  
  const makeComponent = ( element ) => {
    let Comp = components[ element.type ];
    if( Comp === undefined ){
      Comp = components.Unknown;
    }
    return <Comp key={ element.id } figmaElement={ element }/>;
  };
  
  return [ Components, setComp ];
  
};

const components = {
  FRAME: Frame, Unknown,
};