
export const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Funding Consultation', href: '/services/funding-consultation' },
      { name: 'Certificate Marketing', href: '/services/certificate-marketing' },
      { name: 'Legal Consultation', href: '/services/legal-consultation' }
    ]
  },
  { 
    name: 'CA Services', 
    href: '/services/ca-services',
    children: [
      { name: 'Certifications', href: '/services/ca-services/certifications' },
      { name: 'Trademark', href: '/services/ca-services/trademark' },
      { name: 'Income Tax', href: '/services/ca-services/income-tax' },
      { name: 'Accounting', href: '/services/ca-services/accounting' },
      { name: 'GST', href: '/services/ca-services/gst' },
      { name: 'Payroll', href: '/services/ca-services/payroll' },
      { name: 'Compliance', href: '/services/ca-services/compliance' }
    ]
  },
  { name: 'IT Solutions', href: '/it-solutions' },
  { name: 'Success Stories', href: '/success-stories' },
  { 
    name: 'More', 
    href: '#',
    children: [
      { name: 'Experts', href: '/more/experts' },
      { name: 'MSME Events', href: '/more/msme-events' },
      { name: 'Reviews', href: '/more/reviews' },
      { name: 'Blogs', href: '/more/blogs' },
      { name: 'Compliance', href: '/more/compliance' }
    ]
  }
];
