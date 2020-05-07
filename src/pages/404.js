import React from 'react';
import Layout from '../components/Layout';


const NotFoundPage = () => (
  <Layout>
    <div className = "p-interior-page -four-o-four">
      <div className = "o-hero -four-o-four">
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "o-hero__top">
              <div className = "o-hero__titles">
                <h1>Error 404</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = "o-rhythm__container">
        <div className = "o-rhythm__row">
          <div className = "-four-o-four__copy">
            <p>Sorry, you’re more lost than a DoorDash driver trying to find our office. You can try returning to the <a href="/" className="-inline -content">homepage</a>, or <a href="/contact" className="-inline -content">contact us</a> with a specific question.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
