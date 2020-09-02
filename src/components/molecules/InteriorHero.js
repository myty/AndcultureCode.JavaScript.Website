import React from 'react';

const InteriorHero = (props) => {
  let className = "";

  if (props.image === undefined) {
    className = "-no-image"
  }

  return (
    <div className={`o-hero ${props.modifier} ${className}`}>
      <div className="o-rhythm__container">
        <div className="o-hero__top">
          <div className="o-rhythm__row">
            <div className="o-hero__left">
              <div className="o-hero__titles">
                <h1>{props.title}</h1>
                {props.subTitle &&
                  <h2>{props.subTitle}</h2>
                }
                {props.children}
              </div>
            </div>
            {props.image &&
              <div className="o-hero__right">
                <img
                  alt={props.title}
                  aria-hidden="true"
                  src={props.image} />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorHero;
