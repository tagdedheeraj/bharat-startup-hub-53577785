
import { z } from 'zod';

export const teamMemberSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  position: z.string().min(2, { message: 'Position is required' }),
  experience: z.string().min(1, { message: 'Experience is required' }),
  expertise: z.string().min(2, { message: 'Expertise is required' }),
  bio: z.string().min(10, { message: 'Bio must be at least 10 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
  linkedinUrl: z.string().url({ message: 'Must be a valid URL' }).or(z.string().length(0)),
  teamSection: z.enum(['leadership', 'domain-experts'])
});

export type TeamMemberFormData = z.infer<typeof teamMemberSchema>;
