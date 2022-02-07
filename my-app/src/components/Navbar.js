import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem';

function Navbar(props){
    var items = props.valuesForNavbar
    return (
        <div className="navbar-div container-fluid">
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="">Furrandly🐾</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i class="icon fa fa-heart fa-2x" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav ml-auto">
                    {items.map(item =>
                        <NavItem navItemName={item}/>
                    )}
                    </ul>
                </div>
            </nav>
        </div>)
}

export default Navbar