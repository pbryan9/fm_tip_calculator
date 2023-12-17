import styled from 'styled-components';
import { colors } from '../lib/colors';

export const Wrapper = styled.main``;
export const Header = styled.header``;
export const Headline = styled.h1`
  line-height: 1.5;
  letter-spacing: 0.5rem;
  text-align: center;
  padding: 40px 0;
  color: hsl(${colors['very-dark-cyan']});
  font-size: 1.5rem;
`;

export const CardWrapper = styled.section`
  --radius: 24px;

  background-color: hsl(${colors.white});
  border-radius: var(--radius) var(--radius) 0 0;
  padding: 32px;

  @media screen and (min-width: 800px) {
    border-radius: var(--radius);
    display: flex;
    gap: 40px;
    width: 90vw;
    max-width: 920px;
    margin: 0 auto;
    box-shadow: 0 12px 32px 2px hsl(${colors['very-dark-cyan']} / 0.2);
  }
`;

export const BillAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* max-width: 100%; */
`;

export const Label = styled.label`
  font-size: 1rem;
  color: hsl(${colors['dark-grey-cyan']});
`;

export const TipChoiceLabel = styled.label``;
export const HiddenTipRadio = styled.input`
  display: none;
`;
