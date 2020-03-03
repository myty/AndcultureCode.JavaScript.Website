import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../assets/scss/app.scss';
import ContactHeroGraphic from '../../static/img/contact/contact_hero_graphic.png';
import HeroBluePaint from '../../static/img/contact/blue_paint.png';
import InteriorHero from '../components/molecules/InteriorHero';

export const CareersPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <InteriorHero
      backgroundImages = { [ContactHeroGraphic, HeroBluePaint] }
      title          = { title }
      secondaryTitle = { secondaryTitle }
      subTitle       = { subTitle } />
)

const CareersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle = "careers" hideNavigation = { true }>
      <div className = "p-interior-page">
        <CareersPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
      </div>
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
      }
    }
  }
`
