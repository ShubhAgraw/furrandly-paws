import React from 'react';
import ReactDOM from 'react-dom';
import CarouselItem from './CarouselItem';
import ActiveCarouselItem from './ActiveCarouselItem';
import shiro from '../components/images/shiro.png'
import panko from '../components/images/panko.png'
import panko2 from '../components/images/panko2.png'
import panko3 from '../components/images/panko3.png'
function CarouselHomePage(){
    return(
        <section id="testimonials">
        <div id="carouselExampleControls" className="carousel slide" data-ride="false">

            <div className="carousel-inner">
                <ActiveCarouselItem activecarouseltext="I no longer have to sniff other dogs for love. I've found the hottest Corgi on Furrandly🐾. Woof."
                    activecarouselimg={shiro}
                    activecarousellocation="Shiro, New York"/>
                <CarouselItem carouseltext="I used to be so lonely, but with Furrandly🐾's help, I've found the love of my life. I think."
                    carouselimg={panko}
                    carousellocation="Panko, Texas"/>
                <CarouselItem carouseltext="OMG! He has the cutest furcut😍. BTW thanks Furrandly🐾"
                    carouselimg={panko2}
                    carousellocation="Beverly, Illinois"/>
                <CarouselItem carouseltext="Happy Tail: I got a best friend and maybe...😚"
                    carouselimg={panko3}
                    carousellocation="Beverly, Illinois"/>


                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>


            </div>
        </div>
        </section>
    )
}

export default CarouselHomePage
