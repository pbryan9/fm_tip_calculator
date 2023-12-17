import styled from 'styled-components';
import { colors } from '../lib/colors';
import { useEffect, useState } from 'react';

type CustomTipInputProps = {
  updateTipPercent: (newTipPercent: string) => void;
};

export default function CustomTipInput({
  updateTipPercent,
}: CustomTipInputProps) {
  const [customPercent, setCustomPercent] = useState('');

  const customIsEnabled = customPercent !== '';

  useEffect(() => {
    // Reset this input if user selects a standard (predefined) option
    window.addEventListener(
      'standard-tip-percent-selected',
      resetCustomPercent
    );

    return () =>
      window.removeEventListener(
        'standard-tip-percent-selected',
        resetCustomPercent
      );
  }, []);

  function updateCustomPercent(e: React.ChangeEvent<HTMLInputElement>): void {
    // remove decorative percent sign from value for further work
    const inputValue = e.target.value.replace('%', '');

    // clear the input & select default value
    if (inputValue === '') {
      updateTipPercent('5');
      resetCustomPercent();
    }

    // do nothing if user attempts non-numeric entry
    if (!inputValue.match(/^[0-9]{1,2}$/gm)) return;

    // update percentage to match user entry, including decorative percent sign
    setCustomPercent(inputValue + '%');
    updateTipPercent(inputValue);
  }

  function resetCustomPercent() {
    // intended for use in event handler
    setCustomPercent('');
  }

  return (
    <Wrapper
      type='text'
      inputMode='numeric'
      value={customPercent}
      onChange={updateCustomPercent}
      placeholder='Custom'
      $enabled={customIsEnabled}
    />
  );
}

const Wrapper = styled.input<{ $enabled: boolean }>`
  --bg-color: ${(props) =>
    props.$enabled ? colors['strong-cyan'] : colors['very-light-grey-cyan']};

  text-align: center;
  min-width: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  background-color: hsl(var(--bg-color));
  padding: 4px 0;
  transition:
    background-color 250ms,
    color 250ms;

  &::placeholder {
    text-align: center;
    color: hsl(${colors['very-dark-cyan']});
  }

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    border: 2px solid hsl(${colors['strong-cyan']});
  }
`;
