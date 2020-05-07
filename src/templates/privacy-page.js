import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from 'components/Layout';
import '../assets/scss/app.scss';


const PrivacyPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Layout
      pageTitle             = "privacy policy"
      data                  = { frontmatter }
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <div className = "p-interior-page">
        <main id="main-content" aria-label="Main content">
          <article>
              <div className="p-interior-page__wrapper o-rhythm__container">
                <div className="o-rhythm__row">
                  <div className="p-interior-page__content">
                    <h1>Privacy Policy</h1>
                    <div dangerouslySetInnerHTML={{
                      __html: html
                    }}>
                    </div>
                  </div>
                </div>
              </div>
          </article>
        </main>
      </div>
    </Layout>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "privacy-page" } }) {
      html
      frontmatter {
        title
        secondaryTitle
        subTitle
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
