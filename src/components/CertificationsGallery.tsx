import { useEffect, useRef, useState } from 'react'
import { training } from '../data/profile'
import type { TrainingRecord } from '../data/profile'

function CertificateImage({ src, title }: { src?: string; title: string }) {
  const [failed, setFailed] = useState(false)
  return src && !failed
    ? <img src={src} alt={`${title} — privacy-redacted certificate preview`} loading="lazy" onError={() => setFailed(true)} />
    : <span className="note">{failed ? 'Certificate preview unavailable' : 'Certificate preview in preparation'}</span>
}

export function CertificationsGallery() {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<TrainingRecord | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (selected) { dialog.current?.showModal(); closeButton.current?.focus() }
    else dialog.current?.close()
  }, [selected])
  function source(item: TrainingRecord) {
    return item.preview.publicationApproved
      ? `${import.meta.env.BASE_URL}images/certifications/${item.preview.filename}` : undefined
  }
  function close() { dialog.current?.close(); setSelected(null); opener.current?.focus() }
  return <section id="certifications" className="section shell" aria-labelledby="certifications-heading">
    <div className="section-heading"><div><p className="section-label">CONTINUED LEARNING</p><h2 id="certifications-heading">Certifications &amp; Training</h2></div></div>
    <p className="note certificate-intro">Professional credentials, completed learning, and participation in continued development.</p>
    <div id="certificates-grid" className="certificates-grid">
      {training.slice(0, expanded ? training.length : 3).map(item => <article className="certificate-card" key={item.id}>
        {source(item) ? <button className="certificate-preview" aria-label={`Enlarge ${item.title} certificate`} onClick={event => { opener.current = event.currentTarget; setSelected(item) }}>
          <CertificateImage key={source(item)} src={source(item)} title={item.title} />
        </button> : <div className="certificate-preview"><CertificateImage title={item.title} /></div>}
        <p className="tiny-label">{item.type} / {item.year}</p><h3>{item.title}</h3>
        <p className="note">{item.provider}</p><p className="note">{item.date}</p>
        {item.note && <p className="note">{item.note}</p>}
      </article>)}
    </div>
    <button className="archive-toggle" aria-expanded={expanded} aria-controls="certificates-grid" onClick={event => {
      if (expanded) event.currentTarget.focus()
      setExpanded(!expanded)
    }}>{expanded ? 'Show Less certificates' : 'Show More certificates'}</button>
    <dialog ref={dialog} className="certificate-dialog" aria-labelledby="certificate-dialog-title" onKeyDown={event => { if (event.key === 'Tab') { event.preventDefault(); closeButton.current?.focus() } }} onCancel={event => { event.preventDefault(); close() }} onClose={event => { if (!event.currentTarget.open && selected) close() }}>
      <div className="certificate-dialog-heading"><h3 id="certificate-dialog-title">{selected?.title}</h3><button ref={closeButton} className="archive-toggle" onClick={close}>Close preview</button></div>
      {selected && <><div className="certificate-enlarged"><CertificateImage key={source(selected)} src={source(selected)} title={selected.title} /></div><p className="note">{selected.provider} · {selected.date} · {selected.type}</p></>}
    </dialog>
  </section>
}
