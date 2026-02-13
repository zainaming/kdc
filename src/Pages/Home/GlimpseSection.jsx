import React, { useState, useRef, useEffect } from 'react';
import vdo from '../../assets/vdieo.mp4';

const GlimpseSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true); 

  useEffect(() => {
    let timeout;
    if (isPlaying) {
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 1000); 
    } else {
      setShowControls(true); 
    }

    return () => clearTimeout(timeout);
  }, [isPlaying]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true); // Pause karte hi button dikhao
    }
  };

  // Video par click karke bhi play/pause aur controls toggle honge
  const togglePlayPause = () => {
    if (isPlaying) {
      handleStopVideo();
    } else {
      handlePlayVideo();
    }
  };

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-4 sm:mb-6">
          <button className="px-6 sm:px-8 py-2 text-center border-2 border-[#6f7d62] text-[#2a241f] font-semibold rounded-full text-sm sm:text-lg transition-colors">
            Video
          </button>
        </div>
        
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a241f] mb-3 sm:mb-4">
            A Glimpse Into Our Daily Care
          </h2>
          <p className="text-sm sm:text-base text-[#6f7d62] max-w-2xl mx-auto">
            Find information about your health protection, personal safety, legal rights and how to raise concerns or complaints.
          </p>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white mb-6 sm:mb-8">
          <div className="relative group cursor-pointer" onClick={togglePlayPause}>
            <video
              ref={videoRef}
              src={vdo}
              className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[500px] object-cover"
              muted
              playsInline
              onEnded={() => { setIsPlaying(false); setShowControls(true); }} // Video khatam hone par reset
            />

            {/* Dark Overlay - Yeh bhi controls ke saath hide hoga */}
            <div className={`absolute inset-0 bg-black/15 transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Play/Stop Button in Center */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              {!isPlaying ? (
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePlayVideo(); }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none"
                  aria-label="Play video"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#a4632b]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              ) : (
                <button 
                  onClick={(e) => { e.stopPropagation(); handleStopVideo(); }}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none"
                  aria-label="Stop video"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[#a4632b]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h12v12H6z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-6 sm:py-8 rounded-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 text-center">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6f7d62] italic">30+</p>
              <p className="text-xs sm:text-sm text-black mt-1">Years of experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6f7d62] italic">120+</p>
              <p className="text-xs sm:text-sm text-black mt-1">Certified care specialists</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6f7d62] italic">500+</p>
              <p className="text-xs sm:text-sm text-black mt-1">Families Supported</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#6f7d62] italic">24/7</p>
              <p className="text-xs sm:text-sm text-black mt-1">Continuous Care & Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpseSection;