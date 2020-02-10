import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'
import ContactForm from '../components/organisms/ContactForm'
import PageTransition from 'gatsby-plugin-page-transitions';

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <div>
    <div>
      <h1>{ title }</h1>
    </div>
    <div>
      { secondaryTitle }
    </div>
    { subTitle }
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <PageTransition
      defaultStyle={{
        transition: `opacity 300ms ease-in-out`,
        opacity: 0,
      }}
      transitionStyles={{
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
      }}
      transitionTime={500}
    >
      <Layout>
        <IndexPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
        <CaseStudyList/>
        <ContactForm/>
      </Layout>
    </PageTransition>
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
