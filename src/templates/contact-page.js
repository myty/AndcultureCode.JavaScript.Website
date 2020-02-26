import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../assets/scss/app.scss';
import ContactForm from '../components/organisms/ContactForm';
import ContactInfo from '../components/molecules/ContactInfo';
import ContactHeroGraphic from '../../static/img/contact/contact_hero_graphic.png';
import HeroBluePaint from '../../static/img/contact/blue_paint.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import sliderImage1 from '../../static/img/contact/slider/Contact_1.jpg';
import sliderImage2 from '../../static/img/contact/slider/Contact_2.jpg';
import sliderImage3 from '../../static/img/contact/slider/Contact_3.jpg';
import sliderImage4 from '../../static/img/contact/slider/Contact_4.jpg';
import sliderImage5 from '../../static/img/contact/slider/Contact_5.jpg';
import sliderImage6 from '../../static/img/contact/slider/Contact_6.jpg';

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
            <h1>{ title }</h1>
            <h1 className = "-before">{ secondaryTitle }</h1>
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Layout pageTitle = "contact" hideNavigation = { true }>
      <div className="p-contact-page">
        <ContactPageTemplate
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle }
        />
        <ContactForm lightTheme = { true } />
        <div>
          <div className = "-slider">
            <div className="o-rhythm__container">
              <Slider {...settings}>
                <div>
                  <img src = { sliderImage1 } />
                </div>
                <div>
                  <img src = { sliderImage2 } />
                </div>
                <div>
                  <img src = { sliderImage3 } />
                </div>
                <div>
                  <img src = { sliderImage4 } />
                </div>
                <div>
                  <img src = { sliderImage5 } />
                </div>
                <div>
                  <img src = { sliderImage6 } />
                </div>
              </Slider>
            </div>
          </div>
          <div>
            <ContactInfo />
            <div>Map</div>
            <div>
              <p>If you are traveling down N. Front St. from I-81, our parking entrance is just past the Harvey Taylor Bridge on the right. If you are traveling on 2nd St. from I-83, go down past Forster St. and turn left onto either Boas St. or Cumberland St., then make a left onto N. Front St. and get in the third lane to the right immediately. You cannot make a left turn from Forster St. onto Front St.</p>
              <p>Once you’ve turned into our parking lot, stay to the left and enter the top parking deck. There, you will find several “Visitor” parking spaces. Enter through the doors on the top parking deck and go straight ahead. You’ll turn a slight left around the railing and then turn right to enter through the glass doors leading to our office.</p>
            </div>
            <div>Careers</div>
          </div>
        </div>
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
