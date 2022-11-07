import styled from 'styled-components';
import { useState } from 'react';
import Hotel from './Hotel';

import useAllHotels from '../../hooks/api/useAllHotels';

export default function HotelSelection() {
  const [hotelSelected, sethotelSelected] = useState(-1);

  const { hotels } = useAllHotels();

  function renderHotels() {
    return hotels.map((hotel) => (
      <Hotel
        imageUrl={hotel.imageUrl}
        name={hotel.name}
        type={hotel.type}
        id={hotel.id}
        key={hotel.id}
        avaliableRoons={hotel.avaliableRoons}
        hotelSelected={hotelSelected}
        sethotelSelected={sethotelSelected}
      ></Hotel>
    ));
  }

  return <Hotels>{hotels ? renderHotels() : <h1>sem hotels bro</h1>}</Hotels>;
}

const Hotels = styled.div`
  display: flex;
  gap: 20px;
`;
