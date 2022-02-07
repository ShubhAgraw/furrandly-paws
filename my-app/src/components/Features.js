import React from 'react';
import Feature from './Feature';

function Features(){
    return (
      <section id="features">
        <div class="container-fluid">

          <div class="row">
            <Feature title="Easy to use." detail="So easy to use, even your pet could do it." icon="check-circle"/>
            <Feature title="Elite Clientele" detail="We have all the pets, the greatest pets." icon="bullseye"/>
            <Feature title="Guaranteed to work." detail="Find the love of your pet's life." icon="heart"/>
          </div>
          
        </div>
      </section>
    )
}

export default Features