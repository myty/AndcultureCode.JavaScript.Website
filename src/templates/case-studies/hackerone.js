import React from 'react';
import CustomSlider from '../../components/molecules/CustomSlider';
import PullScroller from '../../components/molecules/PullScroller';
import billboardImg from '../../../static/img/case-studies/hackerone/billboard.png';
import cardsImg from '../../../static/img/case-studies/hackerone/social_cards.png';
import stickerOne from '../../../static/img/case-studies/hackerone/H1-213_sticker.png';
import stickerTwo from '../../../static/img/case-studies/hackerone/h1_was_here_sticker.png';
import hackerImg from '../../../static/img/case-studies/hackerone/rainbow_shirt.png';
import skateboardImg from '../../../static/img/case-studies/hackerone/skateboard.png';
import dotTexture from '../../../static/img/case-studies/hackerone/dot_grid_copy.png';
import stickerImg from '../../../static/img/case-studies/hackerone/h1604_Sticker.png';
import posterImg from '../../../static/img/case-studies/hackerone/h1604_poster.png';
import bannerImg from '../../../static/img/case-studies/hackerone/h1604_banner.png';
import sliderImage1 from '../../../static/img/case-studies/hackerone/Security1.jpg';
import sliderImage2 from '../../../static/img/case-studies/hackerone/Security2.jpg';
import sliderImage3 from '../../../static/img/case-studies/hackerone/Security3.jpg';
import sliderImage4 from '../../../static/img/case-studies/hackerone/Security4.jpg';
import sliderImage5 from '../../../static/img/case-studies/hackerone/Security5.jpg';
import sliderImage6 from '../../../static/img/case-studies/hackerone/Security6.jpg';
import sliderImage7 from '../../../static/img/case-studies/hackerone/Security7.jpg';
import sliderImage8 from '../../../static/img/case-studies/hackerone/Security8.jpg';
import sliderImage9 from '../../../static/img/case-studies/hackerone/Security11.jpg';
import sliderImage10 from '../../../static/img/case-studies/hackerone/Security12.jpg';
import sliderImage11 from '../../../static/img/case-studies/hackerone/Security16.jpg';
import sliderImage12 from '../../../static/img/case-studies/hackerone/Security21.jpg';
import sliderImage13 from '../../../static/img/case-studies/hackerone/Security25.jpg';
import nextImg from '../../../static/img/case-studies/cca/kids_at_window_board.png';

const Hackerone = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sliderImages = [
            sliderImage1,
            sliderImage2,
            sliderImage3,
            sliderImage4,
            sliderImage5,
            sliderImage6,
            sliderImage7,
            sliderImage8,
            sliderImage9,
            sliderImage10,
            sliderImage11,
            sliderImage12,
            sliderImage13,
        ];

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div>
                <div>
                    <img src = { billboardImg } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -body-intro">
                        <header>what was the broken reality with h1?</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__copy">
                                <p><span className = "easter-egg__right">Not surprisingly, HackerOne wants to work with the best hackers, wherever they are.</span> To that end, they put a lot of energy into being “the” community for hackers, in order to be the best platform for hiring hacker-powered security. Hackers live on the bleeding edge, fueled by different motivations, coming to HackerOne both for money and for the challenge. How does HackerOne stay fresh, continue to engage and keep the best coming back for more?</p>
                            </div>
                            <div className = "content__easter-egg easter-egg">Turns out that’s a pretty broad geography—170 countries and counting.</div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__pull-scroll">
                    <PullScroller />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Research</h6>
                        <header className = "-push-three">each event is unique.</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Research</h6>
                            <div className = "content__copy">
                                <p>We take inspiration from the type of challenge, the geography and, well, bugs. Because really it’s all about finding critical vulnerabilities, which in hacker lingo are bugs. Capturing the intense energy, collaborative spirit and competitive nature of the events is part of the equation. It’s also no small task to try to stay as relevant and cool as hackers are. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__mosaic -hackerone">
                    <img src = { posterImg } className = "-poster -mobile-only" />
                    <div className = "o-rhythm__container">
                        <img src = { posterImg } className = "-poster -desktop-only" />
                    </div>
                    <img src = { stickerImg } className = "-sticker" />
                    <img src = { bannerImg } className = "-banner" />
                    <img src = { dotTexture } className = "-dots -left" />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Event Branding</h6>
                        <header className = "">a world of possibilities</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Event Branding</h6>
                            <div className = "content__copy">
                                <p>From HackerOne’s own annual Security@ conference to live hacking events for some of the world’s top organizations like the U.S. Department of Defense and Verizon Media, we create logos and design assets that speak to hackers and security leaders alike. Live hacking events take place all over the world, and our illustrative visual identities take inspiration from these locales. You will see hackers wearing these logos on hats, t-shirts and even prize belts, should they be so talented to win one.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomSlider images = { sliderImages } />
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -mobile-padding__top-none">
                        <h6 className = "content__header -mobile-only">Social Media</h6>
                        <header className = "-push-three">analog and digital</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Social Media</h6>
                            <div className = "content__copy">
                                <p>Analog and digital, we’re designing for all aspects of h1’s live-hacking eventsWe help HackerOne promote all live hacking events, Security@ conference and their presence at many other trade shows, including InfoSecurity, GES, Black Hat, Money 20/20, Gartner Security &amp; Risk Management and DEFCON, on social media.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__image">
                    <img src = { cardsImg } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -hackerone-gear-cred">
                        <h6 className = "content__header -mobile-only">Swag</h6>
                        <header className = "-push-three">gear cred</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Swag</h6>
                            <div className = "content__copy">
                                <p>No event is complete without lots of amazing freebies for attendees. Hackers especially love to collect live hacking swag, because only the top hackers are invited to many events. The more HackerOne gear you have, the more cred you’ve earned. Some of the many items include:</p>
                                <ul>
                                    <li>Shirts &amp; hats</li>
                                    <li>Stickers</li>
                                    <li>Coins</li>
                                    <li>Prize belts &amp; trophies</li>
                                    <li>Backpacks</li>
                                    <li>Posters</li>
                                    <li>Pillows</li>
                                    <li>Skateboards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__mosaic -hackerone -beer-stickers">
                    <div className = "o-rhythm__container">
                        <img src = { hackerImg } className = "-desktop-only" />
                        <img src = { stickerTwo } className = "-sticker-two" />
                    </div>
                    <img src = { hackerImg } className = "-mobile-only" />
                    <img src = { dotTexture } className = "-dots" />
                    <img src = { stickerOne } className = "-sticker-one" />
                    <img src = { skateboardImg } className = "-skateboard" />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -mobile-padding__top-none">
                        <h6 className = "content__header -mobile-only">Mission</h6>
                        <header className = "-push-three">why we love HackerOne</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Mission</h6>
                            <div className = "content__copy">
                                <p>HackerOne believes everyone is a hacker — one who enjoys the intellectual challenge of creatively overcoming limitations. We love the modesty, but mostly we love the mission to &quot;empower the world to build a safer internet,&quot; keeping our software secure and our personal information, well, personal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__next m-case-study -cca">
                    <div className = "-background-image__container">
                        <div
                            style     = { nextImageBlockStyle }
                            className = "-background-image">
                        </div>
                    </div>
                    <div className = "-content">
                        <h5>CCA</h5>
                        <p>redefining what cyber education can do</p>
                        <a href = "/case-studies/cca" className = "a-button">See How</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hackerone;
