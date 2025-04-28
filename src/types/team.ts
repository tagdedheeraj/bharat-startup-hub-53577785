
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  expertise: string[];
  experience: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  achievements?: string[];
}
