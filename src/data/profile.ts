export const training = [
  // Transcribed from supplied documents; the exact sanitized preview bytes have explicit public-publication approval.
  { id: 'ngpa', title: 'Training on the New Government Procurement Act (NGPA) and its IRR', provider: 'GPPB – Technical Support Office', year: '2026', date: 'April 22–24, 2026', type: 'Certificate of participation', preview: { filename: 'ngpa-irr.png', publicationApproved: true } },
  { id: 'authenticity', title: 'Authenticity and Provenance in the Age of AI', provider: 'Multimedia Arts Association of the Philippines – MIMAROPA Chapter', year: '2024', date: 'July 23, 2024', type: 'Certificate of attendance', preview: { filename: 'authenticity-provenance-ai.png', publicationApproved: true } },
  { id: 'cybersecurity', title: 'Enhancing Digital Protection: Cybersecurity for All', provider: 'DICT – Region IV-B, Oriental Mindoro', year: '2024', date: 'July 19, 2024', type: 'Certificate of participation', preview: { filename: 'cybersecurity-for-all.png', publicationApproved: true } },
  { id: 'ieee', title: 'IEEE Student Summit 2023', provider: 'IEEE – Mapúa University Student Branch', year: '2023', date: 'September 16, 2023', type: 'Certificate of appreciation', note: 'Awarded for active participation.', preview: { filename: 'ieee-student-summit.png', publicationApproved: true } },
  { id: 'mos', title: 'Microsoft Office Specialist: Word Associate (Office 2019)', provider: 'Microsoft', year: '2022', date: 'August 9, 2022', type: 'Certification stated by supplied document', note: 'Credential shown in the supplied certificate; not independently issuer-verified.', preview: { filename: 'mos-word-associate.png', publicationApproved: true } },
  { id: 'marketing', title: 'The Fundamentals of Digital Marketing', provider: 'Google Digital Garage', year: '2021', date: 'December 20, 2021', type: 'Certificate of achievement', note: 'Awarded for successful completion of the certification exam.', preview: { filename: 'digital-marketing.png', publicationApproved: true } },
]

export type TrainingRecord = (typeof training)[number]

export const internshipDates = {
  start: 'February 2025',
  end: 'June 2025',
  endDate: '2025-06-26',
}
