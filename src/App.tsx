import { useState } from 'react';
import styled from 'styled-components';
import { colors } from './lib/colors';
import {
  emitTipSelectedEvent,
  isNumericDecimal,
  isNumericInteger,
} from './lib/helpers';

import {
  Wrapper,
  Header,
  Headline,
  CardWrapper,
  Label,
  BillAmountContainer,
} from './components/styledComponents';
import InputWithIcon from './components/InputWithIcon';
import dollarIcon from './assets/images/icon-dollar.svg';
import personIcon from './assets/images/icon-person.svg';
import TipSelector from './components/TipSelector';
import ResetButton from './components/ResetButton';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('5');
  const [numberOfPeople, setNumberOfPeople] = useState('');

  // **Note: All the logic functions have been moved below the return section

  const resetButtonIsDisabled = billAmount === '' || numberOfPeople === '';

  return (
    <Wrapper>
      <Header>
        <Headline>
          SPLI
          <br />
          TTER
        </Headline>
      </Header>
      <CardWrapper>
        <InputSectionWrapper>
          <BillAmountContainer>
            <Label htmlFor='bill-amount'>Bill</Label>
            <InputWithIcon
              id='bill-amount'
              icon={dollarIcon}
              setValue={updateBillAmount}
              value={billAmount}
            />
          </BillAmountContainer>
          <TipSelector
            tipPercent={tipPercent}
            updateTipPercent={updateTipPercent}
          />
          <PeopleContainer>
            <Label htmlFor='number-of-people'>Number of People</Label>
            <InputWithIcon
              id='number-of-people'
              icon={personIcon}
              value={numberOfPeople}
              setValue={updateNumberOfPeople}
            />
          </PeopleContainer>
        </InputSectionWrapper>
        <ResultContainer id='result-section'>
          <ResultLineWrapper>
            <div>
              <ResultCaption>Tip Amount</ResultCaption>
              <ResultSubcaption>/ person</ResultSubcaption>
            </div>
            <ResultAmount>${(tipPerPerson() || 0).toFixed(2)}</ResultAmount>
          </ResultLineWrapper>
          <ResultLineWrapper>
            <div>
              <ResultCaption>Total</ResultCaption>
              <ResultSubcaption>/ person</ResultSubcaption>
            </div>
            <ResultAmount>${(totalPerPerson() || 0).toFixed(2)}</ResultAmount>
          </ResultLineWrapper>
          <ResetButton disabled={resetButtonIsDisabled} onClick={reset}>
            RESET
          </ResetButton>
        </ResultContainer>
      </CardWrapper>
    </Wrapper>
  );

  function updateBillAmount(newBillAmount: string) {
    if (newBillAmount === '') setBillAmount('');

    if (!isNumericDecimal(newBillAmount)) return;

    setBillAmount(newBillAmount);
  }

  function updateTipPercent(newTipPercent: string) {
    if (!isNumericInteger(newTipPercent.toString())) return;

    if (newTipPercent !== tipPercent) setTipPercent(newTipPercent);
  }

  function updateNumberOfPeople(newNumber: string) {
    if (newNumber === '') setNumberOfPeople('');
    if (!isNumericDecimal(newNumber)) return;

    setNumberOfPeople(newNumber);
  }

  function reset() {
    setBillAmount('');
    setTipPercent('5');
    setNumberOfPeople('');
    emitTipSelectedEvent();
  }

  function calculateTipAmount() {
    if (billAmount === '' || numberOfPeople === '') return 0;

    return (parseFloat(billAmount) * parseFloat(tipPercent)) / 100;
  }

  function calculateTotal() {
    if (billAmount === '' || numberOfPeople === '') return 0;

    return parseFloat(billAmount) + calculateTipAmount();
  }

  function tipPerPerson() {
    return calculateTipAmount() / +numberOfPeople;
  }

  function totalPerPerson() {
    return calculateTotal() / +numberOfPeople;
  }
}

export default App;

const InputSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 800px) {
    margin-bottom: revert;
    flex: 1;
  }
`;

const ResultContainer = styled.div`
  background-color: hsl(${colors['very-dark-cyan']});
  padding: 32px 24px 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-left: -8px;
  margin-right: -8px;

  @media screen and (min-width: 800px) {
    flex: 1;
    padding: 40px;
    /* gap: 24px; */
  }
`;

const ResultLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultCaption = styled.h2`
  font-size: 1rem;
  color: hsl(${colors.white});
`;

const ResultSubcaption = styled.p`
  font-size: 0.9rem;
  color: hsl(${colors['grey-cyan']});
`;

const ResultAmount = styled.p`
  font-size: 2rem;
  color: hsl(${colors['strong-cyan']});
  line-height: 1;

  @media screen and (min-width: 800px) {
    font-size: 3rem;
  }
`;

const PeopleContainer = styled.div`
  max-width: 100%;
`;
