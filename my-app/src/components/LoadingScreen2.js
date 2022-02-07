import React , {useState} from "react"

function LoadingScreen2(props) {
  console.log(props.value);
  return (
    <div className = "lDiv">
      <h1 className = "loading-brand">Furrandly🐾</h1>
      <h1 className = "loading-message">Creating your Account...</h1>
    </div>
  );
}

export default LoadingScreen2;
