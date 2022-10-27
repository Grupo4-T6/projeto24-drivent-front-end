import styled from 'styled-components';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import CreditCard from '../CreditCard/index';
import Button from '../Form/Button';

export default function PaymentSelection() {
  const [modality, setModality] = useState(-1);
  const [isHotelSelected, setIsHotelSelected] = useState(-1);
  const [price, setPrice] = useState(0);
  const [changePage, setChangePage ] = useState(false);
  const [hotel, setHotel ] = useState('');
 
  function handleModalityClick() {
    setModality('Online');
    setIsHotelSelected(-1);
  }
  function catchPaymentInfos() {
    if (isHotelSelected) {
      setHotel('Com Hotel'); 
    } else {
      setHotel('Sem Hotel');
    }
    console.log(modality, setHotel, price);
    setChangePage(true);
  }
  function FirstSection() {
    return(
      <>
        <FristSelecion>
          <h2>Primeiro, escolha sua modalidade de ingresso</h2>
          <Selectors>
            <Selector onClick={() => setModality('Presencial')} active={ modality === 'Presencial'}>
              <h4>Presencial</h4>
              <p>R$ 250</p>
            </Selector>

            <Selector onClick={() => {
              handleModalityClick();
              setPrice(1);
            } 
            }
            active={ modality === 'Online'}>
              <h4>Online</h4>
              <p>R$ 1</p>
            </Selector>
          </Selectors>
        </FristSelecion>

        <SecondSelection active={ modality === 'Presencial'}>
          <h2>Ótimo! Agora escolha sua modalidade de hospedagem</h2>
          <Selectors>
            <Selector onClick={() => {
              setIsHotelSelected(false);
              setPrice(0);
            }} active={ isHotelSelected === false}>
              <h4>Sem Hotel</h4>
              <p>+ R$ 0</p>
            </Selector>
            
            <Selector onClick={() => {
              setIsHotelSelected(true);
              setPrice(600);
            }} active={ isHotelSelected === true}>
              <h4>Com Hotel</h4>
              <p>+ R$ 350</p>
            </Selector>
          </Selectors>
        </SecondSelection>
        {modality === 'Online' || (modality === 'Presencial' && isHotelSelected !== -1) ? 
          <>
            <Text>Fechado! O total ficou em <strong>R$ {price}</strong>. Agora é só confirmar:</Text>
            <Button onClick = {catchPaymentInfos} >RESERVAR INGRESSO</Button>
          </> : ''}
      </>
    );
  }

  function SecondSection() {
    return (
      <>
        <Resumee>
          <SecondSelection active={ modality === 'Presencial' || 'Online'}>
            <h2>Ingresso Escolhido</h2>
            <Selectors>
              {modality === 'Online'? 
                <SelectorResumee active={ modality === 'Presencial' || 'Online'}>
                  <h4>{modality} </h4>
                  <p>+ R$ {price}</p>
                </SelectorResumee>
                :
                <SelectorResumee  active={ modality === 'Presencial' || 'Online'}>
                  <h4>{modality} + {hotel}</h4>
                  <p>+ R$ {price}</p>
                </SelectorResumee>
              }
            </Selectors>
          </SecondSelection>
        </Resumee>
        <CreditCard/>
      </>
      
    );
  }
  return (
    <>
      {changePage? SecondSection() : FirstSection() }
    </>
    
  );
};

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
  height: 108px;
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

const Text = styled(Typography)`
  margin-top: 20px!important;
  margin-bottom: 20px!important;
`;

const Resumee = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
`;

const SelectorResumee = styled.div`
  width: 290px;
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

