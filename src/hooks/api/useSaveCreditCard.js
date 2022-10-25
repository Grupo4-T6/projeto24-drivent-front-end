import useAsync from '../useAsync';
import useToken from '../useToken';

import * as creditCardApi from '../../services/creditCardApi';

export default function useSaveEnrollment() {
  const token = useToken();

  const {
    loading: saveCreditCardtLoading,
    error: saveCreditCardError,
    act: saveCreditCard
  } = useAsync((data) => creditCardApi.save(data, token), false);

  return {
    saveCreditCardtLoading,
    saveCreditCardError,
    saveCreditCard
  };
}
