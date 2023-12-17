import styled from 'styled-components';
import { colors } from '../lib/colors';

type InputWithIconProps = {
  icon: string;
  value: any;
  setValue: (newValue: any) => void;
  id: string;
};

export default function InputWithIcon({
  icon,
  value,
  setValue,
  id,
}: InputWithIconProps) {
  return (
    <Wrapper>
      <Icon alt='' src={icon} />
      <Input
        id={id}
        type='text'
        inputMode='numeric'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='0'
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.img`
  aspect-ratio: 1 / 1;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  color: hsl(${colors['very-dark-cyan']});
  background-color: hsl(${colors['very-light-grey-cyan']});
  border: 2px solid transparent;
  border-radius: 6px;
  text-align: end;
  padding: 4px 16px;
  width: 100%;

  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
    border: 2px solid hsl(${colors['strong-cyan']});
  }
`;
