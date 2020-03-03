import React from 'react';
import NurseImage from '../../../static/img/case-studies/pulse/nurse_hallway.png'

const CaseStudyPageContent = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = "m-case-study-page-content">
                <div className = "o-rhythm__container">
                    <div className = "o-rhythm__col">
                        <div className = "m-case-study-page-content__copy-section -push">
                            <header>so what was broken?</header>
                            <p>PinnacleHealth (now UPMC Pinnacle) needed a partner to turn static reports into a platform that could easily give nurse managers data to make scheduling their team second nature.</p>
                            <p>Nobody wants to walk into a hospital and realize they don’t have enough nurses. Having too many nurses around isn’t great for the bottom line, either. Without the 10,000-foot view of how adequate staffing has been in recent days and months, how could a nurse manager realistically fill up a schedule with any confidence? PinnacleHealth needed to be focused on providing excellent patient care, not scheduling staff. The right platform can do help you schedule staff more effectively so you can provide excellent patient care.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = { NurseImage } />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <header>There’s a data side and a human side to this problem.</header>
                    </div>
                </div>
                <div>Image</div>
                <div className = "o-rhythm__container">
                    <div>What's the common thread</div>
                </div>
                <div>Image</div>
                <div className = "o-rhythm__container">
                    <div>Colored background - Sketches become thumbnails...</div>
                    <div>Image</div>
                </div>
                <div className = "o-rhythm__container">
                    <div>One of the biggest challenges</div>
                </div>
                <div>Image</div>
                <div className = "o-rhythm__container">
                    <div>Priorities and process</div>
                </div>
                <div>Image</div>
                <div className = "o-rhythm__container">
                    <div>Evolving the system to increase...</div>
                </div>
                <div className = "o-rhythm__container">
                    <div>Next project</div>
                </div>
            </div>
        )
    }
}

export default CaseStudyPageContent;