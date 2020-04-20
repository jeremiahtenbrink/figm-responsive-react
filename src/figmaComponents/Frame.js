import React, { useEffect, useState } from "react";
import { useStyles } from "../hooks/useStyles.js";
import styled from "styled-components";
import { useFigmaComponents } from "../hooks/useFigmaComponent.js";
import { CONSTRAINTS } from "../utils/constants.js";

/**
 *   Frame
 *
 *  @component
 *  @param {DefaultFrameMixin} figmaElement
 */
const Frame = ( { figmaElement, parentSize = false } ) => {
  
  const [ components, setComp ] = useFigmaComponents( figmaElement.children );
  const { getStylesForCss, addNewStyle, addAllProperties } = useStyles(
    figmaElement.absoluteBoundingBox,
    parentSize,
    figmaElement.constraints,
    {
      fills: figmaElement.fills,
      background: figmaElement.background,
      backgroundColor: figmaElement.backgroundColor,
    },
  );
  
  useEffect( () => {
    debugger;
    console.log( figmaElement );
  }, [] );
  
  return ( <FrameNode getStyles={ getStylesForCss }
                      data-testid={ figmaElement.name + "-" + figmaElement.id }>
    <h2>{ figmaElement.layoutMode }</h2>
    { components }
  </FrameNode> );
};

const FrameNode = styled.div`
${ ( { getStyles } ) => {
  
  if( getStyles && typeof getStyles === "function" ){
    const styles = getStyles();
    return styles;
  }
  return "";
} };
h2 {
position: absolute;
top:0;
left:50%;
transform: translate(-50%, -50px);
}
`;

export default Frame;