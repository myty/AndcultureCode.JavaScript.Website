import React                 from 'react';
import IconSocialTwitter     from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn    from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook    from 'components/atoms/IconSocialFacebook';
import IconSocialDribbble    from 'components/atoms/IconSocialDribbble';
import IconSocialGithub      from 'components/atoms/IconSocialGithub';
import IconSocialInstagram   from 'components/atoms/IconSocialInstagram';


// Primary Component
// ------------------------------------

const BlogAuthor = (props) => {
    let className = "";

    if (props.mobileOnly) {
        className = "-mobile-only";
    }

    return (
        <div className={`m-blog-author ${className}`}>
            <div className="m-blog-author__image">
                <img
                    description = { props.author.authorPhoto.description }
                    src         = { props.author.authorPhoto.image.childImageSharp.fluid.src } />
            </div>
            <div className="m-blog-author__details">
                <div className="m-blog-author__name">
                    { props.author.name }
                </div>
                <div className="m-blog-author__position">
                    { props.author.position }
                </div>
                <div className="m-blog-author__links">
                    {props.author.socialLinks.map(link => (
                        _getSocialIconLink(link)
                    ))}
                </div>
            </div>
        </div>
    );
};

const _getSocialIconLink = (link) => {
    let icon = null;

    switch (link.platform.toLowerCase()) {
        case "dribbble":
            icon = <IconSocialDribbble />;
            break;
        case "facebook":
            icon = <IconSocialFacebook />;
            break;
        case "github":
            icon = <IconSocialGithub />;
            break;
        case "instagram":
            icon = <IconSocialInstagram />;
            break;
        case "linkedin":
            icon = <IconSocialLinkedIn />;
            break;
        case "twitter":
            icon = <IconSocialTwitter />;
            break;
    }

    return (
        <a
            aria-label = { `Share on ${link.platform}` }
            href       = { link.url }
            target     = "_blank"
            rel        = "noopener">{ icon }</a>
    );
};


// Exports
// ------------------------------------

export default BlogAuthor;