import useAsync from '../useAsync';
import useToken from '../useToken';

import * as creditCardApi from '../../services/creditCardApi';

export default function useCreditCard() {
  const token = useToken();
  
  const {
    data: creditCard,
    loading: creditCardLoading,
    error: creditCardError,
    act: getCreditCard
  } = useAsync(() => creditCardApi.getPersonalInformations(token));

  return {
    creditCard,
    creditCardLoading,
    creditCardError,
    getCreditCard
  };
}
