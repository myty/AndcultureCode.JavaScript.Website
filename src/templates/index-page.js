import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'
import ContactForm from '../components/organisms/ContactForm'
import HomePageAnimation from '../components/organisms/HomeAnimation'
import EasterEgg from '../components/atoms/EasterEgg'

import { gsap } from 'gsap';
import { TimelineMax, Power1 } from 'gsap';
import Hero from '../components/molecules/Hero'
gsap.registerPlugin(TimelineMax)
gsap.registerPlugin(Power1)

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
    <div>
      <HomePageAnimation />
      <Hero title = { title } secondaryTitle = { secondaryTitle } subTitle = { subTitle } />
    </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle }
      />
      <CaseStudyList/>
      <ContactForm/>
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
