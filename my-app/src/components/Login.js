import React from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import Component from './Component';
import LoadingScreen from './LoadingScreen';
import HomePage from './HomePage';
import FormInputs from './FormInputs'
import Main from "./Main"
import SignUp from "./SignUp";

var match = [
    {
        username: "juiceeCat",
        avatar: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        username: "miaMacchiato",
        avatar: "https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]

var wait = [
    {
        username: "Mango",
        avatar: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        username: "rexieCat",
        avatar: "https://images.pexels.com/photos/3885948/pexels-photo-3885948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]

function clickHandler(e){
  e.preventDefault();
  const userName = document.getElementById("loginusername").value;
  const password = document.getElementById("loginpassword").value;
  axios.get('/login',    {
        params : {
          fname : userName,
          pass : password
        }
      }).then(response =>{
        console.log(response.data);
        if(response.data == "Password incorrect"){
            document.getElementById("log").innerHTML = response.data;
            setTimeout(function(){
              document.getElementById("log").innerHTML = "Login";
            },2000);
        }
        else if(response.data == "User not found"){
          document.getElementById("log").innerHTML = response.data;
          setTimeout(function(){
            document.getElementById("log").innerHTML = "Login";
          },2000);
        }
        else{
        console.log(response.data[1]);
        const data = response.data[0];
        while(data[0].match.length > 3){
          data[0].match.pop();
        }
        while(data[0].wait.length > 3){
          data[0].wait.pop();
        }
        const transferData = [data[0].name , data[0].age, data[0].description , data[0].avatar, data[0].match, data[0].wait, response.data[1], response.data[2]];
        ReactDOM.render(
          <React.StrictMode>
            <LoadingScreen />
          </React.StrictMode>,

          document.getElementById('root'),
          document.getElementById("a").classList.remove("hello"),
        );
      setTimeout(function(){document.getElementById("a").classList.add("hello")
      ReactDOM.render(
        <React.StrictMode>
          <Main value = {transferData} />
        </React.StrictMode>,

        document.getElementById('root'),
      );},4000);

  }
}

);

};
function backToHomepage(){
  ReactDOM.render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>,

    document.getElementById('root'),
  );
}
function switchToSignUp(e){
  e.preventDefault();
  ReactDOM.render(
    <React.StrictMode>
      <SignUp />
    </React.StrictMode>,

    document.getElementById('root'),
  );
}
function Login(){
    return (
        <div className="logindiv signupdiv">
            <form className="signupform">
            <div className="signupinnerdiv form-group">
            <i className="fa fa-paw fa-3x" aria-hidden="true" onClick = {backToHomepage}></i><br/>
            <h4 className="form-title">LOGIN</h4>
                <FormInputs label="Username" id="loginusername" type="text"/>
                <FormInputs label="Password" id="loginpassword" type="password"/>
                <button id = "log" className="btn btn-lg btn-block a-footer submit-form" onClick = {clickHandler}>LOGIN</button>
                    <h5 className="or">or</h5>
                    <button className="btn btn-outline-light btn-lg btn-avatar btn-block" onClick = {switchToSignUp}>CREATE ACCOUNT</button><br/>
                </div>
            </form>
        </div>
    )
}

export default Login;
