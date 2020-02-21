import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('case-studies', CaseStudyPreview)
