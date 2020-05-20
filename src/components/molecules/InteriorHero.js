import React from 'react';

const InteriorHero = (props) => (
  <div className = {`o-hero ${ props.modifier }` }>
    <div className = "o-rhythm__container">
      <div className = "o-hero__top">
        <div className = "o-rhythm__row">
          <div className = "o-hero__left">
            <div className = "o-hero__titles">
              <h1>{ props.title }</h1>
              <h2>{ props.subTitle }</h2>
              { props.children }
            </div>
          </div>
          <div className = "o-hero__right">
            {props.image &&
              <img
                alt         = { props.title }
                aria-hidden = "true"
                src         = { props.image } />
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InteriorHero;
