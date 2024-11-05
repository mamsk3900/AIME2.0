import React, { createContext, useContext, useState } from 'react';

// Create a context to share the color state
const ColorContext = createContext();

// Provider component to wrap around the app and provide the color state
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('blue'); // Shared color state

  const toggleColor = () => {
    setColor(color === 'blue' ? 'orange' : 'blue');
  };

  return (
    <ColorContext.Provider value={{ color, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the color context
export const useColor = () => useContext(ColorContext);
