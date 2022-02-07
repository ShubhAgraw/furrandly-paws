import React from 'react';
import CardItem from './CardItem'

function CardsHomePage(props){
    return (
        <section id="pricing">
            <h2>{props.cardsTitle}</h2>
            <p>{props.cardsTitleContent}</p>
            <div className="card-group">
                <div className="col card-con one">
                    <CardItem image="https://images.pexels.com/photos/4588049/pexels-photo-4588049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        cardText="Cheems. 
                        Breed-Shiba inu and 10 years old. I am very confident, bold and cheerful."/>
                </div>
                <div className="col card-con two">
                    <CardItem image="https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        cardText="Billu. 
                        Loved to be entertained all the time. My attitude and behavior depends upon how you treat me."/>
                </div>
                <div className="col card-con three">
                    <CardItem image="https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        cardText="Tinka parrot.
                        Multi-lingual intellectual personality probably smarter you than."/>
                </div>
            </div>
            <div className="card-group">
                <div className="col card-con four">
                <CardItem image="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=540"
                        cardText="Squeaker Bunny.
                        Born athlete. Mix of emotions. If we fit, we sit💃🏻"/>
                </div>
                <div className="col card-con five">
                <CardItem image="https://images.pexels.com/photos/3362696/pexels-photo-3362696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        cardText="Micey mouse.
                        First cry at 29 Feb 2020 
                        Happiness is grated, sliced, melted and diced cheese."/>
                </div>
                <div className="col card-con five">
                <CardItem image="https://images.pexels.com/photos/7855424/pexels-photo-7855424.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        cardText="Hardy.
                        I am somebody you’ll always look for; heart that never hardens, temper that never tries and a touch that never hurts."/>
                </div>
            </div>
        </section>
        // </div>
    )
}

export default CardsHomePage;
