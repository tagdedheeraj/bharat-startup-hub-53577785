
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const BlogsPage = () => {
  const featuredBlogs = [
    {
      title: "5 Effective Funding Strategies for Indian Startups in 2023",
      excerpt: "Discover the most effective ways for Indian startups to secure funding in the current economic climate, from angel investors to government schemes.",
      author: "Rajesh Sharma",
      date: "August 15, 2023",
      readTime: "8 min read",
      category: "Funding",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Navigating the Legal Landscape: Essential Compliance for MSMEs",
      excerpt: "A comprehensive guide to understanding and implementing the essential legal compliance requirements for Micro, Small, and Medium Enterprises in India.",
      author: "Priya Verma",
      date: "July 28, 2023",
      readTime: "10 min read",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Digital Transformation for Small Businesses: A Step-by-Step Guide",
      excerpt: "Learn how small businesses can effectively implement digital transformation strategies to enhance operations, customer experience, and market reach.",
      author: "Vikram Singh",
      date: "July 12, 2023",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const recentBlogs = [
    {
      title: "The Power of Proper Business Registration: Benefits and Process",
      excerpt: "Understand why proper business registration is crucial and learn about the streamlined process to register your business entity in India.",
      author: "Amit Patel",
      date: "July 5, 2023",
      readTime: "6 min read",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Marketing Strategies for Bootstrapped Startups",
      excerpt: "Effective marketing strategies that require minimal budget but deliver maximum impact for startups operating with limited resources.",
      author: "Neha Gupta",
      date: "June 22, 2023",
      readTime: "9 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Understanding Different Funding Rounds: From Seed to Series C",
      excerpt: "A detailed explanation of the various funding rounds, their purposes, expectations, and how to prepare your startup for each stage.",
      author: "Rajesh Sharma",
      date: "June 15, 2023",
      readTime: "11 min read",
      category: "Funding",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "The Importance of Intellectual Property Protection for Startups",
      excerpt: "Why intellectual property protection is crucial for startups and how to implement effective IP strategies to safeguard your innovations.",
      author: "Priya Verma",
      date: "June 8, 2023",
      readTime: "8 min read",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Building a Sustainable MSME: Environmental Practices and Benefits",
      excerpt: "How incorporating sustainable practices in your MSME can benefit both the environment and your business growth in the long run.",
      author: "Anjali Desai",
      date: "May 30, 2023",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1491961865842-98f7befd1a60?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Effective Financial Management for Small Businesses",
      excerpt: "Essential financial management practices that small businesses should implement to ensure healthy cash flow and sustainable growth.",
      author: "Amit Patel",
      date: "May 22, 2023",
      readTime: "9 min read",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const categories = [
    { name: "Funding", count: 8 },
    { name: "Legal", count: 12 },
    { name: "Marketing", count: 7 },
    { name: "Technology", count: 9 },
    { name: "Finance", count: 6 },
    { name: "Sustainability", count: 4 },
    { name: "Growth Strategies", count: 10 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Insights for Startups & MSMEs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical advice, industry insights, and expert guidance to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="FEATURED ARTICLES"
            heading="Our Latest Insights"
            description="In-depth articles on trending topics in the startup and MSME ecosystem."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredBlogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {blog.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{blog.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
                    Read More
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Blogs */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <SectionHeading
                subheading="ALL ARTICLES"
                heading="Browse Our Blog Archive"
                description=""
                align="left"
              />
              
              <div className="space-y-8 mt-8">
                {recentBlogs.map((blog, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full">
                            {blog.category}
                          </div>
                          <div className="text-sm text-gray-500">
                            {blog.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            {blog.author}
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            {blog.readTime}
                          </div>
                          <a href="#" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
                            Read More
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="btn-primary">
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Search */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 pr-10"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between py-2 border-b border-gray-100 hover:text-brand-600">
                        <span className="flex items-center">
                          <Tag className="h-4 w-4 mr-2" />
                          {category.name}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-brand-50 rounded-xl p-6 shadow-md border border-brand-100">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest insights and articles delivered directly to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Write for Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              subheading="CONTRIBUTE"
              heading="Write for Us"
              description="Share your expertise with our community of startup founders and MSME owners."
            />
            
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Are you an expert in startup funding, legal compliance, marketing, or any other area relevant to startups and MSMEs? We welcome guest contributions from industry professionals who can provide valuable insights to our audience.
            </p>
            
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Submit Your Article
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
