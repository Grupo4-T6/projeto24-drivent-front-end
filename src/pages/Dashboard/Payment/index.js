import { useEffect, useState } from 'react';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import TicketsForm from '../../../components/Payment/Options';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [isEnrolled, setisEnrolled] = useState('Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso');
  useEffect(() => {
    if (enrollment) {
      setisEnrolled('');
    }
  }, [enrollment]);
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamentos</StyledTypography>
      {isEnrolled === '' ? <TicketsForm /> : isEnrolled}
    </> 
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
