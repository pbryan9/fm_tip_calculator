import styled from 'styled-components';
import { colors } from '../lib/colors';
import { emitTipSelectedEvent } from '../lib/helpers';

type TipButtonProps = {
  isSelected: boolean;
  value: string;
  updateTipPercent: (newTipPercent: string) => void;
};

export default function TipButton({
  isSelected,
  value,
  updateTipPercent,
}: TipButtonProps) {
  const backgroundColor = isSelected
    ? `hsl(${colors['strong-cyan']})`
    : `hsl(${colors['very-dark-cyan']})`;

  const color = isSelected
    ? `hsl(${colors['very-dark-cyan']})`
    : `hsl(${colors.white})`;

  function handleClick() {
    updateTipPercent(value);
    emitTipSelectedEvent();
  }

  return (
    <TipSelectionButton
      onClick={handleClick}
      type='button'
      $color={color}
      $backgroundColor={backgroundColor}
    >
      {value}%
    </TipSelectionButton>
  );
}

const TipSelectionButton = styled.button<{
  $color: string;
  $backgroundColor: string;
}>`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border: none;
  border-radius: 6px;
  padding: 4px 0;
  cursor: pointer;
  transition:
    background-color 250ms,
    color 250ms;

  &:hover {
    background-color: hsl(${colors['light-cyan']});
    color: hsl(${colors['very-dark-cyan']});
  }
`;
