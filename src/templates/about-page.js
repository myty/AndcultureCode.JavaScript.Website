import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import AboutHero from 'components/molecules/AboutHero';

import '../assets/scss/app.scss';

const AboutPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
    <Layout
      pageTitle="About"
      data={pageData}
      pageClassName="p-careers"
      showFooterDividerLine={false}>
      <main className="p-interior-page p-about">
        <AboutHero
          title={pageData.title}
          subTitle={pageData.secondaryTitle}
          modifier={""} />
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
        introTextOne
        introTextTwo
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
