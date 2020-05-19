import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from 'components/Layout';
import InteriorHero                   from 'components/molecules/InteriorHero';
import ImageIllustration              from 'static/img/careers/jobs_illustration.png';

const CareerDetail = ({ data }) => {
  const postHtml                  = data.post.html;
  const postData                  = data.post.frontmatter;
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
      data                  = { postData }
      pageClassName         = "p-careers -detail"
      pageTitle             = { `Careers / ${postData.function}` }
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <main className = "p-interior-page" aria-label="Main content">
        <InteriorHero
          image            = { ImageIllustration }
          title            = { postData.title }
          subTitle         = { postData.description }
          modifier         = { "-careers -detail -interior" } />
        <section className="p-careers__content o-rhythm__container" aria-label="Career post content">
          <div className="o-rhythm__row">
            <div
              className = "p-careers__content__details"
              dangerouslySetInnerHTML={{
                __html: postHtml
              }}>
            </div>
          </div>
          <div className="o-rhythm__row">
            <div className="p-careers__content__link">
              <a
                href   = { postData.applicationUrl }
                target = "_blank">> apply for this position</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}


// Exports
// --------------------------------------------------------

export default CareerDetail;

export const pageQuery = graphql`
  query CareerDetailQuery($id: String) {
    post: markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        function
        description
        applicationUrl
        seo {
          metaDescription
          metaTitle
          socialShareCopy
        }
      }
    }
  }
`