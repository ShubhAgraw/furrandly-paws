import React, { useState } from 'react';
import axios from "axios";
import SearchResults from './SearchResults';
import NoUserFound from './NoUserFound';
import Mess from './Mess';
import MainPageLeft from './MainPageLeft';
import MainPageRight from './MainPageRight';
import Profiles from './Profiles'
import Main from './Main'
import Login from './Login'
import ReactDOM from 'react-dom';

var notfi = [
    {
        username: "superHammy",
        notification: "Liked your food",
        avatar: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        username: "shiroTheBuddy",
        notification: "Liked your glitch",
        avatar: "https://images.pexels.com/photos/1445709/pexels-photo-1445709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        username: "winnieTheCattleDog",
        notification: "Liked your cows",
        avatar: "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        username: "lunaThePantera",
        notification: "Wanted to eat you",
        avatar: "https://images.pexels.com/photos/1445709/pexels-photo-1445709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]

function MainPageFull(props){
  var data = props.nextProfile[0];
   const propsArray = [];
    const [searchString, changeInString] = useState("")
    const [nouserFound, usr] = useState()
    const[message, setMessage] = useState("Request");
    const [oData, setOData] = useState(propsArray)
    const [classO, changeO] = useState("light")
    const [isBoxVisible, changeV] = useState(false)

    function login(e){
      e.preventDefault();
      ReactDOM.render(
        <React.StrictMode>
          <Login />
        </React.StrictMode>,

        document.getElementById('root'),
      );


    }
    function handleClick(e){
              e.preventDefault();
          document.getElementById("searchCard").classList.add("hidden")
          document.getElementById("nouser").classList.add("hidden")
        changeV(true)
        //get data from database
        axios.get('/search',    {
              params : {
                fname : searchString
              }
            }).then(response =>{
              if(response.data === "User not found")
              {
                usr(true)
                document.getElementById("nouser").classList.remove("hidden")

            }
              else{
              usr(false)
              document.getElementById("searchCard").classList.remove("hidden")
              const data = response.data[0];
                      const transferData = [data.name , data.avatar, data.description , data.age, data.gender];
              if(props.username == data.name)
              {
                setMessage("Cutie");
              }
              else{
                setMessage("Request");
              }


                      setOData(transferData);

            }

        }


      );
      document.getElementById("m").classList.remove("dark");
      document.getElementById("extra").classList.remove("dark");
      document.getElementById("m").classList.add("light");
      document.getElementById("extra").classList.add("light");

    }
    function changeOpac(){
        changeV(false)
        changeO("dark")
        document.getElementById("extra").classList.add("dark")
        document.getElementById("m").classList.add("dark")
        document.getElementById("nouser").classList.add("hidden")
        changeInString("")
    }
    function valueChange(e){
        changeInString(e.target.value)
    }
    function logOut(){
      document.getElementById("Uname").innerHTML = "SignOut";
    }
    function showName(){
      document.getElementById("Uname").innerHTML = props.username;
    }

    return (
        <div>
            <div className="navbar-div mainpagediv" id="m">
                <nav className="navbar navbar-expand-xl">
                <div className="container-fluid">

                <div class="row">

                <div class="col-xl-3 col-12">

                    <a className="navbar-brand" href="">Furrandly🐾</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" style={{position:"absolute", right:"10px"}}>
                        <span className="navbar-toggler-icon"><i class="icon fa fa-heart fa-2x" style={{margin:"0"}} aria-hidden="true"></i></span>
                    </button>
                    <div className="col-xl-9">
                    <div className="collapse navbar-collapse mainpageitemsdiv" id="navbarTogglerDemo01">
                        <ul className="snav navbar-nav ml-auto">
                        <div className="row">
                        <div class="col-xl-9 col-12">
                            <li className="nav-item">
                                <form className="d-flex search-div" id="search-div">
                                    <input onChange={valueChange} className="form-control me-2 main-search" type="search" placeholder="Search" aria-label="Search" size="130" value={searchString}/>
                                    <button onClick={handleClick} className="btn btn-outline-success login-button search-button" type="submit"><i class="icon fa fa-search" style={{margin:"0"}} aria-hidden="true"></i></button>
                                </form>
                            </li>
                            </div>
                            <div class="col-xl-1 col-12">
                            <li className="nav-item">
                                <a className="nav-link" href=""><button className="btn" style={{margin:"0", backgroundColor:"transparent", paddingRight:"0"}}><i class="icon fa fa-comments fa-2x" style={{margin:"0", color:"white"}} aria-hidden="true"></i></button></a>
                            </li>
                            </div>
                            <div class="col-xl-2 col-12">
                            <li className="nav-item user-profile">
                                <a className="nav-link" href=""><button className="btn user-profile-button" style={{margin:"0", backgroundColor:"transparent"}}><img src={props.avatar} style={{width:"40px", height:"40px", borderRadius:"50%"}}/><span id = "Uname" className="user-profile-text"onClick = {login} onMouseLeave = {showName} onMouseOver = {logOut}>{props.username}</span></button></a>
                            </li>
                            </div>
                            </div>
                        </ul>
                        </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id = "md" class = "message-div hidden">
            <Mess/>
            </div>
            <div id="searchBlock" className="searchresult-div">
                <div style={{visibility:nouserFound?null:"hidden"}} id="nouser">
                    <NoUserFound alert="NO USER FOUND!" msg="Please use valid username or  check spelling."/>
                </div>
                <div id = "searchCard" style={{visibility:nouserFound?"hidden":null}}>
                <SearchResults cusername={props.username} cdescription={props.description} cage={props.age} cavatar={props.avatar} match = {props.match} wait = {props.wait} username={oData[0]} avatar={oData[1]} description={oData[2]} age={oData[3]} gender = {oData[4]} message = {message} trueornot={isBoxVisible} nextProfile = {props.nextProfile} notfiUsers={props.noti}/>
                </div>

                </div>
                <div id="extra" onClick={isBoxVisible?changeOpac:null}>
                    <div class="container-fluid">
                        <div class="row main-container">



                            {/* Ma'am page starts */}

                            {/* notification */}
                            <MainPageLeft notfiUsers={props.noti}/>

                            {/* match and waiting */}
                            <MainPageRight match={props.match} wait={props.wait}
                             username={props.username}
                             age = {props.age}
                             description = {props.description}
                             avatar = {props.avatar}
                             notfiUsers={props.noti}
                             nextProfile = {props.nextProfile}
                             />


                             {/* profiles */}
                            <Profiles match = {props.match} wait = {props.wait} username={props.username} description={props.description} age={props.age} avatar={props.avatar} nextProfile = {props.nextProfile} notfiUsers={props.noti}/>
                        </div>
                    </div>
                </div>
              </div>
              )

              }

              export default MainPageFull;
