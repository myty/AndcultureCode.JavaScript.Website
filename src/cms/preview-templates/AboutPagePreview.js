import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        title       = { data.title }
        heading     = { data.heading }
        subheading  = { data.subheading }
        description = { data.description }
        intro       = { data.intro || { blurbs: [] } }
        mainpitch   = { data.mainpitch || {} }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview;
