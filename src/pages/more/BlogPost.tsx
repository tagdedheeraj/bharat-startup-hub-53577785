
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { toast } from 'sonner';

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogPostPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [loading, setLoading] = useState(true);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const fetchBlogPost = () => {
      setLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        // This is mock data - in a real application this would come from a database
        const allBlogPosts = [
          {
            id: "blog1",
            title: "5 Effective Funding Strategies for Indian Startups in 2023",
            excerpt: "Discover the most effective ways for Indian startups to secure funding in the current economic climate, from angel investors to government schemes.",
            content: `
              <p>Securing funding is one of the most critical challenges that Indian startups face today. With the economic landscape constantly evolving, entrepreneurs need to be aware of the most effective strategies to attract investment.</p>
              
              <h2>1. Government Schemes and Initiatives</h2>
              <p>The Indian government has launched several initiatives like Startup India, SIDBI Fund of Funds, and Atal Innovation Mission that provide funding support to eligible startups. These programs offer not just capital but also mentorship, networking opportunities, and infrastructure support.</p>
              
              <h2>2. Angel Investors and Angel Networks</h2>
              <p>Angel investors continue to be a vital source of early-stage funding. Networks like Indian Angel Network, Mumbai Angels, and Venture Catalysts have expanded their investment activities across India, focusing on innovative business models with high growth potential.</p>
              
              <h2>3. Venture Capital Funding</h2>
              <p>Despite global economic uncertainties, venture capital firms have maintained strong interest in Indian startups, particularly in sectors like fintech, healthtech, edtech, and SaaS. Sequoia Capital India, Accel, and Tiger Global remain active players in the ecosystem.</p>
              
              <h2>4. Corporate Venture Capital</h2>
              <p>Established corporations are increasingly setting up venture arms to invest in startups that align with their strategic interests. This route offers startups not just funding but also access to corporate resources, market reach, and domain expertise.</p>
              
              <h2>5. Alternative Financing Options</h2>
              <p>Revenue-based financing, venture debt, and crowdfunding platforms are gaining traction as alternatives to traditional equity funding. These options allow founders to raise capital without diluting their ownership significantly.</p>
              
              <h2>Conclusion</h2>
              <p>The funding landscape for Indian startups continues to evolve. Entrepreneurs should consider multiple funding avenues and choose strategies that align with their stage of growth, industry dynamics, and long-term vision. With the right approach, securing adequate capital to fuel growth remains achievable even in challenging economic times.</p>
            `,
            author: "Rajesh Sharma",
            date: "August 15, 2023",
            readTime: "8 min read",
            category: "Funding",
            image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
          },
          {
            id: "blog2",
            title: "Navigating the Legal Landscape: Essential Compliance for MSMEs",
            excerpt: "A comprehensive guide to understanding and implementing the essential legal compliance requirements for Micro, Small, and Medium Enterprises in India.",
            content: `
              <p>For Micro, Small, and Medium Enterprises (MSMEs) in India, navigating the legal landscape can be challenging. However, understanding and implementing essential compliance requirements is crucial for long-term success.</p>
              
              <h2>Business Registration Requirements</h2>
              <p>The first step for any MSME is proper business registration. Depending on the structure, this could involve registering as a sole proprietorship, partnership, LLP, or private limited company. Each has its own set of requirements and benefits.</p>
              
              <h2>MSME Registration</h2>
              <p>Registering under the MSME Development Act provides numerous benefits, including priority sector lending, protection against delayed payments, and various tax and fee concessions. The registration process has been simplified through the Udyam Registration portal.</p>
              
              <h2>Tax Compliance</h2>
              <p>MSMEs must comply with various tax regulations, including GST registration (mandatory if turnover exceeds Rs. 40 lakhs for goods or Rs. 20 lakhs for services), income tax filing, and TDS compliance if applicable.</p>
              
              <h2>Labor Law Compliance</h2>
              <p>Depending on the size and nature of the business, MSMEs may need to comply with various labor laws like the Shops and Establishments Act, Payment of Wages Act, Employees' Provident Fund, and ESI regulations.</p>
              
              <h2>Industry-Specific Licenses</h2>
              <p>Based on the nature of business, MSMEs may need to obtain specific licenses such as FSSAI for food businesses, drug license for pharmaceutical companies, or pollution control board clearances for manufacturing units.</p>
              
              <h2>Conclusion</h2>
              <p>While compliance requirements may seem overwhelming, they are essential for legal operation and accessing various benefits. MSMEs should consider seeking professional help for ensuring comprehensive compliance, which will not only avoid penalties but also enhance credibility with customers, suppliers, and financial institutions.</p>
            `,
            author: "Priya Verma",
            date: "July 28, 2023",
            readTime: "10 min read",
            category: "Legal",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
          },
          {
            id: "blog3",
            title: "Digital Transformation for Small Businesses: A Step-by-Step Guide",
            excerpt: "Learn how small businesses can effectively implement digital transformation strategies to enhance operations, customer experience, and market reach.",
            content: `
              <p>Digital transformation is no longer optional for small businesses aiming to thrive in today's competitive landscape. This guide outlines a practical approach to implementing digital strategies that enhance operations, customer experience, and market reach.</p>
              
              <h2>1. Assess Your Current Digital Status</h2>
              <p>Begin by evaluating your existing digital capabilities, tools, and processes. Identify gaps, inefficiencies, and opportunities for improvement across all business functions, from customer service to internal operations.</p>
              
              <h2>2. Define Clear Digital Objectives</h2>
              <p>Establish specific, measurable goals for your digital transformation efforts. These could include improving customer engagement, streamlining operations, enhancing data analytics capabilities, or expanding market reach through digital channels.</p>
              
              <h2>3. Prioritize Customer Experience</h2>
              <p>Focus on enhancing customer journeys through digital touchpoints. Implement user-friendly websites, mobile responsiveness, seamless online purchasing options, and efficient customer service channels.</p>
              
              <h2>4. Implement Core Digital Tools</h2>
              <p>Adopt essential digital tools that align with your business needs, such as CRM systems, e-commerce platforms, cloud-based productivity suites, digital payment solutions, and basic cybersecurity measures.</p>
              
              <h2>5. Build Digital Marketing Capabilities</h2>
              <p>Develop a strategic approach to online presence through search engine optimization, content marketing, social media engagement, and targeted digital advertising to reach and engage your ideal customers.</p>
              
              <h2>Conclusion</h2>
              <p>Digital transformation doesn't require massive budgets or technical expertise. By taking an incremental, strategic approach, small businesses can successfully navigate their digital journey, gaining competitive advantages and positioning themselves for sustainable growth in an increasingly digital marketplace.</p>
            `,
            author: "Vikram Singh",
            date: "July 12, 2023",
            readTime: "7 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
          },
          // Add more blog posts with the same structure
          {
            id: "blog4",
            title: "The Power of Proper Business Registration: Benefits and Process",
            excerpt: "Understand why proper business registration is crucial and learn about the streamlined process to register your business entity in India.",
            content: `
              <p>Business registration is a fundamental step that provides legal recognition to your enterprise and unlocks numerous benefits that can accelerate growth and ensure sustainability.</p>
              
              <h2>Why Business Registration Matters</h2>
              <p>Beyond legal compliance, proper registration establishes credibility with customers, vendors, and financial institutions. It creates a clear separation between personal and business assets, limiting liability and protecting personal wealth.</p>
              
              <h2>Choosing the Right Business Structure</h2>
              <p>Each business structure offers distinct advantages in terms of liability protection, tax implications, and operational flexibility. Sole proprietorships are simple but offer no liability protection, while private limited companies provide robust protection but involve more compliance requirements.</p>
              
              <h2>The Registration Process Simplified</h2>
              <p>The Indian government has significantly streamlined business registration processes through digital initiatives. Most registrations can now be completed online with minimal documentation, reducing time and effort required.</p>
              
              <h2>Post-Registration Compliance</h2>
              <p>After registration, businesses must maintain compliance through annual filings, tax returns, and other regulatory requirements specific to their industry and structure. Establishing good compliance practices from the start prevents complications later.</p>
              
              <h2>Conclusion</h2>
              <p>Proper business registration is an investment in your business's future that yields returns through enhanced credibility, access to funding, clear ownership structure, and legal protection. The streamlined registration processes now available make it easier than ever to formalize your business and begin reaping these benefits.</p>
            `,
            author: "Amit Patel",
            date: "July 5, 2023",
            readTime: "6 min read",
            category: "Legal",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
          },
          {
            id: "blog5",
            title: "Marketing Strategies for Bootstrapped Startups",
            excerpt: "Effective marketing strategies that require minimal budget but deliver maximum impact for startups operating with limited resources.",
            content: `
              <p>Marketing effectively with limited resources is a challenge that most bootstrapped startups face. However, with strategic thinking and creative approaches, it's possible to build brand awareness and attract customers without significant financial investment.</p>
              
              <h2>Leverage Content Marketing</h2>
              <p>Content marketing offers exceptional ROI for startups. By creating valuable, relevant content that addresses your target audience's pain points, you can establish authority in your niche and drive organic traffic. Focus on quality over quantity, and repurpose content across multiple channels to maximize reach.</p>
              
              <h2>Utilize Social Media Strategically</h2>
              <p>Rather than spreading efforts across multiple platforms, focus on one or two channels where your target audience is most active. Develop a consistent posting schedule, engage authentically with followers, and use user-generated content to expand reach without additional costs.</p>
              
              <h2>Build Strategic Partnerships</h2>
              <p>Identify complementary businesses that target similar audiences but aren't direct competitors. Explore co-marketing opportunities, joint webinars, or collaborative content that allows both parties to access new audience segments without additional marketing spend.</p>
              
              <h2>Embrace Email Marketing</h2>
              <p>Email remains one of the highest-ROI marketing channels available. Build your subscriber list from day one, segment your audience for targeted messaging, and focus on providing value rather than constant promotion to maintain engagement and drive conversions.</p>
              
              <h2>Conclusion</h2>
              <p>Bootstrapped startups can achieve significant marketing success by focusing on high-impact, low-cost strategies that emphasize creativity and strategic thinking over financial investment. By building relationships, providing exceptional value, and leveraging digital tools effectively, resource-constrained startups can compete effectively even against better-funded competitors.</p>
            `,
            author: "Neha Gupta",
            date: "June 22, 2023",
            readTime: "9 min read",
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
          }
        ];
        
        // Find the blog post with the matching ID
        const foundPost = allBlogPosts.find(post => post.id === blogId);
        
        if (foundPost) {
          setBlogPost(foundPost);
        } else {
          toast.error("Blog post not found");
        }
        
        setLoading(false);
      }, 800);
    };
    
    if (blogId) {
      fetchBlogPost();
    }
  }, [blogId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="mb-6">The blog post you're looking for doesn't seem to exist.</p>
          <Link to="/more/blogs" className="btn-primary inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[40vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={blogPost.image} 
          alt={blogPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="bg-brand-600 text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
              {blogPost.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">{blogPost.title}</h1>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 border-b pb-6 mb-6">
            <div className="flex items-center mr-4 mb-2">
              <User className="h-4 w-4 mr-1" />
              {blogPost.author}
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {blogPost.date}
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Clock className="h-4 w-4 mr-1" />
              {blogPost.readTime}
            </div>
            <div className="flex items-center mb-2">
              <Tag className="h-4 w-4 mr-1" />
              {blogPost.category}
            </div>
          </div>

          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Back to Blogs Button */}
          <div className="mt-10 pt-6 border-t">
            <Link to="/more/blogs" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Blogs
            </Link>
          </div>
        </div>

        {/* Related Blogs */}
        <div className="max-w-4xl mx-auto mt-16">
          <SectionHeading
            subheading="CONTINUE READING"
            heading="Related Articles"
            description=""
            align="left"
          />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This would normally fetch related posts based on category or tags */}
            {/* Showing placeholder related posts for now */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <Link to={`/more/blogs/${blogPost.id === 'blog1' ? 'blog2' : 'blog1'}`} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blogPost.id === 'blog1' ? "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" : "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"}
                    alt="Related blog"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {blogPost.id === 'blog1' ? 'Legal' : 'Funding'}
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {blogPost.id === 'blog1' ? 'Navigating the Legal Landscape: Essential Compliance for MSMEs' : '5 Effective Funding Strategies for Indian Startups in 2023'}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {blogPost.id === 'blog1' ? 'July 28, 2023' : 'August 15, 2023'}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
