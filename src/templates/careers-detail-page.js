import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from 'components/Layout';
import 'resize-observer-polyfill';

export const CareerDetailTemplate = (props) => {
  return (
    <article>
        <header>
        </header>
        <section className="o-rhythm__row">
            <div
                dangerouslySetInnerHTML={{
                __html: props.html
                }}>
            </div>
        </section>
        <footer className="o-rhythm__row">

        </footer>
    </article>
  );
}

const CareerDetail = ({ data }) => {
  const detailHtml                = data.post.html;
  const detailProperties          = data.post.frontmatter;
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
      data                  = { detailProperties }
      pageClassName         = "p-careers -detail"
      pageTitle             = ""
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <main aria-label="Main content">
        <CareerDetailTemplate
          html           = { detailHtml }
          properties     = { detailProperties } />
      </main>
    </Layout>
  )
}


// Exports
// --------------------------------------------------------

export default BlogPost;

export const pageQuery = graphql`
  query CareerDetailQuery($id: String) {
    post: markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        function
        description
        seo {
          metaDescription
          metaTitle
          socialShareCopy
        }
      }
    }
  }
`