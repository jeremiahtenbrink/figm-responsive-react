import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Canvas from "./figmaComponents/Canvas.js";

function App(){
  
  const [ document, setDocument ] = useState( {} );
  const [ documentChildren, setDocumentChildren ] = useState( [] );
  
  const getNew = () => {
    axios.get( "https://api.figma.com/v1/files/DqBnUyifKTL57nb9WtBFbO", {
      headers: {
        "X-Figma-Token": "41950-3ec125a1-3baa-4612-96d3-e208ac0f062b",
      },
    } ).then( res => {
      
      setDocument( res.data.document );
    } );
  };
  
  useEffect( () => {
    
    let document = JSON.parse( localStorage.getItem( "document" ) );
    if( !document || !document.children ){
      getNew();
    }else{
      setDocument( document );
    }
    
  }, [] );
  
  useEffect( () => {
    if( !document ){
      return;
    }
    localStorage.setItem( "document", JSON.stringify( document ) );
    const children = [];
    if( document.children && document.children.length > 0 ){
      document.children.forEach( child => {
        children.push( <Canvas key={ child.id } { ...child } /> );
      } );
      setDocumentChildren( children );
    }
    
  }, [ document ] );
  
  return ( <div className="App">
    <header className="App-header">
      <AppHeader>
        <h1>Figma Responsive React</h1>
        <Button onClick={ getNew }>Get Updated</Button>
      </AppHeader>
      { documentChildren }
    </header>
  </div> );
}

const AppHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

const Button = styled.button`
height: 40px;
margin-left: 50px;
`;

export default App;
