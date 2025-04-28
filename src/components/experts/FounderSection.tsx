
import React, { useState, useEffect } from 'react';
import { Trophy, Award, BookOpen } from 'lucide-react';
import { storage } from '@/lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

interface FounderData {
  name: string;
  position: string;
  expertise: string;
  experience: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

interface FounderSectionProps {
  founder: FounderData;
}

const FounderSection: React.FC<FounderSectionProps> = ({ founder }) => {
  const [imageUrl, setImageUrl] = useState<string>('/placeholder.svg');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if (!founder.photoUrl) {
        setLoading(false);
        return;
      }

      try {
        if (founder.photoUrl.startsWith('http')) {
          setImageUrl(founder.photoUrl);
        } else {
          const storageRef = ref(storage, founder.photoUrl);
          const url = await getDownloadURL(storageRef);
          console.log("Founder image loaded:", url);
          setImageUrl(url);
        }
      } catch (error) {
        console.error('Error loading founder image:', error);
        setImageUrl('/placeholder.svg');
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [founder.photoUrl]);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-10 -top-32 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/3 top-2/3 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
                <img
                  src={imageUrl}
                  alt={`${founder.name} - ${founder.position}`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    loading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => setLoading(false)}
                  onError={() => {
                    setImageUrl('/placeholder.svg');
                    setLoading(false);
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium">{founder.experience} Leadership</span>
                  </div>
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-white/80">{founder.position}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-800 font-semibold">{founder.experience} Industry Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">
                {founder.name}
              </h2>
              <p className="text-xl text-brand-600 font-medium">{founder.position}</p>
              
              <div className="flex flex-wrap gap-3 my-4">
                {founder.expertise.split(', ').map((item, index) => (
                  <span 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              <div className="prose prose-lg text-gray-700 max-w-none">
                {founder.bio.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                  <Award className="w-7 h-7 text-amber-500 mb-2" />
                  <h4 className="font-semibold text-gray-800">Leadership Excellence</h4>
                  <p className="text-sm text-gray-600">Guided numerous startups to market success</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                  <Trophy className="w-7 h-7 text-amber-500 mb-2" />
                  <h4 className="font-semibold text-gray-800">Investment Expert</h4>
                  <p className="text-sm text-gray-600">Strategic angel investments in high-growth sectors</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100">
                  <BookOpen className="w-7 h-7 text-amber-500 mb-2" />
                  <h4 className="font-semibold text-gray-800">Industry Knowledge</h4>
                  <p className="text-sm text-gray-600">Deep insights across multiple business domains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
