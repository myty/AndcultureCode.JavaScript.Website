import React from 'react';

import greenBlob from './../../../static/img/greenblob.png';
import dots from './../../../static/img/center_lane_dots.png';
import terrazo from './../../../static/img/terrazo.png';
import greenBrush from './../../../static/img/greenbrush.png';
import JigglyDoo from '../atoms/JigglyDoo';
import Blinky from '../atoms/Blinky';

const Hero = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: null,
    };
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
    })
  }

  render() {
    let height = this.state.windowHeight;
    const scrollTop = this.props.scrollTop;
    height = height / 5;

    const opacity = (height - scrollTop) / height;

    const verticalTextStyle = {
      opacity: opacity,
    }

    return (
      <div className="o-hero -gradient">
        <div className="o-hero__background -jigglydoo" >
          <JigglyDoo />
        </div>
        <div className="o-hero__background -blinky" >
          <Blinky />
        </div>
        <img className="o-hero__background -dots" src={dots} />
        <img className="o-hero__background -greenblob" src={greenBlob} />
        <img className="o-hero__background -terrazo" src={terrazo} />
        <img className="o-hero__background -greenbrush" src={greenBrush} />
        <div className="o-rhythm__container">
          <div className="o-hero__top">
            <div className="o-hero__titles">
              <h1 className="-after">{this.props.title}</h1>
              <p className="-before">{this.props.secondaryTitle}</p>
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
