import React from 'react';
import {Recipe} from './recipe.js';
import {NavBar} from './navBar.js';

export class MyPizza extends React.Component{
    render(){
      return (<>
            <NavBar />
            <h2>Pizza</h2>

             <p>this is good pizza</p>
            <Recipe />
          </>)
      ;
    }
  } 

