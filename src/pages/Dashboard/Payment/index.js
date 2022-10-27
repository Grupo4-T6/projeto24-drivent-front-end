import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';
import EmptyMessage from './EmptyMessage';
import PaymentSelection from '../../../components/PaymentSelection/index';
import TicketsForm from '../../../components/Payment/Options';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isTicketSelected, setIsTicketSelected] = useState(false);

  useEffect(() => {
    if (enrollment) {
      setIsEnrolled(true);
    } else {
      setIsEnrolled(false);
    }
  }, [enrollment]);

  const selectionOrMensage = showSelectionOrMensage();
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {isTicketSelected === false && selectionOrMensage}
    </>
  );

  function showSelectionOrMensage() {
    if (isEnrolled === true) {
      return EmptyMessage();
    } else {
      return PaymentSelection(setIsTicketSelected);
    }
  }
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
