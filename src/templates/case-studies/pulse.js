import React from 'react'

const Pulse = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div classNameName = "m-case-study-page-content__image-container">
                    <div classNameName = "m-case-study-page-content__image -half">
                        <img src = "../../../static/img/case-studies/pulse/schedule.jpg" />
                    </div>
                    <div classNameName = "m-case-study-page-content__image -half">
                        <img src = "../../../static/img/case-studies/pulse/peopleroles.jpg" />
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
            </div>
        )
    }
}

export default Pulse
