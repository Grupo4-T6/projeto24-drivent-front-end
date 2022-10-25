import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import Button from '../Form/Button';

export default function TicketsForm() {
  const [price, setPrice] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  function toggle(number) {
    if(number === 1) {
      if(isSelected2 === false ) {
        setPrice(0);
        return (
          setIsSelected(isSelected2 === false ? !isSelected : setPrice(0))
        );
      } 
    }
    if(number === 2) {
      if(isSelected === false ) {
        setPrice(350);
        return (
          setIsSelected2(isSelected === false ? !isSelected2 : setPrice(0))
        );
      } 
    }
  }
  return (
    <>
      <OptionWrapper>
        <Text>Ótimo! Agora escolha sua modalidade de hospedagem</Text>
        <Container>
          <Option selected={isSelected} onClick={(e) => {toggle(1);}}><h1>Sem Hotel</h1> <p> + R$ 0 </p></Option>
          <Option selected={isSelected2} onClick={(e) => {toggle(2);}}><h1>Com Hotel</h1> <p> + R$ 350 </p></Option>
        </Container>
        {isSelected === true || isSelected2 === true ? 
          <>
            <Text>Fechado! O total ficou em <strong>R$ {price}</strong>. Agora é só confirmar:</Text>
            <Button>RESERVAR INGRESSO</Button>
          </> : ''}
      </OptionWrapper>
    </>
  );
}

const OptionWrapper = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Container = styled(Typography)`
  display: flex;
`;

const Text = styled(Typography)`
  margin-top: 20px!important;
  margin-bottom: 20px!important;
`;

const Option = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 145px;
  height: 145px;
  margin-right: 20px!important;

  border: 1px solid #CECECE;
  border-radius: 20px;
  background-color: ${props => (props.selected ? '#FFEED2' : 'none')} ;

h1{
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #454545;
  }
p{
  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;  
  color: #898989;
}
`;
