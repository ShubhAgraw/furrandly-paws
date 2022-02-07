import React from 'react';

function CardItem(props){
    return (
        <div className="card" style={{width: "20rem"}}>
            <img className="card-img-top c" src={props.image} style = {{marginTop : 0}} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">{props.cardText}</p>
            </div>

        </div>
    )
}

export default CardItem
