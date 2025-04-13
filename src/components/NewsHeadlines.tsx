import { useState } from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import FundingApplicationForm from '@/components/funding/FundingApplicationForm';

interface NewsItem {
  title: string;
  date: string;
  source: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

export default function NewsHeadlines() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<string>('');

  const newsItems: NewsItem[] = [
    {
      title: "Bharat Startup Solution Raises ₹50Cr to Support MSME Growth",
      date: "May 15, 2023",
      source: "Economic Times",
      excerpt: "Leading startup facilitator raises funding to expand its MSME support services across India.",
      imageUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Government Launches New Scheme for Startups with Support from BSS",
      date: "April 28, 2023",
      source: "Business Standard",
      excerpt: "New government initiative partners with Bharat Startup Solution to provide enhanced funding access.",
      imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Bharat Startup Solution Expands Operations to 10 New Cities",
      date: "March 12, 2023",
      source: "Startup India",
      excerpt: "The company continues its mission to support MSMEs by expanding to tier-2 and tier-3 cities.",
      imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    }
  ];

  const handleReadMoreClick = (title: string) => {
    setSelectedNews(title);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 md:py-24 curved-section-both relative">
      <div className="curved-wave-top text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full opacity-10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subheading="IN THE NEWS"
          heading="We Are Making The Headlines"
          description="Our innovative approach to startup and MSME support is being recognized by leading publications across the country."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:border-brand-200 animate-fadeIn card-curve" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>{news.source}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{news.excerpt}</p>
                
                <Dialog open={isDialogOpen && selectedNews === news.title} onOpenChange={(open) => {
                  setIsDialogOpen(open);
                  if (!open) setSelectedNews('');
                }}>
                  <DialogTrigger asChild>
                    <button 
                      className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700"
                      onClick={() => handleReadMoreClick(news.title)}
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>Stay Updated</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-center mb-4">Enter your details to read the full article and stay updated with our latest news.</p>
                      <FundingApplicationForm 
                        fundingTitle="News Subscription" 
                        fundingAmount="" 
                        onSubmitSuccess={() => setIsDialogOpen(false)}
                        formType="newsletter"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/more/blogs" className="btn-primary inline-flex items-center rounded-full">
            View All News
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <div className="curved-wave-bottom text-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full opacity-10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" transform="rotate(180)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" transform="rotate(180)"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" transform="rotate(180)"></path>
        </svg>
      </div>
      
      <div className="blob-shape bg-purple-500/10 w-64 h-64 -left-24 top-1/3"></div>
      <div className="blob-shape bg-blue-500/10 w-96 h-96 right-0 bottom-0"></div>
    </section>
  );
}
