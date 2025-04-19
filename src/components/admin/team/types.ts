
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  sectionName: string;
  photoUrl: string;
  experience: string;
  expertise: string;
  bio: string;
  linkedinUrl: string;
  teamSection: 'leadership' | 'domain-experts';
  createdAt?: any;
  updatedAt?: any;
}
