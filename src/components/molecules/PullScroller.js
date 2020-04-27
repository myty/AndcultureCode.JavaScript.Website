import React from 'react';
import pullScrollImage1 from 'static/img/case-studies/hackerone/badge.jpg';
import pullScrollImage2 from 'static/img/case-studies/hackerone/luke.jpg';
import pullScrollImage3 from 'static/img/case-studies/hackerone/tshirt.jpg';
import pullScrollImage4 from 'static/img/case-studies/hackerone/brians_patch.png';
import pullScrollImage5 from 'static/img/case-studies/hackerone/h165_sticker.jpg';
import pullScrollImage6 from 'static/img/case-studies/hackerone/A4_Paper.jpg';


const PullScroller = class extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slider = document.querySelector('.pull-scroll');
    const pullIcon = document.querySelector('.pull-icon');
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
      pullIcon.remove();
    });
    slider.addEventListener('touchmove', () => {
      pullIcon.remove();
    })
  }

  render() {

    return (
      <div>
        <div className = "pull-scroll">
          <img src = { pullScrollImage6 } alt = "Hackerone branded A4 paper"  />
          <img src = { pullScrollImage1 } alt = "Hackerone branded badges" />
          <img src = { pullScrollImage2 } alt = "Hackerone's Luke Tucker speaking in front an audience" />
          <img src = { pullScrollImage3 } alt = "Hackerone branded t-shirt" />
          <img src = { pullScrollImage4 } alt = "Hackerone branded stitched patch" />
          <img src = { pullScrollImage5 } alt = "Hackerone H165 branded stickers" />
        </div>
        <div className = "pull-icon">Pull<span></span></div>
      </div>
    )
  }
}

export default PullScroller;
