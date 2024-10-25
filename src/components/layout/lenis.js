'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';

function LenisWrap({ children }) {
  const lenis = useLenis();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          lenis?.scrollTo(target); 
        }
      }
    };
  
    window.addEventListener('hashchange', scrollToHash);
  
    scrollToHash();
  
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [lenis]); 

  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default LenisWrap;
