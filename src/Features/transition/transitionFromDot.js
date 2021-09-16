import { useState } from 'react';
import SDot from '../../Styled/dot/SDot';

const TransitionFromDot = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    false: {},
    true: {
      width: '100%',
      height: '100%',
      borderRadius: 0,
    },
    hover: {
      scale: open ? 1 : 2.5,
    },
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <SDot
      animate={`${open}`}
      variants={variants}
      whileHover="hover"
      onClick={handleClick}
      transition={{
        duration: 0.5,
        ease: 'anticipate',
      }}
    />
  );
};

export default TransitionFromDot;
