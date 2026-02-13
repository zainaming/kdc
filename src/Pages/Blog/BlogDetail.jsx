import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogData } from '../../Data/blogData';
import BlogHero from '../../assets/blogHeaderImg.png';
import { IoIosArrowForward } from 'react-icons/io';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find(post => post.id === parseInt(id));
  
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F0E6] px-4 py-12">
        <h1 className="text-3xl font-bold text-[#A4632B] mb-4">Blog Not Found</h1>
        <p className="text-gray-600 text-center max-w-md">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/blogs" 
          className="mt-6 bg-[#A4632B] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8B5224] transition-colors"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  // Fallback content if blog.content is not defined
  const content = blog.content || [
    {
      type: "paragraph",
      text: blog.desc
    },
    {
      type: "heading",
      text: "About This Article"
    },
    {
      type: "paragraph",
      text: "This article provides valuable information about care and support services. Stay tuned for more detailed content coming soon."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Back Button - Responsive */}
        <div className="mb-2 sm:mb-4 mt-8 sm:mt-20">
          <Link 
            to="/services" 
            className="text-[#A4632B]   font-bold   inline-flex items-center  px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base
                        transition-colors focus:outline-none  "
            aria-label="Back to Blogs"
          >
            <span className='text-black font-bold'>Blogs</span> <IoIosArrowForward /> Blogs Detail
          </Link>
        </div>
        
        {/* Blog Header Section - Fully Responsive */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <span className="bg-[#EDE0D5] text-[#A4632B] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              {blog.category} | {blog.date}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight mb-4">
            {blog.title}
          </h1>
        </div>
        
        {/* Featured Image - Responsive with proper heights */}
        <div className="rounded-2xl overflow-hidden mb-8 sm:mb-10 shadow-lg">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        
        {/* Blog Content - Fully Responsive Typography */}
        <div className="prose max-w-none space-y-6 sm:space-y-8">
          {content.map((block, index) => (
            <div key={index} className="space-y-4">
              {block.type === "heading" && (
                <h2 className="text-2xl sm:text-3xl font-bold text-[#6F7D62] mb-3 sm:mb-4">
                  {block.text}
                </h2>
              )}
              
              {block.type === "subheading" && (
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-3 sm:mb-4">
                  {block.text}
                </h3>
              )}
              
              {block.type === "paragraph" && (
                <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                  {block.text}
                </p>
              )}
              
              {block.type === "list" && (
                <ul className="list-disc pl-6 space-y-2 mb-4 text-base sm:text-lg">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              
              {block.type === "quote" && (
                <blockquote className="border-l-4 border-[#A4632B] pl-4 py-3 sm:py-4 my-6 sm:my-8  rounded-r-lg">
                  <p className="text-[#6F7D62] font-medium italic text-base sm:text-lg">
                    "{block.text}"
                  </p>
                  <footer className="mt-3  text-[#A4632B] font-bold text-sm sm:text-base">
                    — {block.author}
                  </footer>
                </blockquote>
              )}
              
              {block.type === "image" && (
                <div className="rounded-2xl overflow-hidden mb-8 sm:mb-10 shadow-md">
                  <img 
                    src={block.src} 
                    alt="Blog content illustration" 
                    className="w-full h-auto sm:h-[350px] md:h-[400px] object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Popular Posts Section - Fully Responsive Grid */}
        <div className="mt-16 sm:mt-10 lg:mt-4 pt-4 sm:pt-4  border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">Popular Posts</h3>
            <Link 
              to="/blogs" 
              className="bg-[#A4632B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#8B5224] transition-colors
                         focus:outline-none focus:ring-2 focus:ring-[#A4632B] focus:ring-offset-2"
            >
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {blogData
              .filter(post => post.isPopular)
              .slice(0, 3)
              .map(post => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  <div className="rounded-xl overflow-hidden h-48 sm:h-56 md:h-64">
                    <img 
                      src={post.image} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
                      {post.desc}
                    </p>
                    <Link
                      to={`/blog/${post.id}`} 
                      className="text-[#A4632B] font-bold text-sm underline decoration-2 underline-offset-4 
                                 inline-block hover:text-[#8B5224] transition-colors
                                 focus:outline-none focus:ring-2 focus:ring-[#A4632B] focus:ring-offset-2"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;