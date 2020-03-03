import React from 'react';

const CaseStudyHero = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundStyle = {
      background: this.props.color,
    }

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
        </div>
        <div className = "o-hero__meta" style = { backgroundStyle }>
          <div className = "o-rhythm__container">
            <div className = "o-rhythm__row">
              <div className = "o-hero__left">
                <strong>Lorem Ipsum </strong>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              </div>
              {this.props.tags && this.props.tags.length ? (
                <div className = "o-hero__right">
                  <h6>Services</h6>
                  <ul>
                    {this.props.tags.map(tag => (
                      <li key={tag + `tag`}>{tag}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default CaseStudyHero;
