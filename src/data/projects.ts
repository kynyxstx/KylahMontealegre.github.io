export type CaseStudyImage = {
  filename: string
  alt: string
  caption: string
  approved: boolean
}

export type Project = {
  id: string
  title: string
  category: string
  role: string
  description: string
  preview?: { filename: string; alt: string; approved?: boolean }
  caseStudyImages?: CaseStudyImage[]
  technologies: string[]
  technologyNote?: string
  repository?: string
  status: string
  study: { title: string; content: string; technicalGroups?: { title: string; details: { label: string; value: string }[] }[] }[]
}

export const projects: Project[] = [
  {
    id: 'procurement-monitoring',
    title: 'Procurement Monitoring System',
    category: 'Professional — Legacy System Maintenance & Redevelopment',
    role: 'System Maintenance, Debugging, Development, and Enhancement',
    description: 'An inherited, PHP-based office system with database-backed functionality. My work focuses on maintaining the legacy application, troubleshooting issues, and developing improvements and features.',
    preview: { filename: 'pms/dashboard.png', alt: 'Sanitized preview of the inherited Procurement Monitoring System', approved: true },
    caseStudyImages: [
      {
        "filename": "pms/dashboard.png",
        "alt": "Procurement Monitoring System main dashboard with operational data redacted",
        "caption": "Main dashboard - operational data redacted",
        "approved": true
      },
      {
        "filename": "pms/admin-dashboard.png",
        "alt": "Procurement Monitoring System admin dashboard with operational data redacted",
        "caption": "Admin dashboard - metrics and accounts redacted",
        "approved": true
      }
    ],
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    status: 'Ongoing maintenance & development',
    study: [
      { title: 'Overview', content: 'An internal web-based procurement monitoring and document-tracking application inherited as an existing PHP-based government-office system. It had approximately four original pages and multiple defects. My work maintains, troubleshoots, extends, and improves that existing application.' },
      { title: 'Challenges', content: 'Maintaining an inherited codebase, troubleshooting existing defects, and improving usability and operational workflows.' },
      { title: 'My Contributions', content: 'System maintenance and debugging; frontend and backend enhancements; procurement monitoring and records workflow improvements; UI improvements and feature development; and support for development and production environments. This is ongoing work, not a claim that every planned enhancement has shipped.' },
      {
        title: 'Technical Overview',
        content: 'An inherited PHP application, maintained and enhanced over time. This overview includes only details supported by the supplied project history and confirmed development workflow.',
        technicalGroups: [
          { title: 'Application Stack', details: [
            { label: 'Backend', value: 'PHP' },
          ] },
          { title: 'Development Environment & Tools', details: [
            { label: 'AI-assisted development', value: 'Codex' },
          ] },
          { title: 'Engineering Practices', details: [
            { label: 'Environment separation', value: 'Separate LIVE and DEV environments' },
            { label: 'Change workflow', value: 'Develop and check changes in DEV before authorized promotion to LIVE.' },
          ] },
        ],
      },
      { title: 'Development Workflow', content: 'Separate LIVE and DEV environments. Changes are developed and checked in DEV before authorized promotion to LIVE. This workflow does not imply automated CI/CD or comprehensive automated testing.' },
      { title: 'Debugging and maintenance', content: 'Ongoing investigation and resolution of issues in the inherited application. Specific public examples are pending verification and confidentiality review.' },
      { title: 'Functional enhancements', content: 'Workflow, interface, and feature improvements are ongoing. A verified breakdown of delivered enhancements and work still in development is pending.' },
      { title: 'Technical challenges and solutions', content: 'Public technical examples are pending verification. Internal configuration, database schemas, and security vulnerabilities are excluded.' },
      { title: 'Screenshots', content: 'Actual interface screenshots with operational figures and account details irreversibly redacted.' },
      { title: 'Confidentiality', content: 'Internal server paths, credentials, access-control configuration, database schema details, real procurement values, and confidential operational information are excluded from this case study.' },
      { title: 'Current development status', content: 'Ongoing system maintenance, debugging, development, and enhancement.' },
    ],
  },
  {
    id: 'internship-procurement',
    title: 'Procurement System',
    category: 'Original Internship Development Project',
    role: 'Developer',
    description: 'A web-based procurement-related system I developed during my internship. This original development project is separate from the inherited office Procurement Monitoring System.',
    preview: { filename: 'internship/home.png', alt: 'Preview of the separate procurement web application developed during internship', approved: true },
    caseStudyImages: [
      {
        "filename": "internship/home.png",
        "alt": "Internship Procurement System home screen with account details removed",
        "caption": "Internship application home - account details redacted",
        "approved": true
      },
      {
        "filename": "internship/supplier-directory.png",
        "alt": "Internship supplier directory with supplier records redacted",
        "caption": "Supplier directory - records redacted",
        "approved": true
      }
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/kynyxstx/Procurement',
    status: 'Internship project',
    study: [
      { title: 'Project overview', content: 'An original web-based procurement-related system developed during my internship.' },
      { title: 'My contribution', content: 'Developer of this internship project. A detailed feature walkthrough and implementation narrative will be added after review.' },
      { title: 'Technology', content: 'Laravel, PHP, MySQL, XAMPP, HTML, CSS, and JavaScript.' },
      { title: 'Screenshots and development notes', content: 'Actual interface screenshots with account and supplier details irreversibly redacted.' },
    ],
  },
  {
    id: 'smart-iot-surveillance',
    title: 'Smart IoT Surveillance System',
    category: 'Academic Capstone',
    role: 'Capstone Project Manager / Presenter',
    description: 'A software-based monitoring system for laboratory computers, designed to detect hardware-related changes and selected file-copy activity, log events, and provide administrator notifications.',
    preview: { filename: 'capstone/hardware-monitor.png', alt: 'Preview of the Smart IoT Surveillance System laboratory monitoring capstone', approved: true },
    caseStudyImages: [
      {
        "filename": "capstone/hardware-monitor.png",
        "alt": "Capstone hardware monitoring interface with device identifiers redacted",
        "caption": "Laboratory monitoring interface - identifiers redacted",
        "approved": true
      },
      {
        "filename": "capstone/login.png",
        "alt": "Capstone login interface with private contact details removed",
        "caption": "Login interface - contact and device details redacted",
        "approved": true
      },
      {
        "filename": "capstone/email-alert.png",
        "alt": "Capstone email notification with personal details and device identifiers redacted",
        "caption": "Notification examples - personal details redacted",
        "approved": true
      },
      {
        "filename": "capstone/sms-alert.png",
        "alt": "Capstone SMS notification with personal details and device identifiers redacted",
        "caption": "SMS alert - notification details redacted",
        "approved": true
      }
    ],
    technologies: [],
    technologyNote: 'Technologies pending verification.',
    status: 'Academic capstone · case study in preparation',
    study: [
      { title: 'Problem and objectives', content: 'Designed to support monitoring of laboratory computers through event logging and administrator notifications for hardware-related changes and selected file-copy activity.' },
      { title: 'Software architecture', content: 'Architecture details and diagrams are pending verification.' },
      { title: 'Monitoring features', content: 'The project was designed to detect hardware-related changes and selected file-copy activity and log events. Implementation details are pending verification.' },
      { title: 'Notifications', content: 'Administrator notifications are part of the system’s intended functionality. Delivery mechanisms are pending verification.' },
      { title: 'Technologies', content: 'The technology stack will be published after verification.' },
      { title: 'Research and evaluation', content: 'Research methods, evaluation details, and results are pending verification.' },
      { title: 'Screenshots and diagrams', content: 'Actual interface screenshots with personal contact details, device identifiers, and notification details irreversibly redacted. Software diagrams are not yet included.' },
    ],
  },
]
