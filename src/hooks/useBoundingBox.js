import React, { useState } from "react";

/**
 *
 * @param {BoundingBox} bb
 * @return {[{}, (value: (((prevState: {}) => {}) | {})) => void]}
 */
export const useBoundingBox = ( bb = {} ) => {
  const [ boundingBox, setBoundingBox ] = useState( bb );
  
  return [ boundingBox, setBoundingBox ];
};