import React              from 'react';
import { graphql }        from 'gatsby';
import Layout             from '../components/Layout';
import ContactHeroGraphic from 'static/img/contact/contact_hero_graphic.png';
import HeroBluePaint      from 'static/img/contact/blue_paint.png';
import InteriorHero       from 'components/molecules/InteriorHero';

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
          <CareersPageTemplate
            title          = { post.frontmatter.title }
            secondaryTitle = { post.frontmatter.secondaryTitle }
            subTitle       = { post.frontmatter.subTitle }
            modifier       = '-contact'
          />
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
