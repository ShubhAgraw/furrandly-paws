import React from 'react';
import MainPageNavbar from "./MainPageFull"

function Main(props){
  console.log(props.value[6]);
    return (
        <MainPageNavbar username={props.value[0]} avatar={props.value[3]} description={props.value[2]} age={props.value[1]} match = {props.value[4]} wait = {props.value[5]} nextProfile = {props.value[6]} noti = {props.value[7]}/>
    )

}
export default Main;
