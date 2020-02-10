import React from 'react'; 

const Header = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="m-header" role="navigation" aria-label="main-navigation">
        Header
      </nav>
    )
  }
}

export default Header
