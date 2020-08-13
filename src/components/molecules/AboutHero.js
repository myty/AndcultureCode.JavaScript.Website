import React from 'react';

const AboutHero = (props) => {
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
                {props.subTitle && <h1 id="greeting">{props.subTitle}</h1>}
                <h1>{props.title}</h1>
                <p className="hero-intro-text">{props.introTextOne}</p>
                <p className="hero-intro-text">{props.introTextTwo}</p>
              </div>
            </div>
            {props.image && (
              <div className="o-hero__right hero-image">
                <img alt="header image" aria-hidden="true" src={props.image} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
