import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../assets/scss/app.scss';
import ContactHeroGraphic from '../../static/img/contact/contact_hero_graphic.png';
import HeroBluePaint from '../../static/img/contact/blue_paint.png';
import InteriorHero from '../components/molecules/InteriorHero';

export const AboutPageTemplate = ({
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

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle = "about" hideNavigation = { true }>
      <div className = "p-interior-page">
        <AboutPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
      </div>
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
        metaTitle
        metaDescription
        socialDescription
      }
    }
  }
`
