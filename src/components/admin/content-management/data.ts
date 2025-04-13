
// Mock data for available pages
export const websitePages = [
  { id: 1, title: 'Home Page', path: '/' },
  { id: 2, title: 'About Us', path: '/about' },
  { id: 3, title: 'Services', path: '/services' },
  { id: 4, title: 'Contact', path: '/contact' },
  { id: 5, title: 'Success Stories', path: '/success-stories' },
  { id: 6, title: 'FAQs', path: '/faqs' },
  { id: 7, title: 'CA Services', path: '/ca-services' },
  { id: 8, title: 'Funding Consultation', path: '/services/funding-consultation' },
  { id: 9, title: 'Certificate Marketing', path: '/services/certificate-marketing' },
  { id: 10, title: 'Legal Consultation', path: '/services/legal-consultation' },
];

// Mock data for page sections
export const pageSections: Record<string, Array<{ id: number; name: string; content: string }>> = {
  '/': [
    { id: 1, name: 'Hero Section', content: 'Welcome to our platform!' },
    { id: 2, name: 'Features Section', content: 'Our platform offers...' },
    { id: 3, name: 'Testimonials', content: 'What our customers say...' },
  ],
  '/about': [
    { id: 1, name: 'Company History', content: 'Our company was founded...' },
    { id: 2, name: 'Our Mission', content: 'Our mission is to...' },
    { id: 3, name: 'Team Members', content: 'Our dedicated team...' },
  ],
  // Add more page sections as needed
};
