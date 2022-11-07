import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelsApi from '../../services/hotelsApi';

export default function useHotel(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomsLoading,
    error: roomsError,
    act: getHotelRooms
  } = useAsync(() => hotelsApi.getHotelRooms(token, hotelId));

  return {
    rooms,
    roomsLoading,
    roomsError,
    getHotelRooms
  };
}
