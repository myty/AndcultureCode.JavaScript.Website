import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from 'components/Layout';
import ContactForm                    from 'components/organisms/ContactForm';
import ContactInfo                    from 'components/molecules/ContactInfo';
import CustomSlider                   from 'components/molecules/CustomSlider';
import ContactHero                    from 'static/img/contact_hero.jpg';
import InteriorHero                   from 'components/molecules/InteriorHero';
import sliderImage1                   from 'static/img/contact/slider/river_room.png';
import sliderImage2                   from 'static/img/contact/slider/Contact_1.jpg';
import sliderImage3                   from 'static/img/contact/slider/Contact_2.jpg';
import sliderImage4                   from 'static/img/contact/slider/Contact_3.jpg';
import sliderImage5                   from 'static/img/contact/slider/Contact_4.jpg';
import sliderImage6                   from 'static/img/contact/slider/Contact_5.jpg';
import sliderImage7                   from 'static/img/contact/slider/Contact_6.jpg';
import '../assets/scss/app.scss';

export const ContactPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
  modifier
}) => (
  <InteriorHero
    image            = { ContactHero }
    title            = { title }
    secondaryTitle   = { secondaryTitle }
    subTitle         = { subTitle }
    modifier         = { modifier } />
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const sliderImages = [
    { image: sliderImage1, alt: "Working in the River Room" },
    { image: sliderImage2, alt: "Collaboration in the River Room" },
    { image: sliderImage3, alt: "Design and Strategy session in the River Room"  },
    { image: sliderImage4, alt: "Preparing for a team meeting in the River Room"  },
    { image: sliderImage5, alt: "Preparation and feedback session in the River Room"  },
    { image: sliderImage6, alt: "Sharing and demoing with the team in the River Room"  },
    { image: sliderImage7, alt: "A view of the River Room at andculture"  },
  ];

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
      pageTitle      = "contact"
      data           = { frontmatter }
      scrollTop      = { scrollTop }>
      <main className = "p-interior-page">
        <ContactPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
          modifier       = '-contact -interior'
        />
        <section id="main-content">
          <ContactForm lightTheme = { true } />
          <CustomSlider images = { sliderImages } />
          <ContactInfo
            streetAddressLineOne     = { frontmatter.streetAddressLineOne }
            streetAddressLineTwo     = { frontmatter.streetAddressLineTwo }
            phoneNumber              = { frontmatter.phoneNumber }
            phoneNumberAccessibility = { frontmatter.phoneNumberAccessibility }
            directions               = { frontmatter.directions }
            mapLink                  = { frontmatter.mapLink } />
        </section>
      </main>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        secondaryTitle
        subTitle
        streetAddressLineOne
        streetAddressLineTwo
        mapLink
        phoneNumber
        phoneNumberAccessibility
        directions
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
