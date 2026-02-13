import React from 'react';
import { blogData } from '../../Data/blogData';
import { Link } from 'react-router-dom';

const PopularPosts = () => {
  const populars = blogData.filter(post => post.isPopular);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 md:mb-12">Popular Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
        {populars.map(post => (
          <div key={post.id} className="group">
            <div className="rounded-2xl overflow-hidden h-56 sm:h-64 md:h-72 mb-5 shadow-sm">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="blog" />
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-black/70 tracking-widest block uppercase">
                {post.category} • {post.date}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] leading-tight group-hover:text-[#A4632B] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
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

export default PopularPosts;
