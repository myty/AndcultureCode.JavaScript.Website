import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../assets/scss/app.scss';
import ContactForm from '../components/organisms/ContactForm';
import ContactInfo from '../components/molecules/ContactInfo';
import ContactSlider from '../components/molecules/ContactSlider';
import CareersList from '../components/organisms/CareersList';
import ContactHeroGraphic from '../../static/img/contact/contact_hero_graphic.png';
import HeroBluePaint from '../../static/img/contact/blue_paint.png';
import InteriorHero from '../components/molecules/InteriorHero';

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

  return (
    <Layout pageTitle = "contact" hideNavigation = { true }>
      <div className = "p-interior-page">
        <ContactPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
        <ContactForm lightTheme = { true } />
        <ContactSlider />
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
      }
    }
  }
`
