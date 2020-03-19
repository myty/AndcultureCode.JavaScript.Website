import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

import doodles from './../../../static/img/homepage-hero/doodles.png';
import pinkBlob from './../../../static/img/homepage-hero/pink_blob.png';
import blueBlob from './../../../static/img/homepage-hero/blue_blob.png';

import matrix from './../../../static/img/homepage-hero/matrix.png';
import greenPaint from './../../../static/img/homepage-hero/green_screenpaint.png';

import pinkElephant from './../../../static/img/homepage-hero/pink_elephant.png';
import orangSicle from './../../../static/img/homepage-hero/orangsicle.png';

const HeroAnimation = () => {
    useEffect(() => {
        const groupOne = document.querySelector('.group-one');
        const groupOneImgOne = groupOne.querySelector('.-pink-blob');
        const groupOneImgTwo = groupOne.querySelector('.-blue-blob-two');
        const groupOneImgThree = groupOne.querySelector('.-doodles');
        const groupTwo = document.querySelector('.group-two');
        const groupTwoImgOne = groupTwo.querySelector('.-green-paint');
        const groupTwoImgTwo = groupTwo.querySelector('.-matrix');
        const groupThree = document.querySelector('.group-three');
        const groupThreeImgOne = groupThree.querySelector('.-orangsicle');
        const groupThreeImgTwo = groupThree.querySelector('.-pink-elephant');
        const groupThreeImgThree = groupThree.querySelector('.-blue-blob');

        const tl = new TimelineMax();

        tl.set(groupOneImgOne, {opacity: 0})
        tl.set(groupOneImgTwo, {opacity: 0})
        tl.set(groupOneImgThree, {opacity: 0})
        tl.set(groupTwoImgOne, {opacity: 0})
        tl.set(groupTwoImgTwo, {opacity: 0})
        tl.set(groupThreeImgOne, {opacity: 0})
        tl.set(groupThreeImgTwo, {opacity: 0})
        tl.set(groupThreeImgThree, {opacity: 0})
        tl.to(groupOneImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 0)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 2)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 4)
        tl.to(groupOneImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 6)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 8)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 10)
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 12)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 14)
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 16)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 18)
        tl.to(groupThreeImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 20)
        tl.to(groupThreeImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 22)
        tl.to(groupThreeImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 24)
    }, []);

    return (
        <div>
            <div className = "o-hero__background-group group-one">
                <img className = "o-hero__background -pink-blob" src = { pinkBlob } />
                <img className = "o-hero__background -blue-blob-two" src = { blueBlob } />
                <img className = "o-hero__background -doodles" src = { doodles } />
            </div>
            <div className = "o-hero__background-group group-two">
                <img className = "o-hero__background -green-paint" src = { greenPaint } />
                <img className = "o-hero__background -matrix" src = { matrix } />
            </div>
            <div className = "o-hero__background-group group-three">
                <img className = "o-hero__background -orangsicle" src = { orangSicle } />
                <img className = "o-hero__background -pink-elephant" src = { pinkElephant } />
                <img className = "o-hero__background -blue-blob" src = { blueBlob } />
            </div>
        </div>
    )
}

export default HeroAnimation;