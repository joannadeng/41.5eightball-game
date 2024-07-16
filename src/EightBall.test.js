import { render, screen } from '@testing-library/react';
import EightBall from './EightBall';
import answers from './answers';



test ('it renders without crashing', () => {
  render(<EightBall arr={answers}/>)
})