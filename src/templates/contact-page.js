import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import ContactForm from '../components/organisms/ContactForm'

export const ContactPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <div className = "o-hero">
    <div className = "o-rhythm__container">
      <div className = "o-hero__top">
        <div className = "o-hero__titles">
          <h1 className = "-after">{ title }</h1>
          <h1 className = "-before">{ secondaryTitle }</h1>
        </div>
      </div>
      <div className = "o-hero__subtitles">
        <h3>{ subTitle }</h3>
      </div>
      <h6>A Design Company</h6>
    </div>
  </div>
)

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle }
      />
      <ContactForm lightTheme = { true } />
      <div style={{ background: "#032732", position: "relative" }}>
        <div>Gallery</div>
        <div style={{ display: "flex" }}>
          <div>
            <p>
              <div>614 N. Front Street</div>
              <div>Harrisburg, PA</div>
              <div>17102</div>
            </p>
            <p>
              717. 233. 2881
            </p>
        </div>
          <div>Social</div>
        </div>
        <div>Map</div>
        <div>
          <p>If you are traveling down N. Front St. from I-81, our parking entrance is just past the Harvey Taylor Bridge on the right. If you are traveling on 2nd St. from I-83, go down past Forster St. and turn left onto either Boas St. or Cumberland St., then make a left onto N. Front St. and get in the third lane to the right immediately. You cannot make a left turn from Forster St. onto Front St.</p>
          <p>Once you’ve turned into our parking lot, stay to the left and enter the top parking deck. There, you will find several “Visitor” parking spaces. Enter through the doors on the top parking deck and go straight ahead. You’ll turn a slight left around the railing and then turn right to enter through the glass doors leading to our office.</p>
        </div>
        <div>Careers</div>
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
