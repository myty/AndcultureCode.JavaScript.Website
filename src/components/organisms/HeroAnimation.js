import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

import rainbow from './../../../static/img/homepage-hero-two/rainbow_assterisk_drops@2x.png';
import pinkBlob from './../../../static/img/homepage-hero-two/pink_blob@2x.png';
import blueBlobTwo from './../../../static/img/homepage-hero-two/blue_blob_two@2x.png';

import matrix from './../../../static/img/homepage-hero-two/matrix@2x.png';
import greenPaint from './../../../static/img/homepage-hero-two/paint_swash@2x.png';
import eye from './../../../static/img/homepage-hero-two/eye@2x.png';

import pinkElephant from './../../../static/img/homepage-hero-two/pink_elephant@2x.png';
import orangSicle from './../../../static/img/homepage-hero-two/orangsicle@2x.png';
import blueBlob from './../../../static/img/homepage-hero-two/blue_blob@2x.png';

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
        }, 1)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 3)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 5)
        tl.to(groupOneImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 7)
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 7)
        tl.to(groupOneImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 9)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 9)
        tl.to(groupOneImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 11)
        tl.to(groupTwoImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 11)
        tl.to(groupTwoImgOne, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 13)
        tl.to(groupThreeImgOne, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 13)
        tl.to(groupTwoImgTwo, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 15)
        tl.to(groupThreeImgTwo, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 15)
        tl.to(groupTwoImgThree, 1.5, {
            opacity:    0,
            ease:       Power1.easeOut
        }, 17)
        tl.to(groupThreeImgThree, 1.5, {
            opacity:    1,
            ease:       Power1.easeIn
        }, 17)
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