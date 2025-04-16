
import React from 'react';

export interface StoryCardProps {
  story: {
    name: string;
    industry: string;
    service: string;
    result: string;
    image: string;
  };
  index: number;
}

const StoryCard = ({ story, index }: StoryCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 animate-fadeIn h-full flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={story.image}
          alt={story.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
          {story.industry}
        </div>
        <h3 className="text-xl font-bold mb-2">{story.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          <span className="font-medium">Service: </span>{story.service}
        </p>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm font-medium">
            <span className="text-brand-600">Result: </span>{story.result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
