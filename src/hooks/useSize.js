import React, { useState, useEffect } from "react";
import { useBoundingBox } from "./useBoundingBox.js";
import { UNITS } from "../utils/constants.js";
import { useConstraints } from "./useConstraints.js";

/**
 * @typedef {function} UseSize
 * @param{Size} startingSize
 * @param {Constraints} startingConstraints
 * @param {Size} startingSize
 */
export const useSize = ( startingSize = baseSize,
  startingParentsSize = baseSize, startingConstraints ) => {
  
  const [ size, setSize ] = useBoundingBox( startingSize );
  const [ parentSize, setParentSize ] = useBoundingBox( startingParentsSize );
  const [ constraints, setConstraints ] = useConstraints( startingConstraints );
  
  const setNewParentSize = ( newParentSize ) => {
  
  };
  
  return {
    size,
    setSize,
    parentSize,
    setParentSize,
    setNewParentSize,
    constraints,
    setConstraints,
  };
};

/**
 * @typedef {object} Size
 * @property {number} height;
 * @property {number} width;
 * @property {number} x;
 * @property {number} y;
 *
 */

/**
 * @typedef CSSMeasurableUnit
 * @param {number}value
 * @param {UNITS}unit
 * @return {{number: number, unit: UNITS}}
 */
export const createSizeValue = ( value, unit ) => {
  
  return { value, unit };
};

/**
 * @typedef {Size} BaseSize
 */
export const baseSize = {
  height: createSizeValue( 100, UNITS.PERCENT ),
  width: createSizeValue( 100, UNITS.PERCENT ),
  y: createSizeValue( 0, UNITS.PX ),
  x: createSizeValue( 0, UNITS.PX ),
};