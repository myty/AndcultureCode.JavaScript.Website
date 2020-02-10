import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'

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
    <Layout>
      <IndexPageTemplate
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle }
      />
      <CaseStudyList/>
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
