import styled from 'styled-components';
import { colors } from '../lib/colors';

const ResetButton = styled.button`
  border: none;
  background-color: hsl(${colors['strong-cyan']});
  color: hsl(${colors['very-dark-cyan']});
  padding: 8px 0;
  font-size: 1.3rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 250ms;
  margin-top: auto;

  &:hover {
    background-color: hsl(${colors['light-cyan']});
  }

  &:disabled {
    background-color: hsl(${colors['strong-cyan']} / 0.2);
    color: hsl(${colors['very-dark-cyan']} / 0.4);
    cursor: revert;
  }
`;

export default ResetButton;
