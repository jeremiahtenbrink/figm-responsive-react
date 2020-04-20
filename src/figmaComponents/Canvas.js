import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFigmaComponents } from "../hooks/useFigmaComponent.js";

/**
 *   $name$
 *
 *  @component
 *
 */
const Canvas = ( props ) => {
  
  const [ children, setChildren ] = useFigmaComponents( [] );
  
  useEffect( () => {
    if( props.children ){
      setChildren( props.children );
    }
  }, [ props.children ] );
  
  return ( <CanvasContainer data-testid={ props.id }>
    { children }
  </CanvasContainer> );
};

const CanvasContainer = styled.div`
width: 100%;
height: 100%;
border: 1px solid red;
`;

export default Canvas;