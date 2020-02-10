import React from 'react'; 
import PreviewCompatibleImage from '../PreviewCompatibleImage'; 
import { Link } from 'gatsby'; 

const CaseStudy = class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "m-case-studies__container" key = { this.props.post.id }>
                <article className = "m-case-studies">
                    <div>
                        { this.props.post.index }
                    </div>
                    { this.props.post.frontmatter.featuredimage ? (
                    <div className = "m-case-studies__image">
                        <PreviewCompatibleImage imageInfo = {{ image: this.props.post.frontmatter.featuredimage, alt: `featured image thumbnail for post ${ this.props.post.frontmatter.title }`, }} />
                    </div>
                    ) : null }
                    <p className = "">
                        <Link
                            className = ""
                            to        = { this.props.post.fields.slug }>
                            { this.props.post.frontmatter.title }
                        </Link>
                        <span> &bull; </span>
                        <span className = "">
                            { this.props.post.frontmatter.description }
                        </span>
                        </p>
                    <p>
                        { this.props.post.excerpt }
                        <Link 
                            className = "" 
                            to        = { this.props.post.fields.slug }>
                        See How
                        </Link>
                    </p>
                </article>
            </div>
        )
    }
}

export default CaseStudy
