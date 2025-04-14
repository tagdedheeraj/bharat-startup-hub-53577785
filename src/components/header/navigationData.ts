
import { 
  LifeBuoy, Globe, Shield, ShieldCheck, IndianRupee, 
  FileText, Receipt, FileSpreadsheet, BellRing 
} from 'lucide-react';

export const navigationData = [
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
  {
    label: 'CA Services',
    to: '/ca-services',
    children: [
      { 
        label: 'Certifications', 
        to: '/ca-services/certifications',
        description: 'Comprehensive certification services for businesses of all sizes',
        icon: Shield
      },
      { 
        label: 'Trademark', 
        to: '/ca-services/trademark',
        description: 'Protect your brand identity with our expert trademark services',
        icon: ShieldCheck
      },
      { 
        label: 'Income Tax', 
        to: '/ca-services/income-tax',
        description: 'Professional income tax filing and advisory services',
        icon: IndianRupee
      },
      { 
        label: 'Accounting', 
        to: '/ca-services/accounting',
        description: 'Comprehensive accounting services for your business',
        icon: FileText
      },
      { 
        label: 'GST', 
        to: '/ca-services/gst',
        description: 'Complete GST compliance solutions for your business',
        icon: Receipt
      },
      { 
        label: 'Payroll', 
        to: '/ca-services/payroll',
        description: 'End-to-end payroll management services',
        icon: FileSpreadsheet
      },
      { 
        label: 'Compliance', 
        to: '/ca-services/compliance',
        description: 'Stay compliant with all regulatory requirements',
        icon: ShieldCheck
      },
    ],
  },
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
