import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { graphql, Link }                                       from 'gatsby';
import Layout                                                  from 'components/Layout';
import IconSocialTwitter                                       from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn                                      from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook                                      from 'components/atoms/IconSocialFacebook';
import IconSocialMail                                          from 'components/atoms/IconSocialMail';
import IconSocialLink                                          from 'components/atoms/IconSocialLink';
import BlogAuthor                                              from 'components/organisms/BlogAuthor';
import useWindowDimensions                                     from 'utils/windowDimensionsHook';

export const BlogPostTemplate = (props) => {
  const properties                                      = props.properties;
  const contentRef                                      = useRef();
  const headerRef                                       = useRef();
  const backgroundRef                                   = useRef();
  const [headerDimensions, setHeaderDimensions]         = useState({ width:0, height: 0 });
  const [backgroundDimensions, setBackgroundDimensions] = useState({ width:0, height: 0 });
  const windowDimensions                                = useWindowDimensions();
  const encodedUrl                                      = `https://www.andculture.com/${encodeURI(props.url)}`;

  // Set the background image for the blog post background
  const postBackgroundStyle = {
      background: "url('" + properties.postImage.image.childImageSharp.fluid.src + "') no-repeat left top"
  };

  // Get the dimensions of the header section of the content component
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderDimensions({
        width: headerRef.current.offsetWidth,
        height: headerRef.current.offsetHeight
      });
    }

    if (backgroundRef.current) {
      setBackgroundDimensions({
        width: backgroundRef.current.offsetWidth,
        height: backgroundRef.current.offsetHeight
      });
    }
  }, []);

  // Manipulating the page based on the current scroll position
  // in order to create smooth transitions.
  let contentClassName = "";

  if (props.scrollTop >= 1) {
    contentClassName = "-opaque";
  }

  if (headerRef && headerRef.current) {
    //const contentPosition = windowDimensions.height - headerRef.current.offsetHeight;

    if (props.scrollTop >= contentRef.current.offsetTop) {
      postBackgroundStyle.position = "absolute";
      postBackgroundStyle.top      = contentRef.current.offsetTop;
    } else {
      postBackgroundStyle.position = "fixed";
      postBackgroundStyle.top      = 0;
    }
  }

  if (backgroundRef && backgroundRef.current) {
    if (props.scrollTop >= contentRef.current.offsetTop + backgroundRef.current.offsetHeight) {
      props.onInvertChange(true);
    } else {
      props.onInvertChange(false);
    }
  }

  return (
    <article className="p-blog__background">
        <div
          className   = "p-blog__background__gradient"
          aria-hidden = "true"
          ref         = { backgroundRef }
          style       = { postBackgroundStyle }>
          <div className="p-blog__background__gradient__top"></div>
          <div className="p-blog__background__gradient__bottom"></div>
        </div>
        <div ref={contentRef} className={`p-blog__background__wrapper ${contentClassName} o-rhythm__container`}>
          <header ref={headerRef} className="o-rhythm__row">
            <section>
              <p>{ properties.category }</p>
              <h1>{ properties.title }</h1>
              <BlogAuthor
                author   = { props.author }
                postDate = { properties.date } />
              {properties.headline &&
                <h2>{ properties.headline }</h2>
              }
            </section>
          </header>
          <main className="o-rhythm__row">
            <section
              dangerouslySetInnerHTML={{
                __html: props.html
              }}>
            </section>
          </main>
          <footer className="o-rhythm__row">
            <section>
              <span className="blog-artifact" aria-hidden="true"></span>
              <a
                href       = {`mailto:?to=&body=${encodedUrl}&subject=andculture%20blog%20post`}
                target     = "_blank"
                aria-label = "Share via Email"
                rel        = "noopener">
                <IconSocialMail />
              </a>
              {/* <a
                href       = {`https://twitter.com/intent/tweet?text=${encodedUrl}&via=andculture`}
                target     = "_blank"
                aria-label = "Share on Twitter"
                rel        = "noopener">
                <IconSocialLink />
              </a> */}
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
              <Link to={ props.nextPostUrl }>next article</Link>
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
  const [pageClass, setPageClass] = useState("");

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // Update the inverted class for the header colors outside
  // of the background image's positioning so it is not white
  // on white.
  const onInvertChange = (invert) => {
    setPageClass(`${invert ? "-inverted" : ""}`)
  };

  return (
    <Layout
      data                  = { postProperties }
      pageClassName         = { `p-blog -post ${pageClass}` }
      pageTitle             = ""
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <BlogPostTemplate
        author         = { _getAuthor(data.authors, postProperties.author) }
        html           = { postHtml }
        nextPostUrl    = { _getNextPostUrl(data.posts, data.post.id) }
        onInvertChange = { onInvertChange }
        properties     = { postProperties }
        scrollTop      = { scrollTop }
        url            = { data.post.fields.slug } />
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

  return nextPostUrl;
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
              socialShareCopy
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
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        date(formatString: "M.DD.YY")
        featuredColor
        seo {
          metaDescription
          metaTitle
          socialShareCopy
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
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
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