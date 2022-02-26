import React from 'react';

let links = ['home', 'about', 'pizza', 'blog'];

let clickable = links.map(function(e){
    return <a href={"/"+e}>{e}</a>;
})

export class NavBar extends React.Component{
    render(){
        return clickable;
    }
}