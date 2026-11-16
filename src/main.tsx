import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ProfileImage } from './components/ProfileImage'
import { ProjectCard } from './components/ProjectCard'
import { ProjectArchive } from './components/ProjectArchive'
import { CertificationsGallery } from './components/CertificationsGallery'
import { projects } from './data/projects'
import { internshipDates } from './data/profile'

const resumeUrl = `${import.meta.env.BASE_URL}resume/Kylah_Montealegre_Resume.pdf`

const sections = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('ky-theme', next) } catch { /* Theme still works when storage is unavailable. */ }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="shell flex items-center justify-between gap-4">
        <a className="wordmark" href="#home" aria-label="Portfolio Ky home">ky<span>.</span></a>
        <nav id="navigation" aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {sections.map(section => <a key={section} href={`#${section.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{section}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button className="theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? '☀' : '☾'}</button>
          <button className="menu-button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
        </div>
      </div>
    </header>
    <main id="main">
      <section id="home" className="hero shell">
        <div className="eyebrow flex items-center gap-3"><span className="status-dot" /> KY FIND WAYS.</div>
        <p className="hero-intro">Hello, I'm Kylah May Montealegre.</p>
        <h1>A thoughtful approach.<br /><span>A fresh perspective.</span></h1>
        <div className="hero-bottom">
          <p>Information Technology Graduate | Web-Based Systems Development | Administrative Operations</p>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <a className="button" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="text-sm underline underline-offset-4" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Résumé<span className="sr-only"> (PDF, opens in a new tab)</span></a>
          </div>
        </div>
        <div className="hero-foot"><span>PORTFOLIO KY / V2</span><a href="#about">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="about" className="section shell grid md:grid-cols-[1fr_2fr] gap-8">
        <div><p className="section-label">01 / ABOUT</p><ProfileImage /></div>
        <div><h2>A little introduction.</h2><p className="section-copy">I'm Kylah May Montealegre, an Information Technology graduate working across web-based systems development and administrative operations. My experience connects original project development with the ongoing care and improvement of an inherited office system.</p>
          <div className="education"><p className="tiny-label">EDUCATION / 2021–2025</p><h3>Bachelor of Science in Information Technology</h3><p className="note">World Citi Colleges – Quezon City</p><ul className="credential-list"><li>Cum Laude</li><li>Best Research Paper</li><li>Top 3 Best Paper — Capstone Project Manager/Presenter</li><li>Academic Scholarship</li><li>Dean's Lister</li><li>QCYDO Scholar</li></ul>
            <div className="education-history">
              <div><p className="tiny-label">SENIOR HIGH SCHOOL / 2019–2021</p><h3>World Citi Colleges – Quezon City</h3><p className="note">Information and Communications Technology (ICT)</p><p className="note">Academic distinction: Top 6</p></div>
              <div><p className="tiny-label">JUNIOR HIGH SCHOOL / 2015–2019</p><h3>Quirino High School</h3><p className="note">Technical-vocational elective: Electrical Installation and Maintenance (EIM)</p><p className="note">Academic distinction: Top 10</p></div>
              <details className="early-education"><summary>Earlier education · 2010–2015</summary><p className="note">Quirino Elementary School · Primary Education</p></details>
            </div>
          </div>
        </div>
      </section>
      <CertificationsGallery />
      <section id="experience" className="section shell grid md:grid-cols-[1fr_2fr] gap-8">
        <p className="section-label">02 / EXPERIENCE</p>
        <div><h2>Learning through doing.</h2><p className="experience-organization">Philippine Statistics Authority Headquarters</p>
          <div className="experience-timeline">
            <article className="timeline"><span className="tiny-label">AUGUST 2025–PRESENT</span><h3>Administrative Assistant II</h3>
              <ul className="responsibility-list"><li>Administrative and procurement documentation support.</li><li>Document organization, tracking, and records management.</li><li>Coordination with internal personnel and stakeholders.</li><li>Maintenance, debugging, and enhancement of an inherited PHP-based Procurement Monitoring System.</li><li>Development of improvements to administrative workflows and system usability.</li></ul>
            </article>
            <article className="timeline"><span className="tiny-label">{internshipDates.start}–{internshipDates.end}</span><h3>IT Support Intern</h3>
              <ul className="responsibility-list"><li>Developed a separate procurement-related web application using Laravel, PHP, and MySQL, contributing to frontend and backend development.</li><li>Performed data encoding, procurement records management, and document organization.</li><li>Provided administrative and technical support for procurement and BAC Secretariat operations.</li><li>Coordinated with office personnel regarding documentation, system requirements, and operational tasks.</li></ul>
              <p className="note">Internship project: Laravel, PHP, MySQL, XAMPP, HTML, CSS, and JavaScript.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="projects" className="section shell">
        <div className="section-heading"><div><p className="section-label">03 / PROJECTS</p><h2>Selected work.</h2></div><span className="note">Professional, internship & academic projects.</span></div>
        <div className="project-gallery grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <ProjectArchive />
      </section>
      <section id="skills" className="section shell grid md:grid-cols-[1fr_2fr] gap-8">
        <p className="section-label">04 / SKILLS</p><div><h2>An evolving toolkit.</h2><p className="section-copy">Practical experience in web-based systems, supported by administrative work and continued learning.</p>
          <div className="skill-list">
            <div><h3>Web-based development</h3><p className="note">PHP, Laravel, MySQL, HTML, CSS, JavaScript</p></div>
            <div><h3>System maintenance</h3><p className="note">Debugging, troubleshooting & enhancement</p></div>
            <div><h3>Administrative operations</h3><p className="note">Procurement documentation, records & coordination</p></div>
          </div>
        </div>
      </section>
      <section id="contact" className="section shell contact"><p className="section-label">05 / CONTACT</p><h2>Good things start<br />with a conversation<span>.</span></h2><address className="mt-8 max-w-2xl not-italic">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div><dt className="tiny-label">Email</dt><dd className="mt-2 text-sm"><a className="underline underline-offset-4" href="mailto:kylahmaym@gmail.com">kylahmaym@gmail.com</a></dd></div>
            <div><dt className="tiny-label">Mobile</dt><dd className="mt-2 text-sm"><a className="underline underline-offset-4" href="tel:+639184102687">+63 918 410 2687</a></dd></div>
            <div><dt className="tiny-label">Professional profiles</dt><dd className="mt-2 flex flex-wrap gap-6 text-sm"><a className="underline underline-offset-4" href="https://github.com/kynyxstx" target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a><a className="underline underline-offset-4" href="https://www.linkedin.com/in/kylah-montealegre/" target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></dd></div>
            <div><dt className="tiny-label">Location</dt><dd className="mt-2 text-sm">Quezon City, Philippines</dd></div>
          </dl>
        </address>
        <p className="mt-6"><a className="underline underline-offset-4" href={resumeUrl} download="Kylah_Montealegre_Resume.pdf">Download Résumé<span className="sr-only"> (PDF)</span></a></p>
      </section>
    </main>
    <footer className="shell footer"><a className="wordmark" href="#home">ky<span>.</span></a><p>© {new Date().getFullYear()} Kylah May Montealegre</p><a href="#home">Back to top ↑</a></footer>
  </>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
