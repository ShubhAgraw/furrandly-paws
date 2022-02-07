import React , {useState} from 'react'
import FormInputs from './FormInputs'
import axios from "axios";
import ReactDOM from 'react-dom';
import HomePage from './HomePage'
import App from './App'
import PhotoCarousel from './PhotoCarousel'



function hide(){
  document.getElementById("mf").reset();
  document.getElementById("mf").classList.add("hidden");
}

function Mess(){

    return (
      <div >
            <form id = "mf" className="signupform hidden">
            <div className="signupinnerdiv2 form-group">
                <div className="form-group2"><i className="fa fa-times fa" aria-hidden="true" onClick = {hide}></i></div>
                <div id = "cont">
                <p id = "contact">Contact number : </p>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Mess;
