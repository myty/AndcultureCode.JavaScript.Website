import React, { useEffect, useState } from 'react';
import { graphql, Link }              from 'gatsby';
import Layout                         from 'components/Layout';
import IconSocialTwitter              from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn             from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook             from 'components/atoms/IconSocialFacebook';
import IconSocialMail                 from 'components/atoms/IconSocialMail';
import IconSocialLink                 from 'components/atoms/IconSocialLink';
import BlogAuthor                     from 'components/organisms/BlogAuthor';

export const BlogPostTemplate = ({ author, html, nextPostUrl, properties, url }) => {
  const postBackgroundStyle = {
      background: "url('" + properties.postImage.image.childImageSharp.fluid.src + "') no-repeat left top / 100%"
  };

  const encodedUrl = `https://www.andculture.com/${encodeURI(url)}`;

  return (
    <article
      className = "p-blog__background"
      style     = { postBackgroundStyle }>
        <div className="p-blog__background__gradient" aria-hidden="true"></div>
        <div className="p-blog__background__wrapper o-rhythm__container">
          <header className="o-rhythm__row">
            <section>
              <h1>{ properties.title }</h1>
              <time>{ properties.date }</time>
              <BlogAuthor
                author     = { author }
                mobileOnly = { true } />
              <h2>{ properties.headline }</h2>
            </section>
            <aside>
              <BlogAuthor author={ author } />
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
              <a
                href       = {`mailto:?to=&body=${encodedUrl}&subject=andculture%20blog%20post`}
                target     = "_blank"
                aria-label = "Share on Twitter"
                rel        = "noopener">
                <IconSocialMail />
              </a>
              <a
                href       = {`https://twitter.com/intent/tweet?text=${encodedUrl}&via=andculture`}
                target     = "_blank"
                aria-label = "Share on Twitter"
                rel        = "noopener">
                <IconSocialLink />
              </a>
              <a
                href       = {`https://twitter.com/intent/tweet?text=${encodedUrl}&via=andculture`}
                target     = "_blank"
                aria-label = "Share on Twitter"
                rel        = "noopener">
                <IconSocialTwitter />
              </a>
              <a
                href       = {`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&source=andculture.com`} 
                target     = "_blank"
                aria-label = "Share on LinkedIn"
                rel        = "noopener">
                <IconSocialLinkedIn />
              </a>
              <a
                href       = {`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target     = "_blank"
                aria-label = "Share on Facebook"
                rel        = "noopener">
                <IconSocialFacebook />
              </a>
            </section>
            <nav>
              <Link to="/blog/">Back to blog</Link>
              <Link to={ nextPostUrl }>next article</Link>
            </nav>
          </footer>
        </div>
    </article>
  );
}

const BlogPost = ({ data }) => {
  const postHtml                  = data.post.html;
  const postProperties            = data.post.frontmatter;
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
        author      = { _getAuthor(data.authors, postProperties.author) }
        html        = { postHtml }
        nextPostUrl = { _getNextPostUrl(data.posts, data.post.id) }
        properties  = { postProperties }
        url         = { data.post.fields.slug } />
    </Layout>
  )
}


// Private Methods
// --------------------------------------------------------

const _getAuthor = (authors, authorName) => {
  const author = authors.edges
                  .find(author => author.node.frontmatter.name === authorName);

  if (!author) {
    return null;
  }

  return author.node.frontmatter;
};

const _getNextPostUrl = (posts, blogPostId) => {
  // Get the next Url
  let nextPostUrl   = "";
  const currentPost = posts.edges.find(blogPost => blogPost.node.id === blogPostId);

  if (currentPost) {
    nextPostUrl = currentPost.next ? currentPost.next.fields.slug : posts.edges[0].node.fields.slug;
  }
};


// Exports
// --------------------------------------------------------

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    posts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
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
                  fluid {
                    src
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
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
        }
      }
    }
    post: markdownRemark(id: {eq: $id}) {
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
              fluid {
                src
              }
            }
          }
        }
        date(formatString: "MM.DD.YY")
        featuredColor
        seo {
          metaDescription
          metaTitle
        }
      }
      fields {
        slug
      }
    }
    authors: allMarkdownRemark (
      filter: {frontmatter: {createPage: {eq: false}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            name
            easterEgg
            socialLinks {
              platform
              url
            }
            authorPhoto {
              description
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`