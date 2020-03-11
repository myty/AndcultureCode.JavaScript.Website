import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from '../components/Layout'
import CaseStudyList                  from '../components/organisms/CaseStudyList'
import ContactForm                    from '../components/organisms/ContactForm'
import HomePageAnimation              from '../components/organisms/HomeAnimation'
import EasterEgg                      from '../components/atoms/EasterEgg';
import '../assets/scss/app.scss'

import { gsap } from 'gsap';
import { TimelineMax, Power1 } from 'gsap';
import Hero from '../components/molecules/Hero';
gsap.registerPlugin(TimelineMax);
gsap.registerPlugin(Power1);

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
  scrollTop,
}) => (
    <div className="p-home">
      <HomePageAnimation />
      <Hero
        scrollTop={scrollTop}
        title={title}
        secondaryTitle={secondaryTitle}
        subTitle={subTitle} />
    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
      pageTitle = "home"
      scrollTop = { scrollTop }>
      <IndexPageTemplate
        scrollTop      = { scrollTop }
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle } />
      <CaseStudyList />
      <ContactForm />
      <EasterEgg />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        secondaryTitle
        subTitle
      }
    }
  }
`
