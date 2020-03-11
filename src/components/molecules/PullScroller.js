import React from 'react';
import pullScrollImage1 from '../../../static/img/case-studies/hackerone/badge.png';
import pullScrollImage2 from '../../../static/img/case-studies/hackerone/luke.png';
import pullScrollImage3 from '../../../static/img/case-studies/hackerone/tshirt.png';
import pullScrollImage4 from '../../../static/img/case-studies/hackerone/badge_2.png';


const PullScroller = class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slider = document.querySelector('.pull-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('-active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('-active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('-active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }

  render() {

    return (
      <div className = "pull-scroll">
        <img src = { pullScrollImage1 } />
        <img src = { pullScrollImage2 } />
        <img src = { pullScrollImage3 } />
        <img src = { pullScrollImage4 } />
      </div>
    )
  }
}

export default PullScroller;
