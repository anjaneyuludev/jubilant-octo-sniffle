import React from 'react';
import TopBar from '../Components/TopBar';
import ItemDisplay from '../Components/ItemsDisplay';
import Chains from '../Components/Chains';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="landingSection">
        <ItemDisplay />
        <Chains />
      </div>
    </div>
  );
};

export default LandingPage;
