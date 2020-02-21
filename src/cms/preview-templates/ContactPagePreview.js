import React from 'react'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContactPageTemplate
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

export default ContactPagePreview
