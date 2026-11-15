import { useState } from 'react'
import { archiveProjects } from '../data/archive'
import type { ArchiveProject } from '../data/archive'

function ArchiveCard({ project }: { project: ArchiveProject }) {
  const [imageFailed, setImageFailed] = useState(false)
  return <article className="archive-card" aria-labelledby={`archive-${project.id}`}>
    <div className="archive-preview">
      {imageFailed ? <span className="preview-placeholder">Project image unavailable</span>
        : <img src={`${import.meta.env.BASE_URL}images/projects/${project.image}`} alt={project.alt} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />}
    </div>
    <p className="tiny-label">{project.category}</p>
    <h4 id={`archive-${project.id}`}>{project.title}</h4>
    <p>{project.description}</p>
    <p className="archive-technologies" aria-label={project.technologies.length ? 'Verified technologies' : undefined}>{project.technologies.join(' · ')}</p>
    <div className="archive-links">{project.repository && <a className="repository-link" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository ↗<span className="sr-only"> (opens in a new tab)</span></a>}</div>
  </article>
}

export function ProjectArchive() {
  const [expanded, setExpanded] = useState(false)
  const initialCount = 4
  return <section className="archive" aria-labelledby="archive-heading">
    <h3 id="archive-heading">The Archive</h3>
    <p className="note">Earlier projects, experiments, and explorations.</p>
    <div className="archive-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {archiveProjects.slice(0, initialCount).map(project => <ArchiveCard key={project.id} project={project} />)}
    </div>
    <div id="archive-more" className="archive-more" hidden={!expanded}>
      <div className="archive-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {archiveProjects.slice(initialCount).map(project => <ArchiveCard key={project.id} project={project} />)}
      </div>
    </div>
    <button type="button" className="archive-toggle" aria-expanded={expanded} aria-controls="archive-more" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Show More'}<span className="sr-only"> archive projects</span></button>
  </section>
}
