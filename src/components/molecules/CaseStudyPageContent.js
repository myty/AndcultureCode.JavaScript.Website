import React from 'react';

const CaseStudyPageContent = class extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        document.querySelector("#content").innerHTML = this.props.data;
    }

    render() {

        return( 
            <div className = "m-case-study-page-content">
                <div id = "content">

                </div>
            </div>
        )
    }
}

export default CaseStudyPageContent;