import { useState } from 'react'


export const useToggleBtn = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleToggle = id =>
    isShowing === id ? setIsShowing(false) : setIsShowing(id);


  return {
    isShowing,
    handleToggle,
  };
};
