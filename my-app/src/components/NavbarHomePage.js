import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import NavbarExtension from './NavbarExtension';

var valuesForNav = ["LOG IN","SIGN UP"];

function NavbarHomePage(){
    return(
        <div className="navbarhomepage">
            <Navbar valuesForNavbar={valuesForNav}/>
            <NavbarExtension />
        </div>
    )
}

export default NavbarHomePage