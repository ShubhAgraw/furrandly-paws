import React, { useState } from 'react'
// import WaitMatch from './WaitMatch'
import axios from "axios";
import ReactDOM from 'react-dom'
import Main from './Main'

function Match(props){
    var wait = props.wait
    var match = props.match
  const name = props.username;
        const pro = [{
          name : props.username,
          age : props.age,
          description : props.description,
          avatar: props.avatar
        }]
function addToWait(){
  var match = props.match;
  var wait = props.wait;
  axios.get('/switchtowait',    {
        params : {
          fname : props.username,
          profile : props.u
        }
      }).then(response =>{
  if(props.id == 0){
    wait.push(match[0]);
    match.shift();
  }
  else{
    var spliced = match.splice(props.id, props.id);
    console.log(spliced);
    wait.push(spliced[0]);
  }
  if(wait.length > 3){
    wait.shift();
  }
  console.log(wait);
  const transferData = [name , props.age, props.description , props.avatar, match, wait,props.nextProfile,props.notfi];
  ReactDOM.render(
    <React.StrictMode>
      <Main value = {transferData} />
    </React.StrictMode>,

    document.getElementById('root'),
  )
}
);
};
function removeFromMatch(){
  var match = props.match;
  var wait = props.wait;
  axios.get('/removeFromMatch',    {
        params : {
          fname : props.username,
          profile : props.u
        }
      }).then(response =>{
  if(props.id == 0){
    match.shift();
  }
  else{
    match.splice(props.id, props.id);
  }
  const transferData = [name , props.age, props.description , props.avatar, match, wait,props.nextProfile,props.notfi];
  ReactDOM.render(
    <React.StrictMode>
      <Main value = {transferData} />
    </React.StrictMode>,

    document.getElementById('root'),
  )
}
);
};


    return (

        <div class="media border p-3">
            <div class="media-body">
              <h6>{props.u}</h6>
              <div class="right-button-array">
                <button type="button" class="btn btn-outline-danger"
                onClick={addToWait}
                >
                  <i class={`fas fa-clock`}></i>
                </button>
                <button type="button" class="btn btn-outline-danger"
                onClick={removeFromMatch}
                >
                  <i class={`fas fa-minus`}></i>
                </button>
              </div>
            </div>
            <img
              src={props.av}
              alt=""
              class="rounded-circle"
              id="side-img"
              style={{marginLeft:"0.5rem"}}
            />
          </div>
    )
}
export default Match
