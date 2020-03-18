import React from 'react';

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
import matrix from './../../../static/img/homepage-hero/matrix.png';
import plant from './../../../static/img/homepage-hero/plant.png';
import paintbrush from './../../../static/img/homepage-hero/paintbrush.png';
import blob from './../../../static/img/homepage-hero/pink_blob.png';
import orangePlant from './../../../static/img/homepage-hero/orange_plant.png';
import edges from './../../../static/img/homepage-hero/Screen_Edges.png';
import scribble from './../../../static/img/homepage-hero/scribble.png';
import tear from './../../../static/img/homepage-hero/tear.png';
import whiteDots from './../../../static/img/homepage-hero/white_dots.png';

import eyeDoodles from './../../../static/img/homepage-hero/eye_doodles.png';
import blueBlob from './../../../static/img/homepage-hero/blue_blob.png';
import pinkBlob from './../../../static/img/homepage-hero/pink_blob.png';

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
          {/* <img className = "o-hero__background -blue-blob" src = { blueBlob } /> */}
          <img className = "o-hero__background -pink-blob" src = { pinkBlob } />
          <img className = "o-hero__background -eye-doodles" src = { eyeDoodles } />
        </div>

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
