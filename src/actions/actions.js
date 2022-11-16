import { useState } from 'react';

export const useToggleExp = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const handleProfessionalExp = () => {
    setActiveTab("professional");
  };
  const handleBackgroundExp = () => {
    setActiveTab("background");
  };

  // const handleExperience = () => {
  //   if (activeTab === 'professional') {
  //     setActiveTab('professional')
  //   } else { setActiveTab('background') }
  //   // activeTab === 'professional' ? setActiveTab('professional') : setActiveTab('background');
  // };



  return {
    activeTab,
    handleProfessionalExp,
    handleBackgroundExp,
    // handleExperience,
  };
}

export const useToggleBtn = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = id =>
    isShowing === id ? setIsShowing(false) : setIsShowing(id);

  return {
    isShowing,
    handleToggle,
  };
};
