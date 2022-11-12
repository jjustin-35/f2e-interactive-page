import React, { createContext, useEffect, useContext, useState } from 'react';

export const mobileContext = createContext();

export const IsMobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const installMediaQuery = (mediaQuery, callback) => {
            const mql = window.matchMedia(mediaQuery);
            mql.addEventListener("change", (e) => callback(e.matches));
            callback(mql.matches);
        }
      
        installMediaQuery("(min-width: 768px)", (matches) => {
            if (matches) return setIsMobile(false);
      
            setIsMobile(true);
        })
    }, []);

  return (
      <mobileContext.Provider value={isMobile}>
          {children}
      </mobileContext.Provider>
  )
}

export const useIsMobile = () => {
    return useContext(mobileContext);
}
