import React, { useState } from "react";

/**
 * @typedef {function} useConstraints
 * @param {Constraints} startingConstraints
 * @return {[Constraints, (value: (((prevState: Constraints) => Constraints) | Constraints)) => void]}
 */
export const useConstraints = ( startingConstraints ) => {
  const [ constraints, setConstraints ] = useState( startingConstraints );
  
  return [ constraints, setConstraints ];
};