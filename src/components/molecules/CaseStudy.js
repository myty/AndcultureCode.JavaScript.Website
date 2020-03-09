import React from 'react';
import CoverTransitionLink from '../organisms/CoverTransitionLink';

const CaseStudy = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };

        this._handleHover            = this._handleHover.bind(this);
        this._handleUnhover          = this._handleUnhover.bind(this);
    }

    _handleHover() {
        this.setState({
            isHovered: true,
        });
    }

    _handleUnhover() {
        this.setState({
            isHovered: false
        });
        
        setTimeout(this._handleUnhoverAnimation, 600);
    }

    render() {
        let caseStudyClass = "m-case-study";
        if (this.state.isHovered) {
            caseStudyClass += " -hovered"
        } 
        if (this.props.post.frontmatter.secondaryLayout) {
            caseStudyClass += " -secondary";
        }
        let caseStudyStyle;
        let linkStyle;
        linkStyle = {
            color:       this.props.post.frontmatter.color,
            borderColor: this.props.post.frontmatter.color,
        }

        if (this.state.isHovered) {
            caseStudyStyle = {
                backgroundColor: this.props.post.frontmatter.color,
            }
        } 

        if (this.state.isHovered) {
            linkStyle = {
                color:       '#ffffff',
                borderColor: '#ffffff',
            }
        }

        return (
            <article className = { caseStudyClass } style = { caseStudyStyle } key = { this.props.post.id } onMouseLeave = { this._handleUnhover }>
                <div className = "m-case-study__block -top"></div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study__image-container">
                        { this.props.post.frontmatter.featuredimage ? (
                        <div className = "m-case-study__image">
                            <img src = { this.props.post.frontmatter.featuredimage.childImageSharp.fluid.src } />
                        </div>
                        ) : null }
                        <div className = "m-case-study__texture">
                            <img src = { this.props.post.frontmatter.texture } />
                        </div>
                    </div>
                    <div className = "m-case-study__content">
                        <div className = "m-case-study__content-inner">
                            <div className = "m-case-study__count">
                                { this.props.count }<span>/{ this.props.total }</span>
                            </div>
                            <h5>{ this.props.post.frontmatter.partnerName }</h5>
                            <p>
                                { this.props.post.frontmatter.title }
                            </p>
                            <CoverTransitionLink
                                onMouseEnter = { this._handleHover }
                                className = "a-button"
                                to        = { this.props.post.fields.slug }
                                style     = { linkStyle }>
                                See How
                            </CoverTransitionLink>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study__block -bottom"></div>
            </article>
        )
    }
}

export default CaseStudy
