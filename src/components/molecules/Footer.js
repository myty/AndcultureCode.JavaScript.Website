import React               from 'react';
import logo                from '../../../static/img/ac_footer_wordmark.svg';
import IconSocialTwitter   from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn  from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook  from 'components/atoms/IconSocialFacebook';
import IconSocialInstagram from 'components/atoms/IconSocialInstagram';
import IconSocialGithub    from 'components/atoms/IconSocialGithub';
import IconSocialDribbble  from 'components/atoms/IconSocialDribbble';

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let footerClassName = this.props.showDividerLine ? "-divider" : "";

    return (
      <div className = {`m-footer ${footerClassName}`}>
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "m-footer__left o-rhythm__col -span-six">
              <a href="/">
                <img src = { logo } alt = "andculture" />
              </a>
            </div>
            <div className = "m-footer__right o-rhythm__col -span-six">
              <div className = "m-footer__contact">
                <a href="tel:7172332881">717.233.2881</a>
              </div>
              <div className = "m-footer__social">
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
        </div>
      </div>
    )
  }
}

export default Footer
