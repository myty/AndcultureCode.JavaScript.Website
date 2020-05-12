import React       from 'react';
import { graphql } from 'gatsby';
import Layout      from '../components/Layout';

export const CareersPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
  modifier
}) => (
  <InteriorHero
    backgroundImages = { [{ image: ContactHeroGraphic, alt: "Creative swirls and artifacts" }, { image: HeroBluePaint , alt: "Hand stroked blue paint"}] }
    title            = { title }
    secondaryTitle   = { secondaryTitle }
    subTitle         = { subTitle }
    modifier         = { modifier } />
)

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
      <Layout
        pageTitle = { post.frontmatter.partnerName }
        data      = { post.frontmatter }>
        <main className = "p-interior-page">
        </main>
      </Layout>
  )
}

export default CareersPage;

export const pageQuery = graphql`
  query CareersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "careers-page" } }) {
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
