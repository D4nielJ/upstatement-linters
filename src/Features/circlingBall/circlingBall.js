import { motion } from 'framer-motion';
import styled from 'styled-components';
import SDot from '../../Styled/dot/SDot';

const SContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

const bezier = [1, 0.27, 0.37, 0.98];

const CirclingBall = () => (
  <SContainer
    animate={{
      rotate: [0, 360],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: bezier,
      repeatDelay: 0.05,
    }}>
    <SDot />
  </SContainer>
);

export default CirclingBall;
