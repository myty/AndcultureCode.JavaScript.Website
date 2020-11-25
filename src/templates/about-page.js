import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import AboutHero from 'components/molecules/AboutHero';
import DepartmentList from 'components/organisms/DepartmentList';
import TeamSliderContainer from 'components/organisms/TeamSliderContainer';



import { postFingerprint } from '../../lambda/fauna-create';
import Fingerprint2 from '@fingerprintjs/fingerprintjs';

import '../assets/scss/app.scss';

const AboutPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  const [fingerprint, setFingerprint] = useState(false);

  useEffect(() => {
    if (window.requestIdleCallback && fingerprint === false) {
        requestIdleCallback(() => {
            Fingerprint2.get( (components) => {
              // postFingerprint({
              //   visitHistory: [],
              //   userAgent: components[0].value,
              //   webdriver: components[1].value,
              //   language: components[2].value,
              //   screenRes: components[6].value,
              //   timezone: components[9].value,
              //   platform: components[16].value,
              // }, 'about-page');

              setFingerprint(true);
            });
        })
    } else {
        setTimeout( () => {
            Fingerprint2.get((components) => {
             // console.log('set timeout fingerprint',components) // an array of components: {key: ..., value: ...}
            })
        }, 500)
    }

  }, []);
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
        <TeamSliderContainer />
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
