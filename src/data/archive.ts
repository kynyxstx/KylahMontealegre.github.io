export type ArchiveProject = {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  alt: string
  repository?: string
}

// Descriptions, tools, and imagery are retained from legacy/index.html.
// Missing technologies and live-demo details are deliberately omitted.
export const archiveProjects: ArchiveProject[] = [
  { id: 'ooga-booga', title: 'Ooga Booga Escapade', category: 'Game development', description: 'A 2D survival game with traps, point collection, and three levels.', technologies: ['Unity'], image: 'archive/oga.png', alt: 'Original Ooga Booga Escapade game title screen' },
  { id: 'packet-tracer', title: 'Cisco Packet Tracer', category: 'Network simulation', description: 'A hotel network exercise exploring VLANs, dynamic IP addressing, routing, port security, and SSH.', technologies: ['Cisco Packet Tracer'], image: 'archive/cisco.PNG', alt: 'Original simulated hotel network topology in Cisco Packet Tracer' },
  { id: 'scary-maze', title: 'Scary Maze', category: 'Console game', description: 'An earlier text-based game project with letter-based player choices.', technologies: ['C'], image: 'archive/maze.PNG', alt: 'Original text-based C game console' },
  { id: 'train-ticket', title: 'Train Ticket', category: 'Console application', description: 'An MRT ticket-sales simulation with discount calculations.', technologies: ['C'], image: 'archive/tren.PNG', alt: 'Original C train-ticket application source excerpt' },
  { id: 'product-management', title: 'Product Management', category: 'Web application', description: 'A product-tracking application with database integration.', technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript'], image: 'archive/prod.PNG', alt: 'Original product management form and product list' },
  { id: 'chess', title: 'Chess Board', category: '3D modeling', description: 'A 3D chess set exploring modeling, texturing, and lighting.', technologies: ['Blender'], image: 'archive/chess.PNG', alt: 'Original Blender chess set render' },
  { id: 'atm', title: 'ATM & Loan Calculator', category: 'Desktop application', description: 'An ATM simulation with loan processing, interest, and payment calculations.', technologies: ['Visual Basic'], image: 'archive/atm.jpg', alt: 'Original ATM and loan calculator interface' },
  { id: 'accommodation', title: 'Hotel Booking', category: 'Accommodation website', description: 'A hotel website with booking, room information, and contact features.', technologies: [], image: 'archive/hotel.PNG', alt: 'Original accommodation website homepage' },
]
