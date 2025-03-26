
import { useState } from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import FundingForm from './FundingForm';

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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="IN THE NEWS"
          heading="We Are Making The Headlines"
          description="Our innovative approach to startup and MSME support is being recognized by leading publications across the country."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg hover:border-brand-200 animate-fadeIn" 
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
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Stay Updated</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-center mb-4">Enter your details to read the full article and stay updated with our latest news.</p>
                      <FundingForm 
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
          <Link to="/more/blogs" className="btn-primary inline-flex items-center">
            View All News
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
