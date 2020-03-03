import React from 'react';

const CaseStudyHero = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className = "o-hero -case-study">
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "o-hero__title">
              <h1>{ this.props.title }</h1>
            </div>
            <div className = "o-hero__image">
              { this.props.featuredimage ? (
                <img src = { this.props.featuredimage.childImageSharp.fluid.src } />
              ) : null }
            </div>
          </div>
          {this.props.tags && this.props.tags.length ? (
          <div>
            <h4>Services</h4>
            <ul>
              {this.props.tags.map(tag => (
                <li key={tag + `tag`}>{tag}</li>
              ))}
            </ul>
          </div>
        ) : null}
        </div>
      </div>
    )
  }
}

export default CaseStudyHero;
