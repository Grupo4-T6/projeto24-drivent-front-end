import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';
import EmptyMessage from './EmptyMessage';
import PaymentSelection from '../../../components/PaymentSelection/index';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [isEnrolled, setisEnrolled] = useState(false);

  useEffect(() => {
    if (enrollment) {
      setisEnrolled(true);
    }
    else{
      setisEnrolled(false);
    }
  }, [enrollment]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {isEnrolled === true ? PaymentSelection() : EmptyMessage()}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
