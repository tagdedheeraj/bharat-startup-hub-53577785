
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { ContactFormPersonalInfo } from './';
import { ContactFormSubject } from './';
import { ContactFormMessage } from './';
import { ContactFormSubmitButton } from './';
import { formSchema, FormValues } from './types';

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      companyName: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Here you would normally submit the data to your backend
      console.log('Contact Form submitted:', data);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="bg-gradient-to-r from-india-saffron to-brand-600 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
        <p className="text-white/90">We'd love to hear from you. Fill out the form below.</p>
      </div>
      <CardContent className="p-6 pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ContactFormPersonalInfo form={form} />
            <ContactFormSubject form={form} />
            <ContactFormMessage form={form} />
            <ContactFormSubmitButton isSubmitting={isSubmitting} />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
