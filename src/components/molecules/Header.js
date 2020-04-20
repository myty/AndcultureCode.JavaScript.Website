import React, { useEffect, useState } from 'react';

export default function Header(props) {
  let headerClassName = "m-header";
  let [width, setWidth] = useState();

  useEffect(() => {
    const getWidth = () => window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      setWidth(getWidth());
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
  }, [width]);

  let opacity = 0;
  let titleClass = "m-header__title";

  if (width < 769) {
    const fadeBegin = 0;
    const fadeFinish = 300;

    const offset = props.scrollTop
    opacity = 1;
    if (offset <= fadeBegin) {
      opacity = 0;
    } else if (offset <= fadeFinish) {
      opacity = 0 + offset / fadeFinish;
    }
  }

  if (props.pageTitle === "home") {
    titleClass += " -home";
  }

  const headerBackgroundStyle = {
    opacity: opacity,
  }

  if (opacity > 0) {
    headerClassName += " -fade";
  }

  return (
    <div>
    <div className={headerClassName}>
      <div className = "m-header__background"  style = { headerBackgroundStyle }></div>
      <div className="o-rhythm__container -fluid">
        <a
          href="/"
          className="m-header__logo">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 47 51" xmlSpace="preserve">
          <g>
            <path className="st0" d="M16.98,29.21c-0.38,4.55,3.01,8.57,7.56,8.95c0.24,0.02,0.47,0.03,0.71,0.03c1.95,0,3.82-0.68,5.33-1.96
              c0.77-0.65,1.4-1.41,1.88-2.26c1.05,0.85,1.77,1.43,1.89,1.53l2.35-2.89c-4.48-3.64-13.04-10.58-13.32-10.81
              c-0.83-0.69-1.26-1.64-1.18-2.62c0.14-1.62,1.57-2.83,3.19-2.7c0.79,0.07,1.5,0.43,2.01,1.04c0.14,0.16,0.25,0.34,0.35,0.52
              l3.15-1.99c-1.06-1.81-2.96-3.09-5.2-3.28c-3.67-0.31-6.91,2.43-7.22,6.1c-0.14,1.66,0.38,3.32,1.41,4.66
              C18.24,24.94,17.17,26.97,16.98,29.21z M20.69,29.52c0.12-1.42,0.87-2.68,2.03-3.45c1.71,1.39,4.4,3.57,6.77,5.5
              c-0.27,0.7-0.72,1.33-1.31,1.83c-0.93,0.79-2.11,1.16-3.33,1.06C22.35,34.24,20.48,32.03,20.69,29.52z"/>
            <path className="st0" d="M40.49,40.49c-0.2,0.2-0.38,0.38-0.59,0.57c-3.86,3.64-8.84,5.62-14.1,5.62c-0.24,0-0.47,0-0.71-0.01
              C13.69,46.28,4.73,36.62,5.11,25.13c0.19-5.57,2.51-10.73,6.55-14.53c4.03-3.8,9.29-5.79,14.81-5.6c5.13,0.17,9.77,2.23,13.28,5.48
              l3.38-2.13C38.88,4.06,33.07,1.33,26.6,1.11C20.05,0.89,13.79,3.25,9,7.77C4.21,12.28,1.45,18.4,1.23,25
              C0.77,38.63,11.42,50.09,24.95,50.54c0.28,0.01,0.56,0.01,0.85,0.01c6.25,0,12.18-2.35,16.76-6.67c0.33-0.31,0.64-0.62,0.95-0.95
              C43.35,42.81,40.66,40.62,40.49,40.49z"/>
          </g>
          </svg>
        </a>
        { // if
          !props.hideNavigation &&
          <nav
            className="m-header__navigation"
            role="navigation"
            aria-label="main-navigation">
            <a href="/contact/"><span></span>contact</a>
          </nav>
        }
      </div>
    </div>
    <div className = { titleClass }>
        <div className="m-header__page-title">{props.pageTitle}</div>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.01 24.94"><defs></defs>
        <path d="M331.18,406.7a5,5,0,0,0,4,1.52,14.91,14.91,0,0,0,3.71-.5l.05,0-.26-4a5.42,5.42,0,0,1-1.53.26,1.63,1.63,0,0,1-1.37-.45c-.29-.32-.51-.68-.51-2.14v-6.13H339v-3.89h-3.71V385.9L330,388.14v3.21h-2.38v3.89H330v6.6C330,404.37,330.34,405.73,331.18,406.7Z" transform="translate(-216.17 -383.28)"/>
        <rect x="102.53" width="5.21" height="24.57"/>
        <path d="M374,391a4.31,4.31,0,0,0-4.05,2.62l0,.06h-.25l0-2.37h-5.21v16.53h5.21v-7.33a5.8,5.8,0,0,1,.88-3.57,3.3,3.3,0,0,1,2.6-1.27,4.59,4.59,0,0,1,2,.41h.1l.3-4.82A4.3,4.3,0,0,0,374,391Z" transform="translate(-216.17 -383.28)"/>
        <path d="M395.18,399.09c0-4.83-3.33-8.08-8.29-8.08-6.16,0-8.93,4.31-8.93,8.59,0,5.24,3.47,8.62,8.83,8.62,4.67,0,6.94-1.9,7.68-2.53l.12-.1-2-2.65a9.52,9.52,0,0,1-5,1.56c-2.53,0-4.17-1.34-4.39-3.6v-.12h11.95C395.13,400.5,395.18,399.74,395.18,399.09Zm-12-1.18v-.12a3.57,3.57,0,0,1,7.13,0v.12Z" transform="translate(-216.17 -383.28)"/>
        <path d="M308.33,405.71l0,2.14h5V391.32h-5.22v8.79c0,2.45-1.07,3.85-2.93,3.85-2.32,0-2.59-1.93-2.59-3.38v-9.26h-5.22v10a8.2,8.2,0,0,0,1.2,5c.67.87,2,1.92,4.71,1.92a6,6,0,0,0,4.8-2.23Z" transform="translate(-216.17 -383.28)"/>
        <path d="M354.2,405.71l0,2.14h5V391.32H354v8.79c0,2.45-1.07,3.85-2.93,3.85-2.33,0-2.59-1.93-2.59-3.38v-9.26H343.3v10a8.2,8.2,0,0,0,1.2,5c.67.87,2,1.92,4.7,1.92A6,6,0,0,0,354,406Z" transform="translate(-216.17 -383.28)"/>
        <path d="M222.14,408.22a6.1,6.1,0,0,0,4.66-2.06l.23-.22.11,1.91h5v-9.34c0-2.61-.59-4.29-2-5.59S226.82,391,224,391a16.39,16.39,0,0,0-7,1.64l1.34,3.32a10.87,10.87,0,0,1,5.08-1.45c2.29,0,3.55,1,3.55,2.8v.48l-4.33.18c-5.79.25-6.41,3.59-6.41,5C216.17,406.61,219.16,408.22,222.14,408.22Zm2-7.58,2.8-.17v2.9l0,0A3.47,3.47,0,0,1,224,405c-1.62,0-2.66-.86-2.66-2.19S222.39,400.71,224.14,400.64Z" transform="translate(-216.17 -383.28)"/>
        <path d="M245.38,395.24c2.49,0,2.7,2.06,2.7,4v8.63h5.21v-9.78c0-4.82-1.91-7.06-6-7.06a5.36,5.36,0,0,0-4.77,2.67l0,.05h-.25l0-2.41h-5.21v16.53h5.21v-8.18C242.28,396.69,243.29,395.24,245.38,395.24Z" transform="translate(-216.17 -383.28)"/>
        <path d="M288.37,404a4.4,4.4,0,0,1-.07-8.79,7,7,0,0,1,4.26,1.42l1.12-3.89c-.33-.27-2.28-1.69-6.09-1.69-4.37,0-8.79,3-8.79,8.62s4.39,8.59,8.72,8.59c3.59,0,5.47-1.21,6.26-1.93l-1.21-3.88A6.67,6.67,0,0,1,288.37,404Z" transform="translate(-216.17 -383.28)"/>
        <path d="M275.14,407.85V383.28h-5.21v10.33l-.21-.3c-.15-.24-1.63-2.3-5.2-2.3-4.6,0-7.81,3.53-7.81,8.59s3.21,8.62,7.81,8.62a6.51,6.51,0,0,0,5.41-2.5l0,0,.29-.1,0,2.26ZM266.08,404c-2.39,0-4.06-1.83-4.06-4.46s1.67-4.46,4.06-4.46,4,1.79,4,4.46S268.48,404,266.08,404Z" transform="translate(-216.17 -383.28)"/>
        </svg>
    </div>
  </div>
  );
}

