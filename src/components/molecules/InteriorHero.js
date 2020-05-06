import React       from 'react';
import contactHero from 'static/img/contact_hero.jpg';

const InteriorHero = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0,
    }
  }

  componentDidMount() {

    window.onscroll =()=>{
      let height      = window.innerHeight;
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      height          = height / 1;
      const opacity   = (height - scrollTop) / height;

      this.setState({currentScrollHeight: opacity});
    }
  }

  render() {
    const backgroundImages = this.props.backgroundImages;

    return (
      <div className = {`o-hero ${ this.props.modifier }` }>
        <img
          alt         = { backgroundImages[0].alt }
          aria-hidden = "true"
          className   = "o-hero__background -circles-crosses"
          src         = { backgroundImages[0].image } />
        <img
          alt         = { backgroundImages[1].alt }
          aria-hidden = "true"
          className   = "o-hero__background -blue-paint"
          src         = { backgroundImages[1].image } />
        <div className = "o-rhythm__container">
          <div className = "o-hero__top">
            <div className = "o-rhythm__row">
              <div className = "o-hero__left">
                <div className = "o-hero__titles">
                  <h1>{ this.props.title }</h1>
                  <h2>{ this.props.subTitle }</h2>
                </div>
              </div>
              <div className = "o-hero__right">
                <img
                  alt         = { this.props.title }
                  aria-hidden = "true"
                  src         = { contactHero } />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InteriorHero;
