import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi';

export default function useAllHotelsApi() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelsLoading,
    error: hotelsError,
    act: getHotels,
  } = useAsync(() => hotelApi.getAllHotels(token));
  return {
    hotels,
    hotelsLoading,
    hotelsError,
    getHotels,
  };
}
