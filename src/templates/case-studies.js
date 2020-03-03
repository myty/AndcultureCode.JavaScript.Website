import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CaseStudyHero from '../components/molecules/CaseStudyHero';

export const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  featuredimage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <CaseStudyHero
        title          = { title }
        featuredimage = { featuredimage }
        tags          = { tags }/>
    
  )
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <Layout pageTitle = "pinnaclehealth pulse" hideNavigation = { true }>
        <div className = "p-interior-page">
          <CaseStudyTemplate
            title         = { post.frontmatter.title }
            featuredimage = { post.frontmatter.featuredimage } />
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
