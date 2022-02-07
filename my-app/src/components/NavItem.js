import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.js';
import SignUp from "./SignUp";


function NavItem(props){
    var colorChange = props.navItemName
    var style={}
    if(colorChange === "SIGN UP"){
        style = {
            backgroundColor : 'transparent',
            border : '1px solid white',
            color: 'white'
        }
    }

    function touched(e){
        if(colorChange === "SIGN UP"){
            e.target.style.backgroundColor = '#ff4c68'
            e.target.style.border = "transparent"
        }
    }

    function left(e){
        if(colorChange === "SIGN UP"){
            e.target.style.backgroundColor = 'transparent'
            e.target.style.border = "1px solid white"
        }
    }
    function clicked(){
      if(colorChange === "LOG IN"){
        ReactDOM.render(
          <Login />,
          document.getElementById('root')
        );
      }
      else{
        ReactDOM.render(
          <SignUp />,
          document.getElementById('root')
        );
      }
    }

    return (
        <li className="nav-item">
            <a className="nav-link" href="#"><button className="btn login-button" onClick={clicked} onMouseEnter={touched} onMouseLeave={left} style={style}>{props.navItemName}</button></a>
        </li>
    )
}

export default NavItem
