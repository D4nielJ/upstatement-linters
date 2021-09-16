import styled from 'styled-components';
import { BouncingBall, Canvas, TransitionFromDot, CirclingBall } from './Features/index';

const SApp = styled.div`
  background: #191919;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Paragraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
`;

const App = () => (
  <SApp>
    <Paragraph>Tap the circle</Paragraph>
    <Canvas>
      <TransitionFromDot />
    </Canvas>
    <Paragraph>Bouncing ball</Paragraph>
    <Canvas>
      <BouncingBall />
    </Canvas>
    <Paragraph>Orbiting ball</Paragraph>
    <Canvas>
      <CirclingBall />
    </Canvas>
  </SApp>
);

export default App;
