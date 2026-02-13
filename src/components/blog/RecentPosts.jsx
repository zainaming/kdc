import React from 'react';
import { blogData } from '../../Data/blogData';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  const mainRecent = blogData.find(post => post.id === 2);
  const gridRecent = blogData.filter(post => post.isRecent && post.id !== 2).slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 md:mb-12">Our Recent Posts</h2>
      
      {/* Side-by-Side Post */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12 md:mb-20">
        <div className="w-full lg:w-3/5">
          <div className="rounded-2xl overflow-hidden shadow-sm h-[250px] sm:h-[350px] md:h-[400px]">
            <img src={mainRecent.image} className="w-full h-full object-cover" alt="Recent" />
          </div>
        </div>
        <div className="w-full lg:w-2/5 space-y-4 md:space-y-5">
          <span className="text-[11px] font-bold text-gray-500 tracking-widest">
            {mainRecent.category} • {mainRecent.date}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight">
            {mainRecent.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {mainRecent.desc}
          </p>
          <Link to={`/blog/${mainRecent.id}`} className="inline-block bg-[#A4632B] text-white px-8 md:px-10 py-3 rounded-full font-bold text-xs hover:bg-[#8B5224] transition-all shadow-md">
            View Detail
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {gridRecent.map((post) => (
          <div key={post.id} className="group flex flex-col">
            <div className="rounded-lg overflow-hidden h-56 sm:h-64 mb-4 shadow-sm">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="blog" />
            </div>
            <div className="space-y-3 flex-grow">
              <span className="text-[10px] font-bold text-black/70 tracking-widest block uppercase">
                {post.category} • {post.date}
              </span>
              <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-tight group-hover:text-[#A4632B] transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                {post.desc}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-block text-[#A4632B] font-bold text-xs underline decoration-2 underline-offset-4">
                Read More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
