"use client"
import React, { useEffect, useState } from 'react'
import { animateScroll as scroll, } from 'react-scroll';
const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      scroll.scrollToTop(); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      <div className="fixed bottom-4 right-4">
        {isVisible && (
          <button onClick={scrollToTop} className="w-[50px] h-[50px] bg-[#292329] font-semibold flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(180,160,255,0.253)] cursor-pointer duration-[0.3s] overflow-hidden relative rounded-[50%] border-[none] hover:w-[140px] hover:duration-[0.3s] hover:bg-[rgb(181,160,255)] hover:items-center hover:rounded-[50px] before:absolute before:content-['Back to Top'] before:text-[white] before:text-[0px] before:-bottom-5 hover:before:text-[13px] hover:before:opacity-100 hover:before:duration-[0.3s] hover:before:bottom-[unset]">
          <svg className="w-[12px] duration-300 " viewBox="0 0 384 512">
            <path className='fill-[white]'
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
        )}
      </div>
    );
  };

export default ScrollToTopBtn

