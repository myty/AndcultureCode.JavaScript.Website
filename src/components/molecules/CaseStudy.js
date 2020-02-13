import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import CoverTransitionLink from '../organisms/CoverTransitionLink';

const CaseStudy = class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "m-case-studies__container o-rhythm__col -span-six" key = { this.props.post.id }>
                <article className = "m-case-studies">
                    <div>
                        { this.props.count }/{ this.props.total }
                    </div>
                    { this.props.post.frontmatter.featuredimage ? (
                    <div className = "m-case-studies__image">
                        <PreviewCompatibleImage imageInfo = {{ image: this.props.post.frontmatter.featuredimage, alt: `featured image thumbnail for post ${ this.props.post.frontmatter.title }`, }} />
                    </div>
                    ) : null }
                    <p className = "">
                        <CoverTransitionLink
                            className = ""
                            direction = 'up'
                            to        = { this.props.post.fields.slug }>
                            { this.props.post.frontmatter.title }
                        </CoverTransitionLink>
                        <span> &bull; </span>
                        <span className = "">
                            { this.props.post.frontmatter.description }
                        </span>
                        </p>
                    <p>
                        { this.props.post.excerpt }
                        <CoverTransitionLink
                            className = ""
                            direction = 'up'
                            to        = { this.props.post.fields.slug }>
                            See How
                        </CoverTransitionLink>
                    </p>
                </article>
            </div>
        )
    }
}

export default CaseStudy
