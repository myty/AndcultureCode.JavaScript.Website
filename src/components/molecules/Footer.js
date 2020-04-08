import React               from 'react';
import logo                from '../../../static/img/ac_footer_wordmark.svg';
import IconSocialTwitter   from '../atoms/IconSocialTwitter';
import IconSocialLinkedIn  from '../atoms/IconSocialLinkedIn';
import IconSocialFacebook  from '../atoms/IconSocialFacebook';
import IconSocialInstagram from '../atoms/IconSocialInstagram';
import IconSocialGithub    from '../atoms/IconSocialGithub';
import IconSocialDribbble  from '../atoms/IconSocialDribbble';

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
                <a href="https://www.instagram.com/andculture/" target="_blank">
                  <IconSocialInstagram />
                </a>
                <a href="https://dribbble.com/andculture/" target="_blank">
                  <IconSocialDribbble />
                </a>
                <a href="https://www.linkedin.com/company/andculture/" target="_blank">
                  <IconSocialLinkedIn />
                </a>
                <a href="https://twitter.com/andculture/" target="_blank">
                  <IconSocialTwitter />
                </a>
                <a href="https://www.facebook.com/andculture/" target="_blank">
                  <IconSocialFacebook />
                </a>
                <a href="https://github.com/AndcultureCode/" target="_blank">
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
