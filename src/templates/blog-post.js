import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from '../components/Layout';
import BlogFeatured                   from '../components/molecules/BlogFeatured';
import BlogList                       from '../components/organisms/BlogList';

export const BlogPostTemplate = ({
    title,
    secondaryTitle,
    subTitle,
    scrollTop,
  }) => (
      <div>
        <BlogFeatured />
        <div className="o-rhythm__container">
          <BlogList />
        </div>
      </div>
    )

  const BlogPost = ({ data }) => {
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
        data                  = { frontmatter }
        pageTitle             = "blog post"
        scrollTop             = { scrollTop }
        showFooterDividerLine = { true }>
        <BlogPostTemplate
          scrollTop      = { scrollTop }
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle } />
      </Layout>
    )
  }

export default BlogPost;

// export const pageQuery = graphql`
//   query BlogPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "blog-page" } }) {
//       frontmatter {
//         title
//         secondaryTitle
//         subTitle
//         metaTitle
//         metaDescription
//         socialDescription
//       }
//     }
//   }
// `