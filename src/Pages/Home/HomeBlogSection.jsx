// src/components/Home/HomeBlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../Data/blogData'; // Path check kar lein

const HomeBlogSection = () => {
  // Homepage par sirf top 3 blogs dikhane ke liye
  const featuredBlogs = blogData.slice(0, 3);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-4 py-1.5 sm:py-2 border border-[#6f7d62] text-[#6f7d62] rounded-full text-xs sm:text-sm font-bold mb-4">
            Blog
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-[#2A241F] mb-4 tracking-tight">
            Tips, Stories & News
          </h2>
          <p className="text-sm sm:text-base text-[#6A5E54] max-w-2xl mx-auto">
            Purpose: education, trust-building, and family support.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featuredBlogs.map((post) => (
            <article key={post.id} className="flex flex-col group">
              {/* Image Container */}
              <div className="relative rounded-[20px] overflow-hidden mb-5 aspect-[4/3] shadow-sm">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="space-y-1 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#A4632B] font-bold text-sm sm:text-base">
                    Care & Support
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] leading-tight line-clamp-2 hover:text-[#A4632B] transition-colors cursor-pointer">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                
                <p className="text-[#776a5f]/70 text-sm font-medium">
                  {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - Optional but good for UX */}
        <div className="text-center hidden">
             <Link 
              to="/blogs" 
              className="bg-[#A4632B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8B5224] transition-colors inline-block"
            >
              View All Posts
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;