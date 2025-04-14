
import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  mobile: z.string().min(10, {
    message: 'Please enter a valid mobile number.',
  }).max(15),
  companyName: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  subject: z.string().min(2, {
    message: 'Please select a subject.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not exceed 500 characters.',
  }),
});

export type FormValues = z.infer<typeof formSchema>;
