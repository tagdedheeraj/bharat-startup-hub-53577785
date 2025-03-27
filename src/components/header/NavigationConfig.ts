
import { BellRing, LifeBuoy, Globe, Server } from 'lucide-react';

export const navigationItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { 
        label: 'Funding Consultation', 
        to: '/services/funding-consultation',
        description: 'Get expert advice on securing funding up to ₹5 CR for your startup or MSME',
        icon: LifeBuoy
      },
      { 
        label: 'Certificate Marketing', 
        to: '/services/certificate-marketing',
        description: 'Enhance your market presence with professional certification services',
        icon: Globe
      },
      { 
        label: 'Legal Consultation', 
        to: '/services/legal-consultation',
        description: 'Expert legal advice tailored for startups and MSMEs',
        icon: LifeBuoy
      },
    ],
  },
  { label: 'IT Solutions', to: '/it-solutions' },
  { label: 'Success Stories', to: '/success-stories' },
  { label: 'Contact Us', to: '/contact' },
  {
    label: 'More',
    to: '/more',
    children: [
      { label: 'Experts', to: '/more/experts', description: 'Meet our team of industry experts', icon: LifeBuoy },
      { label: 'MSME Events', to: '/more/msme-events', description: 'Upcoming events and workshops for MSMEs', icon: BellRing },
      { label: 'Reviews', to: '/more/reviews', description: 'See what our clients say about our services', icon: LifeBuoy },
      { label: 'Blogs', to: '/more/blogs', description: 'Insights and advice for startups and MSMEs', icon: LifeBuoy },
      { label: 'Compliance', to: '/more/compliance', description: 'Stay compliant with regulatory requirements', icon: Globe },
    ],
  },
];
