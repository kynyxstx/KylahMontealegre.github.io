import { useState } from 'react'
import type { CaseStudyImage } from '../data/projects'

function GalleryImage({ image }: { image: CaseStudyImage }) {
  const [failed, setFailed] = useState(false)
  const available = image.approved && !failed
  return <figure className="case-study-image">
    <div className="case-study-image-frame">
      {available
        ? <img src={`${import.meta.env.BASE_URL}images/projects/${image.filename}`} alt={image.alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
        : <span className="preview-placeholder">Screenshot coming soon</span>}
    </div>
    <figcaption>{image.caption}</figcaption>
  </figure>
}

export function CaseStudyGallery({ images }: { images: CaseStudyImage[] }) {
  return <section className="case-study-gallery-section" aria-label="Project screenshot gallery">
    <h4>Project gallery</h4>
    <div className="case-study-gallery">{images.map(image => <GalleryImage key={image.filename} image={image} />)}</div>
  </section>
}
