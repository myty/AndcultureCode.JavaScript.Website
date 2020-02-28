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

export const ContactPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <div className = "o-hero">
    <img src = {ContactHeroGraphic} className = "o-hero__background -circles-crosses" />
    <img src = {HeroBluePaint} className = "o-hero__background -blue-paint" />
    <div className = "o-rhythm__container">
      <div className = "o-rhythm__row">
        <div className = "o-hero__top">
          <div className = "o-hero__titles">
            <h2 className = "-before">{ secondaryTitle }</h2>
            <h1>{ title }</h1>
          </div>
        </div>
        <div className = "o-hero__subtitles">
          <h3>{ subTitle }</h3>
        </div>
      </div>
    </div>
  </div>
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle = "contact" hideNavigation = { true }>
      <div className = "p-contact-page">
        <ContactPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
        <ContactForm lightTheme = { true } />
        <ContactSlider />
        <ContactInfo />
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
      }
    }
  }
`
