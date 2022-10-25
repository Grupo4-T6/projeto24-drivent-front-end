
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';
import EmptyMessage from './EmptyMessage';
import PaymentSelection from '../../../components/PaymentSelection/index';
import TicketsForm from '../../../components/Payment/Options';

export default function Payment() {
  const navigate = useNavigate();
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
      {isEnrolled === '' ? <TicketsForm /> : isEnrolled}
    </>
      
  );
}

const StyledTypography = styled(Typography)`

  margin-bottom: 20px !important;
`;
