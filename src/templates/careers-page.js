import React              from 'react';
import { graphql }        from 'gatsby';
import Layout             from 'components/Layout';
import InteriorHero       from 'components/molecules/InteriorHero';
import Collage            from 'static/img/careers/collage.jpg';
import InteriorHeroImage  from 'static/img/careers/grey_x_bg.png';
import GreyDots           from 'static/img/careers/grey_dots.png';

const CareersPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
      <Layout
        pageTitle             = "Careers"
        data                  = { pageData }
        pageClassName         = "p-careers"
        showFooterDividerLine = { true }>
        <main className = "p-interior-page">
          <InteriorHero
            image            = { InteriorHeroImage }
            title            = { pageData.title }
            secondaryTitle   = { pageData.secondaryTitle }
            subTitle         = { pageData.subTitle }
            modifier         = { "-careers -interior" }>
            <a href="#">view current job positions</a>
          </InteriorHero>
          <section className = "p-careers__collage o-rhythm__container">
            <img src={ GreyDots } alt="" aria-hidden="true" />
            <img src={ Collage } alt="" aria-hidden="true" />
          </section>
          <section className = "o-rhythm__container">
            <div className="p-careers__values">
              <div className="p-careers__heading">Our Values</div>
              <h3>what drives us</h3>
              <p>
                We’re passionate about designing and engineering unique 
                experiences. When we do, we’re problem-solving for people, 
                and that makes a real difference for the world as well as 
                for our partners. And when you do all of this at andculture, 
                you’re not just another person to help fill a role. You’re a 
                member of a team — and we value your unique experience, too, 
                from work-life balance to career growth.
              </p>
            </div>
          </section>
        </main>
      </Layout>
  )
}

export default CareersPage;

export const pageQuery = graphql`
  query CareersPage {
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
