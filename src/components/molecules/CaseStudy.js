import React from 'react';
import CoverTransitionLink from '../organisms/CoverTransitionLink';
import VisibilitySensor from 'react-visibility-sensor';

const CaseStudy = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false,
            isVisible: false,
            isMobile: true,
            windowWidth: null,
        };

        this._handleHover            = this._handleHover.bind(this);
        this._handleUnhover          = this._handleUnhover.bind(this);
        this._onChange               = this._onChange.bind(this);
    }

    componentDidMount() {
        this.setState({
          windowWidth: window.innerWidth,
        }), () => this._setIsMobile
    }

    _onChange(isVisible) {
        this.setState({
            isVisible: isVisible ? true : false,
        });
    }

    _setIsMobile() {
        if (this.state.windowWidth < 1024) {
            this.setState({
                isMobile: true,
            });
        } else {
            this.setState({
                isMobile: false,
            });
        }
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
        let caseStudyClass = "m-case-study -list";
        if (this.state.isHovered) {
            caseStudyClass += " -hovered"
        }
        if (this.state.isVisible) {
            caseStudyClass += " -visible";
        }
        if (this.props.post.frontmatter.secondaryLayout) {
            caseStudyClass += " -secondary";
        }
        if (this.props.post.frontmatter.modifiedTexture) {
            caseStudyClass += " -modified";
        }
        let caseStudyStyle;
        let linkStyle;
        linkStyle = {
            borderColor: this.props.post.frontmatter.color,
        }

        if (this.state.isHovered || this.state.isVisible) {
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
            <VisibilitySensor onChange = { this._onChange }>
                <article className = { caseStudyClass } style = { caseStudyStyle } key = { this.props.post.id } onMouseLeave = { this._handleUnhover }>
                    <div className = "m-case-study__block -top"></div>
                    <div className = "o-rhythm__container">
                        <div className = "m-case-study__image-container">
                            { this.props.post.frontmatter.homeimage ? (
                            <div className = "m-case-study__image">
                                <img
                                    alt = { this.props.post.frontmatter.title }
                                    src = { this.props.post.frontmatter.homeimage.childImageSharp.fluid.src } />
                            </div>
                            ) : null }
                            <div className = "m-case-study__texture">
                                <img
                                    alt         = { `${this.props.post.frontmatter.partnerName} texture background` }
                                    aria-hidden = "true"
                                    src         = { this.props.post.frontmatter.texture } />
                            </div>
                        </div>
                        <div className = "m-case-study__content">
                            <div className = "m-case-study__content-inner">
                                <div className="m-case-study__header">{ this.props.post.frontmatter.partnerName }</div>
                                <p>
                                    { this.props.post.frontmatter.title }
                                </p>
                                <CoverTransitionLink
                                    aria-label   = { `Check out the case study for ${this.props.post.frontmatter.partnerName}` }
                                    onMouseEnter = { this._handleHover }
                                    className    = "a-button"
                                    to           = { this.props.post.fields.slug }
                                    style        = { linkStyle }>
                                    See How
                                </CoverTransitionLink>
                            </div>
                        </div>
                    </div>
                    <div className = "m-case-study__block -bottom"></div>
                </article>
            </VisibilitySensor>
        )
    }
}

export default CaseStudy
