import { useState } from 'react'
import { CaseStudyGallery } from './CaseStudyGallery'
import type { Project } from '../data/projects'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const [failedPreview, setFailedPreview] = useState<string>()
  const previewUrl = project.preview && project.preview.approved !== false
    ? `${import.meta.env.BASE_URL}images/projects/${project.preview.filename}`
    : undefined
  return <article className="project" aria-labelledby={`${project.id}-title`}>
    <div className={`project-art project-preview art-${index}`}>
      {previewUrl && failedPreview !== previewUrl
        ? <img src={previewUrl} alt={project.preview!.alt} loading="lazy" decoding="async" onError={() => setFailedPreview(previewUrl)} />
        : <><span className="project-number" aria-hidden="true">0{index + 1}</span><span className="preview-placeholder">Project preview coming soon</span></>}
    </div>
    <div className="project-body">
      <p className="tiny-label project-category">{project.category}</p>
      <h3 id={`${project.id}-title`}>{project.title}</h3>
      <p className="project-role"><strong>Role:</strong> {project.role}</p>
      <p>{project.description}</p>
      {project.technologies.length > 0 && <ul className="technology-list" aria-label="Verified technologies">{project.technologies.map(technology => <li key={technology} className="pill">{technology}</li>)}</ul>}
      {project.technologyNote && <p className="note">{project.technologyNote}</p>}
      <p className="project-status">{project.status}</p>
      <details className="case-study" onToggle={event => setCaseStudyOpen(event.currentTarget.open)}>
        <summary aria-label={`View case study: ${project.title}`}>View Case Study <span aria-hidden="true">↗</span></summary>
        <div className="case-study-content">{project.study.map(section => <section key={section.title}><h4>{section.title}</h4><p>{section.content}</p>
          {section.technicalGroups && <div className="technical-overview">{section.technicalGroups.map(group => <div className="technical-group" key={group.title}>
            <h5>{group.title}</h5>
            <dl>{group.details.map(detail => <div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl>
          </div>)}</div>}
        </section>)}
        {caseStudyOpen && project.caseStudyImages && <CaseStudyGallery images={project.caseStudyImages} />}
        </div>
      </details>
      {project.repository && <a className="repository-link" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
    </div>
  </article>
}
