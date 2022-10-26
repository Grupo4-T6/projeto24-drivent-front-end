import styled from 'styled-components';
import { useState } from 'react';
import Button from '../Form/Button';
import MuiButton from '@material-ui/core/Button';

export default function PaymentSelection(setIsTicketSelected) {
  const [modality, setModality] = useState(-1);
  const [isHotelSelected, setIsHotelSelected] = useState(-1);
  const [modalityPrice, setModalityPrice] = useState(0);
  const [hotelPrice, setHotelPrice] = useState(0);

  function handleModalityClick(modality, price) {
    setModality(modality);
    setIsHotelSelected(-1);
    setHotelPrice(0);
    setModalityPrice(price);
  }
  function handleHotelClick(boolean, price) {
    setIsHotelSelected(boolean);
    setHotelPrice(price);
  }
  function finishTicketBooking() {
    setIsTicketSelected(true);
  }
  return (
    <>
      <FristSelecion>
        <h2>Primeiro, escolha sua modalidade de ingresso</h2>
        <Selectors>
          <Selector
            onClick={(e) => handleModalityClick('presential', 250)}
            active={modality === 'presential'}
            disableClick={modality === 'presential'}
          >
            <h4>Presencial</h4>
            <p>R$ 250</p>
          </Selector>

          <Selector
            onClick={(e) => handleModalityClick('online', 100)}
            active={modality === 'online'}
            disableClick={modality === 'online'}
          >
            <h4>Online</h4>
            <p>R$ 100</p>
          </Selector>
        </Selectors>
      </FristSelecion>

      <SecondSelection active={modality === 'presential'}>
        <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
        <Selectors>
          <Selector
            onClick={() => handleHotelClick(false, 0)}
            active={isHotelSelected === false}
            disableClick={isHotelSelected === false}
          >
            <h4>Sem Hotel</h4>
            <p>+ R$ 0</p>
          </Selector>

          <Selector
            onClick={() => handleHotelClick(true, 350)}
            active={isHotelSelected === true}
            disableClick={isHotelSelected === true}
          >
            <h4>Com Hotel</h4>
            <p>+ R$ 350</p>
          </Selector>
        </Selectors>
      </SecondSelection>
      <Text active={modality === 'online' || (modality === 'presential' && isHotelSelected !== -1)}>
        Fechado! O total ficou em <strong>R$ {modalityPrice + hotelPrice}</strong>. Agora é só confirmar:
      </Text>
      <StyledMuiButton
        variant="contained"
        active={modality === 'online' || (modality === 'presential' && isHotelSelected !== -1)}
        onClick={() => finishTicketBooking()}
      >
        <p>RESERVAR INGRESSO</p>
      </StyledMuiButton>
    </>
  );
}

const FristSelecion = styled.div`
  width: 100%;
  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }
`;

const SecondSelection = styled.div`
  width: 100%;
  margin-top: 44px;

  ${(props) => (props.active ? '' : 'display: none;')}
  h2 {
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
  cursor: pointer;
  ${(props) => (props.disableClick ? 'pointer-events: none;' : '')}
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

  ${(props) => (props.active ? 'background-color: #FFEED2;' : '')}

  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;

const Text = styled.div`
  ${(props) => (props.active ? '' : 'display: none;')}

  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;
`;

const StyledMuiButton = styled(MuiButton)`
  ${(props) => (props.active ? '' : 'display: none  !important;')}
  margin-top: 8px !important;
`;
