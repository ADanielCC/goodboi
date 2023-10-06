// Main.jsx

import React from 'react';
import Logo from '../Logo/Logo'; // Use a relative path'
import ContentManager from '../ContentManager/ContentManager';

const Main = () => {
  return (
    <div>
    <Logo/>
      <ContentManager/>
      
      {/* Add other components here */}
    </div>
  );
};

export default Main;