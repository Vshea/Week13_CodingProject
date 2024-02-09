import React from 'react';
import '../index.css';


export default class Navigation extends React.Component {
    render() {
        return (
            <nav id="topnav">
            <a id="logo" className="nav-link" href="#">MY NAME</a>
            <a className="nav-link" href="#">Link 1</a>
            <a className="nav-link" href="#">Link 2</a>
            <a className="nav-link" href="#">Link 3</a>
            <a className="nav-link" href="#">Link 4</a>
            <a className="nav-link" href="#">Link 5</a>
   
            <a id="about" class="nav-link" href="#">About Me</a>
         </nav>
        )
       
    }
}