import React, { useEffect } from "react";
import { gsap, Linear } from "gsap";

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

        function shuffleArray(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        const tl = new gsap.timeline();

        var imgArray = [
            blackXImg,
            blueLinesImg,
            bluePlantImg,
            fogDotsImg,
            fogEyeballImg,
            fogTagImg,
            greenGoImg,
            greenPlantImg,
            orangeBlobImg,
            orangeCubeImg,
            pinkAsteriskImg,
            pinkDropImg,
            pinkRaindropsImg,
            redPrismImg,
            redTeethImg,
            salmonBlobImg,
            tealAsteriskImg,
            tealRainbowImg,
            yellowSquiggleImg,
        ];

        imgArray = shuffleArray(imgArray);
        for (var i = 0; i < imgArray.length / 2; i++) {
            // Set half of the items to be randomly visible on page load
            tl.set(imgArray[i], { opacity: 1 });
        }

        for (var i = 0; i < imgArray.length; i++) {
            if (i < imgArray.length / 2) {
                // Animate the initially visible elements              
                gsap.to(imgArray[i], {
                    delay: 2,
                    duration: "random(6, 7)",
                    ease: Linear.power4,
                    opacity: 0,
                    repeat: -1,
                    repeatDelay: 5,
                    yoyo: true,
                });
            } else {
                // Animate the initially invisible elements
                gsap.to(imgArray[i], {
                    delay: 2,
                    duration: "random(6, 7)",
                    ease: Linear.power4,
                    opacity: 1,
                    repeat: -1,
                    repeatDelay: 5,
                    startAt: 0,
                    yoyo: true,
                });
            }
        }
    }, []);

    return (
        <div className="o-hero__image-container">
            <img src={person} className="-person" aria-hidden="true" alt="" />
            <img src={blackX} className="-black-x -hero-animated-image" aria-hidden="true" alt="" />
            <img src={blueLines} className="-blue-lines -hero-animated-image" aria-hidden="true" alt="" />
            <img src={bluePlant} className="-blue-plant -hero-animated-image" aria-hidden="true" alt="" />
            <img src={fogDots} className="-fog-dots -hero-animated-image" aria-hidden="true" alt="" />
            <img src={fogEyeball} className="-fog-eyeball -hero-animated-image" aria-hidden="true" alt="" />
            <img src={fogTag} className="-fog-tag -hero-animated-image" aria-hidden="true" alt="" />
            <img src={greenGo} className="-green-go -hero-animated-image" aria-hidden="true" alt="" />
            <img src={greenPlant} className="-green-plant -hero-animated-image" aria-hidden="true" alt="" />
            <img src={orangeBlob} className="-orange-blob -hero-animated-image" aria-hidden="true" alt="" />
            <img src={orangeCube} className="-orange-cube -hero-animated-image" aria-hidden="true" alt="" />
            <img src={pinkAsterisk} className="-pink-asterisk -hero-animated-image" aria-hidden="true" alt="" />
            <img src={pinkDrop} className="-pink-drop -hero-animated-image" aria-hidden="true" alt="" />
            <img src={pinkRaindrops} className="-pink-raindrops -hero-animated-image" aria-hidden="true" alt="" />
            <img src={redPrism} className="-red-prism -hero-animated-image" aria-hidden="true" alt="" />
            <img src={redTeeth} className="-red-teeth -hero-animated-image" aria-hidden="true" alt="" />
            <img src={salmonBlob} className="-salmon-blob -hero-animated-image" aria-hidden="true" alt="" />
            <img src={tealAsterisk} className="-teal-asterisk -hero-animated-image" aria-hidden="true" alt="" />
            <img src={tealRainbow} className="-teal-rainbow -hero-animated-image" aria-hidden="true" alt="" />
            <img src={yellowSquiggle} className="-yellow-squiggle -hero-animated-image" aria-hidden="true" alt="" />
        </div>
    );
};

export default HeroAnimation;
