import React , { useState} from 'react'
import CardItem from './CardItem'
import ReactDOM from 'react-dom';
import Mess from './Mess';
import axios from 'axios'
import Main from './Main'

function SearchResults(props){
    var st = ""
    if(props.trueornot){
        st = "show dark"
    } else {
        st = "hidden"
    }

    function Request(e){
      var match = props.match
      var wait = props.wait
      var nextProfile;
      if(document.getElementById("requestButton").innerHTML == "Cutie")
      {
        e.preventDefault();
      }else{
        e.preventDefault()

              axios.get('/match',    {
                    params : {
                      fname : props.cusername,
                      profile : props.username
                    }
                  }).then(response =>{
                    console.log(response.data);
                    nextProfile = response.data;
                    console.log("Here");
                    var checked = 1;
                    for(var i = 0 ; i < match.length ; i++)
                    {
                      if(match[i].name == props.username  )
                      {
                        checked = 0 ;
                        break;
                      }
                    }
                    if(checked == 1){
                      match.push({
                        name : props.username,
                        age : props.age,
                        description : props.description,
                        avatar : props.avatar
                      });
                    }
                    if(match.length > 3){
                      match.shift();
                    }
                    for(var i = 0 ; i < wait.length; i++){
                      if(wait[i].name == props.username)
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
                    const transferData = [props.cusername , props.cage, props.cdescription , props.cavatar, match, wait,nextProfile ,props.notfiUsers];
                    ReactDOM.render(
                      <React.StrictMode>
                        <Main value = {transferData} />
                      </React.StrictMode>,

                      document.getElementById('root'),
                    )
                  }

            )
}


    }
    function message(){
      axios.get('/contactDetails',    {
            params : {
              fname : props.cusername,
              profile : props.username
            }
          }).then(response =>{

            document.getElementById("contact").innerHTML = response.data;
            document.getElementById("md").classList.remove("hidden");
            document.getElementById("mf").classList.remove("hidden");
          }
    )
    }
    return(
        <div className={st} style={{fontWeight:"bold"}}>
            <div className="card bg-dark text-white" style={{width: "550px", height: "650px", zIndex:"100"}}>
                <img src={props.avatar} class="card-img card-search-img" style={{width: "550px", height: "650px"}}alt="..." />
                <div className="card-img-overlay">
                    <div className="card-search-text">
                        <h5 className="card-title">{props.username}</h5>
                        <p className="card-text">{props.age}</p>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.gender}</p>
                    </div>
                    <div className="card-search-buttons">
                        <a href="#" id = "requestButton" className = "btn white-pink-button" onClick={Request}>{props.message}</a>
                        <a href="#" class="btn pink-white-button" onClick={message}>Contact</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchResults
