import React from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends React.Component{
  render(){
    return <SecondComponent boy= 'smartt'/>;
  }
}

class SecondComponent extends React.Component{
  render(){

    return <p >{this.props.boy}</p>;
  }
}

// class Pizza extends React.Component{
//   render(){
//     // var propertiesOfPizza = JSON.stringify(this.props);
//     return <p>{this.props.taste}</p> ;
//   }
// }

ReactDOM.render(
 <FirstComponent />,
  document.getElementById('root')
);


