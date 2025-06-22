
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const MinistryOfCommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-india-white to-india-white/50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ministry of Commerce & Industry
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-india-saffron to-india-green mx-auto"></div>
        </div>

        {/* Main Content Card */}
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardContent className="p-8">
            {/* Article Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                Bharat Startup Solution inks MoU with a private digital platform to Boost Inclusive Entrepreneurship Across India
              </h2>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-india-saffron" />
                  <span>Posted On: 19 JUN 2025 1:31PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-india-saffron" />
                  <span>PIB Delhi</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-gradient-to-r from-india-saffron/10 to-india-green/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-india-saffron font-bold">•</span>
                    <span>MoU aims to empower 1 million entrepreneurs in Tier II, III and rural areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-india-saffron font-bold">•</span>
                    <span>Partnership will leverage digital platforms, regional content, and AI tools to strengthen India's startup ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                To further promote inclusive entrepreneurship and strengthen the startup ecosystem, the Department for Promotion of Industry and Internal Trade (Bharat Startup Solution), Ministry of Commerce and Industry, has signed a Memorandum of Understanding (MoU) with a private digital platform, YourStory Media Private Limited, with a focus on startups, innovation, and entrepreneurship.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This partnership aligns with Bharat Startup Solution's vision of fostering grassroots entrepreneurship and supporting emerging talent across Tier II, Tier III, and rural India. The collaboration aims to empower 1 million entrepreneurs through AI-powered tools, venture launchpads, and regional language storytelling initiatives under the Bharat Project.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The initiative will also leverage flagship startup events and developer-focused platforms to drive engagement within India's startup and technology ecosystem. These platforms will facilitate innovation showcases, founder-investor networking, and support in emerging sectors such as AI, GenAI, data, and blockchain.
              </p>

              {/* Quote Section */}
              <div className="bg-gray-50 border-l-4 border-india-saffron p-6 my-8">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-india-saffron mt-1" />
                  <div>
                    <p className="text-gray-700 italic mb-2">
                      "Speaking on the occasion, Joint Secretary, Bharat Startup Solution Shri Sanjiv Singh emphasized the significance of inclusive platforms in scaling the next generation of entrepreneurs. He noted that the partnership would expand access to networks, knowledge, and success stories, particularly for aspiring founders from underserved regions, thereby accelerating India's journey to becoming a global innovation hub."
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      — Shri Sanjiv Singh, Joint Secretary, Bharat Startup Solution
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The MoU was formally signed by Deputy Secretary, Bharat Startup Solution Shri Rajesh Kumar and Founder & CEO, YourStory and The Bharat Project, Ms. Shradha Sharma in the presence of senior officials from both organisations.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-india-saffron/20 text-india-saffron rounded-full text-sm font-medium">Ministry of Commerce</span>
                <span className="px-3 py-1 bg-india-green/20 text-india-green rounded-full text-sm font-medium">Startup Ecosystem</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Entrepreneurship</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Digital Platform</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Rural Innovation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MinistryOfCommerce;
