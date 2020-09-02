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
    let verticalTextStyle = {
        opacity: 0.0,
    };
    const opacity = (height - scrollTop) / height;
    if (opacity >= 0.0) {
      verticalTextStyle = {
        opacity: opacity ?? 0.0,
      }
    }


    return (
        <div className="o-hero -homepage">
            <div className="o-rhythm__container o-hero__text-container">
                <div className="o-hero__top">
                    <div className="o-hero__titles">
                        <div className="-fade-homepage-title -homepage-title">
                            <h1 className="-after">{this.props.title}</h1>
                        </div>
                        <div className="-fade-homepage-easter-egg">
                            <p className="-before">{this.props.secondaryTitle}</p>
                        </div>
                    </div>
                </div>
                <div style={verticalTextStyle} className="o-hero__vertical">
                    A Design Company
                </div>
            </div>
            <HeroAnimation />
        </div>
    );
  }
}

export default Hero
