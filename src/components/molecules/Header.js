import React from 'react';
import logo from '../../../static/img/ac_Logo.svg';
import wordmark from '../../../static/img/ac-wordmark.svg';

const Header = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { screenWidth: null };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  _isMobile() {
    console.log(this.state.screenWidth);
    if (this.state.screenWidth > 1024) {
      return false;
    }

    return true;
  }

  render() {
    const fadeBegin = 500;
    const fadeFinish = 800;

    const offset = this.props.scrollTop
    let opacity = 1;
    if (offset <= fadeBegin) {
      opacity = 0;
    } else if (offset <= fadeFinish) {
      opacity = 0 + offset / fadeFinish;
    }

    const headerBackgroundStyle = {
      opacity: opacity,
    }

    return (
      <div>
        <header className="m-header">
          <div className = "m-header__background"  style = { headerBackgroundStyle }></div>
          <div className="o-rhythm__container -fluid">
            <a
              href="/"
              className="m-header__logo">
              <img src={logo} alt="andculture" />
            </a>
            { // if
              !this.props.hideNavigation &&
              <nav
                className="m-header__navigation"
                role="navigation"
                aria-label="main-navigation">
                <a href="/contact"><span></span>contact</a>
              </nav>
            }
          </div>
        </header>
        <div className="m-header__title">
          { // if
            this.props.pageTitle != "home" &&
            <div className="m-header__page-title">{this.props.pageTitle}</div>
          }
          { // if
            this.props.pageTitle === "home" &&
            <img src={wordmark} alt="andculture" />
          }
        </div>
      </div>
    )
  }
}

export default Header;
