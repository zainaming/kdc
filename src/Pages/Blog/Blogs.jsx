import React from 'react';
import PageHeader from '../../components/HeaderBg';
import BlogHero from '../../assets/blogHeaderImg.png';
import RecentPosts from '../../components/blog/RecentPosts';
import PopularPosts from '../../components/blog/PopularPosts';
import { blogData } from '../../data/blogData';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const featured = blogData.find(post => post.isFeatured);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <PageHeader 
        label="Our Blog"
        title="Insights, Guidance, And Updates"
        description="Explore articles designed to inform, support, and guide individuals and families through care, services, and daily living topics."
        backgroundImage={BlogHero}
      />

      {/* 2. Responsive Featured Post Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 md:mt-14 relative z-20 mb-10 md:mb-20">
        <div className="relative flex flex-col items-center lg:items-start">
          
          {/* Main Large Image - Left Aligned on Large Screens */}
          <div className="w-full lg:w-[85%] h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={featured.image} 
              className="w-full h-full object-cover" 
              alt="Main Featured" 
            />
          </div>
          
          {/* Overlapping Content Box */}
          {/* Mobile/Tablet: Stacks normally with -mt-16 to overlap slightly */}
          {/* Desktop (lg): Uses your specific right-32 and mt-48 positioning */}
          <div className="w-[92%] sm:w-[85%] lg:w-[60%] lg:absolute lg:right-32 lg:top-0 bg-[#FBF2E6] p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border border-[#E9DCCB]/50 flex flex-col justify-center -mt-16 lg:mt-48 z-30">
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-3 block uppercase">
              {featured.category} • {featured.date}
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-[#1A1A1A] mb-3 md:mb-4 leading-tight">
              {featured.title}
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-xs sm:text-sm line-clamp-3 md:line-clamp-none">
              {featured.desc}
            </p>
            <Link 
              to={`/blog/${featured.id}`} 
              className="bg-[#A4632B] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-[10px] hover:bg-[#8B5224] transition-all shadow-lg tracking-widest w-fit uppercase"
            >
              View Detail
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Recent Posts Section */}
      <RecentPosts />

      {/* 4. Popular Posts Section */}
      <PopularPosts />
    </div>
  );
};

export default Blogs;
