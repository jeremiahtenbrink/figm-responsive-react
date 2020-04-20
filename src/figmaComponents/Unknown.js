import React, { useEffect } from "react";
import styled from "styled-components";
import { useFigmaComponents } from "../hooks/useFigmaComponent.js";

/**
 *   Unknown
 *
 *  @component
 *
 */
const Unknown = ( { figmaElement } ) => {
  
  const [ components, setComp ] = useFigmaComponents();
  
  useEffect( () => {
    if( figmaElement.children ){
      setComp( figmaElement.children );
    }
    
  }, [ figmaElement ] );
  
  useEffect( () => {
  }, [] );
  
  return ( <Container data-testid={ figmaElement.id }>
    <h1>{ figmaElement.name ? figmaElement.name : "Unkown" }</h1>
    { components }
  </Container> );
};

const Container = styled.div`
border: 1px solid green;
`;

Unknown.propTypes = {};

export default Unknown;