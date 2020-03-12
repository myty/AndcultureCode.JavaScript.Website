import React from 'react';
import scheduleImg from '../../../static/img/case-studies/pulse/schedule.jpg';
import peopleImg from '../../../static/img/case-studies/pulse/peopleroles.jpg';
import nurseImg from '../../../static/img/case-studies/pulse/nurse_hallway.png';
import sketchImgOne from '../../../static/img/case-studies/pulse/sketchbook1.png';
import sketchImgTwo from '../../../static/img/case-studies/pulse/sketchbook2.png';
import stationImg from '../../../static/img/case-studies/pulse/nurse_station.png';
import whiteSketches from '../../../static/img/case-studies/pulse/white_sketches.png';
import safariImg from '../../../static/img/case-studies/pulse/unit-workload-safari.png';
import doodleImg from '../../../static/img/case-studies/pulse/pulse_block_doodle.jpg';
import dataImg from '../../../static/img/case-studies/pulse/data-leveling.png';

const PulseContent = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className = "m-case-study-page-content__image-container">
                    <div className = "m-case-study-page-content__image -half">
                        <img src = { scheduleImg } />
                    </div>
                    <div className = "m-case-study-page-content__image -half">
                        <img src = { peopleImg } />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "o-rhythm__col">
                        <div className = "m-case-study-page-content__copy-section -push-one">
                            <header>so what was broken?</header>
                            <p>PinnacleHealth (now UPMC Pinnacle) needed a partner to turn static reports into a platform that could easily give nurse managers data to make scheduling their team second nature.</p>
                            <p>Nobody wants to walk into a hospital and realize they don’t have enough nurses. Having too many nurses around isn’t great for the bottom line, either. Without the 10,000-foot view of how adequate staffing has been in recent days and months, how could a nurse manager realistically fill up a schedule with any confidence? PinnacleHealth needed to be focused on providing excellent patient care, not scheduling staff. The right platform can do help you schedule staff more effectively so you can provide excellent patient care.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = { nurseImg } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Research</h6>
                        <header className = "-push-three">There’s a data side and a human side to this problem.</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Research</h6>
                            <div className = "content__copy">
                                <p>For data, we know a problem is easier to tackle if you can see it. We took what our partner provided and turned it into sketched concepts; we also input data into our visualization tools. Voila, now we could start to see shortcomings where before it was spreadsheets and hunches. </p>
                                <p>The human side led to interviewing each nurse manager. How do they schedule? What tools do they use to do that? What about their job drives them up a wall?*</p>
                                <p>That’s not enough, though. So we met with people from other parts of the hospital system so we could get the full picture.</p>
                                <div className = "easter-egg">”Is your job just like on ‘Grey’s Anatomy’?” likely is one.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container -fluid">
                    <div className = "m-case-study-page-content__section">
                        <div className = "o-rhythm__row">
                            <div className = "sketch -one">
                                <img src = { sketchImgOne } />
                            </div>
                            <div className = "sketch -two">
                                <img src = { sketchImgTwo } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Synthesis</h6>
                        <header className = "-push-three">What’s the common thread we’re seeing?</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Synthesis</h6>
                            <div className = "content__copy">
                                <p>What kind of issues do all of these nurse managers have? The Synthesis stage makes it clear what’s a shared pain and what’s an isolated incident.</p>
                                <p>We pinned interview profiles on a wall and highlighted answers that point to those shared pain points. At the same time, we mapped out PinnacleHealth’s processes, too, so it was a tangible system and not just a set of technical paragraphs in a dusty binder.</p>
                                <p>With all of that together, we went over our research and sketches to come up with guiding principles and design constraints—here’s what’s important, and here’s what we have to work with. Having a partnership approach helps immensely here to make sure there aren’t unrealistic expectations or missed goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = { stationImg } />
                </div>
                <div className = "m-case-study-page-content__color-block">
                    <div className = "o-rhythm__container">
                        <div className = "m-case-study-page-content__copy-section -with-image">
                            <div className = "o-rhythm__row">
                                <div className = "content__copy -left">
                                    <header>Sketches become thumbnails. Thumbnails become mockups.</header>
                                    <p>What was once a loose concept from PinnacleHealth to give nurse managers a powerful scheduling tool was turning into a beautifully designed healthcare management experience.</p>
                                    <p>Undoubtedly, healthcare’s regulations and incredible pace made this a unique challenge. But that only made us want to take even more care to ensure each detail was covered. We wanted to deliver a great experience, not just a scheduling tool. Well-designed experiences get used, day in and day out, even when things get hectic. And what hospital isn’t hectic?</p>
                                </div>
                                <div className = "content__image">
                                    <img src = { whiteSketches } />
                                </div>
                            </div>
                            <img src = { safariImg } />
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">User Testing</h6>
                        <header className = "-push-three">One of the biggest challenges in designing an experience isn’t making the idea into a reality...</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">User Testing</h6>
                            <div className = "content__copy">
                                <p>It’s getting people to use it! That’s why we gathered a small group of (brave?) initial users to try this new platform, something way out of the box compared to the static reports they had grown accustomed to. We needed to watch them use it, and they needed to see how we turned a bunch of spreadsheets into an accessible, chart-filled, problem-solving dashboard.</p>
                                <p>We observed. We interviewed. We met with nurse managers and administrators to discuss how they used the platform, and more importantly, what shortcomings it may have at this early stage. Was something confusing? Was a task more challenging to complete than we expected? </p>
                                <p>A tip: Work with companies that don’t assume the first version of what they produced is perfect.* It should be about testing and evolving.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = { doodleImg } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Next Steps</h6>
                        <header className = "-push-three">Priorities and process moving forward</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Next Steps</h6>
                            <div className = "content__copy">
                                <p>Can we be candid? It was pretty f’ing cool to see the positive reaction of hard-working nurse managers knowing their job was made easier. But we weren’t done yet. Beyond the initial feedback, we needed to understand what was a functional priority for continued effectiveness, and what was simply additional value.</p>
                                <p>We didn’t want to lose a single valuable suggestion—all of those interviews matter—as these help us explore future feature expansions. It’s an ongoing process.</p>
                                <p>We’re not just dropping something we created in your lap and saying “best of luck!” That’s not a partnership. That’s a mother-in-law.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = { dataImg } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <h6 className = "content__header -mobile-only">Iteration</h6>
                        <header className = "-push-three">Evolving the system to increase effectiveness</header>
                        <div className = "o-rhythm__row">
                            <h6 className = "content__header -desktop-only">Iteration</h6>
                            <div className = "content__copy">
                                <p>We had initial user feedback plus data, and now we could update the platform design. We tweaked how the info was presented and modified the navigation. Charts were added to make the experience more comprehensive; you really could get a sense of how the entire hospital operated.*</p>
                                <p>We didn’t veer off our initial guiding principles. We just worked with our partner to evolve the system into an even more effective version to address their problem.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__next">
                    <div className = "o-rhythm__container">
                        <h6>Next project</h6>
                        <h2>Commonwealth Charter Academy</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PulseContent;