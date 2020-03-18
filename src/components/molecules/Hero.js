import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// import greenBlob from './../../../static/img/greenblob.png';
// import dots from './../../../static/img/center_lane_dots.png';
// import terrazo from './../../../static/img/terrazo.png';
// import greenBrush from './../../../static/img/greenbrush.png';
// import JigglyDoo from '../atoms/JigglyDoo';
// import Blinky from '../atoms/Blinky';

import asterisks from './../../../static/img/homepage-hero/asterisks_flock.png';
import block from './../../../static/img/homepage-hero/block_doodle.png';
import diamond from './../../../static/img/homepage-hero/diamond.png';
import dots from './../../../static/img/homepage-hero/dot_pattern.png';
import drops from './../../../static/img/homepage-hero/drops.png';
import eye from './../../../static/img/homepage-hero/eye.png';
import paint from './../../../static/img/homepage-hero/large_paint.png';
import plant from './../../../static/img/homepage-hero/plant.png';
import paintbrush from './../../../static/img/homepage-hero/paintbrush.png';
import blob from './../../../static/img/homepage-hero/pink_blob.png';
import orangePlant from './../../../static/img/homepage-hero/orange_plant.png';
import edges from './../../../static/img/homepage-hero/Screen_Edges.png';
import scribble from './../../../static/img/homepage-hero/scribble.png';
import tear from './../../../static/img/homepage-hero/tear.png';
import whiteDots from './../../../static/img/homepage-hero/white_dots.png';

import eyeDoodles from './../../../static/img/homepage-hero/eye_doodles.png';
import pinkBlob from './../../../static/img/homepage-hero/pink_blob.png';

import matrix from './../../../static/img/homepage-hero/matrix.png';
import greenPaint from './../../../static/img/homepage-hero/green_screenpaint.png';

import blueBlob from './../../../static/img/homepage-hero/blue_blob.png';
import pinkElephant from './../../../static/img/homepage-hero/pink_elephant.png';
import orangSicle from './../../../static/img/homepage-hero/orangsicle.png';

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
      <div className="o-hero -gradient">
        {/* <div className="o-hero__background -jigglydoo" >
          <JigglyDoo />
        </div>
        <div className="o-hero__background -blinky" >
          <Blinky />
        </div>
        <img className="o-hero__background -dots" src={dots} />
        <img className="o-hero__background -greenblob" src={greenBlob} />
        <img className="o-hero__background -terrazo" src={terrazo} />
        <img className="o-hero__background -greenbrush" src={greenBrush} /> */}

        {/* <img className = "o-hero__background -terrazo" src = { asterisks } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { block } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { diamond } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { dots } /> */}
        {/* <img className = "o-hero__background -drops" src = { drops } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { eye } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { paint } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { matrix } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { plant } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { paintbrush } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { blob } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { orangePlant } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { edges } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { scribble } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { tear } /> */}
        {/* <img className = "o-hero__background -terrazo" src = { whiteDots } /> */}

        <div className = "o-hero__background-group">
          <img className = "o-hero__background -pink-blob" src = { pinkBlob } />
          <img className = "o-hero__background -eye-doodles" src = { eyeDoodles } />
        </div>

        {/* <div className = "o-hero__background-group">
          <img className = "o-hero__background -green-paint" src = { greenPaint } />
          <img className = "o-hero__background -matrix" src = { matrix } />
        </div> */}

        {/* <div className = "o-hero__background-group">
          <img className = "o-hero__background -orangsicle" src = { orangSicle } />
          <img className = "o-hero__background -pink-elephant" src = { pinkElephant } />
          <img className = "o-hero__background -blue-blob" src = { blueBlob } />
        </div> */}

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
