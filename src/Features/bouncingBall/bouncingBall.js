import SDot from '../../Styled/dot/SDot';

const BouncingBall = () => (
  <SDot
    animate={{
      y: [0, -70],
    }}
    transition={{
      duration: 0.35,
      yoyo: Infinity,
      ease: 'easeOut',
    }}
  />
);

export default BouncingBall;
