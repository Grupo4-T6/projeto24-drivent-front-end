import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { BsPersonFill } from '@react-icons/all-files/bs/BsPersonFill';
import useHotel from '../../hooks/api/useHotel';

export default function RenderHotel() {
  const [color, setColor] = useState('#8C8C8C');
  const [room, setRoom] = useState([]);
  const selected = <BsPersonFill color={'#FF4791'} />;

  const hotelId = 2;
  const { rooms } = useHotel(hotelId);

  const roomsRender = [];
  function render(rooms) {  
    for(let i=0; i<rooms.length; i++ ) {
      roomsRender.push(
        <RoomContainer color={color} >
          <Number>{rooms[i].roomNumber}</Number>
          <RoomBox>
            {checkAvaible(rooms[i].maxOcupation, rooms[i].spacesTaked)}
          </RoomBox>
        </RoomContainer>
      );
    }
  };

  function checkAvaible(maxOcupation, spacesTaked) {
    console.log(maxOcupation, spacesTaked);
    const empty = <BsPerson />; 
    const full = <BsPersonFill color={'#8C8C8C'}/>;
    const occupied = <BsPersonFill color={'#000000'} />;
    const person = [];

    if (maxOcupation === spacesTaked) {
      for(let i=0; i<maxOcupation; i++) {
        person.push(full);
      } 
    }
    if (spacesTaked < maxOcupation) {
      const avaible = maxOcupation - spacesTaked;  
      for(let i=0; i<avaible; i++) {
        person.push(empty);
      }
      for (let j=0; j<spacesTaked; j++) {
        person.push(occupied);
      }
    }
    return (
      person.map((e) => {return e; } )
    );
  };

  return (
    <>
      <Container>
        {rooms? render(rooms) : ''}
        {roomsRender.map((e) => {return e;},)}
      </Container>
    </>
  );
};

const RoomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 190px;
    height: 45px;
    padding: 0px 10px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    margin: 5px 15px;


    ion-icon {
        width: 20.25px;
    }
`;

const Number = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #454545;
`;
const RoomBox = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #454545;
`;

const Container = styled.div`

  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
`;
