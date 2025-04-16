
import React from 'react';
import { Quote } from 'lucide-react';

export interface FeaturedStoryProps {
  story: {
    name: string;
    industry: string;
    service: string;
    amount?: string;
    description: string;
    testimonial: string;
    person: string;
    position: string;
    image: string;
  };
  index: number;
}

const FeaturedStory = ({ story, index }: FeaturedStoryProps) => {
  return (
    <div 
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 animate-fadeIn`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="lg:w-1/2">
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}></div>
          <img
            src={story.image}
            alt={story.name}
            className="relative z-10 rounded-xl shadow-xl object-cover h-72 w-full"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-3 inline-block">
          {story.industry} | {story.service}
        </div>
        <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
        {story.amount && (
          <p className="text-lg font-semibold text-brand-600 mb-3">Funding Secured: {story.amount}</p>
        )}
        <p className="text-gray-600 mb-6">{story.description}</p>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-6">
          <div className="flex items-start">
            <Quote className="h-8 w-8 text-brand-200 mr-3 flex-shrink-0" />
            <p className="italic text-gray-600">{story.testimonial}</p>
          </div>
          <div className="mt-4 pl-11">
            <p className="font-semibold">{story.person}</p>
            <p className="text-sm text-gray-500">{story.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
