import React from 'react';

const Paragraph = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // add breaks between paragraphs
        if (this.props.children != null && typeof(this.props.children) == "string") {
            const newlines = /\s*\n\s*\n\s*/g;
            const content = {
                __html: this.props.children.toString().replace(newlines, "<br/>\n<br/>\n")
            };
            return (
                <p dangerouslySetInnerHTML = { content }></p>
            );
        }

        // return default formatting
        return (
            <p>
                { this.props.children }
            </p>
        )
    }
}

export default Paragraph
