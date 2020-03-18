import React from 'react';
import HeroAnimation from '../../components/organisms/HeroAnimation';
import VisibilitySensor from 'react-visibility-sensor';

const Hero = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headingVisible: false,
      easterEggVisible: false,
    };

    this.state = {
      windowHeight: null,
    };

    this._onHeadingChange = this._onHeadingChange.bind(this);
    this._onEasterEggChange = this._onEasterEggChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    })
  }

  _onHeadingChange(headingVisible) {
    this.setState({
      headingVisible: headingVisible ? true : false,
    });
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

    let headingClass = "-fade";
    if (this.state.headingVisible) {
      headingClass += " -visible";
    }
    let easterEggClass = "-fade";
    if (this.state.easterEggVisible) {
      easterEggClass += " -visible";
    }

    return (
      <div className="o-hero">
        <HeroAnimation/>
        <div className="o-rhythm__container">
          <div className="o-hero__top">
            <div className="o-hero__titles">
              <VisibilitySensor onChange = { this._onHeadingChange }>
                <div className = { headingClass }>
                  <h1 className="-after">{this.props.title}</h1>
                </div>
              </VisibilitySensor>
              <VisibilitySensor onChange = { this._onEasterEggChange }>
                <div className = { easterEggClass }>
                  <p className="-before">{this.props.secondaryTitle}</p>
                </div>
              </VisibilitySensor>
            </div>
          </div>
          <div className="o-hero__subtitles">
            <h3>{this.props.subTitle}</h3>
          </div>
          <h6
            style     = { verticalTextStyle }
            className = "-vert">
            A Design Company
          </h6>
        </div>
      </div>
    )
  }
}

export default Hero
