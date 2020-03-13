import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ContactForm from '../components/organisms/ContactForm';
import ContactInfo from '../components/molecules/ContactInfo';
import CustomSlider from '../components/molecules/CustomSlider';
import CareersList from '../components/organisms/CareersList';
import ContactHeroGraphic from '../../static/img/contact/contact_hero_graphic.png';
import HeroBluePaint from '../../static/img/contact/blue_paint.png';
import InteriorHero from '../components/molecules/InteriorHero';
import sliderImage1 from '../../static/img/contact/slider/river_room.png';
import sliderImage2 from '../../static/img/contact/slider/Contact_1.jpg';
import sliderImage3 from '../../static/img/contact/slider/Contact_2.jpg';
import sliderImage4 from '../../static/img/contact/slider/Contact_3.jpg';
import sliderImage5 from '../../static/img/contact/slider/Contact_4.jpg';
import sliderImage6 from '../../static/img/contact/slider/Contact_5.jpg';
import sliderImage7 from '../../static/img/contact/slider/Contact_6.jpg';
import '../assets/scss/app.scss';

export const ContactPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <InteriorHero
    backgroundImages = { [ContactHeroGraphic, HeroBluePaint] }
    title          = { title }
    secondaryTitle = { secondaryTitle }
    subTitle       = { subTitle } />
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const sliderImages = [
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
    sliderImage6,
    sliderImage7,
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
      hideNavigation = { true }
      data           = { frontmatter }
      scrollTop      = { scrollTop }>
      <div className = "p-interior-page">
        <ContactPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
        <ContactForm lightTheme = { true } />
        <CustomSlider images = { sliderImages } />
        <ContactInfo streetAddress = { frontmatter.streetAddress } phoneNumber = { frontmatter.phoneNumber } directions = { frontmatter.directions } mapLink = { frontmatter.mapLink } />
        <CareersList />
      </div>
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
        streetAddress
        mapLink
        phoneNumber
        directions
        metaTitle
        metaDescription
      }
    }
  }
`
