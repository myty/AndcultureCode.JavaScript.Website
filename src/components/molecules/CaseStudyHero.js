import React from 'react';
import ScheduleImage from '../../../static/img/case-studies/pulse/schedule.png'
import PeopleRolesImage from '../../../static/img/case-studies/pulse/peopleroles.png'

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
              <div className = "o-hero__copy-container">
                Hospital staffing is a headache. Patients appear whether you are properly staffed or not. How could PinnacleHealth nurse managers make real-time, data-driven decisions on how many nurses to have on hand, rather than best guesses using limited data locked in spreadsheets?
              </div>
              {this.props.tags && this.props.tags.length ? (
                <div className = "o-hero__list-container">
                  <h6>Services</h6>
                  <ul className = "o-hero__list">
                    {this.props.tags.map(tag => (
                      <li key={tag + `tag`}>{tag}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              </div>
            </div>
        </div>
        <div className = "o-rhythm__row">
          <div className = "o-hero__image">
            <img src = { ScheduleImage } />
          </div>
          <div className = "o-hero__image">
            <img src = { PeopleRolesImage } />
          </div>
        </div>
      </div>
    )
  }
}

export default CaseStudyHero;
