import React from 'react';
import HeroAnimation from '../../components/organisms/HeroAnimation';
import VisibilitySensor from 'react-visibility-sensor';

const Hero = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      easterEggVisible: false,
    };

    this.state = {
      windowHeight: null,
    };

    this._onEasterEggChange = this._onEasterEggChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    })
  }

  _onEasterEggChange(easterEggVisible) {
    this.setState({
      easterEggVisible: easterEggVisible ? true : false,
    });
  }

  render() {
    let height = this.state.windowHeight;
    const scrollTop = this.props.scrollTop;
    height = height / 5;

    const opacity = (height - scrollTop) / height;

    const verticalTextStyle = {
      opacity: opacity,
    }

    let easterEggClass = "-scroll-fade";
    if (this.state.easterEggVisible) {
      easterEggClass += " -active";
    }

    return (
      <div className="o-hero">
        <HeroAnimation/>
        <div className="o-rhythm__container">
          <div className="o-hero__top">
            <div className="o-hero__titles">
              <div className = "-fade">
                <h1 className="-after">{this.props.title}</h1>
              </div>
              <VisibilitySensor onChange = { this._onEasterEggChange }>
                <div className = { easterEggClass }>
                  <p className="-before">{this.props.secondaryTitle}</p>
                </div>
              </VisibilitySensor>
            </div>
          </div>
          <div className="o-hero__subtitles">
            <h2>{this.props.subTitle}</h2>
          </div>
          <div
            style     = { verticalTextStyle }
            className = "o-hero__vertical">
            A Design Company
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
