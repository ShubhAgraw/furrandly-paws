import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CarouselItem from './CarouselItem';
import Login from './Login'
import ActiveCarouselItem from './ActiveCarouselItem';
import shiro from '../components/images/shiro.png'
import panko from '../components/images/panko.png'
import panko2 from '../components/images/panko2.png'
import panko3 from '../components/images/panko3.png'

var clicked = 0;
function PhotoCarousel(props){
  const [classname2 , setclassname2] = useState(props.style);
  if(classname2 != props.style && clicked == 0 && props.value == "1")
  {
    setclassname2("hell")

  }
  clicked = 0;
  function hello(e){
    document.getElementById("mainFormDiv").classList.remove("light");
    document.getElementById("mainFormDiv").disabled = false;
    document.getElementById("photo").value = e.target.src;
    document.getElementById("lbtn").onclick = function(){
      ReactDOM.render(
          <Login />,
          document.getElementById('root')
        );
    };
    document.getElementById("testimonial").classList.add("hello")
  }
    return(
        <section id="testimonial" className = {classname2}>


<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="c2 carousel-inner">
    <div class="container2 carousel-item active">
      <div class="row">
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/qDBbF5y/cat2.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/4W3NY0x/s2.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/kJTmmg9/s1.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/mBh1Tvf/s4.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/230Tchg/s5.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/nwfpHB7/s6.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/KNhWPyy/s7.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/9v4DRgX/s8.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
        <div class="col-sm">
          <img className = "photoOption" src="https://i.ibb.co/S50hqLz/s9.jpg" alt="cat" border="0" onClick = {hello}/>
        </div>
      </div>
    </div>

    <div class="container2 carousel-item">
    <div class="row">
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/wBBp6Wh/s10.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/pX2BrDb/s11.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/6RL64yk/s14.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/H7NBNy2/s13.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/PM8z5Bb/s15.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
      <img className = "photoOption" src="https://i.ibb.co/bbhkMCj/s12.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/Jt8mGmc/s18.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/12BJQhK/s17.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
      <div class="col-sm">
        <img className = "photoOption" src="https://i.ibb.co/ySC60xt/s16.jpg" alt="cat" border="0" onClick = {hello}/>
      </div>
    </div>
    </div>
  </div>
  <a class="cp carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="cn carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </section>
    )
}

export default PhotoCarousel
