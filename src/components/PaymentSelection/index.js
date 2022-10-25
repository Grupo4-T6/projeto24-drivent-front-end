import styled from 'styled-components';
import { useState } from 'react';

export default function PaymentSelection() {
  const [modality, setModality] = useState(-1);
  const [isHotelSelected, setIsHotelSelected] = useState(-1);

  function handleModalityClick() {
    setModality('online');
    setIsHotelSelected(-1);
  }
  return (
    <>
      <FristSelecion>
        <h2>Primeiro, escolha sua modalidade de ingresso</h2>
        <Selectors>
          <Selector onClick={() => setModality('presential')} active={ modality === 'presential'}>
            <h4>Presencial</h4>
            <p>R$ 250</p>
          </Selector>

          <Selector onClick={() => handleModalityClick()} active={ modality === 'online'}>
            <h4>Online</h4>
            <p>R$ 1</p>
          </Selector>
        </Selectors>
      </FristSelecion>

      <SecondSelection active={ modality === 'presential'}>
        <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
        <Selectors>
          <Selector onClick={() => setIsHotelSelected(false)} active={ isHotelSelected === false}>
            <h4>Sem Hotel</h4>
            <p>+ R$ 0</p>
          </Selector>
          
          <Selector onClick={() => setIsHotelSelected(true)} active={ isHotelSelected === true}>
            <h4>Com Hotel</h4>
            <p>+ R$ 350</p>
          </Selector>
        </Selectors>
      </SecondSelection>
    </>
  );
}

const FristSelecion = styled.div`
  width: 100%;
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const SecondSelection = styled.div`
  width: 100%;
  margin-top: 44px;

  ${props => props.active ? '' : 'display: none;'}
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const Selectors = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const Selector = styled.div`
  width: 145px;
  height: 145px;
  margin-top: 18px;
  gap: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #cecece;
  border-radius: 20px;

  ${props => props.active ? 'background-color: #FFEED2;' : ''}

  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
