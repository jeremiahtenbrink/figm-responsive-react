import React, { useState, useEffect } from "react";
import { useBoundingBox } from "./useBoundingBox.js";
import { useSize, baseSize, createSizeValue } from "./useSize.js";
import { UNITS } from "../utils/constants.js";
import { useBackground } from "./useBackground.js";

/**
 *
 * @param {Size}size
 * @param {Size} parentSize
 * @param {Constraints}constraints
 * @param {} baseStyles
 * @return {[{}, addNewStyle]}
 */
export const useStyles = ( startingSize = baseSize,
  startingParentSize = baseSize, startingConstraints = {}, baseStyles = {},
  backgroundObject = {} ) => {
  const [ styles, setStyles ] = useState( baseStyles );
  const {
    size, constraints, parentSize, setConstraints, setParentSize, setNewParentSize, setSize,
  } = useSize( startingSize, startingParentSize, startingConstraints );
  const [ backgroundStyles, setBackgroundStyles ] = useBackground(
    backgroundObject );
  
  useEffect( () => {
    console.log( size, parentSize, constraints );
    
    const newStyle = { ...styles };
    debugger;
    if( size ){
      Object.keys( size ).forEach( key => {
        size[ key ] = checkSizeProperty( size[ key ] );
      } );
      newStyle[ "width" ] = size.width;
      newStyle[ "height" ] = size.height;
      if( !parentSize ){
        newStyle[ "marginLeft" ] = createNoneSizeProperty( "auto", UNITS.NONE );
        newStyle[ "marginRight" ] = createNoneSizeProperty( "auto",
          UNITS.NONE,
        );
        
      }
    }
    
    setStyles( newStyle );
  }, [ size, parentSize, constraints ] );
  
  /**
   *
   * @param {Size} newSize
   * @param {Size} newParentSize
   * @param {Constraints} newConstraints
   */
  const addAllProperties = ( newSize, newParentSize, newConstraints ) => {
    if( newParentSize ){
      setSize( newSize );
      setParentSize( newParentSize );
      setConstraints( newConstraints );
    }else{
      newSize.x = 0;
      newSize.y = 0;
      setSize( newSize );
      setParentSize( newParentSize );
      setConstraints( newConstraints );
    }
    
  };
  
  const addNewStyle = ( style ) => {
    setStyles( { ...styles, style } );
  };
  
  const addSize = ( size ) => {
  
  };
  
  const getStylesForCss = () => {
    
    const cssStyles = {};
    Object.keys( styles ).forEach( key => {
    
      
    } );
    Object.keys( backgroundStyles ).forEach( key => {
      if( styles[ key ].unit )
        } );
    
    return cssStyles;
  };
  
  return { styles, getStylesForCss, addNewStyle, addAllProperties };
};

const getCssString = ( style, key ) => {
  let cssStyles;
  if( style[ key ].unit === UNITS.NONE ){
    cssStyles[ key ] = style[ key ].value;
  }else{
    const numberValue = style[ key ].value;
    const unit = style[ key ].unit;
    cssStyles[ key ] = numberValue + unit;
  }
  return cssStyles;
};

const createNoneSizeProperty = ( value, unit ) => {
  return { value, unit };
};

const checkSizeProperty = ( property ) => {
  if( typeof property !== "object" ){
    let newUnit = UNITS.PX;
    if( typeof property === "string" ){
      if( property.includes( "%" ) ){
        newUnit = UNITS.PERCENT;
        property.replace( "%", "" );
      }else if( property.includes( "em" ) ){
        newUnit = UNITS.EM;
        property.replace( "em", "" );
      }else if( property.includes( "rem" ) ){
        newUnit = UNITS.REM;
        property.replace( "rem", "" );
      }else if( property.includes( "px" ) ){
        property.replace( "px, " );
      }
    }
    return createSizeValue( property, newUnit );
  }
  return property;
};

