import React from 'react';

const CareerPosition = class extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <a href = { this.props.post.frontmatter.link } className = "a-button -large">
                <span> { this.props.post.frontmatter.position } </span>
            </a>
        )
    }
}

export default CareerPosition