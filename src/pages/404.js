import React from 'react';
import Layout from '../components/Layout';


const NotFoundPage = () => (
  <Layout>
    <div className = "p-interior-page">
      <div className = "o-hero">
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "o-hero__top">
              <div className = "o-hero__titles">
                <h1>Sorry you’re more lost than a DoorDash driver trying to find our office. </h1>
              </div>
            </div>
            <div className = "o-hero__subtitles">
              <h3>Email <a href="mailto:hello@andculture.com" className="-inline">hello@andculture.com</a> with a specific question</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
