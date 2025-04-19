
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  expertise: string;
  description: string;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
  teamSection: 'leadership' | 'domain-experts';
  sectionName?: string;
  updatedAt?: any;
  createdAt?: any;
}
