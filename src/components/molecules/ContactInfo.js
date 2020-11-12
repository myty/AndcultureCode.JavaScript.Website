import React               from 'react';
import IconSocialTwitter   from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn  from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook  from 'components/atoms/IconSocialFacebook';
import IconSocialInstagram from 'components/atoms/IconSocialInstagram';
import IconSocialGithub    from 'components/atoms/IconSocialGithub';
import IconSocialDribbble  from 'components/atoms/IconSocialDribbble';
import Paragraph           from '../atoms/Paragraph';

const ContactInfo = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className = "m-contact-info">
            <div className = "o-rhythm__container">
                <div className = "o-rhythm__row">
                    <div className = "m-contact-info__address">
                        <div className = "m-contact-info__heading">Location</div>
                        <address className = "-space">
                            <a href = { this.props.mapLink } className = "-inline" target = "_blank" aria-label = "Address for andculture's Harrisburg location">
                                { this.props.streetAddressLineOne }<br />
                                { this.props.streetAddressLineTwo }
                            </a>
                        </address>
                        <div>
                            <a
                                aria-label = { `Phone ${this.props.phoneNumberAccessibility}` }
                                className  = "-inline"
                                href       = {`tel:${this.props.phoneNumber.replace(/\./g, '')}`}>{ this.props.phoneNumber }</a>
                        </div>
                    </div>
                    <div className = "m-contact-info__social">
                        <div className = "m-contact-info__heading">Social</div>
                        <a href="https://www.instagram.com/andculture/" target="_blank" aria-label="Instagram account for andculture">
                            <IconSocialInstagram />
                        </a>
                        <a href="https://dribbble.com/andculture/" target="_blank" aria-label="Dribbble account for andculture">
                            <IconSocialDribbble />
                        </a>
                        <a href="https://www.linkedin.com/company/andculture/" target="_blank" aria-label="LinkedIn account for andculture">
                            <IconSocialLinkedIn />
                        </a>
                        <a href="https://twitter.com/andculture/" target="_blank" aria-label="Twitter account for andculture">
                            <IconSocialTwitter />
                        </a>
                        <a href="https://www.facebook.com/andculture/" target="_blank" aria-label="Facebook account for andculture">
                            <IconSocialFacebook />
                        </a>
                        <a href="https://github.com/AndcultureCode/" target="_blank" aria-label="GitHub account for andculture">
                            <IconSocialGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className = "m-contact-info__map" aria-hidden="true">
                <iframe src="https://snazzymaps.com/embed/222814/" title="Map location for andculture"></iframe>
            </div>
            <div className = "o-rhythm__container">
                <div className = "m-contact-info__directions">
                    <div className = "m-contact-info__heading">Directions</div>
                    <Paragraph>{ this.props.directions }</Paragraph>
                </div>
            </div>
        </div>
    )
  }
}

export default ContactInfo;
