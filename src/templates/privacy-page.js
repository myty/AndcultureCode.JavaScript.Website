import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from 'components/Layout';
import ContactHeroGraphic             from 'static/img/contact/contact_hero_graphic.png';
import HeroBluePaint                  from 'static/img/contact/blue_paint.png';
import InteriorHero                   from 'components/molecules/InteriorHero';
import '../assets/scss/app.scss';

export const PrivacyPageTemplate = ({
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
        <PrivacyPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
          modifier       = '-privacy'
        />
        <main id="main-content" aria-label="Main content">
          <article>
              <div className="o-rhythm__container">
                <div className="o-rhythm__row">
                  <div className="p-interior-page__content"
                    dangerouslySetInnerHTML={{
                      __html: html
                    }}>
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
