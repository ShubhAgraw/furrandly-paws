import React from 'react'

function ActiveCarouselItem(props){
    return (
        <div className="carousel-item active">
          <h2 className="testimonial-text">{props.activecarouseltext}</h2>
          <img className="testimonial-img" src={props.activecarouselimg} alt="lady-profile"/>
          <em className = "location">{props.activecarousellocation}</em>
        </div>
    )
}


export default ActiveCarouselItem;
