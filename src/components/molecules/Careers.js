import React from 'react';

const Careers = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className = "m-careers">
            <div className = "o-rhythm__container">
                <h6 className = "-secondary">Careers</h6>
                <div className = "o-rhythm__row">
                    <div className = "m-careers__left">
                        <h2>join the team</h2>
                    </div>
                    <div className = "m-careers__right">
                        <a href="" className = "a-button -large">
                            <span>senior developer</span>
                        </a>
                        <a href="" className = "a-button -large">
                            <span>senior designer</span>
                        </a>
                        <a href="" className = "a-button -large">
                            <span>client advisor</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Careers
