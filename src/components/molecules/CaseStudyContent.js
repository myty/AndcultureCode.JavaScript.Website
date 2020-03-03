import React from 'react';

const CaseStudyContent = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className = "o-rhythm__container">
                    <div className = "o-rhythm__col -push-one">
                        <h3>so what was broken?</h3>
                        <p></p>
                    </div>
                </div>
                <div>Image</div>
                <div className = "o-rhythm__container">
                    <div>There's  a data side</div>
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

export default CaseStudyContent;