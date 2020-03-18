import React, { useEffect } from 'react';
import { TimelineMax, Power1 } from 'gsap';

const HomeAnimation = () => {
    useEffect(() => {
        const animation_container   = document.querySelector('.o-home-animation');
        const logo                  = document.querySelector('.animation-logo');
        const first_word            = document.querySelector('.first');
        const second_word           = document.querySelector('.second');
        const third_word            = document.querySelector('.third');
        const tl                    = new TimelineMax();

        tl.set(animation_container, {y: "0%"})

        tl.set(logo, {y: "7%"})
        tl.to(logo, 1, {
            y:          "0%",
            opacity:    1,
            ease:       Power1.easeInOut
        }, 1.5)

        tl.set(first_word, {y: "50%"})
        tl.to(first_word, 1, {
            y:          "0%",
            opacity:    1,
            ease:       Power1.easeInOut
        }, 2.5)

        tl.set(second_word, {y: "50%"})
        tl.to(second_word, 1, {
            y:          "0%",
            opacity:    1,
            ease:       Power1.easeInOut
        }, 3.5)

        tl.set(third_word, {y: "50%"})
        tl.to(third_word, 1, {
            y:          "0%",
            opacity:    1,
            ease:       Power1.easeInOut
        }, 4.5)

        tl.to(animation_container, 2, {
            y:      '-100%',
            ease:   Power1.easeInOut
        }, 6.5)

        tl.eventCallback("onComplete", function() {
            document.querySelector('body').style.overflow = "visible";
            animation_container.style.display = 'none';
        })
    }, []);

    return (
        <div className = "o-home-animation">
            <div className = "o-home-animation__container">
                <div style={{position:"relative", width: "100%", textAlign: "center"}}>
                    <svg className="animation-logo" viewBox="0 0 100 100" style={{width: "55%", height: "auto"}}>
                        <path className="st1" fill="#fff" d="M37.5,50.26c-0.53,6.29,4.16,11.84,10.45,12.37c0.33,0.03,0.65,0.04,0.98,0.04c2.7,0,5.28-0.94,7.37-2.7
                        c1.06-0.89,1.93-1.95,2.59-3.13c1.45,1.18,2.44,1.98,2.61,2.12l3.24-4c-6.2-5.03-18.02-14.61-18.4-14.93
                        c-1.15-0.95-1.74-2.27-1.62-3.62c0.19-2.24,2.17-3.92,4.41-3.73c1.09,0.09,2.07,0.6,2.78,1.43c0.19,0.22,0.35,0.47,0.49,0.72
                        l4.35-2.75c-1.47-2.5-4.08-4.27-7.18-4.53c-5.07-0.43-9.54,3.35-9.97,8.42c-0.19,2.3,0.52,4.59,1.95,6.44
                        C39.24,44.36,37.76,47.15,37.5,50.26z M42.63,50.69c0.17-1.96,1.21-3.7,2.8-4.77c2.36,1.92,6.09,4.94,9.36,7.59
                        c-0.38,0.97-0.99,1.83-1.81,2.52c-1.29,1.09-2.92,1.61-4.6,1.47C44.92,57.21,42.33,54.15,42.63,50.69z"/>
                    </svg>
                    <svg id="new" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" style={{width: "50%", height: "auto", position:"absolute", left: "50%", transform: "translate(-50%,0)", overflow: "visible"}}>
                        <path fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="5.72px" className="animation-logo-c__path" d="M67.18,67.18a31.36,31.36,0,1,1,0-44.36"/>
                    </svg>
                </div>
                <div className="animation-text">
                   <span className="first">A</span> <span className="second">Design</span> <span className="third">Company</span>
                </div>
            </div>
        </div>
    )
}

export default HomeAnimation;