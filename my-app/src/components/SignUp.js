import React , {useState} from 'react'
import FormInputs from './FormInputs'
import axios from "axios";
import ReactDOM from 'react-dom';
import HomePage from './HomePage'
import App from './App'
import PhotoCarousel from './PhotoCarousel'
import Login from './Login';
import LoadingScreen2 from './LoadingScreen2'


function SignUp(){


const [message , setMessage] = useState("CREATE ACCOUNT");
//Backend

  function createUser(e){
    e.preventDefault();
    setValue("0");
    const userName = document.getElementById("signupusername").value;
    const password = document.getElementById("signuppassword").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    const age = document.getElementById("age").value;
    const description = document.getElementById("about").value;
    const gender = document.getElementById("gender").value;
    const species = document.getElementById("species").value;
    const phone = document.getElementById("phone").value;
    const avatar = document.getElementById("photo").value;
    if(userName == "" || password == "" || confirmPassword == "" || age == "" || description =="" )
    {
      setMessage("Info missing check again !!");
      setTimeout(function(){
        setMessage("CREATE ACCOUNT");
      },3000);

    }else{
        if(password != confirmPassword){
          setMessage("Passwords do not match !!");
          setTimeout(function(){
            setMessage("CREATE ACCOUNT");
           },2000);
        }else{
          axios.get('/signup',    {
                params : {
                  fname : userName,
                  pass : password,
                  age : age,
                  description : description,
                  gender : gender,
                  species : species,
                  phone : phone,
                  avatar : avatar
                }
              }).then(response =>{
                console.log(response.data)
                if(response.data == "User already exists")
                {
                  setMessage("User already exists");
                  setTimeout(function(){
                    setMessage("Create Account");
                   },2000);
                }
                else{

                  ReactDOM.render(
                    <React.StrictMode>
                      <LoadingScreen2 />
                    </React.StrictMode>,

                    document.getElementById('root'),
                    document.getElementById("a").classList.remove("hello"),
                  );
                setTimeout(function(){document.getElementById("a").classList.add("hello")
                ReactDOM.render(
                  <React.StrictMode>
                    <Login />
                  </React.StrictMode>,

                  document.getElementById('root'),
                );},2000);
              }
          }

        );

        }
    }

  }



  const f = {
    name : go
  };
  const [classname , setClassName] = useState("hello");
  const[value , setValue] = useState("0");
  const[func, setFunc] = useState(f);
  function show(e)
  {
    e.preventDefault();
    document.getElementById("testimonial").classList.remove("hello")
    document.getElementById("mainFormDiv").disabled = true;
    document.getElementById("mainFormDiv").classList.add("light");
    setClassName("hell")
    document.getElementById("lbtn").onclick = function(e){
      e.preventDefault();
    };
    setFunc({name : "stop"});
    setValue("1");
  }
  function go(e){
    e.preventDefault();
    if(classname == "hell")
    {}
    else{
  ReactDOM.render(
      <App />,
      document.getElementById('root')
    );
  }
  }

  function backToHomepage(e){
    e.preventDefault()
    ReactDOM.render(
      <React.StrictMode>
        <HomePage />
      </React.StrictMode>,

      document.getElementById('root'),
    );
  }
  function switchToLogin(e){
    e.preventDefault()
    ReactDOM.render(
      <React.StrictMode>
        <Login />
      </React.StrictMode>,

      document.getElementById('root'),
    );
  }

    return (
      <div >
        <div className="signupdiv" id = "mainFormDiv">
            <form className="signupform">
            <div className="signupinnerdiv form-group">
            <i className="fa fa-paw fa-3x" aria-hidden="true" onClick = {backToHomepage}></i><br/>
            <h4 className="form-title">CREATE ACCOUNT</h4>
                <FormInputs label="Username*" id="signupusername" type="text"/>
                <FormInputs label="Password*" id="signuppassword" type="password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"/>
                <FormInputs label="Confirm Password*" id="confirmpassword" type="password" />
                <FormInputs label="Age*" id="age" type="number"/>
                <div className="form-group">
                    <label for="gender">Gender*</label><br/>
                    <select name="gender" id="gender" className="form-control" required>
                        <option value="Male" selected>Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="species">Species*</label><br/>
                    <select name="species" id="species" className="form-control" required>
                        <option value="Dog" selected>Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Hamster">Hamster</option>
                    </select>
                </div>
                <div className="forminputs form-group">
                    <label for="phoneNumber">Phone Number*</label><br/>
                    <input type="number" id = "phone" required className="form-control" placeholder="8427986244"></input>
                </div>
                <label for="about">About you*</label><br/>
                <textarea id="about" name="about" rows="3" cols="30" className="form-control"></textarea><br/>
                <input id = "photo" type = "text" className = "hello" />
                <button className="btn btn-outline-light btn-lg btn-avatar btn-block" onClick = {show}>Choose Avatar*</button><br/>
                <button className="btn btn-lg btn-block a-footer submit-form" onClick = {createUser}>{message}</button>
                    <h5 className="or">or</h5>
                <button id = "lbtn" className="btn btn-outline-light btn-lg btn-avatar btn-block" onClick = {switchToLogin}>LOGIN</button><br/>
                </div>
            </form>
        </div>
        <PhotoCarousel value = {value} style = {classname} />
        </div>
    )
}

export default SignUp;
