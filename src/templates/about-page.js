import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import InteriorHero from 'components/molecules/InteriorHero';

import '../assets/scss/app.scss';

const AboutPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
    <Layout
      pageTitle="About"
      data={pageData}
      pageClassName="p-careers"
      showFooterDividerLine={false}>
      <main className="p-interior-page">
        <InteriorHero
          title={pageData.title}
          subTitle={pageData.subTitle}
          modifier={"-interior"} />
      </main>
    </Layout>
  )
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
