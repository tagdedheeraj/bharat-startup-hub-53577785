
import { 
  Award, Building, BadgeCheck, BadgeDollarSign, Landmark, ShieldCheck, 
  BadgePercent, FileCheck, Truck, Scale, FileText, CreditCard, Smartphone, 
  Banknote, Droplet, Film 
} from "lucide-react";
import { ReactNode } from "react";

export interface Certification {
  title: string;
  description: string;
  benefits: string[];
  icon: ReactNode;
}

export interface CertificationCategory {
  title: string;
  certifications: Certification[];
}

export const certificationCategories: CertificationCategory[] = [
  {
    title: "Essential Business Certifications",
    certifications: [
      {
        title: "MSME Certification",
        description: "Enjoy the benefits of government schemes and subsidies with MSME Certificate.",
        benefits: [
          "Easy Access to Loans & Tax Benefits",
          "Credit Guarantee Schemes",
          "Market Development Assistance",
          "Interest Rate Subsidies",
          "Tender Preferences",
          "Business Growth Opportunities"
        ],
        icon: <Building className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Startup India Recognition",
        description: "Gain eligibility for various government grants and funding opportunities with Startup India Certificate.",
        benefits: [
          "Access to Government Grants",
          "Seed Funding Registration",
          "Easier Public Procurement",
          "Fast-Track IP and Patent Assistance",
          "Get Tax Exemptions",
          "Free Partner Services"
        ],
        icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Tax Exemption Certificate",
        description: "Get official tax benefits and exemptions for your business operations.",
        benefits: [
          "Reduced Tax Liability",
          "Simplified Tax Compliance",
          "Cost Savings",
          "Improved Cash Flow"
        ],
        icon: <BadgeDollarSign className="h-10 w-10 text-brand-600" />
      },
      {
        title: "NSIC Certification",
        description: "National Small Industries Corporation certification for enhanced credibility.",
        benefits: [
          "Government Tender Participation",
          "Raw Material Assistance",
          "Marketing Support",
          "Credit Facilitation"
        ],
        icon: <Landmark className="h-10 w-10 text-brand-600" />
      },
      {
        title: "ISO Certification",
        description: "International standards that specify requirements for quality management systems.",
        benefits: [
          "Enhanced Global Credibility",
          "Improved Processes",
          "Increased Efficiency",
          "Access to International Markets"
        ],
        icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Other Essential Certifications",
        description: "Specialized certifications like ZED and FSSAI for specific industry needs.",
        benefits: [
          "ZED Certification for Quality",
          "FSSAI License for Food Businesses",
          "Industry-Specific Compliance",
          "Competitive Market Advantage"
        ],
        icon: <BadgePercent className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Food & Export Industry",
    certifications: [
      {
        title: "HACCP Certification",
        description: "Critical certification for food export businesses ensuring food safety standards.",
        benefits: [
          "Access to International Markets",
          "Hazard Prevention Control",
          "Increased Consumer Trust",
          "Regulatory Compliance"
        ],
        icon: <FileCheck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "FSSAI + Cold Chain Certification",
        description: "Essential for food logistics and maintaining cold chain integrity.",
        benefits: [
          "Legal Food Transportation",
          "Quality Assurance",
          "Temperature Control Compliance",
          "Food Safety Standards"
        ],
        icon: <Truck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "RCMC Certificate",
        description: "Registration Cum Membership Certificate for exporters via Export Promotion Councils.",
        benefits: [
          "Export Benefits Access",
          "Duty Drawback Claims",
          "International Market Access",
          "Recognized Exporter Status"
        ],
        icon: <Award className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Ethical & Social Compliance",
    certifications: [
      {
        title: "SA8000 Certification",
        description: "International standard for social accountability ensuring ethical workplaces.",
        benefits: [
          "Ethical Business Recognition",
          "Improved Worker Conditions",
          "Better Stakeholder Relations",
          "Global Marketplace Acceptance"
        ],
        icon: <Scale className="h-10 w-10 text-brand-600" />
      },
      {
        title: "WRAP Certification",
        description: "Ethical compliance certification for garment and textile export businesses.",
        benefits: [
          "Social Compliance Verification",
          "Access to Ethical Markets",
          "Better Buyer Relationships",
          "Reduced Compliance Risks"
        ],
        icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Legal & Compliance",
    certifications: [
      {
        title: "Digital Signature Certificate",
        description: "Essential for e-filing, tenders, and legal document signing.",
        benefits: [
          "Legal Document Authentication",
          "Secure Digital Transactions",
          "E-filing Compliance",
          "Tender Participation"
        ],
        icon: <FileText className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Shop & Establishment Certificate",
        description: "Mandatory certificate for local business operation and compliance.",
        benefits: [
          "Legal Business Operation",
          "Labor Law Compliance",
          "Business Recognition",
          "Local Authority Compliance"
        ],
        icon: <Building className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Trade License",
        description: "License issued by municipal corporations for business operation.",
        benefits: [
          "Legal Business Authorization",
          "Local Compliance",
          "Access to Government Schemes",
          "Business Legitimacy"
        ],
        icon: <FileCheck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Professional Tax Registration",
        description: "Required for employers and salaried workers in many states.",
        benefits: [
          "Tax Compliance",
          "Avoid Penalties",
          "Legal Employment",
          "Business Legitimacy"
        ],
        icon: <BadgeDollarSign className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Telecom & Electronics",
    certifications: [
      {
        title: "WPC Approval",
        description: "Certification required for wireless communication products in India.",
        benefits: [
          "Legal Wireless Device Operation",
          "Spectrum Compliance",
          "Market Access for Devices",
          "Regulatory Approval"
        ],
        icon: <Smartphone className="h-10 w-10 text-brand-600" />
      },
      {
        title: "BIS CRS Certification",
        description: "Mandatory certification for electronics sold in India.",
        benefits: [
          "Legal Market Access",
          "Product Safety Verification",
          "Consumer Trust",
          "Compliance with Indian Standards"
        ],
        icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
      },
      {
        title: "EPR Authorization",
        description: "Required for e-waste management compliance for electronics manufacturers.",
        benefits: [
          "E-waste Compliance",
          "Environmental Responsibility",
          "Legal Operation",
          "Avoid Heavy Penalties"
        ],
        icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Chemical & Manufacturing",
    certifications: [
      {
        title: "REACH Certification",
        description: "Critical for chemical products exported to the European Union.",
        benefits: [
          "EU Market Access",
          "Chemical Safety Compliance",
          "Consumer Protection",
          "Regulatory Approval"
        ],
        icon: <ShieldCheck className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Finance & FinTech",
    certifications: [
      {
        title: "RBI License (NBFC)",
        description: "Required license for non-banking finance companies in India.",
        benefits: [
          "Legal Financial Operations",
          "Financial Service Authorization",
          "Regulatory Compliance",
          "Customer Trust"
        ],
        icon: <Banknote className="h-10 w-10 text-brand-600" />
      },
      {
        title: "PCI DSS Compliance",
        description: "Payment card industry data security standard for handling cardholder data.",
        benefits: [
          "Secure Payment Processing",
          "Reduced Fraud Risk",
          "Customer Data Protection",
          "Payment Industry Compliance"
        ],
        icon: <CreditCard className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Cosmetics & Personal Care",
    certifications: [
      {
        title: "CDSCO Registration",
        description: "Required for cosmetic product approvals in India.",
        benefits: [
          "Legal Cosmetic Sales",
          "Product Safety Verification",
          "Regulatory Compliance",
          "Market Access"
        ],
        icon: <Droplet className="h-10 w-10 text-brand-600" />
      },
      {
        title: "Ayush License",
        description: "License for Ayurvedic, Unani, Siddha, and Homoeopathic products.",
        benefits: [
          "Legal Sale of Alternative Medicine",
          "Quality Assurance",
          "Consumer Trust",
          "Regulatory Compliance"
        ],
        icon: <BadgeCheck className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Media & Entertainment",
    certifications: [
      {
        title: "CBFC Certification",
        description: "Certification by Central Board of Film Certification required for film release.",
        benefits: [
          "Legal Film Distribution",
          "Public Exhibition Rights",
          "Content Rating",
          "Regulatory Compliance"
        ],
        icon: <Film className="h-10 w-10 text-brand-600" />
      },
      {
        title: "IPR Registration",
        description: "Intellectual property protection for creative works including copyright, design, and patent.",
        benefits: [
          "Legal Protection of Work",
          "Exclusive Rights",
          "Commercial Value Protection",
          "Prevent Unauthorized Use"
        ],
        icon: <FileText className="h-10 w-10 text-brand-600" />
      }
    ]
  },
  {
    title: "Logistics & Transport",
    certifications: [
      {
        title: "AEO Certification",
        description: "Authorized Economic Operator certification for faster customs clearance.",
        benefits: [
          "Expedited Customs Processing",
          "Reduced Inspections",
          "International Trade Facilitation",
          "Supply Chain Security"
        ],
        icon: <Truck className="h-10 w-10 text-brand-600" />
      }
    ]
  }
];

export const essentialCertifications = certificationCategories[0].certifications;
