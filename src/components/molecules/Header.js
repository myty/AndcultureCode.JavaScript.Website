import React from 'react'; 
import logo from '../../../static/img/ac_Logo.svg';
import wordmark from '../../../static/img/ac-wordmark.svg'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <header className = "m-header">
          <div className = "o-rhythm__container -fluid">
            <a 
              href      = "/" 
              className =  "m-header__logo">
              <img src = { logo } alt="andculture" />
            </a>
            <nav 
              className  = "m-header__navigation" 
              role       = "navigation" 
              aria-label = "main-navigation">
              <a href="/contact"><span></span>contact</a>
            </nav>
          </div>
        </header>
        <div className = "m-header__title">
          <img src = { wordmark } alt="andculture" />
        </div>
      </div>
     
    )
  }
}

export default Header
