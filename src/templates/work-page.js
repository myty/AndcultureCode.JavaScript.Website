import React              from 'react';
import { graphql }        from 'gatsby';
import Layout             from 'components/Layout';
import InteriorHero       from 'components/molecules/InteriorHero';
import WorkList           from 'components/organisms/WorkList';

const WorkPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
      <Layout
        pageTitle             = "Work"
        data                  = { pageData }
        pageClassName         = "p-work"
        showFooterDividerLine = { true }>
        <main className = "p-interior-page">
          <InteriorHero
            title            = { pageData.title }
            subTitle         = { pageData.subTitle }
            modifier         = { "-work -interior" } />
          <div className="o-rhythm__container">
            <WorkList />
          </div>
        </main>
      </Layout>
  )
}

export default WorkPage;

export const pageQuery = graphql`
  query WorkPage {
    markdownRemark(frontmatter: { templateKey: { eq: "work-page" } }) {
      frontmatter {
        title
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
