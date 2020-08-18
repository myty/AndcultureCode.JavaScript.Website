import React, { useEffect } from "react";
import { TimelineMax, Power1 } from "gsap";

import blackX from "./../../../static/img/home/hero-animation/black-xxxxx.png";
import blueLines from "./../../../static/img/home/hero-animation/blue-lines.png";
import bluePlant from "./../../../static/img/home/hero-animation/blue-plant.png";
import fogDots from "./../../../static/img/home/hero-animation/fog-dots.png";
import fogEyeball from "./../../../static/img/home/hero-animation/fog-eyeball.png";
import fogTag from "./../../../static/img/home/hero-animation/fog-tag.png";
import greenGo from "./../../../static/img/home/hero-animation/green-go.png";
import greenPlant from "./../../../static/img/home/hero-animation/green-plant.png";
import orangeBlob from "./../../../static/img/home/hero-animation/orange-blob.png";
import orangeCube from "./../../../static/img/home/hero-animation/orange-cube.png";
import person from "./../../../static/img/home/hero-animation/phoebe.png";
import pinkAsterisk from "./../../../static/img/home/hero-animation/pink-asterisk.png";
import pinkDrop from "./../../../static/img/home/hero-animation/pink-drop.png";
import pinkRaindrops from "./../../../static/img/home/hero-animation/pink-raindrops.png";
import redPrism from "./../../../static/img/home/hero-animation/red-prism.png";
import redTeeth from "./../../../static/img/home/hero-animation/red-teeth.png";
import salmonBlob from "./../../../static/img/home/hero-animation/salmon-blob.png";
import tealAsterisk from "./../../../static/img/home/hero-animation/teal-asterisk.png";
import tealRainbow from "./../../../static/img/home/hero-animation/teal-rainbow.png";
import yellowSquiggle from "./../../../static/img/home/hero-animation/yellow-squiggle.png";

const HeroAnimation = () => {
    useEffect(() => {
        const blackXImg = document.querySelector(".-black-x");
        const blueLinesImg = document.querySelector(".-blue-lines");
        const bluePlantImg = document.querySelector(".-blue-plant");
        const fogDotsImg = document.querySelector(".-fog-dots");
        const fogEyeballImg = document.querySelector(".-fog-eyeball");
        const fogTagImg = document.querySelector(".-fog-tag");
        const greenGoImg = document.querySelector(".-green-go");
        const greenPlantImg = document.querySelector(".-green-plant");
        const orangeBlobImg = document.querySelector(".-orange-blob");
        const orangeCubeImg = document.querySelector(".-orange-cube");
        const pinkAsteriskImg = document.querySelector(".-pink-asterisk");
        const pinkDropImg = document.querySelector(".-pink-drop");
        const pinkRaindropsImg = document.querySelector(".-pink-raindrops");
        const redPrismImg = document.querySelector(".-red-prism");
        const redTeethImg = document.querySelector(".-red-teeth");
        const salmonBlobImg = document.querySelector(".-salmon-blob");
        const tealAsteriskImg = document.querySelector(".-teal-asterisk");
        const tealRainbowImg = document.querySelector(".-teal-rainbow");
        const yellowSquiggleImg = document.querySelector(".-yellow-squiggle");

        const tl = new TimelineMax();

        tl.set(blackXImg, { opacity: 0 });
        tl.set(blueLinesImg, { opacity: 0 });
        tl.set(bluePlantImg, { opacity: 0 });
        tl.set(fogDotsImg, { opacity: 0 });
        tl.set(fogEyeballImg, { opacity: 0 });
        tl.set(fogTagImg, { opacity: 0 });
        tl.set(greenGoImg, { opacity: 0 });
        tl.set(greenPlantImg, { opacity: 0 });
        tl.set(orangeBlobImg, { opacity: 0 });
        tl.set(orangeCubeImg, { opacity: 0 });
        tl.set(pinkAsteriskImg, { opacity: 0 });
        tl.set(pinkDropImg, { opacity: 0 });
        tl.set(pinkRaindropsImg, { opacity: 0 });
        tl.set(redPrismImg, { opacity: 0 });
        tl.set(redTeethImg, { opacity: 0 });
        tl.set(salmonBlobImg, { opacity: 0 });
        tl.set(tealAsteriskImg, { opacity: 0 });
        tl.set(tealRainbowImg, { opacity: 0 });
        tl.set(yellowSquiggleImg, { opacity: 0 });

        tl.to(
            blackXImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            0
        );
        tl.to(
            blueLinesImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            2
        );
        tl.to(
            fogTagImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            4
        );
        tl.to(
            fogDotsImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            6
        );
        tl.to(
            fogEyeballImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            8
        );
        tl.to(
            pinkRaindropsImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            10
        );
        tl.to(
            greenPlantImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            12
        );
        tl.to(
            orangeBlobImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            14
        );
        tl.to(
            greenGoImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            16
        );
        tl.to(
            orangeCubeImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            18
        );
        tl.to(
            pinkAsteriskImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            20
        );
        tl.to(
            pinkDropImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            22
        );
        tl.to(
            bluePlantImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            24
        );
        tl.to(
            redPrismImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            26
        );
        tl.to(
            redTeethImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            28
        );
        tl.to(
            salmonBlobImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            30
        );
        tl.to(
            tealAsteriskImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            32
        );
        tl.to(
            tealRainbowImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            34
        );
        tl.to(
            yellowSquiggleImg,
            1.5,
            {
                opacity: 1,
                ease: Power1.easeIn,
            },
            36
        );
    }, []);

    return (
        <div className="o-hero__image-container">
            <img src={person} className="-person" aria-hidden="true" alt="" />
            <img src={blackX} className="-black-x" aria-hidden="true" alt="" />
            <img src={blueLines} className="-blue-lines" aria-hidden="true" alt="" />
            <img src={bluePlant} className="-blue-plant" aria-hidden="true" alt="" />
            <img src={fogDots} className="-fog-dots" aria-hidden="true" alt="" />
            <img src={fogEyeball} className="-fog-eyeball" aria-hidden="true" alt="" />
            <img src={fogTag} className="-fog-tag" aria-hidden="true" alt="" />
            <img src={greenGo} className="-green-go" aria-hidden="true" alt="" />
            <img src={greenPlant} className="-green-plant" aria-hidden="true" alt="" />
            <img src={orangeBlob} className="-orange-blob" aria-hidden="true" alt="" />
            <img src={orangeCube} className="-orange-cube" aria-hidden="true" alt="" />
            <img src={pinkAsterisk} className="-pink-asterisk" aria-hidden="true" alt="" />
            <img src={pinkDrop} className="-pink-drop" aria-hidden="true" alt="" />
            <img src={pinkRaindrops} className="-pink-raindrops" aria-hidden="true" alt="" />
            <img src={redPrism} className="-red-prism" aria-hidden="true" alt="" />
            <img src={redTeeth} className="-red-teeth" aria-hidden="true" alt="" />
            <img src={salmonBlob} className="-salmon-blob" aria-hidden="true" alt="" />
            <img src={tealAsterisk} className="-teal-asterisk" aria-hidden="true" alt="" />
            <img src={tealRainbow} className="-teal-rainbow" aria-hidden="true" alt="" />
            <img src={yellowSquiggle} className="-yellow-squiggle" aria-hidden="true" alt="" />
        </div>
    );
};

export default HeroAnimation;
