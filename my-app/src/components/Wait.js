import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import axios from "axios";



function Wait(props){
  var wait = props.wait
  var match = props.match
  const name = props.username
  var pro = [{
    name : props.username,
    age : props.age,
    description : props.description,
    avatar: props.avatar
  }]
  function addToMatch(){
    axios.get('/switchtomatch',    {
          params : {
            fname : props.username,
            profile : props.u
          }
        }).then(response =>{
    console.log("Here");
    if(props.id == 0){
      match.push(wait[0]);
      wait.shift();
    }
    else{
      var spliced = wait.splice(props.id, props.id);
      console.log(spliced);
      match.push(spliced[0]);
    }
    console.log(wait);
    while(match.length > 3){
      match.shift();
    }
    const transferData = [name , props.age, props.description , props.avatar, match, wait,props.nextProfile, props.notfi];
    ReactDOM.render(
      <React.StrictMode>
        <Main value = {transferData} />
      </React.StrictMode>,

      document.getElementById('root'),
    )
  }
);
};
function removeFromWait(){
  var match = props.match;
  var wait = props.wait;
  axios.get('/removeFromWait',    {
        params : {
          fname : props.username,
          profile : props.u
        }
      }).then(response =>{
  if(props.id == 0){
    wait.shift();
  }
  else{
    wait.splice(props.id, props.id);
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
                  onClick = {addToMatch}
                >
                  <i class={`fas fa-heart`}></i>
                </button>
                <button type="button" class="btn btn-outline-danger"
                  onClick = {removeFromWait}
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
export default Wait
