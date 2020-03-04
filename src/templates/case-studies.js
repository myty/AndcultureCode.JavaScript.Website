import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CaseStudyHero from '../components/molecules/CaseStudyHero';
import CaseStudyPageContent from '../components/molecules/CaseStudyPageContent';

export const CaseStudyTemplate = ({
  caseStudyContent,
  html
}) => {
  return (
    <div>
      <CaseStudyHero
          color         = { caseStudyContent.color }
          title         = { caseStudyContent.title }
          featuredimage = { caseStudyContent.featuredimage }
          tags          = { caseStudyContent.tags }/>
      <CaseStudyPageContent data = { html } />
    </div>
  )
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
      <Layout pageTitle = "pinnaclehealth pulse" hideNavigation = { true }>
        <div className = "p-interior-page">
          <CaseStudyTemplate
            html = { post.html }
            caseStudyContent = { post.frontmatter }/>
        </div>
      </Layout>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        color
        tags
      }
    }
  }
`
