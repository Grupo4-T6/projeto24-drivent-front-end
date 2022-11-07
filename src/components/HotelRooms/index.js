import Rooms from './Rooms';
import styled from 'styled-components';
import Button from '../Form/Button';
import { useState } from 'react';

export default function HotelRooms() {
  const [roomId, setRoomId] = useState();

  const updateRoom = r => {
    setRoomId(r);
  };
  console.log('This is the roomId', roomId);
  return(
    <>
      <Container>
        <Title>
          <h2>
            Ótima pedida! Agora escolha seu quarto
          </h2>
        </Title>
        <Rooms handleRoomId={updateRoom}/>
        <Button width={'30px'}>
          RESERVAR QUARTO
        </Button>
      </Container>

    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #8e8e8e;
  }

`;
const Title = styled.div`
  display: flex;
`;

