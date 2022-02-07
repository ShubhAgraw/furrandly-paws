import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import Match from './Match'
import Wait from './Wait'

function MainPageRight(props){
    var match = props.match;
    var wait = props.wait;
    
    // console.log(match.length);
    // function renderMatches(){
    //   console.log("match.length");

    // }
    return (
        <div class="col col-right">
        <br />
        <h2 class="bg-danger">Match</h2>
          {match.length > 0 &&    match.map((item, index) =>
                  <Match u={item.name} av={item.avatar}
                  id = {index}
                   username={props.username}
                   age = {props.age}
                   description = {props.description}
                   avatar = {props.avatar}
                   match = {props.match}
                   wait = {props.wait}
                   notfi = {props.notfiUsers}
                   nextProfile = {props.nextProfile}
                   />

                 )}
          <br />
          <h2 class="bg-danger">Waiting</h2>
          {wait.length > 0 && wait.map((item, index) =>
            <Wait u={item.name} av={item.avatar}
            id = {index}
             username={props.username}
             age = {props.age}
             description = {props.description}
             avatar = {props.avatar}
             match = {props.match}
             wait = {props.wait}
             notfi = {props.notfiUsers}
             nextProfile = {props.nextProfile}
             />
             )}
        </div>
    )

}
export default MainPageRight;
