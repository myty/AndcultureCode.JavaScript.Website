import React, { useEffect, useState } from 'react';
import { graphql, Link }              from 'gatsby';
import Layout                         from '../components/Layout';

export const BlogPostTemplate = ({ html, properties }) => {
  const postBackgroundStyle = {
      background: "url('" + properties.postImage.image.childImageSharp.fluid.src + "') no-repeat left top / 100%"
  };

  return (
    <article
      className = "p-blog__background"
      style     = { postBackgroundStyle }>
        <div className="p-blog__background__gradient" aria-hidden="true"></div>
        <div className="p-blog__background__wrapper o-rhythm__container">
          <header className="o-rhythm__row">
            <section>
              <h1>{ properties.title }</h1>
              <h2>{ properties.headline }</h2>
            </section>
            <aside>
              {/* Author Goes Here */}
            </aside>
          </header>
          <main className="o-rhythm__row">
            <section
              dangerouslySetInnerHTML={{
                __html: html
              }}>
            </section>
          </main>
          <footer className="o-rhythm__row">
            <section>
              <span className="blog-artifact" aria-hidden="true"></span>
              <a href="https://twitter.com/andculture/" target="_blank" aria-label="Share on Twitter">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><path d="M17.7,3.39A7.44,7.44,0,0,1,15.61,4,3.6,3.6,0,0,0,17.2,2a7.27,7.27,0,0,1-2.3.88A3.62,3.62,0,0,0,8.63,5.32a3.68,3.68,0,0,0,.08.82A10.26,10.26,0,0,1,1.23,2.35,3.65,3.65,0,0,0,2.35,7.2,3.5,3.5,0,0,1,.71,6.75v0a3.66,3.66,0,0,0,2.9,3.57,3.58,3.58,0,0,1-.95.12A3.08,3.08,0,0,1,2,10.41a3.65,3.65,0,0,0,3.39,2.53,7.27,7.27,0,0,1-4.5,1.55A6.26,6.26,0,0,1,0,14.44a10.19,10.19,0,0,0,5.57,1.63A10.25,10.25,0,0,0,15.89,5.74c0-.16,0-.31,0-.47A7.39,7.39,0,0,0,17.7,3.39Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/andculture/" target="_blank" aria-label="Share on LinkedIn">
                <svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><path d="M17.67,10.71v6.38H14v-6c0-1.49-.54-2.51-1.88-2.51A2,2,0,0,0,10.19,10a2.73,2.73,0,0,0-.12.9v6.22H6.37S6.42,7,6.37,6h3.7V7.54s0,0,0,0h0v0A3.67,3.67,0,0,1,13.41,5.7c2.43,0,4.26,1.59,4.26,5ZM2.5.59A1.93,1.93,0,0,0,.41,2.52a1.91,1.91,0,0,0,2,1.92h0A1.93,1.93,0,1,0,2.5.59ZM.63,17.09H4.32V6H.63Z"/></svg>
              </a>
              <a href="https://www.facebook.com/andculture/" target="_blank" aria-label="Share on Facebook">
                <svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><defs></defs><path d="M9.05.59A8.51,8.51,0,0,0,7.72,17.51v-6H5.56V9.1H7.72V7.23a3,3,0,0,1,3.22-3.31,13.48,13.48,0,0,1,1.9.16v2.1H11.77a1.23,1.23,0,0,0-1.39,1.33V9.1h2.36l-.38,2.46h-2v6A8.51,8.51,0,0,0,9.05.59Z"/></svg>
              </a>
            </section>
            <nav>
              <Link to="/blog/">Back to blog</Link>
              <Link to="/blog/brewing-culture/">next article</Link>
            </nav>
          </footer>
        </div>
    </article>
  );
}

const BlogPost = ({ data }) => {
  const postHtml                  = data.markdownRemark.html;
  const postProperties            = data.markdownRemark.frontmatter;
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
      data                  = { postProperties }
      pageClassName         = "p-blog"
      pageTitle             = "blog"
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <BlogPostTemplate 
        html       = { postHtml }
        properties = { postProperties } />
    </Layout>
  )
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        author
        category
        headline
        title
        postImage {
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        date
        featuredColor
        seo {
          metaDescription
          metaTitle
        }
      }
    }
  }
`