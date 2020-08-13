import React from 'react';
import { graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Layout from 'components/Layout';
import InteriorHero from 'components/molecules/InteriorHero';
import CareerList from 'components/organisms/CareerList';
import CoreValueList from 'components/organisms/CoreValueList';
import PerkList from 'components/organisms/PerkList';
import ImageCollaboration from 'static/img/careers/collaboration.jpg';
import ImageCollage from 'static/img/careers/collage.jpg';
import ImageDevelopment from 'static/img/careers/development.jpg';
import ImageHero from 'static/img/careers/grey_x_bg.png';
import ImageGreyDots from 'static/img/careers/grey_dots.png';

const scrollToPositions = (e) => {
  e.preventDefault();
  scrollTo("#available-positions");
};

const CareersPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
    <Layout
      pageTitle="Careers"
      data={pageData}
      pageClassName="p-careers"
      showFooterDividerLine={true}>
      <main className="p-interior-page">
        <InteriorHero
          image={ImageHero}
          title={pageData.title}
          subTitle={pageData.subTitle}
          modifier={"-careers -interior"}>
          <a href="#available-positions" onClick={(e) => scrollToPositions(e)}>view current job positions</a>
        </InteriorHero>
        <section className="p-careers__collage o-rhythm__container">
          <img src={ImageGreyDots} alt="" aria-hidden="true" />
          <img src={ImageCollage} alt="" aria-hidden="true" />
        </section>
        <section id="main-content" className="o-rhythm__container">
          <div className="p-careers__values">
            <div className="p-careers__heading">Our Values</div>
            <h3>{pageData.valuesTitle}</h3>
            <p>{pageData.valuesText}</p>
          </div>
        </section>
        <section className="o-rhythm__container">
          <CoreValueList />
        </section>
        <section className="p-careers__full-bleed">
          <img src={ImageCollaboration} alt="Cross functional collaboration in the River Room" />
        </section>
        <section className="p-careers__perks o-rhythm__container">
          <div className="o-rhythm__row">
            <h3>andperks</h3>
          </div>
          <PerkList />
        </section>
        <section className="p-careers__full-bleed">
          <img src={ImageDevelopment} alt="Cross functional pairing between design and engineering" />
        </section>
        <section id="available-positions" className="p-careers__positions o-rhythm__container">
          <img src={ImageGreyDots} alt="" aria-hidden="true" />
          <CareerList
            heading="join us">
            We are always searching for passionate, curious people to join our teams. <a href="mailto:jobs@andculture.com">Reach out to
            us</a> and let us know what you're really good at — and what you love to do!
          </CareerList>
        </section>
        <section className="p-careers__amazing o-rhythm__container">
          <div className="o-rhythm__row">
            <p>
              {pageData.footerTaglineText}
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
        valuesTitle
        valuesText
        joinUsText
        footerTaglineText
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
