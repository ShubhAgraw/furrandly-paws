import React from 'react';


function CarouselItem(props){
    return (
        <div className="carousel-item">
          <h2 className="testimonial-text">{props.carouseltext}</h2>
          <img className="testimonial-img" src={props.carouselimg} alt="lady-profile"/>
          <em className = "location">{props.carousellocation}</em>
        </div>
    )
}

export default CarouselItem;
