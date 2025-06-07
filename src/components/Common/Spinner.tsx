import styled, { keyframes } from 'styled-components';
import { Loader } from 'lucide-react';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled(Loader)`
  width: 1em;
  height: 1em;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;
