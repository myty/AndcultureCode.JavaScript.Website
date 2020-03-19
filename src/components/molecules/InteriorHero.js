import React from 'react';
import contactHero from './../../../static/img/contact_hero.png';

const InteriorHero = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    }
  }

  componentDidMount() {

    window.onscroll =()=>{
      let height = window.innerHeight;
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      height = height / 1;

      const opacity = (height - scrollTop) / height;
      this.setState({currentScrollHeight: opacity});
    }
  }

  render() {

    return (
      <div className = "o-hero">
        <img src = { this.props.backgroundImages[0] } className = "o-hero__background -circles-crosses" />
        <img src = { this.props.backgroundImages[1] } className = "o-hero__background -blue-paint" />
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "o-hero__left">
              <div className = "o-hero__titles">
                <h1>{ this.props.title }</h1>
                <h3>{ this.props.subTitle }</h3>
              </div>
            </div>
            <div className = "o-hero__right">
              <img src = { contactHero } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InteriorHero;
