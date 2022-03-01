import React from 'react';
import ReactDOM from 'react-dom';

class Pizza extends React.Component{
  constructor(){
    super();
    this.state = {
      myPizzaCount : 'i have 2 pizzas'
    }
  }

  clickHandler(){
    this.setState(
      {
        myPizzaCount : 'i have 12 pizzas'
      }
    )
  }

  render(){
    return( <>
    <button onClick={() => this.clickHandler()}>give me 10 pizzas</button>
    <heading>{this.state.myPizzaCount}</heading>
    </>
    );
  }
}

ReactDOM.render(
  <Pizza />,
  document.getElementById('root')
)