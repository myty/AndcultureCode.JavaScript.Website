import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import AboutHero from 'components/molecules/AboutHero';
import DepartmentList from 'components/organisms/DepartmentList';
import Team from 'components/organisms/Team';

import '../assets/scss/app.scss';

const AboutPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
    <Layout
      pageTitle="About"
      data={pageData}
      pageClassName="p-about"
      showFooterDividerLine={false}
    >
      <main className="p-interior-page p-about">
        <AboutHero
          title={pageData.title}
          subTitle={pageData.secondaryTitle}
          introTextOne={pageData.introTextOne}
          introTextTwo={pageData.introTextTwo}
          image={pageData.heroImage.childImageSharp.fluid.src}
          modifier={""}
        />
        <DepartmentList />
        <Team />
      </main>
    </Layout>
  );
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
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
