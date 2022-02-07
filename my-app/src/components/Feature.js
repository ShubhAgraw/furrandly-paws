import React from 'react';

function Feature(props){
    return (
        <div class="col-lg-4 func">
          <i class={`icon fa fa-${props.icon} fa-4x`} aria-hidden="true"></i>
          <h3 class="functext">{props.title}</h3>
          <p>{props.detail}</p>
        </div>
    )
}

export default Feature