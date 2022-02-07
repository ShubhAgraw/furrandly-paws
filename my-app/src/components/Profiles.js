import React, {useState} from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Match from './Match'
import Main from './Main'
import MainPageFull from './MainPageFull'

function Profiles(props){
    var match = props.match
    var wait = props.wait
    var nextProfile;
    console.log(props.nextProfile);



    function addToMatch(){
      console.log(props.nextProfile)

      axios.get('/match',    {
            params : {
              fname : props.username,
              profile : props.nextProfile[0].name
            }
          }).then(response =>{
            console.log(response.data);
            nextProfile = response.data;
            console.log("Here");
            var checked = 1;
            for(var i = 0 ; i < match.length ; i++)
            {
              if(match[i].name == props.nextProfile[0].name  )
              {
                checked = 0 ;
                break;
              }
            }
            if(checked == 1){
              match.push(props.nextProfile[0]);
            }
            if(match.length > 3){
              match.shift();
            }
            for(var i = 0 ; i < wait.length; i++){
              if(wait[i].name == props.nextProfile[0].name )
              {
                if(i == 0){
                  wait.shift();
                }else if(i == wait.length - 1)
                {
                  wait.pop();
                }
                else{
                    wait.splice(i, i);
                }
                break;
              }
            };
            const transferData = [props.username , props.age, props.description , props.avatar, match, wait,nextProfile ,props.notfiUsers];
            ReactDOM.render(
              <React.StrictMode>
                <Main value = {transferData} />
              </React.StrictMode>,

              document.getElementById('root'),
            )
          }

    )



    }
    function addToWait(){

      axios.get('/wait',    {
            params : {
              fname : props.username,
              profile : props.nextProfile[0].name
            }
          }).then(response =>{
            console.log(response.data);
            nextProfile = response.data;
            console.log("Here");
            var checked = 1;
            for(var i = 0 ; i < wait.length ; i++)
            {
              if(wait[i].name == props.nextProfile[0].name  )
              {
                checked = 0 ;
                break;
              }
            }
            if(checked == 1){
              wait.push(props.nextProfile[0]);
            }
            if(wait.length > 3){
              wait.shift();
            }
            for(var i = 0 ; i < match.length; i++){
              if(match[i].name == props.nextProfile[0].name )
              {
                if(i == 0){
                  match.shift();
                }else if(i == match.length - 1)
                {
                  match.pop();
                }
                else{
                    match.splice(i, i);
                }
                break;
              }
            };
            const transferData = [props.username , props.age, props.description , props.avatar, match, wait,nextProfile, props.notfiUsers];
            ReactDOM.render(
              <React.StrictMode>
                <Main value = {transferData} />
              </React.StrictMode>,

              document.getElementById('root'),
            )
          }

    )
    }
    function remove(){
      axios.get('/remove',    {
            params : {
              fname : props.username,
              profile : props.nextProfile[0].name
            }
          }).then(response =>{
            console.log(response.data);
            nextProfile = response.data;
            const transferData = [props.username , props.age, props.description , props.avatar, match, wait,nextProfile ,props.notfiUsers];
            ReactDOM.render(
              <React.StrictMode>
                <Main value = {transferData} />
              </React.StrictMode>,

              document.getElementById('root'),
            )
          }

    )
    }

    return (

        <div class="col col-mid">
          <div class="card">
            <img class="card-img-top" src= {props.nextProfile[0].avatar} style={{border:"3px solid black"}} />
            <div class="card-body">
              <p class="card-title">
                <i style={{fontSize: "30px"}}>{props.nextProfile[0].name}</i> ,
                <i style={{fontSize: "20px"}}> {props.nextProfile[0].age} </i>
              </p>
              <p class="card-text">
              {props.nextProfile[0].description}
              </p>
              <button class="btn btn-danger btn-block">See Profile</button>

              <div class="button-array">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-block"
                  style={{marginTop: "8px"}}
                  onClick= {addToMatch}
                >
                  <i class="fas fa-heart"></i>
                </button>
                <button type="button" class="btn btn-outline-danger btn-block" onClick = {addToWait}>
                  <i class="fas fa-clock"> </i>
                </button>
                <button type="button" class="btn btn-outline-danger btn-block" onClick = {remove}>
                  <i class="fas fa-minus"> </i>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Profiles
