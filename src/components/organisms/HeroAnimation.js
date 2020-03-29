import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

import rainbow from './../../../static/img/homepage-hero-two/rainbow_assterisk_drops2.png';
import pinkBlob from './../../../static/img/homepage-hero-two/pink_blob2.png';
import blueBlobTwo from './../../../static/img/homepage-hero-two/blue_blob_two2.png';

import matrix from './../../../static/img/homepage-hero-two/matrix2.png';
import greenPaint from './../../../static/img/homepage-hero-two/paint_swash2.png';
import eye from './../../../static/img/homepage-hero-two/eye2.png';

import pinkElephant from './../../../static/img/homepage-hero-two/pink_elephant2.png';
import orangSicle from './../../../static/img/homepage-hero-two/orangsicle2.png';
import blueBlob from './../../../static/img/homepage-hero-two/blue_blob2.png';

const HeroAnimation = () => {
    useEffect(() => {
        const groupOne = document.querySelector('.group-one');
        const groupOneImgOne = groupOne.querySelector('.-pink-blob');
        const groupOneImgTwo = groupOne.querySelector('.-blue-blob-two');
        const groupOneImgThree = groupOne.querySelector('.-rainbow');
        const groupTwo = document.querySelector('.group-two');
        const groupTwoImgOne = groupTwo.querySelector('.-green-paint');
        const groupTwoImgTwo = groupTwo.querySelector('.-matrix');
        const groupTwoImgThree = groupTwo.querySelector('.-eye');
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
        tl.set(groupTwoImgThree, {opacity: 0})
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
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 6)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 8)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 8)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 10)
        tl.to(groupTwoImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 10)
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 12)
        tl.to(groupThreeImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 12)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 14)
        tl.to(groupThreeImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 14)
        tl.to(groupTwoImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 16)
        tl.to(groupThreeImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 16)
    }, []);

    return (
        <div>
            <div className = "o-hero__background-group group-one">
                <img className = "o-hero__background -pink-blob" src = { pinkBlob } />
                <img className = "o-hero__background -blue-blob-two" src = { blueBlobTwo } />
                <img className = "o-hero__background -rainbow" src = { rainbow } />
            </div>
            <div className = "o-hero__background-group group-two">
                <img className = "o-hero__background -green-paint" src = { greenPaint } />
                <img className = "o-hero__background -eye" src = { eye } />
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