import styled from 'styled-components';
import TipButton from './TipButton';
import CustomTipInput from './CustomTipInput';
import { colors } from '../lib/colors';
import { Label } from './styledComponents';

type TipSelectorProps = {
  updateTipPercent: (newTipPercent: string) => void;
  tipPercent: string;
};

export default function TipSelector({
  tipPercent,
  updateTipPercent,
}: TipSelectorProps) {
  return (
    <TipChoicesContainer>
      <TipChoicesTitle>Select Tip %</TipChoicesTitle>
      <TipButton
        value={'5'}
        updateTipPercent={updateTipPercent}
        isSelected={tipPercent === '5'}
      />
      <TipButton
        value={'10'}
        isSelected={tipPercent === '10'}
        updateTipPercent={updateTipPercent}
      />
      <TipButton
        value={'15'}
        isSelected={tipPercent === '15'}
        updateTipPercent={updateTipPercent}
      />
      <TipButton
        value={'25'}
        isSelected={tipPercent === '25'}
        updateTipPercent={updateTipPercent}
      />
      <TipButton
        value={'50'}
        isSelected={tipPercent === '50'}
        updateTipPercent={updateTipPercent}
      />
      <CustomTipInput updateTipPercent={updateTipPercent} />
    </TipChoicesContainer>
  );
}

const TipChoicesContainer = styled.div`
  border: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 0;

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TipChoicesTitle = styled(Label)`
  font-size: ${16 / 16}rem;
  color: hsl(${colors['dark-grey-cyan']});
  grid-column: 1 / -1;
`;
