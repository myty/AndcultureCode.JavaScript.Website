import React from 'react';
import logo from '../../../static/img/ac_Logo.svg';
import wordmark from '../../../static/img/ac-wordmark.svg';

const Header = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: null,
    };
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  _isMobile() {
    if (this.state.windowWidth < 1024) {
      return true;
    }
    return false;
  }

  render() {
    let opacity = 0;
    let titleClass = "m-header__title";

    if (this._isMobile()) {
      const fadeBegin = 500;
      const fadeFinish = 800;

      const offset = this.props.scrollTop
      opacity = 1;
      if (offset <= fadeBegin) {
        opacity = 0;
      } else if (offset <= fadeFinish) {
        opacity = 0 + offset / fadeFinish;
      }
    }

    if (this.props.pageTitle === "home") {
      titleClass += " -home";
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
        <div className = { titleClass }>
            <div className="m-header__page-title">{this.props.pageTitle}</div>
            <img src={wordmark} alt="andculture" />
        </div>
      </div>
    )
  }
}

export default Header;
